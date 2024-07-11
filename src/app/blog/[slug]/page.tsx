import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, Document } from '@contentful/rich-text-types';
import contentfulClient from '../../../../lib/contentful';
import { Entry, Asset, EntrySkeletonType } from 'contentful';

interface AuthorFields extends EntrySkeletonType {
  fields: {
    name: string;
    image?: Asset;
  };
}

interface BlogPostFields extends EntrySkeletonType {
  fields: {
    title: string;
    author: Entry<AuthorFields>;
    content: Document;
    featuredImage?: Asset;
    rating?: number;
    videoGallery?: Asset[];
    relatedBlogPosts?: Entry<BlogPostFields>[];
    slug: string;
  };
}

async function getBlogPost(slug: string): Promise<Entry<BlogPostFields> | null> {
  try {
    const response = await contentfulClient.getEntries<BlogPostFields>({
      content_type: 'blogPost',
      'fields.slug': slug,
      include: 2,
    });
    return response.items[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { file, description } = node.data.target.fields;
      const { url } = file;
      return (
        <Image
          src={`https:${url}`}
          width={600}
          height={400}
          alt={description || 'Blog post image'}
          className="my-4 rounded-lg"
        />
      );
    },
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  if (!post) {
    return {
      title: 'Post Not Found | Alpha Digital Group Blog',
      description: 'The requested blog post could not be found.',
    };
  }
  const { title } = post.fields;
  return {
    title: `${title} | Alpha Digital Group Blog`,
    description: `Read about ${title} on Alpha Digital Group Blog`,
    openGraph: {
      title: `${title} | Alpha Digital Group Blog`,
      description: `Read about ${title} on Alpha Digital Group Blog`,
      type: 'article',
      url: `https://www.alphadigitalgroup.co/blog/${params.slug}`,
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }

  const { title, content, author, featuredImage, rating, videoGallery, relatedBlogPosts } = post.fields;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8 pt-24">
        <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
          &larr; Back to Blog
        </Link>
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {featuredImage && (
            <Image
              src={`https:${featuredImage.fields.file.url}`}
              width={1200}
              height={600}
              alt={featuredImage.fields.title}
              className="w-full h-64 object-cover"
            />
          )}
          <div className="p-6">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <div className="mb-4 text-gray-600 flex items-center">
              {author.fields.image && (
                <Image
                  src={`https:${author.fields.image.fields.file.url}`}
                  width={40}
                  height={40}
                  alt={author.fields.name}
                  className="rounded-full mr-2"
                />
              )}
              <span>By {author.fields.name}</span>
              {rating && (
                <>
                  <span className="mx-2">|</span>
                  <span>Rating: {rating}</span>
                </>
              )}
            </div>
            <div className="prose lg:prose-xl max-w-none">
              {documentToReactComponents(content, renderOptions)}
            </div>
            {videoGallery && videoGallery.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Video Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {videoGallery.map((video, index) => (
                    <div key={index} className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={video.fields.file.url}
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {relatedBlogPosts && relatedBlogPosts.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedBlogPosts.map((relatedPost, index) => (
                    <li key={index}>
                      <Link href={`/blog/${relatedPost.fields.slug}`} className="text-blue-600 hover:underline">
                        {relatedPost.fields.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  try {
    const response = await contentfulClient.getEntries<BlogPostFields>({ content_type: 'blogPost' });
    return response.items.map((item) => ({
      slug: item.fields.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}