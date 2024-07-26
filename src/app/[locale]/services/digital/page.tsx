import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { Lightbulb, Database, Compass, BarChart2, PieChart, GitBranch, Globe, Cpu, ShoppingCart } from 'lucide-react';

const DigitalStrategyPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Digital Strategy Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Expert Digital Strategy Services for Business Growth and Digital Transformation" />
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Digital Strategy Services</h1>
            <p className="text-lg text-gray-700">
              At Alpha Digital Group, we specialize in developing comprehensive digital strategies that drive business growth and digital transformation. Our expert team leverages cutting-edge technologies and industry-leading methodologies to create powerful, data-driven strategies that position your business for success in the digital landscape.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Digital Strategy Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Lightbulb size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Digital Transformation Consulting</h3>
                </div>
                <p className="text-white">We guide businesses through the process of adopting digital technologies to improve operations and customer experiences.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Cpu size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">AI Strategy</h3>
                </div>
                <p className="text-white">We develop comprehensive AI strategies to leverage artificial intelligence and machine learning for business growth and innovation.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Compass size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Customer Experience Strategy</h3>
                </div>
                <p className="text-white">We design strategies to optimize your digital touchpoints and create seamless, engaging customer journeys.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Database size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Data Strategy</h3>
                </div>
                <p className="text-white">We help businesses harness the power of data through comprehensive data management, analytics, and governance strategies.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <ShoppingCart size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Digital Product & E-commerce Strategy</h3>
                </div>
                <p className="text-white">We help conceptualize, plan, and roadmap digital products and e-commerce solutions that align with your business objectives and user needs.</p>
              </div>
            </div>
          </section>

          <section id="digital-strategy-expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Digital Strategy Expertise</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Alpha Digital Group, we pride ourselves on our extensive expertise in various aspects of digital strategy. Our proficiency includes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Market Research and Competitive Analysis</li>
              <li className="text-lg text-gray-700">AI and Machine Learning Integration</li>
              <li className="text-lg text-gray-700">Data Analytics and Business Intelligence</li>
              <li className="text-lg text-gray-700">E-commerce Optimization and Growth Strategies</li>
              <li className="text-lg text-gray-700">Technology Stack Assessment and Recommendations</li>
              <li className="text-lg text-gray-700">Digital Workforce Planning and Change Management</li>
              <li className="text-lg text-gray-700">Digital Risk Management and Cybersecurity Strategy</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We specialize in developing custom digital strategies tailored to every industry, ensuring that our solutions perfectly align with your specific business context and digital transformation objectives.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Power of Effective Digital Strategy</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in digital strategy provides immense value to businesses seeking to thrive in the digital age. Heres why it matters:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Competitive Advantage:</span> Stay ahead in the digital marketplace with innovative strategies and technologies.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">AI-Driven Innovation:</span> Leverage artificial intelligence to create new business models and enhance decision-making.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Data-Centric Operations:</span> Transform your business into a data-driven organization for better insights and performance.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">E-commerce Excellence:</span> Optimize your online sales channels and create seamless shopping experiences.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Agility and Adaptability:</span> Develop the capability to quickly respond to market changes and new opportunities.
              </li>
            </ul>
          </section>

          <section id="tech-stack">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Digital Strategy Technology Stack</h2>
            <p className="text-lg text-gray-700 mb-4">
              We leverage cutting-edge technologies to deliver exceptional digital strategy results:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <BarChart2 size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Advanced analytics platforms for data-driven insights</p>
              </div>
              <div className="flex items-center">
                <PieChart size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">AI and machine learning tools for predictive modeling and automation</p>
              </div>
              <div className="flex items-center">
                <GitBranch size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Cloud-based infrastructures for scalability and flexibility</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in these modern technologies allows us to create comprehensive digital strategies that drive real results and maximize your business potential in the digital realm.
            </p>
          </section>

          <section id="digital-strategy-tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Digital Strategy Tools We Use</h2>
            <p className="text-lg text-gray-700 mb-4">
              We utilize a range of sophisticated tools to develop and implement effective digital strategies:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Google Analytics for web analytics and user behavior insights</li>
              <li className="text-lg text-gray-700">Tableau for data visualization and business intelligence</li>
              <li className="text-lg text-gray-700">Salesforce for customer relationship management and marketing automation</li>
              <li className="text-lg text-gray-700">TensorFlow and PyTorch for AI and machine learning model development</li>
              <li className="text-lg text-gray-700">Jira for project management and strategy execution tracking</li>
              <li className="text-lg text-gray-700">Miro for collaborative strategy mapping and ideation</li>
            </ul>
            <p className="text-lg text-gray-700">
              Our proficiency with these tools enables us to create data-driven digital strategies that optimize your digital presence and drive sustainable growth in the ever-evolving digital landscape.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Digital Strategy Development Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Discovery and Assessment: Understanding your business goals, current digital capabilities, and market position</li>
              <li className="text-lg text-gray-700">Market and Competitor Analysis: Identifying opportunities and threats in the digital landscape</li>
              <li className="text-lg text-gray-700">Strategy Formulation: Developing a comprehensive digital strategy aligned with your business objectives</li>
              <li className="text-lg text-gray-700">Technology Stack Planning: Recommending and integrating the right digital tools and platforms</li>
              <li className="text-lg text-gray-700">Implementation Roadmap: Creating a detailed plan for executing the digital strategy</li>
              <li className="text-lg text-gray-700">Change Management: Preparing your organization for digital transformation</li>
              <li className="text-lg text-gray-700">Execution and Integration: Implementing the strategy across your digital channels and operations</li>
              <li className="text-lg text-gray-700">Performance Monitoring: Tracking KPIs and measuring the impact of the digital strategy</li>
              <li className="text-lg text-gray-700">Continuous Optimization: Refining the strategy based on performance data and emerging trends</li>
            </ol>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
              <p className="text-xl mb-6">Lets create a powerful digital strategy that drives growth and positions your business for success in the digital age.</p>
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

export default DigitalStrategyPage;