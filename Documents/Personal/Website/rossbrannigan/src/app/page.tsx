import Image from "next/image";
import Head from 'next/head';
import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
      <GoogleAnalytics gaId="G-R17NJV1L4N" />
      <GoogleTagManager gtmId="G-R17NJV1L4N" /> 

        <title>Global management consulting | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Global management consulting" />

      </Head>

      


      {/* Header */}
<header className="bg-black shadow-lg">
  <div className="container mx-auto py-4 flex items-center justify-between">
    <div className="mr-4">
      <a href="/">
        {/* Added border-none class */}
        <Image src="/ross_brannigan_logo.svg" alt="Ross Brannigan Signature" width={250} height={150} className="border-none" />
      </a>
    </div>
    <nav>
      <ul className="flex space-x-6">
        <li><a href="https://calendly.com/ross-brannigan/30min?month=2024-04" className="text-white hover:text-yellow-400 transition-colors duration-300">Schedule A Call</a></li>
        <li><a href="marketplace" className="text-white hover:text-yellow-400 transition-colors duration-300">Marketplace</a></li>
        <li><a href="cv" className="text-white hover:text-yellow-400 transition-colors duration-300">CV</a></li>
        <li><a href="Media" className="text-white hover:text-yellow-400 transition-colors duration-300">Media</a></li>
        <li><a href="locations" className="text-white hover:text-yellow-400 transition-colors duration-300">Locations</a></li>
        <li><a href="about" className="text-white hover:text-yellow-400 transition-colors duration-300">About</a></li>
        <li><a href="blog" className="text-white hover:text-yellow-400 transition-colors duration-300">Blog</a></li>
        {/* Changed button text to "Get Ahead" and modified button styles */}
        <li><a href="/hire-us" className="text-black bg-white py-2 px-4 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-300">Get Ahead</a></li>
      </ul>
    </nav>
  </div>
</header>

{/* Main Content */}
<main className="container mx-auto py-8">

  {/* Placeholder for Ross intro */}
  <div>
    <img src="/ross-intro.svg" alt="Ross Standing" />
  </div>



  <div className="container mx-auto py-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
        <Image src="/digital-product-logo.png" alt="Digital Product Placeholder" width={200} height={200} className="mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Digital Product Leadership</h2>
        <p className="text-gray-600 text-center">Empower your digital products with innovative leadership.</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
        <Image src="/digital-marketing-logo.png" alt="Digital Marketing Placeholder" width={200} height={200} className="mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Digital Marketing Leadership</h2>
        <p className="text-gray-600 text-center">Lead your digital marketing campaigns to success with our expert guidance.</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
        <Image src="/aviation-management-logo.png" alt="Aviation Management Placeholder" width={200} height={200} className="mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Aviation Management Leadership</h2>
        <p className="text-gray-600 text-center">Navigate the skies of aviation management with our strategic leadership solutions.</p>
      </div>
    </div>
  </div>





</main>


{/* Footer */}
<footer className="bg-black text-white py-8">
  <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between">
    {/* Logo */}
    <div className="mb-4 lg:mb-0 lg:order-1 lg:self-start">
      <Image
        src="/ross-logo-initial-icon.svg"
        alt="Ross Brannigan Initials"
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
              <a href="https://calendly.com/ross-brannigan/30min?month=2024-04" className="hover:text-white text-xs">
                Schedule A Call
              </a>
            </li>
            <li className="mb-0.5">
              <a href="Marketplace" className="hover:text-white text-xs">
                Marketplace
              </a>
            </li>
            <li className="mb-0.5">
              <a href="CV" className="hover:text-white text-xs">
                CV
              </a>
            </li>
            <li className="mb-0.5">
              <a href="locations" className="hover:text-white text-xs">
                Locations
              </a>
            </li>
            <li className="mb-0.5">
              <a href="Media" className="hover:text-white text-xs">
                Media
              </a>
            </li>
            <li className="mb-0.5">
              <a href="about" className="hover:text-white text-xs">
                About 
              </a>
            </li>
            <li className="mb-0.5">
              <a href="blog" className="hover:text-white text-xs">
                Blog
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
                Contact Ross
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
    © 2020-2024. All rights reserved.
  </p>
  {/* Powered by Ross Brannigan */}
  <p className="text-xs text-gray-300 text-center mt-4 lg:order-6">
    Powered by <a href="https://www.rossbrannigan.co" target="_blank" rel="noopener noreferrer" className="underline">Ross Brannigan</a>
  </p>
</footer>

    </div>
  );
}
