import React from "react";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { contentfulClient } from 'contentful';

interface BlogPost {
  title: string;
  content: string;
  date: string;
  // Add other fields as needed
}

async function getBlogPosts() {
  console.log('Contentful client:', contentfulClient);
  if (!contentfulClient) {
    console.error('Contentful client is undefined');
    return [];
  }
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost', // Replace with your Contentful content type ID
    });
    console.log('Contentful response:', response);
    return response.items.map((item: any) => ({
      title: item.fields.title,
      content: item.fields.content,
      date: new Date(item.fields.date).toLocaleDateString(),
      // Add other fields as needed
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  console.log('Environment variables:', {
    NEXT_PUBLIC_CONTENTFUL_SPACE_ID: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });
  
  const blogPosts = await getBlogPosts();

  // Get today's date
  const today = new Date();
  // Format today's date as YYYY-MM-DD
  const formattedDate = today.toISOString().split('T')[0];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>{"Web3 Consulting & Services | Alpha Digital Group"}</title>
        <meta name="description" content="Explore Alpha Digital Group's Web3 consulting and services. We specialize in blockchain, DeFi, NFTs, and more. Transform your business with our expert guidance." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        id="google-analytics-script"
        src={`https://www.googletagmanager.com/gtag/js?id=G-25Y0G3QQE6`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics-inline-script"
        strategy="afterInteractive"
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

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
        {blogPosts.map((post: BlogPost, index: number) => (
          <div key={index} className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        ))}
      </div>
    </div>
  );
}