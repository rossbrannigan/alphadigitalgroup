import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { Globe, TrendingUp, Target, Users, BarChart2, Shuffle } from 'lucide-react';

const MarketExpansionPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Market Expansion Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Expert Market Expansion Strategy and Execution Services" />
      </Head>

      {/* Google Analytics and Tag Manager Scripts */}
      <GoogleAnalytics gaId="G-25Y0G3QQE6" />
      <GoogleTagManager gtmId="G-25Y0G3QQE6" />

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 mt-16">
        <div className="space-y-12">
          <section id="intro">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Market Expansion Services</h1>
            <p className="text-lg text-gray-700">
              At Alpha Digital Group, we specialize in developing and implementing successful market expansion strategies for businesses looking to grow their reach and revenue. Our expert team combines in-depth market analysis, innovative growth techniques, and industry expertise to help you successfully enter new markets and scale your business.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Market Expansion Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Globe size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">New Market Entry Strategy</h3>
                </div>
                <p className="text-white">We develop comprehensive strategies for entering new geographic or demographic markets.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <TrendingUp size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Growth Opportunity Analysis</h3>
                </div>
                <p className="text-white">We identify and evaluate potential growth opportunities in existing and new markets.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Target size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Market Penetration Strategies</h3>
                </div>
                <p className="text-white">We create strategies to increase market share in existing markets through various tactics.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Users size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Partnership & Alliance Development</h3>
                </div>
                <p className="text-white">We help identify and forge strategic partnerships to accelerate market expansion.</p>
              </div>
            </div>
          </section>

          <section id="expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Market Expansion Expertise</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our team at Alpha Digital Group brings extensive market expansion expertise across various industries and business types:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Technology and SaaS Companies</li>
              <li className="text-lg text-gray-700">Retail and E-commerce Businesses</li>
              <li className="text-lg text-gray-700">B2B Service Providers</li>
              <li className="text-lg text-gray-700">Manufacturing and Industrial Firms</li>
              <li className="text-lg text-gray-700">Healthcare and Biotech Organizations</li>
              <li className="text-lg text-gray-700">Financial Services and Fintech Companies</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We tailor our market expansion strategies to your specific industry, target markets, and business objectives, ensuring sustainable growth and success.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Market Expansion Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Market Opportunity Assessment: Identifying potential markets and evaluating their attractiveness</li>
              <li className="text-lg text-gray-700">Competitive Landscape Analysis: Understanding the competitive dynamics in target markets</li>
              <li className="text-lg text-gray-700">Market Entry Strategy Development: Crafting a tailored approach for each target market</li>
              <li className="text-lg text-gray-700">Localization Planning: Adapting products, services, and marketing for local markets</li>
              <li className="text-lg text-gray-700">Channel Strategy: Developing distribution and sales channel strategies</li>
              <li className="text-lg text-gray-700">Marketing and Brand Adaptation: Adjusting marketing strategies for new markets</li>
              <li className="text-lg text-gray-700">Operational Planning: Addressing logistics, legal, and operational requirements</li>
              <li className="text-lg text-gray-700">Implementation Support: Assisting with the execution of the expansion strategy</li>
              <li className="text-lg text-gray-700">Performance Monitoring and Optimization: Tracking KPIs and refining strategies</li>
            </ol>
          </section>

          <section id="tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Market Expansion Tools We Use</h2>
            <p className="text-lg text-gray-700 mb-4">
              We leverage advanced tools and technologies to ensure successful market expansion:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Globe size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">PESTEL Analysis for macro-environmental assessment</p>
              </div>
              <div className="flex items-center">
                <BarChart2 size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Tableau for data visualization and market insights</p>
              </div>
              <div className="flex items-center">
                <Target size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Google Market Finder for international market opportunities</p>
              </div>
              <div className="flex items-center">
                <Shuffle size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Ansoff Matrix for growth strategy development</p>
              </div>
            </div>
          </section>

          <section id="benefits">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Benefits of Our Market Expansion Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Accelerated Growth</h3>
                <p className="text-gray-700">Leverage our expertise to quickly and effectively enter new markets and drive business growth.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Risk Mitigation</h3>
                <p className="text-gray-700">Minimize expansion risks with our data-driven strategies and local market insights.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Resource Optimization</h3>
                <p className="text-gray-700">Ensure your expansion budget and resources are allocated efficiently for maximum ROI.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Competitive Advantage</h3>
                <p className="text-gray-700">Gain a strong foothold in new markets with our strategic approach and local expertise.</p>
              </div>
            </div>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Expand Your Market Reach?</h2>
              <p className="text-xl mb-6">Lets create a market expansion strategy that drives sustainable growth for your business.</p>
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

export default MarketExpansionPage;