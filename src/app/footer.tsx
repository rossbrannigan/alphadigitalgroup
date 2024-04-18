import React from "react";
import Image from "next/image";

const footer: React.FC = () => {
  return (
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
  );
};

export default Footer;
