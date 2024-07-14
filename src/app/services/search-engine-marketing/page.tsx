import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { Search, BarChart2, Target, DollarSign, Maximize2, Layers } from 'lucide-react';

const SEMServicesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Search Engine Marketing (SEM) Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Expert Search Engine Marketing (SEM) and PPC Services" />
      </Head>

      {/* Google Analytics and Tag Manager Scripts */}
      <Script
        id="google-analytics-script"
        src="https://www.googletagmanager.com/gtag/js?id=G-25Y0G3QQE6"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics-config-script"
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

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 mt-16">
        <div className="space-y-12">
          <section id="intro">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Search Engine Marketing (SEM) Services</h1>
            <p className="text-lg text-gray-700">
              At Alpha Digital Group, we specialize in creating powerful Search Engine Marketing (SEM) strategies that drive targeted traffic, increase conversions, and maximize your ROI. Our expert team leverages data-driven insights and industry-leading techniques to craft tailored SEM campaigns that align with your business objectives and target audience.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our SEM Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Search size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Keyword Research & Strategy</h3>
                </div>
                <p className="text-white">We conduct in-depth keyword research to identify high-value search terms and develop targeted SEM strategies.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Layers size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Ad Creation & Optimization</h3>
                </div>
                <p className="text-white">We craft compelling ad copy and continuously optimize ad performance to improve click-through rates and quality scores.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Target size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Audience Targeting</h3>
                </div>
                <p className="text-white">We leverage advanced targeting options to reach your ideal audience based on demographics, interests, and behaviors.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <DollarSign size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Bid Management & Budget Optimization</h3>
                </div>
                <p className="text-white">We implement strategic bidding strategies and optimize your budget allocation to maximize ROI across all campaigns.</p>
              </div>
            </div>
          </section>

          <section id="sem-expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">SEM Expertise</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Alpha Digital Group, we pride ourselves on our extensive expertise in various SEM platforms and techniques. Our proficiency includes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Google Ads (Search, Display, Shopping)</li>
              <li className="text-lg text-gray-700">Microsoft Advertising (Bing Ads)</li>
              <li className="text-lg text-gray-700">Retargeting & Remarketing Campaigns</li>
              <li className="text-lg text-gray-700">Local SEM Strategies</li>
              <li className="text-lg text-gray-700">E-commerce PPC Optimization</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We specialize in developing custom SEM strategies tailored to every industry, ensuring that your campaigns perfectly align with your specific business goals and target audience.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Power of Effective SEM</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in SEM provides immense value to companies seeking to increase their online visibility and drive targeted traffic. Heres why it matters:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Immediate Visibility:</span> SEM provides instant exposure on search engine results pages for your target keywords.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Highly Targeted Traffic:</span> Reach users actively searching for your products or services.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Measurable Results:</span> Track and analyze campaign performance with precise metrics and ROI data.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Flexibility & Control:</span> Quickly adjust campaigns based on performance and market changes.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Brand Awareness:</span> Increase your brands visibility even when users dont click on your ads.
              </li>
            </ul>
          </section>

          <section id="tech-stack">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our SEM Technology Stack</h2>
            <p className="text-lg text-gray-700 mb-4">
              We leverage cutting-edge technologies to deliver exceptional SEM results:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <BarChart2 size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Advanced analytics platforms for comprehensive performance tracking and optimization</p>
              </div>
              <div className="flex items-center">
                <Maximize2 size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">AI-powered bid management tools for real-time bid optimization</p>
              </div>
              <div className="flex items-center">
                <Layers size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Conversion tracking and attribution modeling software for accurate ROI measurement</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in these modern technologies allows us to create comprehensive SEM strategies that drive real results and maximize your advertising impact.
            </p>
          </section>

          <section id="sem-tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">SEM Tools We Use</h2>
            <p className="text-lg text-gray-700 mb-4">
              We utilize a range of sophisticated tools to develop and implement effective SEM campaigns:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Google Ads Editor for efficient campaign management and bulk edits</li>
              <li className="text-lg text-gray-700">SEMrush for competitor analysis and keyword research</li>
              <li className="text-lg text-gray-700">Optmyzr for automated optimization and reporting</li>
              <li className="text-lg text-gray-700">Google Analytics for in-depth performance tracking and audience insights</li>
              <li className="text-lg text-gray-700">Unbounce for creating and testing high-converting landing pages</li>
              <li className="text-lg text-gray-700">CallRail for call tracking and attribution</li>
            </ul>
            <p className="text-lg text-gray-700">
              Our proficiency with these tools enables us to create data-driven SEM strategies that reach your target audience effectively and drive business growth.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our SEM Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Account & Competitor Analysis: Reviewing existing accounts and analyzing competitor strategies</li>
              <li className="text-lg text-gray-700">Keyword Research: Identifying high-value keywords and search terms</li>
              <li className="text-lg text-gray-700">Campaign Structure: Developing a strategic campaign structure for maximum efficiency</li>
              <li className="text-lg text-gray-700">Ad Creation: Crafting compelling ad copy and extensions</li>
              <li className="text-lg text-gray-700">Landing Page Optimization: Ensuring landing pages are optimized for conversions</li>
              <li className="text-lg text-gray-700">Bid Strategy Implementation: Setting up and managing automated bidding strategies</li>
              <li className="text-lg text-gray-700">Campaign Launch: Activating campaigns and closely monitoring initial performance</li>
              <li className="text-lg text-gray-700">Ongoing Optimization: Continuously refining campaigns based on performance data</li>
              <li className="text-lg text-gray-700">Reporting & Analysis: Providing regular insights and recommendations for improvement</li>
            </ol>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Search Engine Visibility?</h2>
              <p className="text-xl mb-6">Lets create an SEM strategy that drives targeted traffic and conversions for your business.</p>
              <a
                href="mailto:ross@alphadigitalgroup.co"
                className="inline-block bg-white text-[rgba(128,19,176,255)] py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Contact Us Today
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SEMServicesPage;