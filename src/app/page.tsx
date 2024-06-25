import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { FiMessageCircle } from 'react-icons/fi'; // Import WhatsApp icon

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        {/* Title and Meta Description */}
        <title>Global Management Consulting | Alpha Digital Group</title>
        <meta name="description" content="Unlock boundless possibilities with Alpha Digital Group’s global management consulting services. Empower your digital journey with our leadership in digital products, digital marketing, and aviation management." />
        <link rel="icon" href="/favicon.ico" />

        {/* Google Analytics and Tag Manager */}
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
        <GoogleAnalytics gaId="G-25Y0G3QQE6"/>
        <GoogleTagManager gtmId="G-25Y0G3QQE6"/> 
      </Head>

      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 min-h-screen flex items-center justify-center text-white relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src="/brain-wave.gif" alt="Unleash the Power of Digital to Supercharge Revenue" layout="fill" objectFit="cover" unoptimized />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="mx-auto max-w-7xl">
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
            <Image src="/digital-product-logo.png" alt="Digital Product Leadership" width={200} height={200} className="mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Digital Product Leadership</h2>
            <p className="text-gray-600 text-center">Empower your digital products with innovative leadership.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
            <Image src="/digital-marketing-logo.png" alt="Digital Marketing Leadership" width={200} height={200} className="mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Digital Marketing Leadership</h2>
            <p className="text-gray-600 text-center">Lead your digital marketing campaigns to success with our expert guidance.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
            <Image src="/aviation-management-logo.png" alt="Aviation Management Leadership" width={200} height={200} className="mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Aviation Management Leadership</h2>
            <p className="text-gray-600 text-center">Navigate the skies of aviation management with our strategic leadership solutions.</p>
          </div>
        </div>
      </section>

      {/* WhatsApp Chat Button */}
      <section className="fixed bottom-8 left-8">
        <a href="https://wa.me/66828362713" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center">
          <FiMessageCircle className="h-6 w-6 inline-block mr-2" /> {/* WhatsApp Icon */}
          Chat on WhatsApp
        </a>
      </section>

      <Script id="tawk-script" strategy="lazyOnload">
        {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/667a7c95eaf3bd8d4d14248e/1i177dadk';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
        `}
      </Script>
    </div>
  );
}
