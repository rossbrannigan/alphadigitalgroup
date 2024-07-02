import React from "react";
import Image from "next/image";
import { FaWhatsapp, FaEnvelope, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { SiNextdotjs, SiTypescript, SiNetlify, SiContentful } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 md:w-1/5">
          <Image
            src="/company-logo-small.png"
            alt="Alpha Digital Group Logo"
            width={60}
            height={60}
            className="mb-4"
          />
          <p className="text-xs text-gray-400 mt-2">
            Made in 🇹🇭 Thailand, 🇦🇪 UAE
          </p>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mt-2">
            <span className="text-xs text-gray-400">Built with:</span>
            <SiNextdotjs className="text-gray-400 hover:text-white transition-colors duration-300" size={16} title="Next.js" />
            <SiTypescript className="text-gray-400 hover:text-white transition-colors duration-300" size={16} title="TypeScript" />
            <SiNetlify className="text-gray-400 hover:text-white transition-colors duration-300" size={16} title="Netlify" />
            <SiContentful className="text-gray-400 hover:text-white transition-colors duration-300" size={16} title="Contentful" />
          </div>
        </div>
        <div className="flex flex-col items-start w-full sm:w-1/2 md:w-auto">
            <h3 className="text-xs font-semibold mb-2">Knowledge Center</h3>
            <ul className="space-y-1 text-xs">
              <li><a href="/knowledge/marketing-glossary" className="text-gray-400 hover:text-white transition-colors duration-300">Marketing Glossary</a></li>
              <li><a href="/knowledge/digital-marketing-101" className="text-gray-400 hover:text-white transition-colors duration-300">Digital Marketing 101</a></li>
              <li><a href="/knowledge/roi-calculator" className="text-gray-400 hover:text-white transition-colors duration-300">ROI Calculator</a></li>
            </ul>
            <h3 className="text-xs font-semibold mb-2 mt-4">Latest Posts</h3>
            <ul className="space-y-1 text-xs">
              <li><a href="/blog/latest-marketing-trends" className="text-gray-400 hover:text-white transition-colors duration-300">Latest Marketing Trends for 2024</a></li>
              <li><a href="/blog/ai-in-digital-strategy" className="text-gray-400 hover:text-white transition-colors duration-300">How AI is Shaping Digital Strategy</a></li>
              <li><a href="/blog/seo-best-practices" className="text-gray-400 hover:text-white transition-colors duration-300">SEO Best Practices for 2024</a></li>
            </ul>
          </div>
        <div className="flex flex-wrap justify-end w-full md:w-4/5 gap-4 md:gap-8">
          <div className="flex flex-col items-start w-full sm:w-1/2 md:w-auto">
            <h3 className="text-xs font-semibold mb-2">Marketing</h3>
            <div className="flex flex-col space-y-2">
              <div>
                <h4 className="text-xs font-medium text-gray-400">Guides</h4>
                <ul className="space-y-1 text-xs">
                  <li><a href="/marketing-ai" className="text-gray-400 hover:text-white transition-colors duration-300">Marketing with AI</a></li>
                  <li><a href="/api-marketing" className="text-gray-400 hover:text-white transition-colors duration-300">Using API's for Marketing</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-medium text-gray-400">Services</h4>
                <ul className="space-y-1 text-xs pl-2 max-h-40 overflow-y-auto">
                  <li><a href="/seo" className="text-gray-400 hover:text-white transition-colors duration-300">Search Engine Optimization (SEO)</a></li>
                  <li><a href="/ppc" className="text-gray-400 hover:text-white transition-colors duration-300">Pay-Per-Click Advertising (PPC)</a></li>
                  <li><a href="/smm" className="text-gray-400 hover:text-white transition-colors duration-300">Social Media Marketing (SMM)</a></li>
                  <li><a href="/content-marketing" className="text-gray-400 hover:text-white transition-colors duration-300">Content Marketing</a></li>
                  <li><a href="/email-marketing" className="text-gray-400 hover:text-white transition-colors duration-300">Email Marketing</a></li>
                  <li><a href="/cro" className="text-gray-400 hover:text-white transition-colors duration-300">Conversion Rate Optimization (CRO)</a></li>
                  <li><a href="/web-design" className="text-gray-400 hover:text-white transition-colors duration-300">Website Design and Development</a></li>
                  <li><a href="/digital-strategy" className="text-gray-400 hover:text-white transition-colors duration-300">Digital Strategy and Consulting</a></li>
                  <li><a href="/brand-identity" className="text-gray-400 hover:text-white transition-colors duration-300">Brand Identity and Design</a></li>
                  <li><a href="/video-marketing" className="text-gray-400 hover:text-white transition-colors duration-300">Video Marketing</a></li>
                  <li><a href="/analytics" className="text-gray-400 hover:text-white transition-colors duration-300">Analytics and Reporting</a></li>
                  <li><a href="/mobile-marketing" className="text-gray-400 hover:text-white transition-colors duration-300">Mobile Marketing</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start w-1/2 sm:w-1/3 md:w-auto">
            <h3 className="text-xs font-semibold mb-2">Digital</h3>
            <ul className="space-y-1 text-xs">
              <li><a href="/digital-guides" className="text-gray-400 hover:text-white transition-colors duration-300">Digital Guides</a></li>
              <li><a href="/digital-services" className="text-gray-400 hover:text-white transition-colors duration-300">Digital Services</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-start w-1/2 sm:w-1/3 md:w-auto">
            <h3 className="text-xs font-semibold mb-2">Commercial</h3>
            <ul className="space-y-1 text-xs">
              <li><a href="/commercial-guides" className="text-gray-400 hover:text-white transition-colors duration-300">Commercial Guides</a></li>
              <li><a href="/commercial-services" className="text-gray-400 hover:text-white transition-colors duration-300">Commercial Services</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-start w-1/2 sm:w-1/3 md:w-auto">
            <h3 className="text-xs font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-xs">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="/case-studies" className="text-gray-400 hover:text-white transition-colors duration-300">Case Studies</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-start w-1/2 sm:w-1/3 md:w-auto">
            <h3 className="text-xs font-semibold mb-2">Contact Us</h3>
            <div className="flex items-center mb-1">
              <FaEnvelope className="text-gray-400 mr-1" size={12} />
              <a href="mailto:ross@alphadigitalgroup.co" className="text-xs text-gray-400 hover:text-white transition-colors duration-300">
                ross@alphadigitalgroup.co
              </a>
            </div>
            <div className="flex items-center">
              <FaWhatsapp className="text-gray-400 mr-1" size={12} />
              <a href="https://wa.me/66828362713" className="text-xs text-gray-400 hover:text-white transition-colors duration-300">
                00 66 82 836 2713
              </a>
            </div>
          </div>

        </div>
      </div>
      <div className="container mx-auto px-4 mt-8">
        <p className="text-xs text-gray-400 text-center">
          Alpha Digital Group is a global full service agency and consultancy that brings your commercial, marketing and digital performance to the next level.
        </p>
      </div>
      <hr className="border-gray-700 my-6 w-full" />
      <p className="text-xs text-gray-400 text-center">
        © 2020-2024 Alpha Digital Group. All rights reserved.
      </p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://x.com/alphadigitalllc" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Twitter">
          <FaTwitter size={16} />
        </a>
        <a href="https://www.linkedin.com/company/alphadigitalgroup" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
          <FaLinkedin size={16} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100089144407255" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Facebook">
          <FaFacebook size={16} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;