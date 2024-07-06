// src/app/blog/[slug]/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import contentfulClient from '../../../../lib/contentful';

async function getBlogPost(slug: string) {
  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
  });
  return response.items[0];
}

const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <p className="mb-4">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
      <h1 className="text-3xl font-bold mb-4 mt-6">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
      <h2 className="text-2xl font-semibold mb-3 mt-5">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
      <h3 className="text-xl font-medium mb-2 mt-4">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
      <ul className="list-disc pl-5 mb-4">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
      <ol className="list-decimal pl-5 mb-4">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
      <li className="mb-1">{children}</li>
    ),
    [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">{children}</blockquote>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { title, description, file } = node.data.target.fields;
      const { url, details } = file;
      const { width, height } = details.image;
      return (
        <div className="mb-4 max-w-2xl mx-auto">
          <Image
            src={`https:${url}`}
            alt={description || title}
            width={width}
            height={height}
            className="rounded-lg"
          />
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <a href={node.data.uri} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  const { title, excerpt, featuredImage } = post.fields;

  return {
    title: `${title} | Alpha Digital Group Blog`,
    description: excerpt || `Read about ${title} on Alpha Digital Group Blog`,
    openGraph: {
      title: `${title} | Alpha Digital Group Blog`,
      description: excerpt || `Read about ${title} on Alpha Digital Group Blog`,
      type: 'article',
      url: `https://www.alphadigitalgroup.co/blog/${params.slug}`,
      images: featuredImage ? [{
        url: `https:${featuredImage.fields.file.url}`,
        width: featuredImage.fields.file.details.image.width,
        height: featuredImage.fields.file.details.image.height,
      }] : [],
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  const { title, content, author, date, category, featuredImage } = post.fields;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8 pt-24">
        <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
          &larr; Back to Blog
        </Link>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {featuredImage && (
            <div className="relative h-96">
              <Image
                src={`https:${featuredImage.fields.file.url}`}
                alt={title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          )}
          <div className="p-6">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <div className="mb-4 text-gray-600">
              <span>By {author} | </span>
              <span>{new Date(date).toLocaleDateString()} | </span>
              <span>{category}</span>
            </div>
            <div className="prose lg:prose-xl max-w-none">
              {documentToReactComponents(content, renderOptions)}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const response = await contentfulClient.getEntries({ content_type: 'blogPost' });
  return response.items.map((item: any) => ({
    slug: item.fields.slug,
  }));
}