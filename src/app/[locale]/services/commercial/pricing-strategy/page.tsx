import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { DollarSign, Target, BarChart2, TrendingUp, Layers, Zap } from 'lucide-react';

const PricingStrategyPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Pricing Strategy Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Expert Pricing Strategy Development and Optimization Services" />
      </Head>

      {/* Google Analytics and Tag Manager Scripts */}
      <GoogleAnalytics gaId="G-25Y0G3QQE6" />
      <GoogleTagManager gtmId="G-25Y0G3QQE6" />

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 mt-16">
        <div className="space-y-12">
          <section id="intro">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Pricing Strategy Services</h1>
            <p className="text-lg text-gray-700">
              At Alpha Digital Group, we specialize in developing and implementing effective pricing strategies that drive profitability and market competitiveness. Our expert team combines data-driven insights, market analysis, and industry expertise to craft tailored pricing strategies that align with your business objectives and target audience.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Pricing Strategy Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Target size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Value-Based Pricing</h3>
                </div>
                <p className="text-white">We develop pricing strategies based on the perceived value of your products or services to different customer segments.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <BarChart2 size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Competitive Pricing Analysis</h3>
                </div>
                <p className="text-white">We analyze competitor pricing to position your offerings effectively in the market.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <TrendingUp size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Dynamic Pricing Models</h3>
                </div>
                <p className="text-white">We implement flexible pricing strategies that adapt to market conditions, demand, and other factors in real-time.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Layers size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Tiered and Bundle Pricing</h3>
                </div>
                <p className="text-white">We design tiered pricing structures and bundled offerings to maximize revenue and customer satisfaction.</p>
              </div>
            </div>
          </section>

          <section id="expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Pricing Strategy Expertise</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our team at Alpha Digital Group brings extensive pricing strategy expertise across various industries and business models:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">SaaS and Subscription-based Services</li>
              <li className="text-lg text-gray-700">E-commerce and Retail</li>
              <li className="text-lg text-gray-700">B2B Products and Services</li>
              <li className="text-lg text-gray-700">Consumer Goods</li>
              <li className="text-lg text-gray-700">Professional Services</li>
              <li className="text-lg text-gray-700">Technology and Software</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We tailor our pricing strategies to your specific industry, target market, and business objectives, ensuring optimal results and sustainable growth.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Pricing Strategy Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Market Research: Analyzing market trends, customer behavior, and competitor pricing</li>
              <li className="text-lg text-gray-700">Cost Analysis: Evaluating your cost structure to ensure profitability</li>
              <li className="text-lg text-gray-700">Value Proposition Assessment: Identifying the unique value your products or services offer</li>
              <li className="text-lg text-gray-700">Customer Segmentation: Identifying key customer segments and their willingness to pay</li>
              <li className="text-lg text-gray-700">Pricing Model Selection: Choosing the most appropriate pricing model(s) for your business</li>
              <li className="text-lg text-gray-700">Price Point Determination: Setting optimal price points for each product or service</li>
              <li className="text-lg text-gray-700">Implementation Planning: Developing a rollout plan for new pricing strategies</li>
              <li className="text-lg text-gray-700">Monitoring and Analysis: Continuously tracking pricing performance and market response</li>
              <li className="text-lg text-gray-700">Strategy Refinement: Iteratively improving pricing strategies based on performance data</li>
            </ol>
          </section>

          <section id="tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Pricing Strategy Tools We Use</h2>
            <p className="text-lg text-gray-700 mb-4">
              We leverage advanced tools and technologies to develop and implement effective pricing strategies:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <DollarSign size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Price Intelligently for SaaS pricing optimization</p>
              </div>
              <div className="flex items-center">
                <BarChart2 size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Competera for competitive pricing analysis</p>
              </div>
              <div className="flex items-center">
                <TrendingUp size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Pricefx for AI-driven pricing strategy and management</p>
              </div>
              <div className="flex items-center">
                <Zap size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Prisync for e-commerce pricing intelligence</p>
              </div>
            </div>
          </section>

          <section id="benefits">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Benefits of Our Pricing Strategy Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Increased Profitability</h3>
                <p className="text-gray-700">Optimize your pricing to maximize revenue and profit margins.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Enhanced Market Positioning</h3>
                <p className="text-gray-700">Position your products or services effectively against competitors.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Improved Customer Perception</h3>
                <p className="text-gray-700">Align your pricing with customer perceived value to boost satisfaction.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Agile Pricing Capabilities</h3>
                <p className="text-gray-700">Respond quickly to market changes and opportunities with flexible pricing strategies.</p>
              </div>
            </div>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Pricing Strategy?</h2>
              <p className="text-xl mb-6">Lets develop a pricing strategy that drives growth and profitability for your business.</p>
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

export default PricingStrategyPage;