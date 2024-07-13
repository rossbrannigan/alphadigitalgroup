import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { Plane, Rocket, Cpu, Globe, Video } from 'lucide-react';

const IndustriesPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-purple-100 min-h-screen">
      <Head>
        <title>Global management consulting | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Global management consulting" />
      </Head>

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

      <header className="h-16"></header>

      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="mb-16 text-center" id="intro">
          <h1 className="text-4xl sm:text-5xl font-bold text-purple-800 mb-6">Welcome to Alpha Digital Group</h1>
          <p className="text-xl text-purple-700 max-w-3xl mx-auto">
            Empowering businesses across industries with expert management consulting services. Discover how we drive innovation and success in todays dynamic market landscape.
          </p>
        </section>

        <section className="mb-16" id="industries">
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-purple-800 mb-6">Industries We Serve</h2>
            <p className="text-lg text-purple-700 mb-8">
              Our expertise spans across various sectors, delivering tailored solutions to drive growth and innovation:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Airlines", icon: Plane, id: "airlines" },
                { name: "Aviation", icon: Rocket, id: "aviation" },
                { name: "Technology", icon: Cpu, id: "technology" },
                { name: "Consumer Internet", icon: Globe, id: "consumer-internet" },
                { name: "Media", icon: Video, id: "media" },
              ].map((industry) => (
                <a
                  key={industry.id}
                  href={`#${industry.id}`}
                  className="flex items-center p-4 bg-purple-50 rounded-lg transition-all hover:bg-purple-100 hover:shadow-md"
                >
                  <industry.icon className="w-8 h-8 text-purple-600 mr-3" />
                  <span className="text-lg font-medium text-purple-800">{industry.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
        
        {["airlines", "aviation", "technology", "consumer-internet", "media"].map((id) => (
          <section key={id} className="mb-12" id={id}>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-purple-800 mb-4 capitalize">{id.replace('-', ' ')}</h2>
              <p className="text-purple-700">
                {getIndustryContent(id)}
              </p>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

const getIndustryContent = (id: string): string => {
  switch (id) {
    case 'airlines':
      return "We help airlines optimize operations, enhance customer experiences, and navigate the complexities of the aviation industry.";
    case 'aviation':
      return "Our aviation consulting services cover airport management, air traffic control optimization, and sustainable aviation practices.";
    case 'technology':
      return "In the fast-paced world of technology, we assist companies in staying competitive through digital transformation and AI integration.";
    case 'consumer-internet':
      return "We guide consumer internet companies in leveraging data analytics, improving user experiences, and developing growth strategies.";
    case 'media':
      return "Our media industry expertise helps clients navigate the shift to digital platforms and optimize revenue streams.";
    default:
      return "We provide tailored consulting services to help businesses in this industry thrive and adapt to changing market conditions.";
  }
};

export default IndustriesPage;