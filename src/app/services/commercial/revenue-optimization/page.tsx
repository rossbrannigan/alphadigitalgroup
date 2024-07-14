import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { BarChart2, Target, DollarSign, TrendingUp, PieChart, Users, ShoppingCart, Zap } from 'lucide-react';

const RevenueOptimizationServicesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Revenue Optimization Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Expert Revenue Optimization Services for Maximizing Profitability and Business Growth" />
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Revenue Optimization Services</h1>
            <p className="text-lg text-gray-700">
              At Alpha Digital Group, we specialize in revenue optimization strategies that maximize your businesses profitability and drive sustainable growth. Our expert team leverages data-driven insights and cutting-edge methodologies to identify untapped opportunities, streamline pricing strategies, and enhance customer lifetime value across all revenue streams.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Revenue Optimization Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <DollarSign size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Pricing Strategy Optimization</h3>
                </div>
                <p className="text-white">We develop and implement dynamic pricing strategies to maximize revenue while maintaining competitiveness.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Users size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Customer Segmentation & Targeting</h3>
                </div>
                <p className="text-white">We identify high-value customer segments and develop targeted strategies to increase their lifetime value.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <ShoppingCart size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Sales Funnel Optimization</h3>
                </div>
                <p className="text-white">We analyze and refine your sales funnel to increase conversion rates and average order value.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Zap size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Revenue Leakage Prevention</h3>
                </div>
                <p className="text-white">We identify and address sources of revenue leakage to ensure you capture the full value of your offerings.</p>
              </div>
            </div>
          </section>

          <section id="revenue-expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Revenue Optimization Expertise</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Alpha Digital Group, we pride ourselves on our extensive expertise in various aspects of revenue optimization. Our proficiency includes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Demand Forecasting and Inventory Management</li>
              <li className="text-lg text-gray-700">Upselling and Cross-selling Strategies</li>
              <li className="text-lg text-gray-700">Subscription Model Optimization</li>
              <li className="text-lg text-gray-700">Loyalty Program Development</li>
              <li className="text-lg text-gray-700">Channel Mix Optimization</li>
              <li className="text-lg text-gray-700">Revenue Performance Management</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We specialize in developing custom revenue optimization strategies tailored to every industry, ensuring that our recommendations perfectly align with your specific business context and objectives.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Impact of Effective Revenue Optimization</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in revenue optimization provides significant value to companies seeking to enhance their financial performance. Heres why it matters:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Increased Profitability:</span> Maximize revenue from existing customers and products.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Improved Cash Flow:</span> Optimize pricing and payment terms to accelerate cash collection.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Enhanced Customer Value:</span> Increase customer lifetime value through targeted strategies.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Competitive Advantage:</span> Stay ahead of the competition with data-driven pricing and offering strategies.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Sustainable Growth:</span> Build a foundation for long-term revenue growth and business scalability.
              </li>
            </ul>
          </section>

          <section id="tech-stack">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Revenue Optimization Technology Stack</h2>
            <p className="text-lg text-gray-700 mb-4">
              We leverage cutting-edge technologies to deliver exceptional revenue optimization results:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <BarChart2 size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Advanced analytics platforms for customer behavior and purchasing pattern analysis</p>
              </div>
              <div className="flex items-center">
                <PieChart size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Machine learning algorithms for predictive pricing and demand forecasting</p>
              </div>
              <div className="flex items-center">
                <TrendingUp size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Real-time data visualization tools for monitoring key revenue metrics</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in these modern technologies allows us to create comprehensive revenue optimization strategies that drive real results and maximize your business potential.
            </p>
          </section>

          <section id="optimization-tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Revenue Optimization Tools We Use</h2>
            <p className="text-lg text-gray-700 mb-4">
              We utilize a range of sophisticated tools to develop and implement effective revenue optimization strategies:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Salesforce Revenue Cloud for end-to-end revenue management</li>
              <li className="text-lg text-gray-700">Price optimization software like Perfect Price or Competera</li>
              <li className="text-lg text-gray-700">Customer segmentation tools like RFM analysis</li>
              <li className="text-lg text-gray-700">A/B testing platforms for conversion rate optimization</li>
              <li className="text-lg text-gray-700">Predictive analytics tools for forecasting and scenario planning</li>
              <li className="text-lg text-gray-700">Customer journey mapping software for identifying optimization opportunities</li>
            </ul>
            <p className="text-lg text-gray-700">
              Our proficiency with these tools enables us to create data-driven revenue optimization strategies that maximize your financial performance and drive sustainable growth.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Revenue Optimization Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Revenue Assessment: Conducting a comprehensive analysis of your current revenue streams and performance</li>
              <li className="text-lg text-gray-700">Data Collection & Analysis: Gathering and analyzing relevant data on customer behavior, pricing, and market trends</li>
              <li className="text-lg text-gray-700">Opportunity Identification: Pinpointing areas for revenue growth and optimization</li>
              <li className="text-lg text-gray-700">Strategy Development: Crafting tailored revenue optimization strategies aligned with your business goals</li>
              <li className="text-lg text-gray-700">Implementation Planning: Creating a roadmap for executing optimization strategies across your organization</li>
              <li className="text-lg text-gray-700">Technology Integration: Implementing necessary tools and systems to support revenue optimization efforts</li>
              <li className="text-lg text-gray-700">Testing & Refinement: Conducting controlled tests of new strategies and refining based on results</li>
              <li className="text-lg text-gray-700">Performance Monitoring: Establishing KPIs and monitoring systems to track the effectiveness of optimization efforts</li>
              <li className="text-lg text-gray-700">Continuous Improvement: Regularly reviewing and adjusting strategies based on performance data and market changes</li>
            </ol>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Maximize Your Revenue Potential?</h2>
              <p className="text-xl mb-6">Lets create a tailored revenue optimization strategy that drives profitability and sustainable growth for your business.</p>
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

export default RevenueOptimizationServicesPage;