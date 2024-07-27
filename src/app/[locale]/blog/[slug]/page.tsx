import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document } from '@contentful/rich-text-types';
import contentfulClient from '../../../../../lib/contentful';
import { Entry, Asset, EntryFields, EntrySkeletonType } from 'contentful';

interface AuthorFields extends EntrySkeletonType {
  fields: {
    name?: EntryFields.Symbol;
  };
}

interface BlogPostFields extends EntrySkeletonType {
  fields: {
    title?: EntryFields.Symbol;
    author?: Entry<AuthorFields>;
    content?: Document;
    featuredImage?: Asset;
    rating?: EntryFields.Number;
    videoGallery?: Asset[];
    relatedBlogPosts?: Entry<BlogPostFields>[];
    slug?: EntryFields.Symbol;
    metaDescription?: EntryFields.Symbol; // Add meta description field
    keywords?: EntryFields.Symbol; // Add keywords field
  };
}

interface AssetFields {
  title?: string;
  description?: string;
  file: {
    url: string;
  };
}

async function getBlogPost(slug: string): Promise<Entry<BlogPostFields> | null> {
  try {
    const response = await contentfulClient.getEntries<BlogPostFields>({
      content_type: 'blogPost',
      'fields.slug': slug,
      include: 2,
    } as any);
    return response.items[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { file, description } = node.data.target.fields as AssetFields;
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
  
  const { title = 'Untitled Post', metaDescription, keywords } = post.fields;

  const safeMetaDescription = typeof metaDescription === 'string' ? metaDescription : undefined;

  return {
    title: `${title} | Alpha Digital Group Blog`,
    description: safeMetaDescription || `Read about ${title} on Alpha Digital Group Blog`,
    keywords: Array.isArray(keywords) ? keywords.join(', ') : typeof keywords === 'string' ? keywords : '',
    openGraph: {
      title: `${title} | Alpha Digital Group Blog`,
      description: safeMetaDescription || `Read about ${title} on Alpha Digital Group Blog`,
      type: 'article',
      url: `https://www.alphadigitalgroup.co/blog/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Alpha Digital Group Blog`,
      description: safeMetaDescription || `Read about ${title} on Alpha Digital Group Blog`,
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }

  const { title = 'Untitled', content, author, featuredImage, rating, videoGallery, relatedBlogPosts } = post.fields;

  let featuredImageFields: AssetFields | undefined;
  if ((featuredImage as unknown as Asset)?.fields) {
    featuredImageFields = (featuredImage as unknown as Asset).fields as AssetFields;
  }

  const displayTitle = typeof title === 'string' ? title : 'Untitled';

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8 pt-24">
        <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
          &larr; Back to Blog
        </Link>
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {featuredImageFields && (
            <Image
              src={`https:${featuredImageFields.file.url}`}
              width={1200}
              height={600}
              alt={featuredImageFields.title || 'Featured Image'}
              className="w-full h-64 object-cover"
            />
          )}
          <div className="p-6">
            <h1 className="text-4xl font-bold mb-4 text-black">{displayTitle}</h1>
            <div className="mb-4 text-gray-600 flex items-center">
              {author && 'fields' in author && author.fields && 'name' in (author.fields as AuthorFields['fields']) && (author.fields as AuthorFields['fields']).name && (
                <>
                  <span>By {(author.fields as AuthorFields['fields']).name}</span>
                  {rating && (
                    <>
                      <span className="mx-2">|</span>
                      <span>Rating: {String(rating)}</span>
                    </>
                  )}
                </>
              )}
            </div>
            {content && (
              <div className="prose lg:prose-xl max-w-none blog-content">
                {documentToReactComponents(content as unknown as Document, renderOptions)}
              </div>
            )}
            {videoGallery && Array.isArray(videoGallery) && videoGallery.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Video Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {videoGallery.map((video, index) => (
                    <div key={index} className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={video.fields.file.url}
                        allowFullScreen
                        className="w-full h-full"
                        title={`Video ${index + 1}`}
                      ></iframe>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {relatedBlogPosts && Array.isArray(relatedBlogPosts) && relatedBlogPosts.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedBlogPosts.map((relatedPost, index) => (
                    <li key={index}>
                      {relatedPost.fields.slug && relatedPost.fields.title && (
                        <Link href={`/blog/${relatedPost.fields.slug}`} className="text-blue-600 hover:underline">
                          {relatedPost.fields.title}
                        </Link>
                      )}
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
    const response = await contentfulClient.getEntries<BlogPostFields>({
      content_type: 'blogPost'
    });
    return response.items.map((item) => ({
      slug: item.fields.slug || '',
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}