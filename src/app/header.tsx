// header.tsx

import React from "react";
import Image from "next/image";

const header: React.FC = () => {
  return (
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
            <li><a href="/marketplace" className="text-lg text-white bg-purple-600 py-2 px-4 rounded-full border border-white transition-colors duration-300 hover:bg-white hover:text-purple-600 hover:border-purple-600">Get Started</a></li>
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
      {/* Web Development link */}
      <span>|</span>
      <a href="/marketplace/web-development" className="hover:text-brand-green transition-colors duration-300">Web Development</a>
    </div>
  </div>
</nav>
    </header>
  );
};

export default header;