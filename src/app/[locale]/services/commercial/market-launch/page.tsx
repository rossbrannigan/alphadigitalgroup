import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { Rocket, Target, BarChart2, MessageCircle, Users, Zap } from 'lucide-react';

const MarketLaunchPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Market Launch Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Expert Market Launch Strategy and Execution Services" />
      </Head>

      {/* Google Analytics and Tag Manager Scripts */}
      <GoogleAnalytics gaId="G-25Y0G3QQE6" />
      <GoogleTagManager gtmId="G-25Y0G3QQE6" />

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 mt-16">
        <div className="space-y-12">
          <section id="intro">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Market Launch Services</h1>
            <p className="text-lg text-gray-700">
              At Alpha Digital Group, we specialize in crafting and executing successful market launch strategies for products, services, and businesses. Our expert team combines in-depth market analysis, innovative marketing techniques, and industry expertise to ensure your launch makes a significant impact and achieves your business objectives.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Market Launch Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Target size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Market Analysis & Positioning</h3>
                </div>
                <p className="text-white">We conduct thorough market research to identify opportunities and position your offering for success.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <BarChart2 size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Go-to-Market Strategy</h3>
                </div>
                <p className="text-white">We develop comprehensive strategies covering pricing, distribution, and promotional activities.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <MessageCircle size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Launch Marketing Campaigns</h3>
                </div>
                <p className="text-white">We create and execute multi-channel marketing campaigns to generate buzz and drive adoption.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Users size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Customer Acquisition Strategy</h3>
                </div>
                <p className="text-white">We design and implement strategies to attract and convert your target audience into customers.</p>
              </div>
            </div>
          </section>

          <section id="expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Market Launch Expertise</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our team at Alpha Digital Group brings extensive market launch expertise across various industries and product types:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Technology and Software Products</li>
              <li className="text-lg text-gray-700">Consumer Goods and Services</li>
              <li className="text-lg text-gray-700">B2B Products and Services</li>
              <li className="text-lg text-gray-700">E-commerce Platforms</li>
              <li className="text-lg text-gray-700">Mobile Applications</li>
              <li className="text-lg text-gray-700">Startups and New Business Ventures</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We tailor our market launch strategies to your specific industry, target market, and business objectives, ensuring a successful and impactful launch.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Market Launch Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Market Research: Analyzing market trends, customer needs, and competitive landscape</li>
              <li className="text-lg text-gray-700">Product/Market Fit Assessment: Ensuring your offering meets market demands</li>
              <li className="text-lg text-gray-700">Target Audience Definition: Identifying and profiling your ideal customers</li>
              <li className="text-lg text-gray-700">Positioning Strategy: Developing a unique value proposition and brand positioning</li>
              <li className="text-lg text-gray-700">Go-to-Market Plan: Creating a comprehensive launch strategy and timeline</li>
              <li className="text-lg text-gray-700">Marketing Campaign Development: Designing multi-channel marketing initiatives</li>
              <li className="text-lg text-gray-700">Launch Execution: Coordinating and implementing all launch activities</li>
              <li className="text-lg text-gray-700">Performance Monitoring: Tracking key metrics and KPIs during and post-launch</li>
              <li className="text-lg text-gray-700">Post-Launch Optimization: Refining strategies based on initial market feedback and data</li>
            </ol>
          </section>

          <section id="tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Market Launch Tools We Use</h2>
            <p className="text-lg text-gray-700 mb-4">
              We leverage advanced tools and technologies to ensure a successful market launch:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Target size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">SurveyMonkey for market research and customer feedback</p>
              </div>
              <div className="flex items-center">
                <BarChart2 size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">SEMrush for competitor analysis and SEO strategy</p>
              </div>
              <div className="flex items-center">
                <MessageCircle size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Hootsuite for social media campaign management</p>
              </div>
              <div className="flex items-center">
                <Zap size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Salesforce for customer relationship management during launch</p>
              </div>
            </div>
          </section>

          <section id="benefits">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Benefits of Our Market Launch Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Accelerated Market Entry</h3>
                <p className="text-gray-700">Leverage our expertise to quickly and effectively enter your target market.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Maximized Launch Impact</h3>
                <p className="text-gray-700">Create a significant market presence from day one with our strategic approach.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Optimized Resource Allocation</h3>
                <p className="text-gray-700">Ensure your launch budget and resources are used efficiently for maximum ROI.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Risk Mitigation</h3>
                <p className="text-gray-700">Minimize launch risks with our data-driven strategies and expert insights.</p>
              </div>
            </div>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Launch Successfully?</h2>
              <p className="text-xl mb-6">Lets create a market launch strategy that sets your product or business up for success.</p>
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

export default MarketLaunchPage;