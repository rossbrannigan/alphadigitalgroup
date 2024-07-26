import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { Cloud, Database, TrendingUp, Zap, Shield, BarChart2, Code, Smartphone } from 'lucide-react';

const InterimCDOPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Interim Chief Digital Officer (CDO) Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Expert Interim Chief Digital Officer (CDO) Services for Digital Transformation" />
      </Head>

      {/* Google Analytics and Tag Manager Scripts */}
      <GoogleAnalytics gaId="G-25Y0G3QQE6" />
      <GoogleTagManager gtmId="G-25Y0G3QQE6" />

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 mt-16">
        <div className="space-y-12">
          <section id="intro">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Interim Chief Digital Officer (CDO) Services</h1>
            <p className="text-lg text-gray-700">
              Alpha Digital Group provides experienced Interim Chief Digital Officers (CDOs) to help organizations navigate digital transformation, drive innovation, and leverage technology for strategic advantage. Our seasoned CDOs bring extensive expertise in digital strategy, technology implementation, and change management to ensure your business thrives in the digital age.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Interim CDO Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Cloud size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Digital Strategy Development</h3>
                </div>
                <p className="text-white">Crafting comprehensive digital strategies aligned with business objectives.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Database size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Technology Infrastructure Optimization</h3>
                </div>
                <p className="text-white">Assessing and improving IT infrastructure to support digital initiatives.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <TrendingUp size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Digital Transformation Leadership</h3>
                </div>
                <p className="text-white">Guiding organizations through complex digital transformation journeys.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Zap size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Innovation Management</h3>
                </div>
                <p className="text-white">Fostering a culture of innovation and implementing digital innovation programs.</p>
              </div>
            </div>
          </section>

          <section id="expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Interim CDO Expertise</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our interim CDOs bring extensive experience across various digital domains:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Digital Strategy and Roadmap Development</li>
              <li className="text-lg text-gray-700">Data Analytics and Business Intelligence</li>
              <li className="text-lg text-gray-700">Cloud Computing and Infrastructure</li>
              <li className="text-lg text-gray-700">Artificial Intelligence and Machine Learning</li>
              <li className="text-lg text-gray-700">Cybersecurity and Data Privacy</li>
              <li className="text-lg text-gray-700">Customer Experience and Digital Marketing</li>
              <li className="text-lg text-gray-700">Agile and DevOps Methodologies</li>
              <li className="text-lg text-gray-700">Digital Product Development</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We match our interim CDOs to your specific industry, digital maturity, and organizational goals to ensure the best fit and maximum impact.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Interim CDO Engagement Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Digital Maturity Assessment: Evaluating your organizations current digital capabilities</li>
              <li className="text-lg text-gray-700">Objective Setting: Defining clear digital transformation goals and KPIs</li>
              <li className="text-lg text-gray-700">Strategy Development: Crafting a comprehensive digital strategy and roadmap</li>
              <li className="text-lg text-gray-700">Technology Stack Evaluation: Assessing and optimizing your technology infrastructure</li>
              <li className="text-lg text-gray-700">Digital Talent Assessment: Evaluating and developing digital skills within your organization</li>
              <li className="text-lg text-gray-700">Implementation Planning: Developing detailed plans for digital initiatives</li>
              <li className="text-lg text-gray-700">Change Management: Guiding the organization through digital transformation</li>
              <li className="text-lg text-gray-700">Innovation Program Launch: Implementing programs to foster digital innovation</li>
              <li className="text-lg text-gray-700">Performance Monitoring: Tracking digital KPIs and adjusting strategies as needed</li>
              <li className="text-lg text-gray-700">Knowledge Transfer: Ensuring digital capabilities are embedded in the organization</li>
            </ol>
          </section>

          <section id="tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Digital Tools and Frameworks We Utilize</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our interim CDOs leverage cutting-edge tools and frameworks to drive digital transformation:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <BarChart2 size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Digital Maturity Models for assessing and benchmarking digital capabilities</p>
              </div>
              <div className="flex items-center">
                <Code size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Agile and DevOps methodologies for rapid digital product development</p>
              </div>
              <div className="flex items-center">
                <Smartphone size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Design Thinking for user-centric digital innovation</p>
              </div>
              <div className="flex items-center">
                <Shield size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Cybersecurity frameworks for robust digital risk management</p>
              </div>
            </div>
          </section>

          <section id="benefits">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Benefits of Our Interim CDO Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Accelerated Digital Transformation</h3>
                <p className="text-gray-700">Rapidly advance your digital initiatives with experienced leadership and proven strategies.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation Catalyst</h3>
                <p className="text-gray-700">Inject fresh perspectives and cutting-edge digital practices into your organization.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Risk Mitigation</h3>
                <p className="text-gray-700">Navigate the complexities of digital transformation with reduced risk and expert guidance.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Digital Capability Building</h3>
                <p className="text-gray-700">Develop lasting digital competencies within your organization for long-term success.</p>
              </div>
            </div>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Digital Transformation?</h2>
              <p className="text-xl mb-6">Lets discuss how our interim CDO services can drive your organizations digital success.</p>
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

export default InterimCDOPage;