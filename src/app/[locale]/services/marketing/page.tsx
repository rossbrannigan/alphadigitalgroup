import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { Target, BarChart2, TrendingUp, Users, Zap, Briefcase } from 'lucide-react';

const MarketingStrategyPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Marketing Strategy Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Comprehensive Marketing Strategy Services" />
      </Head>

      {/* Google Analytics and Tag Manager Scripts */}
      <GoogleAnalytics gaId="G-25Y0G3QQE6" />
      <GoogleTagManager gtmId="G-25Y0G3QQE6" />

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 mt-16">
        <div className="space-y-12">
          <section id="intro">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Marketing Strategy Services</h1>
            <p className="text-lg text-gray-700">
              At Alpha Digital Group, we specialize in developing comprehensive marketing strategies that drive growth, engagement, and ROI. Our expert team combines data-driven insights with industry expertise to craft tailored strategies that align with your business objectives and target audience.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Marketing Strategy Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Target size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Market Research</h3>
                </div>
                <p className="text-white">We conduct in-depth research to understand your target audience, competitors, and market trends.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <BarChart2 size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Brand Positioning</h3>
                </div>
                <p className="text-white">We develop a unique brand identity and positioning strategy to differentiate you in the market.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <TrendingUp size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Marketing Mix Optimization</h3>
                </div>
                <p className="text-white">We create the optimal mix of marketing channels and tactics to reach your goals efficiently.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Users size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Customer Journey Mapping</h3>
                </div>
                <p className="text-white">We analyze and optimize every touchpoint in your customers journey to improve conversions.</p>
              </div>
            </div>
          </section>

          <section id="expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Marketing Strategy Expertise</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Alpha Digital Group, we pride ourselves on our comprehensive expertise in various marketing disciplines:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Digital Marketing</li>
              <li className="text-lg text-gray-700">Content Marketing</li>
              <li className="text-lg text-gray-700">Social Media Marketing</li>
              <li className="text-lg text-gray-700">Email Marketing</li>
              <li className="text-lg text-gray-700">Search Engine Optimization (SEO)</li>
              <li className="text-lg text-gray-700">Pay-Per-Click (PPC) Advertising</li>
              <li className="text-lg text-gray-700">Influencer Marketing</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We develop custom marketing strategies tailored to every industry, ensuring that your plan perfectly aligns with your specific business goals and target audience.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Marketing Strategy Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Situation Analysis: Understanding your current market position and business objectives</li>
              <li className="text-lg text-gray-700">Target Audience Definition: Identifying and segmenting your ideal customers</li>
              <li className="text-lg text-gray-700">Competitive Analysis: Assessing your competitors strengths and weaknesses</li>
              <li className="text-lg text-gray-700">SWOT Analysis: Evaluating your Strengths, Weaknesses, Opportunities, and Threats</li>
              <li className="text-lg text-gray-700">Strategy Development: Crafting a comprehensive marketing strategy aligned with your goals</li>
              <li className="text-lg text-gray-700">Tactical Planning: Detailing specific marketing activities and campaigns</li>
              <li className="text-lg text-gray-700">Budget Allocation: Distributing resources across marketing channels and initiatives</li>
              <li className="text-lg text-gray-700">Implementation: Executing the marketing strategy across various channels</li>
              <li className="text-lg text-gray-700">Measurement and Optimization: Continuously tracking performance and refining the strategy</li>
            </ol>
          </section>

          <section id="tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Marketing Strategy Tools We Use</h2>
            <p className="text-lg text-gray-700 mb-4">
              We leverage a range of sophisticated tools to develop and implement effective marketing strategies:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <BarChart2 size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Google Analytics for website performance and user behavior analysis</p>
              </div>
              <div className="flex items-center">
                <Users size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Hubspot for inbound marketing and CRM</p>
              </div>
              <div className="flex items-center">
                <Zap size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">SEMrush for SEO and competitor analysis</p>
              </div>
              <div className="flex items-center">
                <Briefcase size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Hootsuite for social media management and analytics</p>
              </div>
            </div>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Marketing Strategy?</h2>
              <p className="text-xl mb-6">Lets create a comprehensive plan that drives growth for your business.</p>
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

export default MarketingStrategyPage;