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
  featuredImage: string | null;
  tags: string[];
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      order: ['-sys.createdAt'],
      include: 2,
    });
    return response.items.map((item: any) => ({
      title: item.fields.title || '',
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
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-600">No blog posts available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Alpha Digital Group Blog</title>
        <meta name="description" content="Latest insights and articles from Alpha Digital Group" />
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

      <header className="bg-white shadow-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Alpha Digital Group Blog</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-24 flex">
        {/* Sidebar with post list */}
        <aside className="w-1/4 pr-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Recent Posts</h2>
          <ul className="space-y-2">
            {blogPosts.map((post, index) => (
              <li key={index}>
                <a href={`/blog/${post.slug}`} className="text-gray-600 hover:text-purple-600 text-sm">{post.title}</a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main content */}
        <main className="w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              {post.featuredImage && (
                <div className="relative h-48">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  <a href={`/blog/${post.slug}`} className="hover:text-purple-600">{post.title}</a>
                </h3>
                <div className="flex items-center mb-4">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={32}
                    height={32}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="text-gray-800 text-sm font-medium">{post.author.name}</p>
                    <p className="text-gray-600 text-xs">{post.date}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <a href={`/blog/${post.slug}`} className="text-purple-600 text-sm hover:underline">Read more</a>
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
}