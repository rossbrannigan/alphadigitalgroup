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

const MarketplacePage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Title */}
      <Head>
        <GoogleAnalytics gaId="G-25Y0G3QQE6" />
        <GoogleTagManager gtmId="G-25Y0G3QQE6" /> 
        <title>{"Marketplace | Alpha Digital Group"}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Global management consulting" />
      </Head>

      {/* Header */}
      <header className="bg-yellow-400 shadow-lg" style={{ backgroundColor: '#bdff03' }}>
        <div className="container mx-auto py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="mr-4">
            <a href="/">
              <Image src="/company-logo.svg" alt="Alpha Digital Group Logo" width={250} height={150} />
            </a>
          </div>
          {/* Main Navigation */}
          <nav>
            <ul className="flex space-x-6">
              {/* Main Nav Links */}
              <li><a href="industries" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">Industries</a></li>
              <li><a href="capabilities" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">Capabilities</a></li>
              <li><a href="featured-insights" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">Featured Insights</a></li>
              <li><a href="locations" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">Locations</a></li>
              <li><a href="about-us" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">About Us</a></li>
              <li><a href="https://www.linkedin.com/company/alphadigitalgroup" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">Alpha Digital Blog</a></li>
              <li><a href="/hire-us" className="text-lg text-white bg-purple-600 py-2 px-4 rounded-full border border-white transition-colors duration-300 hover:bg-white hover:text-purple-600 hover:border-purple-600">Get Started</a></li>
            </ul>
          </nav>
        </div>
        {/* Sub Navigation */}
        <nav className="bg-purple-600 py-2">
          <div className="container mx-auto flex items-center justify-between">
            {/* Services Links */}
            <div className="text-xs text-white flex items-center space-x-6">
              <h2 className="mr-4 text-xs text-white font-bold">Services Marketplace:</h2>
              <a href="#airline-consulting-services" className="hover:text-brand-green transition-colors duration-300">Airline Services</a>
              <span>|</span>
              <a href="#hotel-consulting-services" className="hover:text-brand-green transition-colors duration-300">Hotel Services</a>
              <span>|</span>
              <a href="#consultant-as-a-service" className="hover:text-brand-green transition-colors duration-300">Consultancy as a Service</a>
              <span>|</span>
              <a href="#web3-services" className="hover:text-brand-green transition-colors duration-300">Web3</a>
            </div>
          </div>
        </nav>
      </header>

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

        {/* Web3 Services Section */}
        <section className="mb-8" id="web3-services">
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between">
          {/* Logo */}
          <div className="mb-4 lg:mb-0 lg:order-1 lg:self-start">
            <Image
              src="/company-logo-small.png"
              alt="Alpha Digital Group Logo"
              width={40}
              height={40}
            />
          </div>
          {/* Links */}
          <div className="lg:ml-auto lg:order-3">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-gray-300 mb-2 text-xs font-bold">Quick Links</h3>
                <ul className="text-gray-300">
                  <li className="mb-0.5">
                    <a href="industries" className="hover:text-white text-xs">
                      Industries
                    </a>
                  </li>
                  <li className="mb-0.5">
                    <a href="capabilities" className="hover:text-white text-xs">
                      Capabilities
                    </a>
                  </li>
                  <li className="mb-0.5">
                    <a href="featured-insights" className="hover:text-white text-xs">
                      Featured Insights
                    </a>
                  </li>
                  <li className="mb-0.5">
                    <a href="locations" className="hover:text-white text-xs">
                      Locations
                    </a>
                  </li>
                  <li className="mb-0.5">
                    <a href="hire-us" className="hover:text-white text-xs">
                      Hire Us
                    </a>
                  </li>
                  <li className="mb-0.5">
                    <a
                      href="https://www.linkedin.com/company/alphadigitalgroup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white text-xs"
                    >
                      Alpha Digital Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-gray-300 mb-2 text-xs font-bold">Contact Us</h3>
                <ul className="text-gray-300">
                  <li className="mb-0.5 flex items-center">
                    📞 <span className="ml-2 text-xs">+66 82 836 2713</span>
                  </li>
                  <li className="mb-0.5 flex items-center">
                    ✉️ <span className="ml-2 text-xs">rossbrannigan@gmail.com</span>
                  </li>
                  <li className="mb-0.5 flex items-center">
                    📝 
                    <a href="contact" className="ml-2 text-xs hover:text-white">
                      Contact Us Form
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://www.linkedin.com/company/alphadigitalgroup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white text-xs"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-600 w-full my-8" />
        {/* Copyright text */}
        <p className="text-xs text-gray-300 text-center lg:order-5">
          © 2020-2024 Alpha Digital Group. All rights reserved.
        </p>
        {/* Powered by Ross Brannigan */}
        <p className="text-xs text-gray-300 text-center mt-4 lg:order-6">
          Powered by <a href="https://www.rossbrannigan.co" target="_blank" rel="noopener noreferrer" className="underline">Ross Brannigan</a>
        </p>
      </footer>
    </div>
  );
};

export default MarketplacePage;