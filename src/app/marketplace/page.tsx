import React from "react";
import Image from "next/image";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google"
import WebDevelopmentSection from './WebDevelopmentSection';


// Declare JSX namespace for custom elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': any;
    }
  }
}

const MarketplacePage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Title */}
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
        {/* Page title, icon, and meta description */}
        <title>Marketplace | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Global management consulting" />
      </Head>

      {/* Google Analytics - https://nextjs.org/docs/messages/next-script-for-ga */}
      <GoogleAnalytics gaId="G-25Y0G3QQE6" />

      {/* Main Content */}
      <main className="container mx-auto py-8">
        {/* Airline Consulting Services Section */}
        <section className="mb-8" id="airline-consulting-services">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Airline Consulting Services</h2>
            <p className="text-gray-700">
              Welcome to our specialized Airline Consulting Services. As industry leaders, we offer tailored consultancy services exclusively for the aviation sector. Whether you are a start-up airline looking to establish operations efficiently, an established carrier aiming to optimize routes and streamline operations, or a cargo airline seeking to enhance logistics, we provide comprehensive solutions to meet your unique needs. Our team of seasoned aviation professionals brings expertise in areas including fleet optimization, route planning, revenue management, regulatory compliance, and customer experience enhancement. Partner with us to elevate your airlines performance and achieve sustainable growth in todays dynamic aviation landscape.
            </p>
          </div>
        </section>

        {/* Stripe Airline Pricing Table */}
        <section className="mb-8" id="stripe-pricing-table">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
            <stripe-pricing-table pricing-table-id="prctbl_1P5PMq2KKbBgfCwqPDvnx774" publishable-key="pk_live_51OzdDN2KKbBgfCwqKoIShIjFkusasFpbP2ZlynP3gNyQ15fO5jXfwcFBlsoCK6gFfRn6Q2qtYyFBYK0pGdfoLE7y00bLcnNS4J"></stripe-pricing-table>
          </div>
        </section>

        {/* Hotel Consulting Services Section */}
        <section className="mb-8" id="hotel-consulting-services">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Hotel Consulting Services</h2>
            <p className="text-gray-700">
              Explore our comprehensive Hotel Consulting Services tailored to the hospitality industry. Whether you are a boutique hotel, a luxury resort, or a chain of properties, our team of seasoned consultants is dedicated to optimizing your operations and enhancing guest experiences. From strategic planning to operational efficiency, revenue management, branding, and marketing strategies, we provide customized solutions to address the specific challenges and opportunities of your property. With a focus on innovation and industry best practices, we collaborate with you to elevate your hotels performance, drive profitability, and exceed guest expectations in todays competitive hospitality market.
            </p>
          </div>
        </section>

        {/* Stripe Hotel Pricing Table */}
        <section className="mb-8" id="stripe-pricing-table">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
            <stripe-pricing-table pricing-table-id="prctbl_1P5PJu2KKbBgfCwq5ZwursHt" publishable-key="pk_live_51OzdDN2KKbBgfCwqKoIShIjFkusasFpbP2ZlynP3gNyQ15fO5jXfwcFBlsoCK6gFfRn6Q2qtYyFBYK0pGdfoLE7y00bLcnNS4J"></stripe-pricing-table>
          </div>
        </section>

{/* Web Development Section */}
<section className="mb-4" id="web-development-services">
  <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
    <h2 className="text-2xl font-semibold text-purple-800 mb-4">Web Development Services</h2>
    <p className="text-gray-700">
      Introducing our web development services tailored for airlines, hotels, and travel companies. We offer custom website design, e-commerce integration, mobile app development, search engine optimization (SEO), and content management systems (CMS) to boost your online presence and drive sales.
    </p>
    {/* Add a button or link to redirect visitors to purchase web development services */}
    <a href="/purchase-web-development" className="btn mt-4">Purchase Web Development Services</a>
  </div>
</section>

{/* Web3 Services Section */}
<section className="mb-4" id="web3-services">
  <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
    <h2 className="text-2xl font-semibold text-purple-800 mb-4">Web3 Services</h2>
    <p className="text-gray-700">
      Introducing our Web3 Services, leveraging the latest in decentralized technologies such as blockchain, smart contracts, and decentralized applications (DApps). Our team of experts can assist you in navigating the decentralized landscape, building blockchain solutions, auditing smart contracts, and developing decentralized applications tailored to your business needs.
    </p>
  </div>
</section>

        {/* Stripe Pricing Table */}
        <section className="mb-8" id="stripe-pricing-table-web3">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
            <stripe-pricing-table 
              pricing-table-id="prctbl_1P1gWs2KKbBgfCwqqRvQBeFU" 
              publishable-key="pk_live_51OzdDN2KKbBgfCwqKoIShIjFkusasFpbP2ZlynP3gNyQ15fO5jXfwcFBlsoCK6gFfRn6Q2qtYyFBYK0pGdfoLE7y00bLcnNS4J">
            </stripe-pricing-table>
          </div>
        </section>

        {/* Consultancy as a Service Section */}
        <section className="mb-8" id="consultant-as-a-service">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Consultancy as a Service</h2>
            <p className="text-gray-700">
              Introducing our innovative Consultancy as a Service model, one of the first subscription consultancy as a service models in the world. We offer services on demand, interim leadership, and subscription models for all industries and capabilities. Whether you need strategic guidance, digital transformation expertise, or interim leadership, our flexible subscription models provide the support you need, when you need it.
            </p>
          </div>
        </section>

        {/* Stripe Consultancy As A Service Pricing Table */}
        <section className="mb-8" id="stripe-pricing-table">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
            <stripe-pricing-table pricing-table-id="prctbl_1P0TaV2KKbBgfCwq4A907cBj" publishable-key="pk_live_51OzdDN2KKbBgfCwqKoIShIjFkusasFpbP2ZlynP3gNyQ15fO5jXfwcFBlsoCK6gFfRn6Q2qtYyFBYK0pGdfoLE7y00bLcnNS4J"></stripe-pricing-table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MarketplacePage;