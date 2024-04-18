// pages/capabilities/CapabilitiesPage.tsx


import Image from "next/image";
import Head from 'next/head';
import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google';

const CapabilitiesPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        {/* Add Google Analytics tracking tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-25Y0G3QQE6"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R17NJV1L4N');
            `,
          }}
        />
        <GoogleAnalytics gaId="G-25Y0G3QQE6" />
        <GoogleTagManager gtmId="G-25Y0G3QQE6" />
        <title>Global management consulting | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Global management consulting" />
      </Head>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        {/* Introductory Text */}
        <section className="mb-8" id="intro">
          <div className="px-4">
            <h1 className="text-3xl font-semibold text-purple-800 mb-4">Our Capabilities</h1>
            <p className="text-purple-800">
              At Alpha Digital Group, we possess a diverse set of capabilities to address the unique needs and challenges of our clients. With our expertise and innovative approach, we deliver solutions that drive business growth and success. Explore our key capabilities below:
            </p>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="mb-8" id="capabilities">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Capabilities</h2>
            <ul className="list-disc pl-6 mt-4">
              <li className="text-purple-800">Strategic Planning</li>
              <li className="text-purple-800">Digital Transformation</li>
              <li className="text-purple-800">Data Analytics</li>
              <li className="text-purple-800">Market Research</li>
              <li className="text-purple-800">Financial Modeling</li>
              <li className="text-purple-800">Full-time Leadership</li>
              <li className="text-purple-800">Interim Leadership</li>
              <li className="text-purple-800">Digital Product Strategy</li>
              <li className="text-purple-800">Digital Marketing Strategy</li>
              <li className="text-purple-800">Coaching and Mentoring</li>
              <li className="text-purple-800">Guest Lecturing</li>
              <li className="text-purple-800">Airline Commercial Strategy Development</li>
              <li className="text-purple-800">Strategic Communications</li>
              <li className="text-purple-800">Global Strategy</li>
            </ul>
            <p className="text-purple-800 mt-4">
              Our team of experts is dedicated to helping our clients unlock their full potential through strategic planning, innovative technologies, and data-driven insights.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CapabilitiesPage;