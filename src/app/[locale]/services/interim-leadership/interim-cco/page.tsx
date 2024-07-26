import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { TrendingUp, Users, DollarSign, Briefcase, BarChart2, Globe, Handshake, ShoppingCart } from 'lucide-react';

const InterimCCOPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Interim Chief Commercial Officer (CCO) Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Expert Interim Chief Commercial Officer (CCO) Services for Revenue Growth and Business Development" />
      </Head>

      {/* Google Analytics and Tag Manager Scripts */}
      <GoogleAnalytics gaId="G-25Y0G3QQE6" />
      <GoogleTagManager gtmId="G-25Y0G3QQE6" />

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 mt-16">
        <div className="space-y-12">
          <section id="intro">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Interim Chief Commercial Officer (CCO) Services</h1>
            <p className="text-lg text-gray-700">
              Alpha Digital Group provides experienced Interim Chief Commercial Officers (CCOs) to help organizations drive revenue growth, optimize sales strategies, and enhance overall commercial performance. Our seasoned CCOs bring extensive expertise in sales leadership, business development, and commercial operations to ensure your business achieves its growth objectives and maximizes market opportunities.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Interim CCO Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <TrendingUp size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Revenue Growth Strategy</h3>
                </div>
                <p className="text-white">Developing and implementing strategies to accelerate revenue growth and market share.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Users size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Sales Force Optimization</h3>
                </div>
                <p className="text-white">Enhancing sales team performance, structure, and processes for maximum effectiveness.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <DollarSign size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Pricing and Commercial Terms</h3>
                </div>
                <p className="text-white">Optimizing pricing strategies and commercial agreements to improve profitability.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Briefcase size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Business Development</h3>
                </div>
                <p className="text-white">Identifying and pursuing new business opportunities, partnerships, and market expansion.</p>
              </div>
            </div>
          </section>

          <section id="expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Interim CCO Expertise</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our interim CCOs bring extensive experience across various commercial domains:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Sales Strategy and Execution</li>
              <li className="text-lg text-gray-700">Channel Management and Partnerships</li>
              <li className="text-lg text-gray-700">Customer Relationship Management (CRM)</li>
              <li className="text-lg text-gray-700">Market Analysis and Competitive Intelligence</li>
              <li className="text-lg text-gray-700">Sales Performance Management and Incentives</li>
              <li className="text-lg text-gray-700">Commercial Operations and Process Optimization</li>
              <li className="text-lg text-gray-700">Digital Sales Transformation</li>
              <li className="text-lg text-gray-700">Go-to-Market Strategy for New Products/Services</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We match our interim CCOs to your specific industry, commercial maturity, and organizational goals to ensure the best fit and maximum impact.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Interim CCO Engagement Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Commercial Performance Audit: Evaluating your organizations current commercial capabilities and performance</li>
              <li className="text-lg text-gray-700">Objective Setting: Defining clear revenue growth targets and commercial KPIs</li>
              <li className="text-lg text-gray-700">Strategy Development: Crafting a comprehensive commercial strategy and roadmap</li>
              <li className="text-lg text-gray-700">Sales Process Optimization: Streamlining and enhancing sales methodologies and workflows</li>
              <li className="text-lg text-gray-700">Team Capability Assessment: Evaluating and developing commercial skills within your organization</li>
              <li className="text-lg text-gray-700">Market Opportunity Analysis: Identifying new markets, segments, or product opportunities</li>
              <li className="text-lg text-gray-700">Customer Segmentation: Refining target customer profiles and value propositions</li>
              <li className="text-lg text-gray-700">Channel Strategy: Optimizing distribution channels and partner ecosystems</li>
              <li className="text-lg text-gray-700">Performance Monitoring: Tracking commercial KPIs and adjusting strategies as needed</li>
              <li className="text-lg text-gray-700">Knowledge Transfer: Ensuring commercial capabilities are embedded in the organization</li>
            </ol>
          </section>

          <section id="tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Commercial Tools and Frameworks We Utilize</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our interim CCOs leverage cutting-edge tools and frameworks to drive commercial excellence:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <BarChart2 size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Advanced Sales Analytics Platforms for data-driven decision making</p>
              </div>
              <div className="flex items-center">
                <Globe size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Market Intelligence Tools for competitive analysis and opportunity identification</p>
              </div>
              <div className="flex items-center">
                <Handshake size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Customer Relationship Management (CRM) systems for enhanced customer engagement</p>
              </div>
              <div className="flex items-center">
                <ShoppingCart size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Sales Enablement Platforms for improved sales productivity and effectiveness</p>
              </div>
            </div>
          </section>

          <section id="benefits">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Benefits of Our Interim CCO Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Accelerated Revenue Growth</h3>
                <p className="text-gray-700">Rapidly increase sales and market share with experienced commercial leadership.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Sales Transformation</h3>
                <p className="text-gray-700">Modernize sales processes and adopt best practices for sustained performance.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Market Expansion</h3>
                <p className="text-gray-700">Identify and capitalize on new market opportunities and customer segments.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Commercial Capability Building</h3>
                <p className="text-gray-700">Develop lasting commercial competencies within your organization for long-term success.</p>
              </div>
            </div>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Commercial Growth?</h2>
              <p className="text-xl mb-6">Lets discuss how our interim CCO services can drive your organizations revenue and market success.</p>
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

export default InterimCCOPage;