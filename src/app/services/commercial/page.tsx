import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { BarChart2, Target, DollarSign, Briefcase, TrendingUp, Shuffle, PieChart, GitBranch } from 'lucide-react';

const CommercialStrategyServicesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Commercial Strategy Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Expert Commercial Strategy Services for Business Model Optimization and Revenue Growth" />
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Commercial Strategy Services</h1>
            <p className="text-lg text-gray-700">
              At Alpha Digital Group, we specialize in developing and optimizing commercial strategies that drive business growth, enhance profitability, and create sustainable competitive advantages. Our expert team leverages data-driven insights and industry-leading methodologies to craft tailored strategies that align with your business objectives and market dynamics.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Commercial Strategy Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Briefcase size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Business Model Optimization</h3>
                </div>
                <p className="text-white">We analyze and refine your business model to enhance efficiency, scalability, and profitability.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <TrendingUp size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Growth Strategy Development</h3>
                </div>
                <p className="text-white">We create comprehensive growth strategies tailored to your industry, market position, and business goals.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <DollarSign size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Revenue Stream Diversification</h3>
                </div>
                <p className="text-white">We identify and develop new revenue streams to reduce risk and maximize your business potential.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Target size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Market Entry Strategy</h3>
                </div>
                <p className="text-white">We develop strategies for entering new markets or launching new products, minimizing risks and maximizing opportunities.</p>
              </div>
            </div>
          </section>

          <section id="strategy-expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Commercial Strategy Expertise</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Alpha Digital Group, we pride ourselves on our extensive expertise in various aspects of commercial strategy. Our proficiency includes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Strategic Planning and Execution</li>
              <li className="text-lg text-gray-700">Market Analysis and Competitive Intelligence</li>
              <li className="text-lg text-gray-700">Financial Modeling and Forecasting</li>
              <li className="text-lg text-gray-700">Pricing Strategy Optimization</li>
              <li className="text-lg text-gray-700">Customer Segmentation and Targeting</li>
              <li className="text-lg text-gray-700">Digital Transformation Strategies</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We specialize in developing custom commercial strategies tailored to every industry, ensuring that our recommendations perfectly align with your specific business context and objectives.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Power of Effective Commercial Strategy</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in commercial strategy provides immense value to companies seeking to optimize their business performance and drive sustainable growth. Heres why it matters:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Competitive Advantage:</span> Develop unique value propositions that set you apart in the market.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Revenue Growth:</span> Identify and capitalize on new revenue opportunities and optimize existing streams.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Operational Efficiency:</span> Streamline business processes and reduce costs without sacrificing quality.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Risk Mitigation:</span> Develop strategies to navigate market uncertainties and minimize business risks.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Scalability:</span> Create a foundation for sustainable growth and expansion.
              </li>
            </ul>
          </section>

          <section id="tech-stack">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Commercial Strategy Technology Stack</h2>
            <p className="text-lg text-gray-700 mb-4">
              We leverage cutting-edge technologies to deliver exceptional commercial strategy results:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <BarChart2 size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Advanced data analytics platforms for market and competitor analysis</p>
              </div>
              <div className="flex items-center">
                <PieChart size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Financial modeling software for accurate forecasting and scenario planning</p>
              </div>
              <div className="flex items-center">
                <GitBranch size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Strategy visualization tools for clear communication and execution tracking</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in these modern technologies allows us to create comprehensive commercial strategies that drive real results and maximize your business potential.
            </p>
          </section>

          <section id="strategy-tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Commercial Strategy Tools We Use</h2>
            <p className="text-lg text-gray-700 mb-4">
              We utilize a range of sophisticated tools to develop and implement effective commercial strategies:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Tableau for data visualization and business intelligence</li>
              <li className="text-lg text-gray-700">PESTLE analysis framework for macro-environmental analysis</li>
              <li className="text-lg text-gray-700">Porters Five Forces model for industry analysis</li>
              <li className="text-lg text-gray-700">Ansoff Matrix for growth strategy development</li>
              <li className="text-lg text-gray-700">Balanced Scorecard for performance measurement and management</li>
              <li className="text-lg text-gray-700">Monte Carlo simulation for risk analysis and decision-making</li>
            </ul>
            <p className="text-lg text-gray-700">
              Our proficiency with these tools enables us to create data-driven commercial strategies that optimize your business model and drive sustainable growth.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Commercial Strategy Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Business Assessment: Conducting a comprehensive analysis of your current business model and performance</li>
              <li className="text-lg text-gray-700">Market Analysis: Evaluating industry trends, competitive landscape, and market opportunities</li>
              <li className="text-lg text-gray-700">Goal Setting: Defining clear, measurable objectives for your commercial strategy</li>
              <li className="text-lg text-gray-700">Strategy Development: Crafting a tailored commercial strategy aligned with your goals and market realities</li>
              <li className="text-lg text-gray-700">Financial Modeling: Developing detailed financial projections and scenario analyses</li>
              <li className="text-lg text-gray-700">Implementation Planning: Creating a roadmap for executing the strategy across your organization</li>
              <li className="text-lg text-gray-700">Risk Assessment: Identifying potential risks and developing mitigation strategies</li>
              <li className="text-lg text-gray-700">Performance Metrics: Establishing KPIs and monitoring systems to track strategy effectiveness</li>
              <li className="text-lg text-gray-700">Continuous Optimization: Regularly reviewing and refining the strategy based on performance and market changes</li>
            </ol>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Commercial Strategy?</h2>
              <p className="text-xl mb-6">Lets create a tailored strategy that drives sustainable growth and maximizes your business potential.</p>
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

export default CommercialStrategyServicesPage;