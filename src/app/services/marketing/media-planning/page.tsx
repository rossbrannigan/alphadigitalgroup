import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { Target, BarChart2, TrendingUp, Radio, Tv, Smartphone } from 'lucide-react';

const MediaPlanningPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Media Planning Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Expert Media Planning and Strategy Services" />
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Media Planning Services</h1>
            <p className="text-lg text-gray-700">
              At Alpha Digital Group, we specialize in creating strategic media plans that maximize your reach, engagement, and ROI across various channels. Our expert team leverages data-driven insights and industry expertise to craft tailored media strategies that align with your business objectives and target audience.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Media Planning Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Target size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Audience Analysis</h3>
                </div>
                <p className="text-white">We conduct in-depth research to understand your target audiences media consumption habits and preferences.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <BarChart2 size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Channel Mix Optimization</h3>
                </div>
                <p className="text-white">We develop the optimal mix of media channels to reach your audience effectively and efficiently.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <TrendingUp size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Budget Allocation</h3>
                </div>
                <p className="text-white">We strategically allocate your media budget across channels to maximize ROI and achieve your campaign objectives.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Smartphone size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Cross-Platform Integration</h3>
                </div>
                <p className="text-white">We create cohesive media strategies that integrate seamlessly across digital and traditional platforms.</p>
              </div>
            </div>
          </section>

          <section id="media-expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Media Planning Expertise</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Alpha Digital Group, we pride ourselves on our extensive expertise in various media planning techniques and platforms. Our proficiency includes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Programmatic Advertising</li>
              <li className="text-lg text-gray-700">Social Media Advertising</li>
              <li className="text-lg text-gray-700">Search Engine Marketing (SEM)</li>
              <li className="text-lg text-gray-700">Traditional Media (TV, Radio, Print)</li>
              <li className="text-lg text-gray-700">Out-of-Home (OOH) Advertising</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We specialize in developing custom media strategies tailored to every industry, ensuring that your media plan perfectly aligns with your specific business goals and target audience.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Power of Effective Media Planning</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in media planning provides immense value to companies seeking to optimize their advertising efforts and reach their target audience effectively. Heres why it matters:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Targeted Reach:</span> Ensure your message reaches the right audience at the right time and place.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Cost Efficiency:</span> Optimize your media spend to get the most value from your advertising budget.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Increased ROI:</span> Improve the return on your advertising investment through strategic planning and execution.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Cohesive Messaging:</span> Create a consistent brand experience across multiple touchpoints and channels.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Data-Driven Decisions:</span> Leverage analytics to continuously refine and improve your media strategy.
              </li>
            </ul>
          </section>

          <section id="tech-stack">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Media Planning Technology Stack</h2>
            <p className="text-lg text-gray-700 mb-4">
              We leverage cutting-edge technologies to deliver exceptional media planning results:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <BarChart2 size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Advanced analytics platforms for audience insights and campaign performance tracking</p>
              </div>
              <div className="flex items-center">
                <TrendingUp size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Programmatic advertising platforms for real-time bidding and optimization</p>
              </div>
              <div className="flex items-center">
                <Smartphone size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Cross-device tracking tools for seamless multi-platform campaigns</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in these modern technologies allows us to create comprehensive media strategies that drive real results and maximize your advertising impact.
            </p>
          </section>

          <section id="media-tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Media Planning Tools We Use</h2>
            <p className="text-lg text-gray-700 mb-4">
              We utilize a range of sophisticated tools to develop and implement effective media plans:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Nielsen for audience measurement and media consumption insights</li>
              <li className="text-lg text-gray-700">comScore for cross-platform audience and advertising analytics</li>
              <li className="text-lg text-gray-700">Google Analytics for digital campaign performance tracking</li>
              <li className="text-lg text-gray-700">Mediaocean for media planning, buying, and optimization</li>
              <li className="text-lg text-gray-700">The Trade Desk for programmatic advertising management</li>
              <li className="text-lg text-gray-700">Facebook Ads Manager and Google Ads for social and search advertising</li>
            </ul>
            <p className="text-lg text-gray-700">
              Our proficiency with these tools enables us to create data-driven media strategies that reach your target audience effectively and drive business growth.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Media Planning Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Audience Analysis: Understanding your target audiences media consumption habits</li>
              <li className="text-lg text-gray-700">Campaign Objectives: Defining clear, measurable goals for your media campaign</li>
              <li className="text-lg text-gray-700">Media Research: Analyzing potential media channels and their effectiveness</li>
              <li className="text-lg text-gray-700">Channel Selection: Choosing the optimal mix of media channels</li>
              <li className="text-lg text-gray-700">Budget Allocation: Strategically distributing your budget across selected channels</li>
              <li className="text-lg text-gray-700">Media Buying: Negotiating and purchasing media placements</li>
              <li className="text-lg text-gray-700">Campaign Execution: Launching and managing your media campaign</li>
              <li className="text-lg text-gray-700">Performance Tracking: Continuously monitoring and optimizing campaign performance</li>
              <li className="text-lg text-gray-700">Reporting and Analysis: Providing detailed insights and recommendations for future campaigns</li>
            </ol>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Maximize Your Media Impact?</h2>
              <p className="text-xl mb-6">Lets create a media strategy that drives results for your business.</p>
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

export default MediaPlanningPage;