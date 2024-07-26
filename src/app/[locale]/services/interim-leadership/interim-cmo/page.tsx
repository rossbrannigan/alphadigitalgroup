import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { Megaphone, Target, TrendingUp, Users, Zap, BarChart2, PenTool, Smartphone } from 'lucide-react';

const InterimCMOPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Interim Chief Marketing Officer (CMO) Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Expert Interim Chief Marketing Officer (CMO) Services for Marketing Transformation" />
      </Head>

      {/* Google Analytics and Tag Manager Scripts */}
      <GoogleAnalytics gaId="G-25Y0G3QQE6" />
      <GoogleTagManager gtmId="G-25Y0G3QQE6" />

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 mt-16">
        <div className="space-y-12">
          <section id="intro">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Interim Chief Marketing Officer (CMO) Services</h1>
            <p className="text-lg text-gray-700">
              Alpha Digital Group provides experienced Interim Chief Marketing Officers (CMOs) to help organizations transform their marketing strategies, drive brand growth, and leverage cutting-edge marketing technologies. Our seasoned CMOs bring extensive expertise in digital marketing, brand management, and customer engagement to ensure your business thrives in todays competitive landscape.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Interim CMO Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Megaphone size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Marketing Strategy Development</h3>
                </div>
                <p className="text-white">Crafting comprehensive marketing strategies aligned with business objectives.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Target size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Brand Positioning and Management</h3>
                </div>
                <p className="text-white">Developing and implementing strategies to enhance brand value and market position.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <TrendingUp size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Digital Marketing Transformation</h3>
                </div>
                <p className="text-white">Guiding organizations through the adoption of modern digital marketing practices.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Users size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Customer Experience Optimization</h3>
                </div>
                <p className="text-white">Enhancing customer journeys and touchpoints to drive engagement and loyalty.</p>
              </div>
            </div>
          </section>

          <section id="expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Interim CMO Expertise</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our interim CMOs bring extensive experience across various marketing domains:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Digital Marketing and Multi-Channel Strategies</li>
              <li className="text-lg text-gray-700">Brand Development and Management</li>
              <li className="text-lg text-gray-700">Marketing Analytics and Performance Measurement</li>
              <li className="text-lg text-gray-700">Content Marketing and Thought Leadership</li>
              <li className="text-lg text-gray-700">Customer Segmentation and Personalization</li>
              <li className="text-lg text-gray-700">Marketing Technology Stack Optimization</li>
              <li className="text-lg text-gray-700">Agile Marketing Methodologies</li>
              <li className="text-lg text-gray-700">Product Marketing and Go-to-Market Strategies</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We match our interim CMOs to your specific industry, marketing maturity, and organizational goals to ensure the best fit and maximum impact.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Interim CMO Engagement Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Marketing Audit: Evaluating your organizations current marketing capabilities and performance</li>
              <li className="text-lg text-gray-700">Objective Setting: Defining clear marketing goals and KPIs aligned with business objectives</li>
              <li className="text-lg text-gray-700">Strategy Development: Crafting a comprehensive marketing strategy and roadmap</li>
              <li className="text-lg text-gray-700">Marketing Technology Assessment: Evaluating and optimizing your marketing tech stack</li>
              <li className="text-lg text-gray-700">Team Capability Assessment: Evaluating and developing marketing skills within your organization</li>
              <li className="text-lg text-gray-700">Campaign Planning: Developing integrated marketing campaigns across channels</li>
              <li className="text-lg text-gray-700">Brand Management: Enhancing brand positioning and consistency</li>
              <li className="text-lg text-gray-700">Customer Experience Mapping: Optimizing customer journeys and touchpoints</li>
              <li className="text-lg text-gray-700">Performance Monitoring: Tracking marketing KPIs and adjusting strategies as needed</li>
              <li className="text-lg text-gray-700">Knowledge Transfer: Ensuring marketing capabilities are embedded in the organization</li>
            </ol>
          </section>

          <section id="tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Marketing Tools and Frameworks We Utilize</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our interim CMOs leverage cutting-edge tools and frameworks to drive marketing excellence:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <BarChart2 size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Advanced Analytics Platforms for data-driven decision making</p>
              </div>
              <div className="flex items-center">
                <PenTool size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Content Management Systems for efficient content creation and distribution</p>
              </div>
              <div className="flex items-center">
                <Smartphone size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Marketing Automation Tools for personalized customer engagement</p>
              </div>
              <div className="flex items-center">
                <Zap size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Agile Marketing Frameworks for rapid campaign development and optimization</p>
              </div>
            </div>
          </section>

          <section id="benefits">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Benefits of Our Interim CMO Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Accelerated Marketing Transformation</h3>
                <p className="text-gray-700">Rapidly advance your marketing initiatives with experienced leadership and proven strategies.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Brand Growth Catalyst</h3>
                <p className="text-gray-700">Inject fresh perspectives and cutting-edge marketing practices to drive brand value.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">ROI Optimization</h3>
                <p className="text-gray-700">Improve marketing efficiency and effectiveness to maximize return on investment.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Marketing Capability Building</h3>
                <p className="text-gray-700">Develop lasting marketing competencies within your organization for long-term success.</p>
              </div>
            </div>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Marketing Strategy?</h2>
              <p className="text-xl mb-6">Lets discuss how our interim CMO services can drive your organizations marketing success.</p>
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

export default InterimCMOPage;