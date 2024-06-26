import React from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Header: React.FC = () => {
  return (
    <header className="bg-yellow-400 shadow-lg fixed top-0 left-0 w-full z-50" style={{ backgroundColor: '#bdff03' }}>
      <div className="container mx-auto py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="mr-4">
          <a href="/">
            <Image src="/company-logo.svg" alt="Alpha Digital Group Logo" width={150} height={90} />
          </a>
        </div>
        {/* Main Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="industries" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">Industries</a></li>
            <li><a href="capabilities" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">Capabilities</a></li>
            <li><a href="https://alphadigitalgroup.tawk.help/" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">Featured Insights</a></li>
            <li><a href="locations" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">Locations</a></li>
            <li><a href="about-us" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">About Us</a></li>
            <li><a href="https://www.linkedin.com/company/alphadigitalgroup" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">Alpha Digital Blog</a></li>
            <li><a href="/marketplace" className="text-lg text-white bg-purple-600 py-2 px-4 rounded-full border border-white transition-colors duration-300 hover:bg-white hover:text-purple-600 hover:border-purple-600">Get Started</a></li>
          </ul>
        </nav>
        {/* Hamburger Menu */}
        <div className="md:hidden relative">
          <input type="checkbox" id="menu-toggle" className="hidden" />
          <label htmlFor="menu-toggle" className="cursor-pointer z-50">
            <FiMenu size={24} className="text-purple-800" />
          </label>
          <div id="menu" className="hidden fixed top-16 left-0 w-full bg-yellow-400 z-40" style={{ backgroundColor: '#bdff03' }}>
            <nav>
              <ul className="flex flex-col space-y-4 py-4 px-4">
                <li><a href="industries" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">Industries</a></li>
                <li><a href="capabilities" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">Capabilities</a></li>
                <li><a href="featured-insights" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">Featured Insights</a></li>
                <li><a href="locations" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">Locations</a></li>
                <li><a href="about-us" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">About Us</a></li>
                <li><a href="https://www.linkedin.com/company/alphadigitalgroup" className="text-lg text-purple-800 hover:text-black transition-colors duration-300">Alpha Digital Blog</a></li>
                <li><a href="/marketplace" className="text-lg text-white bg-purple-600 py-2 px-4 rounded-full border border-white transition-colors duration-300 hover:bg-white hover:text-purple-600 hover:border-purple-600">Get Started</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Sub Navigation */}
      <nav className="bg-purple-600 py-2">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          {/* Services Links */}
          <div className="text-xs text-white flex flex-wrap items-center space-x-2 md:space-x-6">
            <h2 className="mr-4 text-xs text-white font-bold">Services Marketplace:</h2>
            <a href="#airline-consulting-services" className="hover:text-brand-green transition-colors duration-300">Airline Services</a>
            <span className="hidden md:inline">|</span>
            <a href="#hotel-consulting-services" className="hover:text-brand-green transition-colors duration-300">Hotel Services</a>
            <span className="hidden md:inline">|</span>
            <a href="#consultant-as-a-service" className="hover:text-brand-green transition-colors duration-300">Consultancy as a Service</a>
            <span className="hidden md:inline">|</span>
            <a href="#web3-services" className="hover:text-brand-green transition-colors duration-300">Web3</a>
            <span className="hidden md:inline">|</span>
            <a href="/marketplace/web-development" className="hover:text-brand-green transition-colors duration-300">Web Development</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
