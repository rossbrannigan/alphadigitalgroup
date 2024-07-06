// src/app/blog/[slug]/page.tsx

import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import contentfulClient from '../../../../lib/contentful';
import { Entry, EntrySkeletonType } from 'contentful';

interface BlogPostFields extends EntrySkeletonType {
  title: string;
  content: any;
  author: string;
  date: string;
  category: string;
  excerpt?: string;
  slug: string;
}

async function getBlogPost(slug: string): Promise<Entry<BlogPostFields>> {
  const response = await contentfulClient.getEntries<BlogPostFields>({
    content_type: 'blogPost',
    'fields.slug': slug,
  });
  return response.items[0];
}

const renderOptions = {
  renderNode: {
    // Your existing render options for different Contentful nodes
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  const { title, excerpt } = post.fields;

  const description = excerpt || `Read about ${title} on Alpha Digital Group Blog`;

  return {
    title: `${title} | Alpha Digital Group Blog`,
    description,
    openGraph: {
      title: `${title} | Alpha Digital Group Blog`,
      description,
      type: 'article',
      url: `https://www.alphadigitalgroup.co/blog/${params.slug}`,
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  const { title, content, author, date, category } = post.fields;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8 pt-24">
        <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
          &larr; Back to Blog
        </Link>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <div className="mb-4 text-gray-600">
              <span>By {author}</span>
              <span>{new Date(date).toLocaleDateString()}</span>
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
  const response = await contentfulClient.getEntries<BlogPostFields>({ content_type: 'blogPost' });
  return response.items.map((item) => ({
    slug: item.fields.slug,
  }));
}