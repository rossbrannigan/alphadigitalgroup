import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { Search, Code, Database, TrendingUp, FileText, BarChart2 } from 'lucide-react';

const SEOServicesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>SEO Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Expert SEO Services and Strategy" />
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">SEO Services</h1>
            <p className="text-lg text-gray-700">
              At Alpha Digital Group, we specialize in creating comprehensive SEO strategies that improve your search engine rankings, drive organic traffic, and boost your online visibility. Our expert team leverages cutting-edge techniques and tools to help your business dominate search results.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our SEO Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Search size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Keyword Research & Strategy</h3>
                </div>
                <p className="text-white">We identify high-value keywords and develop strategies to target them effectively.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <FileText size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">On-Page SEO Optimization</h3>
                </div>
                <p className="text-white">We optimize your websites content, structure, and metadata to improve search engine rankings.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <TrendingUp size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Link Building</h3>
                </div>
                <p className="text-white">We develop strategies to acquire high-quality backlinks, improving your sites authority and rankings.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <BarChart2 size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Technical SEO</h3>
                </div>
                <p className="text-white">We optimize your websites technical aspects to improve crawlability and indexing.</p>
              </div>
            </div>
          </section>

          <section id="seo-expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">SEO Expertise & Strategy</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Alpha Digital Group, we pride ourselves on our extensive expertise in various SEO techniques and strategies. Our proficiency includes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Local SEO optimization</li>
              <li className="text-lg text-gray-700">E-commerce SEO</li>
              <li className="text-lg text-gray-700">International SEO</li>
              <li className="text-lg text-gray-700">Mobile SEO</li>
              <li className="text-lg text-gray-700">Voice search optimization</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We specialize in developing custom SEO strategies tailored to every industry, ensuring that your online presence perfectly aligns with your specific business needs and target audience.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Power of Effective SEO</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in SEO provides immense value to companies seeking to improve their online visibility and drive organic traffic. Heres why it matters:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Increased Visibility:</span> Improve your rankings in search engine results pages (SERPs) for relevant keywords.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Higher Quality Traffic:</span> Attract users who are actively searching for your products or services.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Cost-Effective:</span> Once established, SEO can provide a steady stream of organic traffic without ongoing ad spend.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Brand Credibility:</span> High search rankings can improve your brands perceived credibility and authority.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Better User Experience:</span> Many SEO best practices also improve overall user experience on your website.
              </li>
            </ul>
          </section>

          <section id="tech-stack">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our SEO Technology Stack</h2>
            <p className="text-lg text-gray-700 mb-4">
              We leverage cutting-edge technologies to deliver exceptional SEO results:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Code size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Schema markup for enhanced SERP features</p>
              </div>
              <div className="flex items-center">
                <Database size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Advanced analytics tools for data-driven decision making</p>
              </div>
              <div className="flex items-center">
                <FileText size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Content optimization tools for SEO-friendly content creation</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in these modern technologies allows us to create comprehensive SEO strategies that drive real results.
            </p>
          </section>

          <section id="seo-tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">SEO Tools We Use</h2>
            <p className="text-lg text-gray-700 mb-4">
              We utilize a range of sophisticated tools to develop and implement effective SEO strategies:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">SEMrush for comprehensive keyword research and competitor analysis</li>
              <li className="text-lg text-gray-700">Ahrefs for backlink analysis and link building opportunities</li>
              <li className="text-lg text-gray-700">Google Search Console for monitoring search performance and indexing issues</li>
              <li className="text-lg text-gray-700">Screaming Frog for technical SEO audits</li>
              <li className="text-lg text-gray-700">Moz Pro for rank tracking and on-page optimization</li>
              <li className="text-lg text-gray-700">Google Analytics for traffic analysis and conversion tracking</li>
            </ul>
            <p className="text-lg text-gray-700">
              Our proficiency with these tools enables us to create data-driven SEO strategies that drive organic traffic and improve your search engine rankings.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our SEO Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Initial SEO Audit: Assessing your current SEO performance and identifying opportunities</li>
              <li className="text-lg text-gray-700">Keyword Research: Identifying high-value keywords relevant to your business</li>
              <li className="text-lg text-gray-700">On-Page Optimization: Optimizing your websites content and structure</li>
              <li className="text-lg text-gray-700">Technical SEO: Addressing technical issues that may impact search performance</li>
              <li className="text-lg text-gray-700">Link Building: Developing and implementing a strategy to acquire quality backlinks</li>
              <li className="text-lg text-gray-700">Monitoring and Reporting: Continuously tracking performance and making data-driven adjustments</li>
            </ol>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Search Engine Rankings?</h2>
              <p className="text-xl mb-6">Lets create an SEO strategy that drives results for your business.</p>
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

export default SEOServicesPage;