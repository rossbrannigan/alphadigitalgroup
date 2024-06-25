import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google';

const IndustriesPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        {/* Add Google Analytics tracking tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-25Y0G3QQE6"
          strategy="afterInteractive"
        />
        <Script
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
        {/* Google Analytics and Google Tag Manager components */}
        <GoogleAnalytics gaId="G-25Y0G3QQE6" />
        <GoogleTagManager gtmId="G-25Y0G3QQE6" />
        
        {/* Page title, icon, and meta description */}
        <title>Global management consulting | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Global management consulting" />
      </Head>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        {/* Introductory Text */}
        <section className="mb-8" id="intro">
          <div className="px-4">
            <h1 className="text-3xl font-semibold text-purple-800 mb-4">Welcome to Alpha Digital Group - Industries We Serve</h1>
            <p className="text-purple-800">
              At Alpha Digital Group, we pride ourselves on offering top-tier management consulting services tailored to various industries. With our expertise and dedication, we provide strategic guidance and innovative solutions to propel businesses forward in today's dynamic market landscape. Explore how we deliver value across a diverse range of sectors:
            </p>
          </div>
        </section>

        {/* Industries Section */}
        <section className="mb-8" id="industries">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Industries</h2>
            <p className="text-purple-800">
              At Alpha Digital Group, we offer management consulting services across several industries, including:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li><a href="#airlines" className="text-purple-800">Airlines</a></li>
              <li><a href="#aviation" className="text-purple-800">Aviation</a></li>
              <li><a href="#technology" className="text-purple-800">Technology</a></li>
              <li><a href="#consumer-internet" className="text-purple-800">Consumer Internet</a></li>
              <li><a href="#media" className="text-purple-800">Media</a></li>
            </ul>
            <p className="text-purple-800 mt-4">
              Our expert consultants collaborate closely with clients in these sectors to deliver strategic guidance and innovative solutions that drive growth and success.
            </p>
          </div>
        </section>
        
        {/* Airlines Section */}
        <section className="mb-8" id="airlines">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Airlines</h2>
            <p className="text-purple-800">
              In the highly competitive airline industry, operational efficiency and customer satisfaction are paramount. Our seasoned consultants work closely with airlines to optimize processes, enhance customer experience, and navigate industry complexities. From revenue management strategies to cost optimization initiatives, we help airlines achieve sustainable growth and competitive advantage.
            </p>
          </div>
        </section>

        {/* Aviation Section */}
        <section className="mb-8" id="aviation">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Aviation</h2>
            <p className="text-purple-800">
              In the fast-paced world of aviation, staying ahead requires strategic vision and meticulous planning. Alpha Digital Group offers specialized consulting services to airlines, airports, and aviation service providers. Whether it's streamlining operations, implementing cutting-edge technologies, or enhancing safety protocols, we empower aviation stakeholders to thrive in a rapidly evolving environment.
            </p>
          </div>
        </section>

        {/* Technology Section */}
        <section className="mb-8" id="technology">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Technology</h2>
            <p className="text-purple-800">
              In the ever-evolving tech landscape, innovation is the key to success. Our expert consultants partner with technology firms to drive innovation, streamline operations, and capitalize on emerging opportunities. From software development to digital transformation initiatives, we equip technology companies with the tools and strategies needed to stay ahead of the curve and deliver unparalleled value to their customers.
            </p>
          </div>
        </section>

        {/* Consumer Internet Section */}
        <section className="mb-8" id="consumer-internet">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Consumer Internet</h2>
            <p className="text-purple-800">
              The consumer internet sector is characterized by fierce competition and rapidly changing consumer preferences. At Alpha Digital Group, we help companies navigate this dynamic landscape with strategic insights and actionable recommendations. Whether it's developing scalable business models, optimizing user experiences, or leveraging data analytics, we empower consumer internet companies to thrive in the digital age.
            </p>
          </div>
        </section>

        {/* Media Section */}
        <section className="mb-8" id="media">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Media</h2>
            <p className="text-purple-800">
              In the digital era, the media industry faces unprecedented challenges and opportunities. Our seasoned consultants collaborate with media companies to navigate digital disruption, monetize content effectively, and adapt to shifting consumer behaviors. From content strategy to audience engagement initiatives, we help media organizations innovate and succeed in an ever-evolving landscape.
            </p>
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default IndustriesPage;
