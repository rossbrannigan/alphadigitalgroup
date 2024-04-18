// pages/featuredinsights/page.tsx

import Image from "next/image";
import Head from 'next/head';
import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google'

const FeaturedInsightsPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
<Head>
        {/* Add Google Analytics tracking tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-25Y0G3QQE6"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-25Y0G3QQE6');
            `,
          }}
        />
        {/* Google Analytics and Google Tag Manager components */}
        <GoogleAnalytics gaId="G-25Y0G3QQE6" />
        <GoogleTagManager gtmId="G-25Y0G3QQE6" />
        
        {/* Page title, icon, and meta description */}
        <title>Featured Insights | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Global management consulting" />
      </Head>
      {/* Main Content */}
      <main className="container mx-auto py-8">
        {/* Introductory Text */}
        <section className="mb-8">
          <div className="px-4">
            <h1 className="text-3xl font-semibold text-purple-800 mb-4">Featured Insights</h1>
            <p className="text-gray-700">
              Our Featured Insights section is currently under development and will soon be launching various showcases to provide you with valuable content.
            </p>
          </div>
        </section>

        {/* Add your featured insights content here */}
        
      </main>
    </div>
  );
};

export default FeaturedInsightsPage;