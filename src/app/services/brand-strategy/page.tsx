import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { Target, Users, Lightbulb, Palette, MessageCircle, BarChart2 } from 'lucide-react';

const BrandStrategyPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Brand Strategy Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Expert Brand Strategy and Development Services" />
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Brand Strategy Services</h1>
            <p className="text-lg text-gray-700">
              At Alpha Digital Group, we specialize in creating powerful brand strategies that resonate with your target audience, differentiate your business, and drive long-term growth. Our expert team crafts tailored solutions to help your brand stand out in todays competitive marketplace.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Brand Strategy Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Target size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Brand Positioning</h3>
                </div>
                <p className="text-white">We develop unique brand positions that set you apart from competitors and resonate with your target audience.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Users size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Audience Analysis</h3>
                </div>
                <p className="text-white">We conduct in-depth research to understand your target audience, their needs, and behaviors.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Lightbulb size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Brand Identity Development</h3>
                </div>
                <p className="text-white">We create comprehensive brand identities, including visual elements, tone of voice, and brand personality.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <MessageCircle size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Brand Messaging</h3>
                </div>
                <p className="text-white">We craft compelling brand messages that communicate your value proposition effectively.</p>
              </div>
            </div>
          </section>

          <section id="brand-expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Brand Strategy Expertise</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Alpha Digital Group, we pride ourselves on our extensive expertise in various brand strategy techniques and methodologies. Our proficiency includes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Brand Archetype Analysis</li>
              <li className="text-lg text-gray-700">Competitive Brand Audits</li>
              <li className="text-lg text-gray-700">Brand Equity Measurement</li>
              <li className="text-lg text-gray-700">Brand Extension Strategies</li>
              <li className="text-lg text-gray-700">Brand Portfolio Management</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We specialize in developing custom brand strategies tailored to every industry, ensuring that your brand perfectly aligns with your specific business goals and target audience.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Power of Effective Brand Strategy</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in brand strategy provides immense value to companies seeking to establish a strong market presence and foster customer loyalty. Here is why it matters:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Differentiation:</span> Stand out in a crowded marketplace and clearly communicate your unique value proposition.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Consistency:</span> Ensure a unified brand experience across all touchpoints, building trust and recognition.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Customer Loyalty:</span> Foster strong emotional connections with your audience, leading to increased customer retention.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Perceived Value:</span> A strong brand can command premium pricing and increase perceived value of your products or services.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Business Growth:</span> A well-defined brand strategy provides a solid foundation for expansion into new markets or product lines.
              </li>
            </ul>
          </section>

          <section id="tech-stack">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Brand Strategy Technology Stack</h2>
            <p className="text-lg text-gray-700 mb-4">
              We leverage cutting-edge technologies to deliver exceptional brand strategy results:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Palette size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Advanced design tools for visual identity creation</p>
              </div>
              <div className="flex items-center">
                <BarChart2 size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Data analytics platforms for audience insights and brand performance tracking</p>
              </div>
              <div className="flex items-center">
                <MessageCircle size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">AI-powered sentiment analysis tools for brand perception monitoring</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in these modern technologies allows us to create comprehensive brand strategies that drive real results and foster meaningful connections with your audience.
            </p>
          </section>

          <section id="brand-tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Brand Strategy Tools We Use</h2>
            <p className="text-lg text-gray-700 mb-4">
              We utilize a range of sophisticated tools to develop and implement effective brand strategies:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Brand24 for real-time brand monitoring and social listening</li>
              <li className="text-lg text-gray-700">Brandwatch for comprehensive brand and market insights</li>
              <li className="text-lg text-gray-700">Surveymonkey for customer and market research</li>
              <li className="text-lg text-gray-700">Adobe Creative Suite for visual identity design</li>
              <li className="text-lg text-gray-700">Hootsuite for social media management and brand consistency</li>
              <li className="text-lg text-gray-700">Google Analytics for tracking brand performance metrics</li>
            </ul>
            <p className="text-lg text-gray-700">
              Our proficiency with these tools enables us to create data-driven brand strategies that resonate with your target audience and drive business growth.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Brand Strategy Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Brand Audit: Assessing your current brand position and identifying opportunities</li>
              <li className="text-lg text-gray-700">Market Research: Analyzing your industry, competitors, and target audience</li>
              <li className="text-lg text-gray-700">Brand Positioning: Developing a unique and compelling brand position</li>
              <li className="text-lg text-gray-700">Identity Development: Creating or refining your visual and verbal brand identity</li>
              <li className="text-lg text-gray-700">Brand Messaging: Crafting key messages that communicate your brands value</li>
              <li className="text-lg text-gray-700">Implementation Strategy: Developing a plan to roll out and maintain your brand strategy</li>
              <li className="text-lg text-gray-700">Monitoring and Optimization: Continuously tracking brand performance and making data-driven adjustments</li>
            </ol>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Build a Powerful Brand?</h2>
              <p className="text-xl mb-6">Lets create a brand strategy that drives growth for your business.</p>
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

export default BrandStrategyPage;