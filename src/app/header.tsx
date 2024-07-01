"use client";

import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { FiMenu, FiX, FiChevronDown, FiSearch, FiDollarSign, FiBarChart2, FiMonitor, FiArrowRight, FiTrendingUp, FiPackage, FiCpu, FiDatabase, FiRefreshCw } from "react-icons/fi";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Alpha Digital Group - Digital Marketing Services</title>
        <meta name="description" content="Expert digital marketing services including SEO, SEM, social media marketing, and more. Boost your online presence with Alpha Digital Group." />
        <meta name="keywords" content="digital marketing, SEO, SEM, social media marketing, brand strategy, revenue optimization, digital strategy, AI, data strategy, digital transformation" />
        <meta property="og:title" content="Alpha Digital Group - Digital Marketing Services" />
        <meta property="og:description" content="Expert digital marketing services including SEO, SEM, social media marketing, and more. Boost your online presence with Alpha Digital Group." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.alphadigitalgroup.com/" />
        <meta property="og:image" content="https://www.alphadigitalgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@alphadigitalgrp" />
        <meta name="twitter:title" content="Alpha Digital Group - Digital Marketing Services" />
        <meta name="twitter:description" content="Expert digital marketing services including SEO, SEM, social media marketing, and more. Boost your online presence with Alpha Digital Group." />
        <meta name="twitter:image" content="https://www.alphadigitalgroup.com/twitter-image.jpg" />
      </Head>
      <header className="shadow-lg fixed top-0 left-0 w-full z-50" style={{ backgroundColor: '#bdff03' }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div>
              <a href="/">
                <Image src="/company-logo.svg" alt="Alpha Digital Group Logo" width={150} height={90} />
              </a>
            </div>
            {/* Main Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex space-x-6">
                <li className="relative group">
                  <button className="text-lg text-purple-800 hover:text-black transition-colors duration-300 flex items-center focus:outline-none">
                    Services <FiChevronDown className="ml-1" />
                  </button>
                  <div className="absolute left-3/4 transform -translate-x-1/2 mt-8 w-screen max-w-7xl bg-white shadow-lg rounded-md py-8 px-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div>
                        <a href="/marketing-strategy" className="flex items-start p-4 rounded-lg hover:bg-gray-100 transition-all duration-300">
                          <FiSearch className="text-purple-600 text-3xl mr-3 mt-1" />
                          <div>
                            <h3 className="font-bold text-gray-800">Marketing Strategy</h3>
                            <p className="text-sm text-gray-600">Develop comprehensive marketing strategies</p>
                            <ul className="mt-2 space-y-1">
                              <li><a href="/brand-strategy" className="text-sm text-purple-600 hover:underline">Brand Strategy</a></li>
                              <li><a href="/media-planning" className="text-sm text-purple-600 hover:underline">Media Planning</a></li>
                              <li><a href="/sem" className="text-sm text-purple-600 hover:underline">SEM</a></li>
                              <li><a href="/social-media" className="text-sm text-purple-600 hover:underline">Social Media</a></li>
                              <li><a href="/seo" className="text-sm text-purple-600 hover:underline">SEO</a></li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div>
                        <a href="/commercial-strategy" className="flex items-start p-4 rounded-lg hover:bg-gray-100 transition-all duration-300">
                          <FiDollarSign className="text-purple-600 text-3xl mr-3 mt-1" />
                          <div>
                            <h3 className="font-bold text-gray-800">Commercial Strategy</h3>
                            <p className="text-sm text-gray-600">Optimize your business model and revenue streams</p>
                            <ul className="mt-2 space-y-1">
                              <li><a href="/revenue-optimization" className="text-sm text-purple-600 hover:underline">Revenue Optimization</a></li>
                              <li><a href="/pricing-strategy" className="text-sm text-purple-600 hover:underline">Pricing Strategy</a></li>
                              <li><a href="/market-expansion" className="text-sm text-purple-600 hover:underline">Market Expansion</a></li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div>
                        <a href="/interim-leadership" className="flex items-start p-4 rounded-lg hover:bg-gray-100 transition-all duration-300">
                          <FiBarChart2 className="text-purple-600 text-3xl mr-3 mt-1" />
                          <div>
                            <h3 className="font-bold text-gray-800">Interim Leadership</h3>
                            <p className="text-sm text-gray-600">Expert leadership support for critical transitions</p>
                            <ul className="mt-2 space-y-1">
                              <li><a href="/cmo-services" className="text-sm text-purple-600 hover:underline">CMO Services</a></li>
                              <li><a href="/cdo-services" className="text-sm text-purple-600 hover:underline">CDO Services</a></li>
                              <li><a href="/cro-services" className="text-sm text-purple-600 hover:underline">CRO Services</a></li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div>
                        <a href="/digital-strategy" className="flex items-start p-4 rounded-lg hover:bg-gray-100 transition-all duration-300">
                          <FiMonitor className="text-purple-600 text-3xl mr-3 mt-1" />
                          <div>
                            <h3 className="font-bold text-gray-800">Digital Strategy</h3>
                            <p className="text-sm text-gray-600">Navigate the digital landscape with confidence</p>
                            <ul className="mt-2 space-y-1">
                              <li><a href="/ai-strategy" className="text-sm text-purple-600 hover:underline">AI Strategy</a></li>
                              <li><a href="/data-strategy" className="text-sm text-purple-600 hover:underline">Data Strategy</a></li>
                              <li><a href="/digital-transformation" className="text-sm text-purple-600 hover:underline">Digital Transformation</a></li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="md:col-span-2 mt-6">
                        <a href="#demand-revenue" className="group block rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                          <div className="bg-brand-green p-6 h-full flex flex-col justify-between">
                            <div>
                              <FiTrendingUp className="text-purple-800 text-4xl mb-4" />
                              <h3 className="font-bold text-xl text-purple-800 mb-2">Demand and Revenue Generation</h3>
                              <p className="text-purple-700">Unlock growth potential with our targeted strategies. We help you attract high-quality leads and convert them into loyal customers.</p>
                            </div>
                            <div className="mt-4 flex items-center text-purple-800 group-hover:text-purple-600">
                              Learn more <FiArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="md:col-span-2 mt-6">
                        <a href="#company-packages" className="group block rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                          <div className="bg-brand-green p-6 h-full flex flex-col justify-between">
                            <div>
                              <FiPackage className="text-purple-800 text-4xl mb-4" />
                              <h3 className="font-bold text-xl text-purple-800 mb-2">Company Packages</h3>
                              <p className="text-purple-700">Tailored solutions to fit your unique business needs. Our comprehensive packages provide end-to-end support for your growth journey.</p>
                            </div>
                            <div className="mt-4 flex items-center text-purple-800 group-hover:text-purple-600">
                              Explore packages <FiArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li><a href="/industries" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">Industries</a></li>
                <li><a href="/case-studies" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">Case Studies</a></li>
                <li><a href="/about-us" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">About Us</a></li>
                <li><a href="/insights" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">Insights</a></li>
                <li><a href="/contact" className="text-lg text-white bg-purple-600 py-2 px-4 rounded-full transition-colors duration-300 hover:bg-purple-700">Contact Us</a></li>
              </ul>
            </nav>
            {/* Hamburger Menu */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-purple-800 focus:outline-none">
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4" style={{ backgroundColor: '#bdff03' }}>
            <nav className="container mx-auto px-4">
              <ul className="flex flex-col space-y-4">
                <li>
                  <button 
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    className="flex items-center justify-between w-full text-left text-lg text-purple-800 hover:text-black transition-colors duration-300"
                  >
                    Services <FiChevronDown className={`ml-1 transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesDropdownOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      <a href="/marketing-strategy" className="block text-purple-800 hover:text-black">Marketing Strategy</a>
                      <a href="/commercial-strategy" className="block text-purple-800 hover:text-black">Commercial Strategy</a>
                      <a href="/interim-leadership" className="block text-purple-800 hover:text-black">Interim Leadership</a>
                      <a href="/digital-strategy" className="block text-purple-800 hover:text-black">Digital Strategy</a>
                      <a href="#demand-revenue" className="block text-purple-800 hover:text-black">Demand and Revenue Generation</a>
                      <a href="#company-packages" className="block text-purple-800 hover:text-black">Company Packages</a>
                    </div>
                  )}
                </li>
                <li><a href="/industries" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">Industries</a></li>
                <li><a href="/case-studies" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">Case Studies</a></li>
                <li><a href="/about-us" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">About Us</a></li>
                <li><a href="/insights" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">Insights</a></li>
                <li><a href="/contact" className="text-lg text-white bg-purple-600 py-2 px-4 rounded-full transition-colors duration-300 hover:bg-purple-700 inline-block">Contact Us</a></li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;