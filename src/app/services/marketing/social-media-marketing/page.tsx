import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { Facebook, Instagram, Twitter, Linkedin, BarChart2, Target, DollarSign, Maximize2, Layers } from 'lucide-react';

const SocialMediaServicesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Social Media Marketing Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Expert Social Media Marketing and Management Services" />
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Social Media Marketing Services</h1>
            <p className="text-lg text-gray-700">
              At Alpha Digital Group, we specialize in creating powerful social media marketing strategies that engage your audience, build brand awareness, and drive conversions. Our expert team leverages data-driven insights and industry-leading techniques to craft tailored social media campaigns that align with your business objectives and target audience.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Social Media Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Layers size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Content Creation & Curation</h3>
                </div>
                <p className="text-white">We create engaging, platform-specific content that resonates with your audience and reflects your brand voice.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Target size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Community Management</h3>
                </div>
                <p className="text-white">We actively engage with your audience, respond to comments, and foster a vibrant online community around your brand.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <BarChart2 size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Social Media Advertising</h3>
                </div>
                <p className="text-white">We develop and manage targeted ad campaigns across various social platforms to reach your ideal audience and drive conversions.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <DollarSign size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Analytics & Reporting</h3>
                </div>
                <p className="text-white">We provide detailed insights into your social media performance and ROI, helping you make data-driven decisions.</p>
              </div>
            </div>
          </section>

          <section id="social-media-expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Social Media Expertise</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Alpha Digital Group, we pride ourselves on our extensive expertise across various social media platforms. Our proficiency includes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Facebook & Instagram Marketing</li>
              <li className="text-lg text-gray-700">Twitter Engagement Strategies</li>
              <li className="text-lg text-gray-700">LinkedIn B2B Marketing</li>
              <li className="text-lg text-gray-700">TikTok Content Creation</li>
              <li className="text-lg text-gray-700">YouTube Video Marketing</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We specialize in developing custom social media strategies tailored to every industry, ensuring that your campaigns perfectly align with your specific business goals and target audience.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Power of Effective Social Media Marketing</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in social media marketing provides immense value to companies seeking to increase their online presence and engage with their audience. Heres why it matters:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Brand Awareness:</span> Increase visibility and recognition of your brand across multiple platforms.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Audience Engagement:</span> Foster meaningful interactions with your target audience and build brand loyalty.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Lead Generation:</span> Drive qualified traffic to your website and convert social media followers into customers.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Customer Insights:</span> Gain valuable data about your audiences preferences and behaviors.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Crisis Management:</span> Effectively manage your online reputation and address customer concerns in real-time.
              </li>
            </ul>
          </section>

          <section id="tech-stack">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Social Media Technology Stack</h2>
            <p className="text-lg text-gray-700 mb-4">
              We leverage cutting-edge technologies to deliver exceptional social media marketing results:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <BarChart2 size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Advanced social media management platforms for scheduling and analytics</p>
              </div>
              <div className="flex items-center">
                <Maximize2 size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">AI-powered content creation tools for optimized posts and captions</p>
              </div>
              <div className="flex items-center">
                <Layers size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Social listening tools for brand monitoring and audience insights</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in these modern technologies allows us to create comprehensive social media strategies that drive real results and maximize your marketing impact.
            </p>
          </section>

          <section id="social-media-tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Social Media Tools We Use</h2>
            <p className="text-lg text-gray-700 mb-4">
              We utilize a range of sophisticated tools to develop and implement effective social media campaigns:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Hootsuite for comprehensive social media management</li>
              <li className="text-lg text-gray-700">Sprout Social for in-depth analytics and reporting</li>
              <li className="text-lg text-gray-700">Canva for creating visually appealing social media graphics</li>
              <li className="text-lg text-gray-700">Buffer for content scheduling and performance tracking</li>
              <li className="text-lg text-gray-700">Mention for real-time social listening and brand monitoring</li>
              <li className="text-lg text-gray-700">Agorapulse for social inbox management and team collaboration</li>
            </ul>
            <p className="text-lg text-gray-700">
              Our proficiency with these tools enables us to create data-driven social media strategies that engage your target audience effectively and drive business growth.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Social Media Marketing Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Social Media Audit: Reviewing existing accounts and analyzing competitor strategies</li>
              <li className="text-lg text-gray-700">Goal Setting: Defining clear, measurable objectives for your social media presence</li>
              <li className="text-lg text-gray-700">Audience Research: Identifying and understanding your target audience on each platform</li>
              <li className="text-lg text-gray-700">Content Strategy: Developing a content calendar and creation plan</li>
              <li className="text-lg text-gray-700">Platform Selection: Choosing the most effective social media platforms for your brand</li>
              <li className="text-lg text-gray-700">Content Creation: Producing engaging, platform-specific content</li>
              <li className="text-lg text-gray-700">Community Management: Actively engaging with your audience and fostering relationships</li>
              <li className="text-lg text-gray-700">Ad Campaign Management: Creating and optimizing social media advertising campaigns</li>
              <li className="text-lg text-gray-700">Analytics & Reporting: Continuously monitoring performance and providing actionable insights</li>
            </ol>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Social Media Presence?</h2>
              <p className="text-xl mb-6">Lets create a social media strategy that engages your audience and drives business growth.</p>
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

export default SocialMediaServicesPage;