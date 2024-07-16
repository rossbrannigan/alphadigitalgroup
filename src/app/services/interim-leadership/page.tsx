import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { Users, Briefcase, TrendingUp, Zap, Shield, BarChart2 } from 'lucide-react';

const InterimLeadershipPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Interim Leadership Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Expert Interim Leadership and Executive Services" />
      </Head>

      {/* Google Analytics and Tag Manager Scripts */}
      <GoogleAnalytics gaId="G-25Y0G3QQE6" />
      <GoogleTagManager gtmId="G-25Y0G3QQE6" />

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 mt-16">
        <div className="space-y-12">
          <section id="intro">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Interim Leadership Services</h1>
            <p className="text-lg text-gray-700">
              Alpha Digital Group provides expert interim leadership solutions to help organizations navigate transitions, drive change, and achieve strategic objectives. Our seasoned executives bring extensive experience and fresh perspectives to ensure your business maintains momentum and achieves its goals during critical periods.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Interim Leadership Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Users size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Executive Leadership</h3>
                </div>
                <p className="text-white">Experienced C-suite executives to guide your organization through transitions or growth periods.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Briefcase size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Project Management</h3>
                </div>
                <p className="text-white">Skilled project leaders to drive critical initiatives and transformations.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <TrendingUp size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Change Management</h3>
                </div>
                <p className="text-white">Expert leaders to guide your organization through significant changes and transformations.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Zap size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Crisis Management</h3>
                </div>
                <p className="text-white">Experienced leaders to navigate your organization through challenging situations and crises.</p>
              </div>
            </div>
          </section>

          <section id="expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Interim Leadership Expertise</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our interim leaders bring extensive experience across various industries and leadership roles:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Technology and Digital Transformation</li>
              <li className="text-lg text-gray-700">Finance and Operations</li>
              <li className="text-lg text-gray-700">Marketing and Sales</li>
              <li className="text-lg text-gray-700">Human Resources and Talent Management</li>
              <li className="text-lg text-gray-700">Supply Chain and Logistics</li>
              <li className="text-lg text-gray-700">Mergers and Acquisitions</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We match our interim leaders to your specific industry, challenges, and organizational culture to ensure the best fit and maximum impact.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Interim Leadership Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Needs Assessment: Understanding your organizations specific leadership requirements</li>
              <li className="text-lg text-gray-700">Leader Selection: Identifying and presenting the most suitable interim leaders</li>
              <li className="text-lg text-gray-700">Onboarding: Rapid integration of the interim leader into your organization</li>
              <li className="text-lg text-gray-700">Objective Setting: Defining clear goals and KPIs for the interim engagement</li>
              <li className="text-lg text-gray-700">Strategy Development: Crafting action plans to address immediate challenges and long-term objectives</li>
              <li className="text-lg text-gray-700">Execution: Implementing strategies and driving results</li>
              <li className="text-lg text-gray-700">Knowledge Transfer: Ensuring key insights and processes are shared with the permanent team</li>
              <li className="text-lg text-gray-700">Transition Support: Facilitating a smooth handover to permanent leadership when appropriate</li>
              <li className="text-lg text-gray-700">Post-Engagement Review: Evaluating the impact and identifying future opportunities</li>
            </ol>
          </section>

          <section id="tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Leadership Tools We Utilize</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our interim leaders leverage advanced tools and methodologies to drive results:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <BarChart2 size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Balanced Scorecard for performance management</p>
              </div>
              <div className="flex items-center">
                <Users size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">360-degree feedback for leadership development</p>
              </div>
              <div className="flex items-center">
                <TrendingUp size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Agile methodologies for project management and organizational change</p>
              </div>
              <div className="flex items-center">
                <Shield size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Risk management frameworks for strategic decision-making</p>
              </div>
            </div>
          </section>

          <section id="benefits">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Benefits of Our Interim Leadership Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Immediate Expertise</h3>
                <p className="text-gray-700">Access seasoned leadership quickly to address pressing challenges and opportunities.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Objective Perspective</h3>
                <p className="text-gray-700">Gain fresh insights and unbiased recommendations to drive organizational improvement.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Flexibility and Cost-Effectiveness</h3>
                <p className="text-gray-700">Engage high-caliber leadership without long-term commitments or extensive search processes.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Knowledge Transfer</h3>
                <p className="text-gray-700">Benefit from the transfer of best practices and industry insights to your permanent team.</p>
              </div>
            </div>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Need Expert Leadership Now?</h2>
              <p className="text-xl mb-6">Lets discuss how our interim leadership services can drive your organization forward.</p>
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

export default InterimLeadershipPage;