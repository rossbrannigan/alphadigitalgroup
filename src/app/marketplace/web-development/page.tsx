import Image from "next/image";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google"

// Declare JSX namespace for custom elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': any;
    }
  }
}

const WebDevelopmentPage = () => {
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
        <GoogleAnalytics gaId="G-25Y0G3QQE6" />
        <GoogleTagManager gtmId="G-25Y0G3QQE6" />
        <title>Travel Web Development | Alpha Digital Group</title>
        <meta name="description" content="Supercharge bookings & brand awareness with a cutting-edge travel website developed by Alpha Digital Group." />
      </Head>

            {/* Google Analytics - https://nextjs.org/docs/messages/next-script-for-ga */}
            <GoogleAnalytics gaId="G-25Y0G3QQE6" />


{/* Hero Section */}
<section className="bg-gradient-to-r from-purple-600 to-indigo-600 min-h-screen flex items-center justify-center text-white relative">
  <div className="absolute inset-0 flex items-center justify-center">
  <Image src="/brain-wave.gif" alt="Unleash the Power of Digital to Supercharge Revenue" layout="fill" objectFit="cover" unoptimized />

  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center">
    <div className="mb-16"> {/* Add margin-bottom to move the text higher */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Unleash the Power of Travel Web Development with Alpha Digital Group</h1>
      <p className="text-lg md:text-xl">Supercharge Bookings & Brand Awareness with a Cutting-Edge Travel Website</p>
    </div>
  </div>
</section>


      {/* Content Section */}
      <section className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Existing Cards */}
          {/* You can keep the existing cards or replace them with new content */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
            <Image src="/digital-product-logo.png" alt="Digital Product Placeholder" width={200} height={200} className="mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Digital Product Leadership</h2>
            <p className="text-gray-600 text-center">Empower your digital products with innovative leadership.</p>
          </div>
          {/* Add new content here */}
          {/* Captivating Design */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Captivating Design</h2>
            <p className="text-gray-600 text-center mb-4">We will create a visually stunning website that showcases your destinations and services in a way that inspires wanderlust.</p>
          </div>
          {/* Seamless User Experience */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Seamless User Experience</h2>
            <p className="text-gray-600 text-center mb-4">Effortless navigation and intuitive booking processes will ensure visitors convert into paying customers.</p>
          </div>
          {/* Mobile-First Development */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Mobile-First Development</h2>
            <p className="text-gray-600 text-center mb-4">With the rise of mobile travel booking, we prioritize responsive design that provides an exceptional experience on any device.</p>
          </div>
          {/* Search Engine Optimization (SEO) */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Search Engine Optimization (SEO)</h2>
            <p className="text-gray-600 text-center mb-4">Our data-driven approach will optimize your website to rank higher in search results, driving organic traffic and attracting new customers.</p>
          </div>
          {/* Content Marketing Magic */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Content Marketing Magic</h2>
            <p className="text-gray-600 text-center mb-4">We will craft compelling content that fuels brand awareness, educates travelers, and positions you as an industry leader.</p>
          </div>
          {/* Measurable Results */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Measurable Results</h2>
            <p className="text-gray-600 text-center mb-4">We do not just build websites, we build results. Track your progress with clear analytics and data-driven insights.</p>
          </div>
          {/* End of new content */}
        </div>
      </section>




              {/* Stripe Web Development Table 1 */}
              <section className="mb-8" id="stripe-pricing-table">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
            <stripe-pricing-table pricing-table-id="prctbl_1P6vBG2KKbBgfCwqezujW7zj" publishable-key="pk_live_51OzdDN2KKbBgfCwqKoIShIjFkusasFpbP2ZlynP3gNyQ15fO5jXfwcFBlsoCK6gFfRn6Q2qtYyFBYK0pGdfoLE7y00bLcnNS4J"></stripe-pricing-table>
          </div>
        </section>

                      {/* Stripe Web Development Table 2 */}
                      <section className="mb-8" id="stripe-pricing-table">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
            <stripe-pricing-table pricing-table-id="prctbl_1P6vUF2KKbBgfCwqqHIiHCFI" publishable-key="pk_live_51OzdDN2KKbBgfCwqKoIShIjFkusasFpbP2ZlynP3gNyQ15fO5jXfwcFBlsoCK6gFfRn6Q2qtYyFBYK0pGdfoLE7y00bLcnNS4J"></stripe-pricing-table>
          </div>
        </section>

      {/* Call to Action Section */}
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Partner with Alpha Digital Group and Unlock the Full Potential of Your Travel Business</h2>
          <p className="text-white text-lg mb-8">Contact us today for a free consultation!</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full">Get Started</button>
        </div>
      </section>

      


    </div>
  );
};

export default WebDevelopmentPage;