import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { Feather, Code, Database, Share2, BarChart, FileText } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Content Marketing Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Expert Content Marketing and Strategy Services" />
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Content Marketing Services</h1>
            <p className="text-lg text-gray-700">
              At Alpha Digital Group, we specialize in creating compelling content marketing strategies that drive engagement, boost brand awareness, and generate leads. Our expert team crafts tailored solutions to help your business stand out in the digital landscape.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Content Marketing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Feather size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Content Strategy Development</h3>
                </div>
                <p className="text-white">We create comprehensive content strategies aligned with your business goals and target audience.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <FileText size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Content Creation</h3>
                </div>
                <p className="text-white">Our team of skilled writers produces high-quality, engaging content across various formats and platforms.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <BarChart size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">SEO Optimization</h3>
                </div>
                <p className="text-white">We optimize your content to improve search engine rankings and drive organic traffic to your website.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Share2 size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Social Media Marketing</h3>
                </div>
                <p className="text-white">We develop and execute social media strategies to amplify your content and engage with your audience.</p>
              </div>
            </div>
          </section>

          <section id="cms-expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">CMS Expertise & Headless Strategy</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Alpha Digital Group, we pride ourselves on our extensive expertise in various content management systems and headless CMS solutions. Our proficiency includes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Strapi</li>
              <li className="text-lg text-gray-700">Contentful</li>
              <li className="text-lg text-gray-700">Sanity</li>
              <li className="text-lg text-gray-700">Builder.io</li>
              <li className="text-lg text-gray-700">Tina CMS</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We specialize in building custom content models tailored to every industry, ensuring that your CMS perfectly aligns with your specific business needs and content requirements.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Power of Headless CMS</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in headless CMS and headless strategy provides immense value to companies seeking flexibility, scalability, and improved performance in their digital presence. Heres why it matters:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Flexibility:</span> Headless CMS separates content management from presentation, allowing you to deliver content across multiple platforms and devices seamlessly.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Improved Performance:</span> With a headless approach, your frontend can be optimized independently, resulting in faster load times and better user experience.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Future-Proofing:</span> As new technologies and platforms emerge, a headless CMS allows you to adapt quickly without overhauling your entire content ecosystem.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Scalability:</span> Headless architecture can handle high traffic and content volume more efficiently, supporting your business growth.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Personalization:</span> With easier integration of various data sources, headless CMS facilitates more personalized content experiences for your audience.
              </li>
            </ul>
          </section>

          <section id="tech-stack">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Technology Stack</h2>
            <p className="text-lg text-gray-700 mb-4">
              We leverage cutting-edge technologies to deliver exceptional content experiences:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Code size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Tailwind CSS for responsive and customizable designs</p>
              </div>
              <div className="flex items-center">
                <Database size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Modern UI libraries for accessible and modular component development</p>
              </div>
              <div className="flex items-center">
                <FileText size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">SASS for advanced styling capabilities</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in these modern technologies allows us to create visually appealing, performant, and user-friendly content experiences.
            </p>
          </section>

          <section id="content-tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Content Development Tools</h2>
            <p className="text-lg text-gray-700 mb-4">
              We utilize a range of sophisticated tools to develop and optimize great content:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">SEMrush for keyword research and content optimization</li>
              <li className="text-lg text-gray-700">Ahrefs for competitive analysis and backlink strategies</li>
              <li className="text-lg text-gray-700">Grammarly for ensuring impeccable grammar and style</li>
              <li className="text-lg text-gray-700">Canva for creating engaging visual content</li>
              <li className="text-lg text-gray-700">Hootsuite for social media management and scheduling</li>
              <li className="text-lg text-gray-700">Google Analytics for performance tracking and insights</li>
            </ul>
            <p className="text-lg text-gray-700">
              Our proficiency with these tools enables us to create data-driven, high-quality content that resonates with your target audience and drives results.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Content Marketing Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Discovery and Research: Understanding your brand, audience, and goals</li>
              <li className="text-lg text-gray-700">Strategy Development: Creating a tailored content marketing plan</li>
              <li className="text-lg text-gray-700">Content Creation: Producing high-quality, relevant content</li>
              <li className="text-lg text-gray-700">Distribution and Promotion: Sharing content across appropriate channels</li>
              <li className="text-lg text-gray-700">Performance Analysis: Monitoring and optimizing content performance</li>
            </ol>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Content Marketing?</h2>
              <p className="text-xl mb-6">Lets create a strategy that drives results for your business.</p>
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

export default ServicesPage;