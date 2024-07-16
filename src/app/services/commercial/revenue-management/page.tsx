import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { DollarSign, TrendingUp, BarChart2, PieChart, LineChart, Share2 } from 'lucide-react';

const RevenueManagementPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Revenue Management Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Expert Revenue Management and Optimization Services" />
      </Head>

      {/* Google Analytics and Tag Manager Scripts */}
      <GoogleAnalytics gaId="G-25Y0G3QQE6" />
      <GoogleTagManager gtmId="G-25Y0G3QQE6" />

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 mt-16">
        <div className="space-y-12">
          <section id="intro">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Revenue Management Services</h1>
            <p className="text-lg text-gray-700">
              At Alpha Digital Group, we specialize in strategic revenue management to maximize your companys financial performance. Our expert team leverages data-driven insights and industry expertise to optimize pricing, inventory, and distribution strategies, ensuring sustainable revenue growth and improved profitability.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Revenue Management Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <DollarSign size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Dynamic Pricing Strategies</h3>
                </div>
                <p className="text-white">We develop and implement dynamic pricing models to optimize revenue based on market demand and competitor analysis.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <TrendingUp size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Demand Forecasting</h3>
                </div>
                <p className="text-white">We utilize advanced analytics to predict future demand, allowing for proactive revenue optimization.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <BarChart2 size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Inventory Optimization</h3>
                </div>
                <p className="text-white">We optimize inventory levels to balance supply with demand, maximizing revenue opportunities while minimizing costs.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Share2 size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Distribution Channel Optimization</h3>
                </div>
                <p className="text-white">We analyze and optimize your distribution channels to ensure maximum reach and profitability.</p>
              </div>
            </div>
          </section>

          <section id="expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Revenue Management Expertise</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our team at Alpha Digital Group brings extensive expertise in revenue management across various industries:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Hospitality and Tourism</li>
              <li className="text-lg text-gray-700">E-commerce and Retail</li>
              <li className="text-lg text-gray-700">Airlines and Transportation</li>
              <li className="text-lg text-gray-700">Entertainment and Events</li>
              <li className="text-lg text-gray-700">SaaS and Subscription-based Services</li>
              <li className="text-lg text-gray-700">Manufacturing and Supply Chain</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We tailor our revenue management strategies to your specific industry and business model, ensuring optimal results and sustainable growth.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Revenue Management Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Data Collection and Analysis: Gathering relevant data on pricing, inventory, and market trends</li>
              <li className="text-lg text-gray-700">Market Segmentation: Identifying key customer segments and their price sensitivity</li>
              <li className="text-lg text-gray-700">Demand Forecasting: Predicting future demand patterns using advanced analytics</li>
              <li className="text-lg text-gray-700">Pricing Strategy Development: Crafting dynamic pricing models based on data insights</li>
              <li className="text-lg text-gray-700">Inventory Optimization: Aligning inventory levels with predicted demand</li>
              <li className="text-lg text-gray-700">Distribution Channel Analysis: Evaluating and optimizing sales channels</li>
              <li className="text-lg text-gray-700">Implementation: Deploying revenue management strategies across your organization</li>
              <li className="text-lg text-gray-700">Performance Monitoring: Continuously tracking key performance indicators (KPIs)</li>
              <li className="text-lg text-gray-700">Strategy Refinement: Iteratively improving strategies based on performance data</li>
            </ol>
          </section>

          <section id="tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Revenue Management Tools We Use</h2>
            <p className="text-lg text-gray-700 mb-4">
              We leverage cutting-edge tools and technologies to deliver superior revenue management results:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <PieChart size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Tableau for data visualization and business intelligence</p>
              </div>
              <div className="flex items-center">
                <LineChart size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">PROS for AI-driven pricing optimization</p>
              </div>
              <div className="flex items-center">
                <BarChart2 size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">SAS Revenue Optimization for advanced analytics and forecasting</p>
              </div>
              <div className="flex items-center">
                <TrendingUp size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Duetto for hospitality-specific revenue management solutions</p>
              </div>
            </div>
          </section>

          <section id="benefits">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Benefits of Our Revenue Management Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Increased Profitability</h3>
                <p className="text-gray-700">Optimize pricing and inventory to maximize revenue and profit margins.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Improved Decision Making</h3>
                <p className="text-gray-700">Leverage data-driven insights for more informed strategic decisions.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Enhanced Customer Segmentation</h3>
                <p className="text-gray-700">Target the right customers with the right offers at the right time.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Competitive Advantage</h3>
                <p className="text-gray-700">Stay ahead of the competition with agile pricing and inventory strategies.</p>
              </div>
            </div>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Revenue?</h2>
              <p className="text-xl mb-6">Lets create a revenue management strategy that drives sustainable growth for your business.</p>
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

export default RevenueManagementPage;