import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { Globe, Target, DollarSign, BarChart2, Languages, Settings, PieChart, GitBranch } from 'lucide-react';

const InternationalizationServicesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Internationalization Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Expert Internationalization Services for Global Business Expansion and Localization" />
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Internationalization Services</h1>
            <p className="text-lg text-gray-700">
              At Alpha Digital Group, we specialize in comprehensive internationalization services that empower businesses to expand globally. Our expert team leverages cutting-edge technologies and industry-leading methodologies to help you navigate the complexities of international markets, ensuring your products and services resonate with diverse audiences worldwide.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Internationalization Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Globe size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Global Market Analysis</h3>
                </div>
                <p className="text-white">We conduct in-depth research to identify optimal markets for your international expansion.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Languages size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Localization Strategy</h3>
                </div>
                <p className="text-white">We develop comprehensive localization plans to adapt your products and services to specific markets.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Settings size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Technical Internationalization</h3>
                </div>
                <p className="text-white">We ensure your software and digital platforms are ready for multi-language and multi-cultural support.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Target size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">International Marketing Strategy</h3>
                </div>
                <p className="text-white">We craft tailored marketing strategies that resonate with your target international audiences.</p>
              </div>
            </div>
          </section>

          <section id="internationalization-expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Internationalization Expertise</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Alpha Digital Group, we pride ourselves on our extensive expertise in various aspects of internationalization. Our proficiency includes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Cultural Adaptation and Localization</li>
              <li className="text-lg text-gray-700">International Market Research and Analysis</li>
              <li className="text-lg text-gray-700">Global Business Strategy Development</li>
              <li className="text-lg text-gray-700">Cross-cultural Communication</li>
              <li className="text-lg text-gray-700">International Legal and Regulatory Compliance</li>
              <li className="text-lg text-gray-700">Global Supply Chain Management</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We specialize in developing custom internationalization strategies tailored to every industry, ensuring that our recommendations perfectly align with your specific business context and global objectives.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Importance of Effective Internationalization</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in internationalization provides immense value to companies seeking to expand their global footprint. Heres why it matters:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Market Expansion:</span> Access new customer bases and revenue streams in international markets.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Competitive Advantage:</span> Gain an edge over competitors by effectively adapting to local markets.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Brand Consistency:</span> Maintain your brand identity while adapting to local cultural nuances.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Risk Mitigation:</span> Navigate international regulations and cultural sensitivities to avoid costly mistakes.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Scalability:</span> Build a foundation for efficient and effective global growth.
              </li>
            </ul>
          </section>

          <section id="tech-stack">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Internationalization Technology Stack</h2>
            <p className="text-lg text-gray-700 mb-4">
              We leverage cutting-edge technologies to deliver exceptional internationalization results:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <BarChart2 size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Advanced market research platforms for global consumer insights</p>
              </div>
              <div className="flex items-center">
                <PieChart size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">AI-powered localization tools for efficient content adaptation</p>
              </div>
              <div className="flex items-center">
                <GitBranch size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Internationalization-ready development frameworks and CMS platforms</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in these modern technologies allows us to create comprehensive internationalization strategies that drive real results and maximize your global business potential.
            </p>
          </section>

          <section id="internationalization-tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Internationalization Tools We Use</h2>
            <p className="text-lg text-gray-700 mb-4">
              We utilize a range of sophisticated tools to develop and implement effective internationalization strategies:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Smartling for automated translation management</li>
              <li className="text-lg text-gray-700">PESTLE analysis framework for international market assessment</li>
              <li className="text-lg text-gray-700">Hofstedes Cultural Dimensions for cross-cultural understanding</li>
              <li className="text-lg text-gray-700">i18n-js for JavaScript internationalization</li>
              <li className="text-lg text-gray-700">Transifex for collaborative localization workflows</li>
              <li className="text-lg text-gray-700">Googles CLDR (Common Locale Data Repository) for comprehensive locale data</li>
            </ul>
            <p className="text-lg text-gray-700">
              Our proficiency with these tools enables us to create data-driven internationalization strategies that optimize your global presence and drive sustainable growth across diverse markets.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Internationalization Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Global Readiness Assessment: Evaluating your current capabilities for international expansion</li>
              <li className="text-lg text-gray-700">Market Research: Identifying and analyzing potential international markets</li>
              <li className="text-lg text-gray-700">Strategy Development: Crafting a tailored internationalization strategy aligned with your global objectives</li>
              <li className="text-lg text-gray-700">Localization Planning: Developing a comprehensive plan for adapting your products and services</li>
              <li className="text-lg text-gray-700">Technical Implementation: Ensuring your digital infrastructure supports internationalization</li>
              <li className="text-lg text-gray-700">Cultural Training: Preparing your team for cross-cultural business interactions</li>
              <li className="text-lg text-gray-700">Launch and Market Entry: Supporting your entry into new international markets</li>
              <li className="text-lg text-gray-700">Performance Monitoring: Tracking KPIs and adjusting strategies for optimal results</li>
              <li className="text-lg text-gray-700">Continuous Optimization: Regularly refining your international presence based on market feedback and performance data</li>
            </ol>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Go Global?</h2>
              <p className="text-xl mb-6">Lets create a tailored internationalization strategy that drives sustainable growth across diverse markets.</p>
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

export default InternationalizationServicesPage;