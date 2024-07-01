import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        {/* Page title, icon, and meta description */}
        <title>Contact Us | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Global management consulting" />
      </Head>

      {/* Google Analytics and Tag Manager Scripts */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-25Y0G3QQE6`}
        strategy="afterInteractive"
        id="google-analytics-script"
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-25Y0G3QQE6');
          `,
        }}
        id="google-analytics-config-script"
      />
      <GoogleAnalytics gaId="G-25Y0G3QQE6" />
      <GoogleTagManager gtmId="G-25Y0G3QQE6" />

      {/* Header Section */}
      <header className="bg-white shadow-md p-4">
        {/* Your header content goes here */}
        <div className="container mx-auto">
          {/* Header content */}
          <h1 className="text-3xl font-semibold text-gray-800">Welcome to Alpha Digital Group</h1>
          {/* Add your header navigation or other elements */}
        </div>
      </header>

      {/* Main Content - Submission Form */}
      <main className="container mx-auto py-8 flex flex-wrap justify-center gap-8">
        {/* Form Section */}
        <section className="bg-white shadow-md rounded-md p-8 border-2" style={{ borderColor: '#bdff03', flex: '1' }}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <form name="contact" method="POST" data-netlify="true" className="space-y-4">
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name" className="block text-gray-700">Your Name: </label>
              <input type="text" id="name" name="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Your Email: </label>
              <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="role" className="block text-gray-700">Your Role: </label>
              <select id="role" name="role[]" multiple className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-opacity-50">
                <option value="leader">Senior Management / Leadership</option>
                <option value="investor">Investor</option>
                <option value="customer">Potential Customer</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">Message: </label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-opacity-50"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-opacity-50 transition-colors duration-300" style={{ backgroundColor: '#bdff03' }}>
                Send
              </button>
            </div>
          </form>
        </section>

        {/* Encouragement Text Section */}
        <section className="bg-white shadow-md rounded-md p-8 border-2" style={{ borderColor: '#bdff03', flex: '1' }}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Write to Us!</h2>
          <div className="flex justify-center mb-4">
            {/* Replace with your actual image */}
            <img src="/images/contact-us.png" alt="Placeholder Image" width={500} height={300} />
          </div>
          <p className="text-gray-700">
            We would love to hear from you! Whether you have questions, comments, or feedback, feel free to reach out to us using the form on the left. Our team is here to assist you.
          </p>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
