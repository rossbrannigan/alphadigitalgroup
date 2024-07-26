import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { Laptop, Zap, Users, BarChart2, Cloud, Smartphone, Lock, RefreshCw } from 'lucide-react';

const DigitalTransformationServicesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Digital Transformation Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Expert Digital Transformation Services for Business Innovation and Growth" />
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Digital Transformation Services</h1>
            <p className="text-lg text-gray-700">
              At Alpha Digital Group, we specialize in guiding businesses through comprehensive digital transformation journeys. Our expert team leverages cutting-edge technologies and industry-leading methodologies to create powerful, tailored digital solutions that revolutionize operations, enhance customer experiences, and drive sustainable growth in the digital age.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Digital Transformation Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Laptop size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Digital Strategy Development</h3>
                </div>
                <p className="text-white">We create comprehensive digital strategies aligned with your business goals and market demands.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Zap size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Process Digitization</h3>
                </div>
                <p className="text-white">We streamline and automate your business processes using digital technologies for improved efficiency.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Users size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Digital Culture & Workforce</h3>
                </div>
                <p className="text-white">We help cultivate a digital-first culture and upskill your workforce for the digital era.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <BarChart2 size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Digital Analytics & Insights</h3>
                </div>
                <p className="text-white">We implement advanced analytics solutions to drive data-informed decision-making across your organization.</p>
              </div>
            </div>
          </section>

          <section id="digital-expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Digital Transformation Expertise</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Alpha Digital Group, we pride ourselves on our extensive expertise in various aspects of digital transformation. Our proficiency includes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Cloud Computing and Infrastructure Modernization</li>
              <li className="text-lg text-gray-700">Artificial Intelligence and Machine Learning Integration</li>
              <li className="text-lg text-gray-700">Internet of Things (IoT) and Connected Devices</li>
              <li className="text-lg text-gray-700">Cybersecurity and Digital Risk Management</li>
              <li className="text-lg text-gray-700">Customer Experience (CX) Transformation</li>
              <li className="text-lg text-gray-700">Agile and DevOps Methodologies</li>
              <li className="text-lg text-gray-700"><a href="/services/digital/transformation/blockchain-integration">Blockchain Integration</a></li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We specialize in developing custom digital transformation strategies tailored to every industry, ensuring that our solutions perfectly align with your specific business context and innovation objectives.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Power of Effective Digital Transformation</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in digital transformation provides immense value to businesses seeking to thrive in the digital age. Heres why it matters:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Enhanced Competitiveness:</span> Stay ahead in your industry by leveraging cutting-edge digital technologies.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Operational Excellence:</span> Streamline processes, reduce costs, and increase productivity through digitization.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Customer-Centricity:</span> Deliver exceptional, personalized customer experiences across all digital touchpoints.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Data-Driven Decision Making:</span> Harness the power of data analytics for informed strategic choices.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Innovation and Agility:</span> Foster a culture of innovation and quickly adapt to changing market conditions.
              </li>
            </ul>
          </section>

          <section id="tech-stack">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Digital Transformation Technology Stack</h2>
            <p className="text-lg text-gray-700 mb-4">
              We leverage cutting-edge technologies to drive successful digital transformations:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Cloud size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Cloud platforms like AWS, Google Cloud, and Microsoft Azure</p>
              </div>
              <div className="flex items-center">
                <Smartphone size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Mobile and web application development frameworks</p>
              </div>
              <div className="flex items-center">
                <Lock size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Advanced cybersecurity and data protection solutions</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in these modern technologies allows us to create comprehensive digital transformation strategies that drive real results and maximize your business potential in the digital landscape.
            </p>
          </section>

          <section id="digital-tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Digital Transformation Tools We Use</h2>
            <p className="text-lg text-gray-700 mb-4">
              We utilize a range of sophisticated tools to develop and implement effective digital transformation strategies:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Salesforce for customer relationship management (CRM)</li>
              <li className="text-lg text-gray-700">SAP S/4HANA for enterprise resource planning (ERP)</li>
              <li className="text-lg text-gray-700">Tableau and Power BI for data visualization and business intelligence</li>
              <li className="text-lg text-gray-700">Jira and Trello for project management and agile workflows</li>
              <li className="text-lg text-gray-700">ServiceNow for IT service management and digital workflows</li>
              <li className="text-lg text-gray-700">Miro and Mural for digital collaboration and ideation</li>
            </ul>
            <p className="text-lg text-gray-700">
              Our proficiency with these tools enables us to create comprehensive digital transformation strategies that optimize your business processes and drive sustainable growth in the digital age.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Digital Transformation Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Digital Maturity Assessment: Evaluating your current digital capabilities and identifying gaps</li>
              <li className="text-lg text-gray-700">Strategy Development: Creating a comprehensive digital transformation roadmap</li>
              <li className="text-lg text-gray-700">Technology Selection: Choosing the right digital tools and platforms for your needs</li>
              <li className="text-lg text-gray-700">Process Reengineering: Redesigning business processes for the digital age</li>
              <li className="text-lg text-gray-700">Implementation: Deploying new technologies and digital solutions</li>
              <li className="text-lg text-gray-700">Change Management: Guiding your organization through the transformation</li>
              <li className="text-lg text-gray-700">Training and Adoption: Empowering your team with digital skills and knowledge</li>
              <li className="text-lg text-gray-700">Measurement and Optimization: Continuously improving based on data and feedback</li>
              <li className="text-lg text-gray-700">Innovation Management: Fostering a culture of ongoing digital innovation</li>
              <li className="text-lg text-gray-700">Scaling and Evolution: Expanding successful initiatives across the organization</li>
            </ol>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business for the Digital Age?</h2>
              <p className="text-xl mb-6">Lets create a powerful digital transformation strategy that drives innovation and accelerates your growth.</p>
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

export default DigitalTransformationServicesPage;