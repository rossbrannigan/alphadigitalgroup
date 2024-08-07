import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import contentfulClient from '../../../../lib/contentful';
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
      tags: item.metadata.tags.map((tag: any) => tag.sys.id) || [],
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

async function getAllTags(): Promise<string[]> {
  try {
    const response = await contentfulClient.getTags();
    return response.items.map((tag: any) => tag.name);
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
}

const renderOptions = {
  // ... (keep the existing renderOptions)
};

const Sidebar: React.FC<{ blogPosts: BlogPost[], allTags: string[] }> = ({ blogPosts, allTags }) => {
  return (
    <aside className="w-1/4 pr-8 h-[calc(100vh-6rem)] overflow-y-auto sticky top-24">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">Recent Posts</h2>
      <ul className="space-y-4 mb-8">
        {blogPosts.map((post, index) => (
          <li key={index} className="group">
            <Link href={`/blog/${post.slug}`} className="flex items-center space-x-3 py-2 px-3 rounded-lg transition-colors duration-200 hover:bg-purple-50">
              {post.featuredImage && (
                <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-purple-600 truncate">{post.title}</h3>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {allTags.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 border-b pb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag, index) => (
              <button
                key={index}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
              >
                {tag}
              </button>
            ))}
          </div>
        </>
      )}
    </aside>
  );
};

export default async function BlogPage() {
  const [blogPosts, allTags] = await Promise.all([getBlogPosts(), getAllTags()]);

  if (!blogPosts || blogPosts.length === 0) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-600">No blog posts available at the moment.</p>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Alpha Digital Group Blog",
    "description": "Latest insights and articles from Alpha Digital Group on digital marketing, commerce, and technology",
    "url": "https://www.alphadigitalgroup.co/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Alpha Digital Group",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.alphadigitalgroup.co/logo.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author.name
      },
      "image": post.featuredImage,
      "url": `https://www.alphadigitalgroup.co/blog/${post.slug}`
    }))
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Digital Marketing Insights | Alpha Digital Group Blog</title>
        <meta name="description" content="Explore expert insights on digital marketing, e-commerce strategies, and technology trends from Alpha Digital Group. Stay ahead in the digital landscape with our latest articles and tips." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
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
              <li><Link href="/" className="text-gray-600 hover:text-purple-600">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-purple-600">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-purple-600">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 pt-24 flex">
        <Sidebar blogPosts={blogPosts} allTags={allTags} />

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
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900">
                  <Link href={`/blog/${post.slug}`} className="hover:text-purple-600">{post.title}</Link>
                </h2>
                <div className="flex items-center mb-4">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={32}
                    height={32}
                    className="rounded-full mr-3"
                    loading="lazy"
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
                <Link href={`/blog/${post.slug}`} className="text-purple-600 text-sm hover:underline">Read more</Link>
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
}