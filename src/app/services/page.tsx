import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        {/* Page title, icon, and meta description */}
        <title>Global management consulting | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Global management consulting" />
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
        <section className="mb-8" id="intro">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
            <p className="text-gray-700">
              At Alpha Digital Group, we offer a wide range of services to help your business thrive in todays competitive market. Our expertise spans across various domains, ensuring comprehensive support for your strategic needs. Explore our services below:
            </p>
          </div>
        </section>


{/* Marketing Strategy Section */}
<section id="marketing-strategy" className="mb-12">
  <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Marketing Strategy</h2>
    <p className="text-gray-700">
      Alpha Digital Group develops comprehensive marketing strategies tailored to enhance brand visibility and drive customer engagement. Our approach is rooted in data-driven insights and innovative methodologies, ensuring effective campaign execution and measurable results.
    </p>
    <ul className="list-disc list-inside text-gray-700 mt-4">
      <li>
        <strong>Market Research:</strong> Conducting thorough market analysis to identify trends, opportunities, and consumer preferences, providing a foundation for strategic decision-making.
      </li>
      <li>
        <strong>Audience Segmentation:</strong> Segregating target audiences based on demographics, behaviors, and preferences to deliver personalized messaging and optimize campaign performance.
      </li>
      <li>
        <strong><a href="/services/content-marketing" className="text-blue-600 hover:underline">Content Marketing:</a></strong> Crafting compelling and relevant content that resonates with your audience, driving engagement, building brand authority, and supporting SEO efforts.
      </li>
      <li>
        <strong>Campaign Management:</strong> Planning, executing, and optimizing marketing campaigns across various channels to maximize reach, engagement, and conversion rates.
      </li>
      <li>
        <strong>Performance Analytics:</strong> Utilizing advanced analytics to measure campaign effectiveness, track key performance indicators (KPIs), and refine strategies for continuous improvement.
      </li>
    </ul>
  </div>
</section>




{/* Brand Strategy Section */}
<section id="brand-strategy" className="mb-12">
  <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Brand Strategy</h2>
    <p className="text-gray-700">
      A strong brand strategy is essential for establishing a distinctive identity and fostering customer loyalty. At Alpha Digital Group, we specialize in crafting comprehensive brand strategies that resonate with your target audience and drive business growth.
    </p>
    <ul className="list-disc list-inside text-gray-700 mt-4">
      <li>
        <strong>Media Planning:</strong> Tailored media plans to effectively reach your audience across various channels, ensuring maximum exposure and engagement.
      </li>
      <li>
        <strong>SEM (Search Engine Marketing):</strong> Strategic SEM campaigns to enhance visibility on search engines like Google, driving relevant traffic and conversions.
      </li>
      <li>
        <strong>Social Media:</strong> Customized social media strategies to build brand presence, engage with followers, and drive community interactions.
      </li>
      <li>
        <strong>SEO (Search Engine Optimization):</strong> Optimizing your websites SEO to improve organic search rankings and attract quality traffic, leading to higher conversions.
      </li>
    </ul>
  </div>
</section>

{/* Commercial Strategy Section */}
<section id="commercial-strategy" className="mb-12">
  <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Commercial Strategy</h2>
    <p className="text-gray-700">
      At Alpha Digital Group, we specialize in optimizing your business model and revenue streams to achieve sustainable growth and profitability.
    </p>
    <ul className="list-disc list-inside text-gray-700 mt-4">
      <li>
        <strong>Revenue Optimization:</strong> Implementing strategies to maximize revenue generation through efficient resource allocation and strategic pricing models.
      </li>
      <li>
        <strong>Pricing Strategy:</strong> Developing tailored pricing strategies that balance competitiveness with profitability, ensuring optimal market positioning.
      </li>
      <li>
        <strong>Market Expansion:</strong> Strategic initiatives to enter new markets or expand your footprint, leveraging market insights and growth opportunities.
      </li>
    </ul>
  </div>
</section>

{/* Interim Leadership Section */}
<section id="interim-leadership" className="mb-12">
  <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Interim Leadership</h2>
    <p className="text-gray-700">
      At Alpha Digital Group, we provide expert leadership support during critical transitions to ensure continuity and success.
    </p>
    <ul className="list-disc list-inside text-gray-700 mt-4">
      <li>
        <strong>CMO Services:</strong> Interim Chief Marketing Officer services to drive marketing strategies and enhance brand visibility.
      </li>
      <li>
        <strong>CDO Services:</strong> Interim Chief Digital Officer services to oversee digital transformation initiatives and digital strategy execution.
      </li>
      <li>
        <strong>CRO Services:</strong> Interim Chief Revenue Officer services to optimize revenue streams and enhance profitability through strategic revenue management.
      </li>
    </ul>
  </div>
</section>

        
{/* Digital Strategy Section */}
<section id="digital-strategy" className="mb-12">
  <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Digital Strategy</h2>
    <p className="text-gray-700">
      Alpha Digital Group empowers businesses to navigate the digital landscape with confidence, leveraging cutting-edge strategies and technologies.
    </p>
    <ul className="list-disc list-inside text-gray-700 mt-4">
      <li>
        <strong>AI Strategy:</strong> Implementing artificial intelligence solutions to enhance operational efficiency, customer experience, and decision-making processes.
      </li>
      <li>
        <strong>Data Strategy:</strong> Developing robust data strategies to harness valuable insights, optimize processes, and drive informed business decisions.
      </li>
      <li>
        <strong>Digital Transformation:</strong> Facilitating comprehensive digital transformations to adapt to evolving market demands, improve agility, and drive innovation.
      </li>
    </ul>
  </div>
</section>

      </main>
    </div>
  );
};

export default ServicesPage;
