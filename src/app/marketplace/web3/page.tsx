// pages/hire-us/Web3ConsultingPage.tsx

import React from "react";
import Image from "next/image";
import Head from "next/head";
import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google'


// Declare JSX namespace for custom elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': any;
    }
  }
}

const Web3ConsultingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Title */}
      <Head>
        <GoogleAnalytics gaId="G-25Y0G3QQE6" />
        <GoogleTagManager gtmId="G-25Y0G3QQE6" /> 
        <title>{"Web3 Consulting & Services | Alpha Digital Group"}</title>
        <meta name="description" content="Explore Alpha Digital Group's Web3 consulting and services. We specialize in blockchain, DeFi, NFTs, and more. Transform your business with our expert guidance." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        {/* Consultancy as a Service Section */}
        <section className="mb-8" id="consultant-as-a-service">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Consultancy as a Service</h2>
            <p className="text-gray-700">
              Introducing our innovative Consultancy as a Service model, one of the first subscription consultancy as a service models in the world. We offer services on demand, interim leadership, and subscription models for all industries and capabilities. Whether you need strategic guidance, digital transformation expertise, or interim leadership, our flexible subscription models provide the support you need, when you need it.
            </p>
          </div>
        </section>

        {/* Stripe Pricing Table */}
        <section className="mb-8" id="stripe-pricing-table">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
<stripe-pricing-table pricing-table-id="prctbl_1P1gWs2KKbBgfCwqqRvQBeFU"
publishable-key="pk_live_51OzdDN2KKbBgfCwqKoIShIjFkusasFpbP2ZlynP3gNyQ15fO5jXfwcFBlsoCK6gFfRn6Q2qtYyFBYK0pGdfoLE7y00bLcnNS4J">
</stripe-pricing-table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Web3ConsultingPage;