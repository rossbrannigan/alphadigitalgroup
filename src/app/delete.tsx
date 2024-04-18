import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

// Add this CSS to your global CSS file or in the _app.js file
// import 'swiper/css';

// Your existing imports
import Image from "next/image";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Home() {
  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 5000,
      },
    });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Head Section */}
      <Head>
        {/* Add Google Analytics tracking tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-25Y0G3QQE6"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-25Y0G3QQE6');
            `,
          }}
        ></script>
        {/* Google Analytics and Google Tag Manager components */}
        <GoogleAnalytics gaId="G-25Y0G3QQE6"/>
        <GoogleTagManager gtmId="G-25Y0G3QQE6"/> 
        {/* Page title, icon, and meta description */}
        <title>Global management consulting | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Global management consulting" />
      </Head>

      {/* Swiper Carousel */}
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src="/carousel-image1.jpg" alt="Carousel Image 1" />
          </div>
          <div className="swiper-slide">
            <img src="/carousel-image2.jpg" alt="Carousel Image 2" />
          </div>
          <div className="swiper-slide">
            <img src="/carousel-image3.jpg" alt="Carousel Image 3" />
          </div>
        </div>
        {/* Add Pagination */}
        <div className="swiper-pagination"></div>
        {/* Add Navigation */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>

      {/* Header */}
      <header className="bg-yellow-400 shadow-lg" style={{ backgroundColor: '#bdff03' }}>
        <div className="container mx-auto py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="mr-4">
            <a href="/">
              <Image src="/company-logo.svg" alt="Alpha Digital Group Logo" width={250} height={150} />
            </a>
          </div>
          {/* Navigation */}
          <nav>
            <ul className="flex space-x-6">
              {/* Add your navigation links */}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        {/* Add your main content */}
      </main>

      {/* Call to Action Section */}
      <div className="bg-cover bg-center min-h-screen/1.2" style={{ backgroundImage: 'url("/alpha-hero.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <div className="container mx-auto flex items-center justify-center h-full p-8">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-purple-600 mb-2">Join Us Today</h2>
            <p className="text-lg text-purple-600 mb-4">Unlock your potential with our services.</p>
            <a href="/marketplace">
              <button className="bg-purple-600 text-white font-bold px-8 py-3 rounded-full hover:bg-purple-700 transition duration-300 ease-in-out">Get Started</button>
            </a>
          </div>
        </div>
      </div>

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
            {/* Add your footer links */}
          </div>
          {/* Subscription Box */}
          <div className="mt-8 lg:mt-0 lg:order-2 lg:ml-auto self-start lg:ml-12">
            {/* Add your subscription box */}
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
}
