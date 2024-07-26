import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { Users, TrendingUp, Briefcase, Zap, Shield, BarChart2, Target, Compass } from 'lucide-react';

const InterimCEOPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Interim Chief Executive Officer (CEO) Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Expert Interim Chief Executive Officer (CEO) Services for Organizational Leadership and Transformation" />
      </Head>

      {/* Google Analytics and Tag Manager Scripts */}
      <GoogleAnalytics gaId="G-25Y0G3QQE6" />
      <GoogleTagManager gtmId="G-25Y0G3QQE6" />

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 mt-16">
        <div className="space-y-12">
          <section id="intro">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Interim Chief Executive Officer (CEO) Services</h1>
            <p className="text-lg text-gray-700">
              Alpha Digital Group provides experienced Interim Chief Executive Officers (CEOs) to guide organizations through critical transitions, drive strategic initiatives, and ensure operational excellence. Our seasoned CEOs bring extensive leadership experience, industry insights, and a track record of success to help your organization navigate challenges and seize opportunities.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Interim CEO Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Compass size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Strategic Leadership</h3>
                </div>
                <p className="text-white">Providing visionary leadership and strategic direction to drive organizational success.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <TrendingUp size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Organizational Transformation</h3>
                </div>
                <p className="text-white">Leading change initiatives and restructuring efforts to improve performance.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Briefcase size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Crisis Management</h3>
                </div>
                <p className="text-white">Navigating organizations through challenging situations and turnarounds.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Users size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Stakeholder Management</h3>
                </div>
                <p className="text-white">Building and maintaining relationships with key stakeholders, including board members and investors.</p>
              </div>
            </div>
          </section>

          <section id="expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Interim CEO Expertise</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our interim CEOs bring extensive experience across various leadership domains:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Corporate Strategy and Vision Setting</li>
              <li className="text-lg text-gray-700">Financial Management and Performance Optimization</li>
              <li className="text-lg text-gray-700">Mergers and Acquisitions</li>
              <li className="text-lg text-gray-700">Operational Excellence and Process Improvement</li>
              <li className="text-lg text-gray-700">Corporate Governance and Compliance</li>
              <li className="text-lg text-gray-700">Innovation and Digital Transformation</li>
              <li className="text-lg text-gray-700">Talent Development and Organizational Culture</li>
              <li className="text-lg text-gray-700">Crisis and Risk Management</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We match our interim CEOs to your specific industry, organizational challenges, and company culture to ensure the best fit and maximum impact.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Interim CEO Engagement Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Organizational Assessment: Evaluating your companys current situation and challenges</li>
              <li className="text-lg text-gray-700">Objective Setting: Defining clear goals and KPIs for the interim engagement</li>
              <li className="text-lg text-gray-700">Strategic Planning: Developing or refining corporate strategy and vision</li>
              <li className="text-lg text-gray-700">Stakeholder Alignment: Engaging with board members, executives, and key stakeholders</li>
              <li className="text-lg text-gray-700">Operational Review: Assessing and optimizing business operations and processes</li>
              <li className="text-lg text-gray-700">Financial Management: Ensuring financial stability and performance improvement</li>
              <li className="text-lg text-gray-700">Leadership Team Development: Evaluating and strengthening the executive team</li>
              <li className="text-lg text-gray-700">Change Management: Guiding the organization through necessary transformations</li>
              <li className="text-lg text-gray-700">Performance Monitoring: Tracking KPIs and adjusting strategies as needed</li>
              <li className="text-lg text-gray-700">Succession Planning: Preparing for a smooth transition to a permanent CEO</li>
            </ol>
          </section>

          <section id="tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Leadership Tools and Frameworks We Utilize</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our interim CEOs leverage proven tools and frameworks to drive organizational success:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <BarChart2 size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Balanced Scorecard for performance management and strategy execution</p>
              </div>
              <div className="flex items-center">
                <Target size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">OKRs (Objectives and Key Results) for goal setting and alignment</p>
              </div>
              <div className="flex items-center">
                <Compass size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Blue Ocean Strategy for market creation and differentiation</p>
              </div>
              <div className="flex items-center">
                <Shield size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Enterprise Risk Management (ERM) frameworks for comprehensive risk assessment</p>
              </div>
            </div>
          </section>

          <section id="benefits">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Benefits of Our Interim CEO Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Immediate Leadership Stability</h3>
                <p className="text-gray-700">Provide immediate, experienced leadership during critical transitions or vacancies.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Objective Decision-Making</h3>
                <p className="text-gray-700">Benefit from unbiased perspectives and decisions focused on organizational success.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Accelerated Transformation</h3>
                <p className="text-gray-700">Drive rapid change and improvement with experienced change management leadership.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Stakeholder Confidence</h3>
                <p className="text-gray-700">Reassure investors, board members, and employees with proven executive leadership.</p>
              </div>
            </div>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Need Experienced Executive Leadership?</h2>
              <p className="text-xl mb-6">Lets discuss how our interim CEO services can drive your organizations success and transformation.</p>
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

export default InterimCEOPage;