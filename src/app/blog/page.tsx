import React from "react";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import contentfulClient from '../../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

interface BlogPost {
  title: string;
  content: any;
  date: string;
  author: {
    name: string;
    image: string;
  };
  slug: string;
  excerpt: string;
  featuredImage?: string;
  tags: string[];
}

async function getBlogPosts() {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      order: '-sys.createdAt',
      include: 2,
    });
    return response.items.map((item: any) => ({
      title: item.fields.title,
      content: item.fields.content,
      date: new Date(item.sys.createdAt).toLocaleDateString(),
      author: {
        name: item.fields.author?.fields?.name || 'Unknown Author',
        image: item.fields.author?.fields?.image?.fields?.file?.url
          ? `https:${item.fields.author.fields.image.fields.file.url}`
          : '/default-avatar.png',
      },
      slug: item.fields.slug || '',
      excerpt: item.fields.excerpt || '',
      featuredImage: item.fields.featuredImage?.fields?.file?.url 
        ? `https:${item.fields.featuredImage.fields.file.url}` 
        : null,
      tags: item.fields.tags || [],
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

const renderOptions = {
  // ... (keep the existing renderOptions)
};

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  if (!blogPosts || blogPosts.length === 0) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-600">No blog posts available at the moment.</p>
      </div>
    );
  }

  const categories = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  return (
    <div className="bg-white min-h-screen">
      <Head>
        {/* ... (keep the existing Head content) */}
      </Head>

      <Script id="google-analytics-script" src={`https://www.googletagmanager.com/gtag/js?id=G-25Y0G3QQE6`} strategy="afterInteractive" />
      <Script id="google-analytics-inline-script" strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-25Y0G3QQE6');
          `,
        }}
      />

      <GoogleAnalytics gaId="G-25Y0G3QQE6" />
      <GoogleTagManager gtmId="G-25Y0G3QQE6" />

      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-900">Alpha Digital Group Blog</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex">
        {/* Sidebar Navigation */}
        <nav className="w-64 pr-8">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul>
            {categories.map((category, index) => (
              <li key={index} className="mb-2">
                <a href={`#${category}`} className="text-gray-700 hover:text-purple-600">{category}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-1">
          <div className="space-y-16">
            {categories.map((category, categoryIndex) => (
              <section key={categoryIndex} id={category}>
                <h2 className="text-2xl font-semibold mb-8 text-gray-900">{category}</h2>
                {blogPosts.filter(post => post.tags.includes(category)).map((post: BlogPost, postIndex: number) => (
                  <article key={postIndex} className="mb-12 pb-12 border-b">
                    {post.featuredImage && (
                      <div className="relative h-64 mb-8">
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-lg"
                        />
                      </div>
                    )}
                    <h3 className="text-3xl font-semibold mb-4 text-gray-900">
                      <a href={`/blog/${post.slug}`} className="hover:text-purple-600">{post.title}</a>
                    </h3>
                    <div className="flex items-center mb-4">
                      <Image
                        src={post.author.image}
                        alt={post.author.name}
                        width={40}
                        height={40}
                        className="rounded-full mr-3"
                      />
                      <div>
                        <p className="text-gray-800 font-medium">{post.author.name}</p>
                        <p className="text-gray-600 text-sm">{post.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">{tag}</span>
                      ))}
                    </div>
                    <a href={`/blog/${post.slug}`} className="text-purple-600 hover:underline">Read more</a>
                  </article>
                ))}
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}