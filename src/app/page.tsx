
import Image from "next/image";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

export default function Home() {
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
              gtag('config', 'G-25Y0G3QQE6');
            `,
          }}
        ></script>
        {/* Google Analytics and Google Tag Manager components */}
        <GoogleAnalytics gaId="G-25Y0G3QQE6"/>
        <GoogleTagManager gtmId="G-25Y0G3QQE6"/> 
        {/* Page title, icon, and meta description */}
        <title>Global management consulting | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Global management consulting" />
      </Head>

{/* Hero Section */}
<section className="bg-gradient-to-r from-purple-600 to-indigo-600 min-h-screen flex items-center justify-center text-white relative">
  <div className="absolute inset-0 flex items-center justify-center">
    <Image src="/brain-wave.gif" alt="Unleash the Power of Digital to Supercharge Revenue" layout="fill" objectFit="cover" unoptimized />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center">
    <div className="mx-auto max-w-7xl"> {/* Set max width to ensure full width and center alignment */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Empower Your Digital Journey</h1>
      <p className="text-lg md:text-xl">Unlock boundless possibilities with Alpha Digital Group.</p>
      <a href="/marketplace">
        <button className="bg-white text-purple-600 font-bold px-6 py-3 rounded-full mt-8 hover:bg-purple-100 transition duration-300 ease-in-out" style={{ border: '2px solid #BDFF03' }}>Get Started</button>
      </a>
    </div>
  </div>
</section>

<section className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
            <Image src="/digital-product-logo.png" alt="Digital Product Placeholder" width={200} height={200} className="mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Digital Product Leadership</h2>
            <p className="text-gray-600 text-center">Empower your digital products with innovative leadership.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
            <Image src="/digital-marketing-logo.png" alt="Digital Marketing Placeholder" width={200} height={200} className="mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Digital Marketing Leadership</h2>
            <p className="text-gray-600 text-center">Lead your digital marketing campaigns to success with our expert guidance.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
            <Image src="/aviation-management-logo.png" alt="Aviation Management Placeholder" width={200} height={200} className="mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Aviation Management Leadership</h2>
            <p className="text-gray-600 text-center">Navigate the skies of aviation management with our strategic leadership solutions.</p>
          </div>
        </div>
      </section>

      </div>
  );
};