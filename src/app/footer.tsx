import React from "react";
import Image from "next/image";
import { FaWhatsapp, FaEnvelope, FaTwitter, FaLinkedin } from "react-icons/fa6";
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
          <div className="flex flex-col items-center md:items-start mt-4">
            <span className="text-xs text-gray-400 mb-2">Marketing Certification:</span>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
              <div className="relative group">
                <Image
                  src="/google_ads_certificate.png"
                  alt="Google Ads Certification"
                  width={48}
                  height={48}
                  className="transition-transform duration-300 group-hover:scale-110"
                  title="Google Ads Certification"
                />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Google Ads Certification
                </span>
              </div>
              <div className="relative group">
                <Image
                  src="/Meta_Media_Planning_Pro.png"
                  alt="Meta Media Planning Pro Certification"
                  width={48}
                  height={48}
                  className="transition-transform duration-300 group-hover:scale-110"
                  title="Meta Media Planning Pro Certification"
                />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Meta Media Planning Pro Certification
                </span>
              </div>
              <div className="relative group">
                <Image
                  src="/academy-social-share.png"
                  alt="HubSpot Academy Certification"
                  width={48}
                  height={48}
                  className="transition-transform duration-300 group-hover:scale-110"
                  title="HubSpot Academy Certification"
                />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  HubSpot Academy Certification
                </span>
              </div>
              <div className="relative group">
                <Image
                  src="/Trade_Desk_Digital_Badge_Social_Data-Driven-Planning.png"
                  alt="Trade Desk Certification"
                  width={48}
                  height={48}
                  className="transition-transform duration-300 group-hover:scale-110"
                  title="Trade Desk - Data-Driven Planning Certification"
                />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Trade Desk Certification
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start mt-4">
            <span className="text-xs text-gray-400 mb-2">Technology and Data Certification:</span>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
              <div className="relative group">
                <Image
                  src="/Google_Cloud_Certificate.png"
                  alt="Google Cloud Certification"
                  width={48}
                  height={48}
                  className="transition-transform duration-300 group-hover:scale-110"
                  title="Google Cloud Certification"
                />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Google Cloud Certification
                </span>
              </div>
              <div className="relative group">
                <Image
                  src="/IBM_Data_Science_Practitioner_Certificate.png"
                  alt="IBM Data Science Certification"
                  width={48}
                  height={48}
                  className="transition-transform duration-300 group-hover:scale-110"
                  title="IBM Data Science Certification"
                />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  IBM Data Science Certification
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-full sm:w-1/2 md:w-auto">
          <h3 className="text-xs font-semibold mb-2">Knowledge Center</h3>
          <ul className="space-y-1 text-xs">
            <li><a href="https://knowledge.alphadigitalgroup.co/marketing/marketing-glossary/" className="text-gray-400 hover:text-white transition-colors duration-300">Marketing Glossary</a></li>
            <li><a href="https://alphadigitalgroup.co/blog/digital-marketing-101" className="text-gray-400 hover:text-white transition-colors duration-300">Digital Marketing 101</a></li>
            <li><a href="https://alphadigitalgroup.co/blog/digital-marketing-roi-calculator" className="text-gray-400 hover:text-white transition-colors duration-300">ROI Calculator</a></li>
          </ul>
          <h3 className="text-xs font-semibold mb-2 mt-4">Latest Posts</h3>
          <ul className="space-y-1 text-xs">
            <li><a href="https://alphadigitalgroup.co/blog/latest-marketing-trends-for-2024" className="text-gray-400 hover:text-white transition-colors duration-300">Latest Marketing Trends for 2024</a></li>
            <li><a href="https://alphadigitalgroup.co/blog/how-ai-is-shaping-digital-strategy" className="text-gray-400 hover:text-white transition-colors duration-300">How AI is Shaping Digital Strategy</a></li>
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
                  <li><a href="/api-marketing" className="text-gray-400 hover:text-white transition-colors duration-300">Using APIs for Marketing</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-medium text-gray-400">Services</h4>
                <ul className="space-y-1 text-xs pl-2 max-h-40 overflow-y-auto">
                  <li><a href="/services/seo" className="text-gray-400 hover:text-white transition-colors duration-300">Search Engine Optimization (SEO)</a></li>
                  <li><a href="/services/search-engine-marketing" className="text-gray-400 hover:text-white transition-colors duration-300">Pay-Per-Click Advertising (PPC)</a></li>
                  <li><a href="/services/social-media-marketing" className="text-gray-400 hover:text-white transition-colors duration-300">Social Media Marketing (SMM)</a></li>
                  <li><a href="/services/content-marketing" className="text-gray-400 hover:text-white transition-colors duration-300">Content Marketing</a></li>
                  <li><a href="/email-marketing" className="text-gray-400 hover:text-white transition-colors duration-300">Email Marketing</a></li>
                  <li><a href="/cro" className="text-gray-400 hover:text-white transition-colors duration-300">Conversion Rate Optimization (CRO)</a></li>
                  <li><a href="/web-design" className="text-gray-400 hover:text-white transition-colors duration-300">Website Design and Development</a></li>
                  <li><a href="/digital-strategy" className="text-gray-400 hover:text-white transition-colors duration-300">Digital Strategy and Consulting</a></li>
                  <li><a href="/services/brand-identity" className="text-gray-400 hover:text-white transition-colors duration-300">Brand Identity and Design</a></li>
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
              <li><a href="/about-us" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="/case-studies" className="text-gray-400 hover:text-white transition-colors duration-300">Case Studies</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="https://alpha-digital-group.breezy.hr/" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
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
        © 2020-2024 Alpha Digital Group LLC. All rights reserved.
      </p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://x.com/alphadigitalllc" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Twitter">
          <FaTwitter size={16} />
        </a>
        <a href="https://www.linkedin.com/company/alphadigitalgroup" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
          <FaLinkedin size={16} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;