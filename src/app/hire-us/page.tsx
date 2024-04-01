// pages/hire-us/HireUsPage.tsx

import React from "react";
import Image from "next/image";
import Head from "next/head";

const HireUsPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Title */}
      <Head>
        {" "}
        <title>{"Hire Us | Alpha Digital Group"}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Global management consulting" />
      </Head>

      {/* Header */}
      <header className="bg-yellow-400 shadow-lg" style={{ backgroundColor: '#bdff03' }}>
        <div className="container mx-auto py-4 flex items-center justify-between">
          <div className="mr-4">
            <a href="/">
              <Image src="/company-logo.svg" alt="Alpha Digital Group Logo" width={250} height={150} />
            </a>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="industries" className="text-purple-800 hover:text-black transition-colors duration-300">Industries</a></li>
              <li><a href="capabilities" className="text-purple-800 hover:text-black transition-colors duration-300">Capabilities</a></li>
              <li><a href="featured-insights" className="text-purple-800 hover:text-black transition-colors duration-300">Featured Insights</a></li>
              <li><a href="locations" className="text-purple-800 hover:text-black transition-colors duration-300">Locations</a></li>
              <li><a href="about-us" className="text-purple-800 hover:text-black transition-colors duration-300">About Us</a></li>
              <li><a href="https://www.linkedin.com/company/alphadigitalgroup" className="text-purple-800 hover:text-black transition-colors duration-300">Alpha Digital Blog</a></li>
              {/* Changed text color to white */}
              <li><a href="/hire-us" className="text-white bg-purple-600 py-2 px-4 rounded-full hover:bg-black hover:text-yellow-400 transition-colors duration-300">Get Started</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        {/* Consultancy as a Service Section */}
        <section className="mb-8" id="consultant-as-a-service">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Consultancy as a Service</h2>
            <p className="text-gray-700">
              Introducing our innovative "Consultancy as a Service" model, one of the first subscription consultancy as a service models in the world. We offer services on demand, interim leadership, and subscription models for all industries and capabilities. Whether you need strategic guidance, digital transformation expertise, or interim leadership, our flexible subscription models provide the support you need, when you need it.
            </p>
          </div>
        </section>

        {/* Stripe Pricing Table */}
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
                  <li className="mb-0.5"> {/* Reduced bottom margin */}
                    <a href="industries" className="hover:text-white text-xs">
                      Industries
                    </a>
                  </li>
                  <li className="mb-0.5"> {/* Reduced bottom margin */}
                    <a href="capabilities" className="hover:text-white text-xs">
                      Capabilities
                    </a>
                  </li>
                  <li className="mb-0.5"> {/* Reduced bottom margin */}
                    <a href="featured-insights" className="hover:text-white text-xs">
                      Featured Insights
                    </a>
                  </li>
                  <li className="mb-0.5"> {/* Reduced bottom margin */}
                    <a href="locations" className="hover:text-white text-xs">
                      Locations
                    </a>
                  </li>
                  <li className="mb-0.5"> {/* Reduced bottom margin */}
                    <a href="hire-us" className="hover:text-white text-xs">
                      Hire Us
                    </a>
                  </li>
                  <li className="mb-0.5"> {/* Reduced bottom margin */}
                    <a href="about-us" className="hover:text-white text-xs">
                      About Us
                    </a>
                  </li>
                  <li className="mb-0.5"> {/* Reduced bottom margin */}
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
          {/* Subscription Box */}
          <div className="mt-8 lg:mt-0 lg:order-2 lg:ml-auto self-start lg:ml-12">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Subscribe to Our Newsletter
              </h2>
              <form>
                <div className="flex items-center">
                  <input
                    type="email"
                    className="bg-gray-100 border-2 border-gray-300 rounded-l-md py-2 px-4 w-full"
                    placeholder="Your email address"
                  />
                  <button
                    type="submit"
                    className="bg-purple-600 text-white font-bold px-6 py-2 rounded-r-md hover:bg-purple-700 transition duration-300 ease-in-out"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
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

export default HireUsPage;