'use client';

import React, { useState } from "react";
import Image from 'next/image';
import Head from 'next/head';
import { Mail, Phone, MessageCircle, DollarSign, Briefcase } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    // @ts-ignore
    if (window.gtag) {
      // @ts-ignore
      window.gtag('event', 'submit_form', {
        'event_category': 'Contact',
        'event_label': 'Contact Form Submission'
      });
    }

    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });
      if (response.ok) {
        alert('Form submitted successfully!');
        // Reset form here if needed
      } else {
        alert('Form submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Alpha Digital Group | Expert Digital Consulting Services</title>
        <meta name="description" content="Get in touch with Alpha Digital Group for expert digital consulting, global reach, and innovative solutions. Transform your business with our tailored services." />
        <meta name="keywords" content="Alpha Digital Group, digital consulting, business transformation, expert consulting, global reach, innovative solutions" />
        <link rel="canonical" href="https://www.alphadigitalgroup.co/contact" />
        <meta property="og:title" content="Contact Alpha Digital Group | Expert Digital Consulting Services" />
        <meta property="og:description" content="Get in touch with Alpha Digital Group for expert digital consulting, global reach, and innovative solutions. Transform your business with our tailored services." />
        <meta property="og:url" content="https://www.alphadigitalgroup.co/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Alpha Digital Group | Expert Digital Consulting Services" />
        <meta name="twitter:description" content="Get in touch with Alpha Digital Group for expert digital consulting, global reach, and innovative solutions. Transform your business with our tailored services." />
      </Head>

      <div className="bg-gradient-to-b from-purple-50 to-purple-100 min-h-screen">
        <header className="bg-white shadow-md p-4 sm:p-6">
          <div className="container mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-800">Alpha Digital Group</h1>
          </div>
        </header>

        <main className="container mx-auto py-8 sm:py-12 px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden lg:flex">
            <div className="lg:flex-1 p-6 sm:p-8 md:p-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-4 sm:mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">We are here to help you transform your business. Reach out today!</p>
              <form name="contact" method="POST" data-netlify="true" className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                  <input type="text" id="name" name="name" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                  <input type="email" id="email" name="email" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out" />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700">Your Role</label>
                  <select id="role" name="role[]" multiple required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out">
                    <option value="leader">Senior Management / Leadership</option>
                    <option value="investor">Investor</option>
                    <option value="customer">Potential Customer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows={4} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out"></textarea>
                </div>
                <div>
                  <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-2 sm:py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:flex-1 bg-purple-700 text-white p-6 sm:p-8 md:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Why Choose Us?</h3>
              <ul className="space-y-4 sm:space-y-6">
                <li className="flex items-center">
                  <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" aria-hidden="true" />
                  <span>Expert Consulting</span>
                </li>
                <li className="flex items-center">
                  <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" aria-hidden="true" />
                  <span>Global Reach</span>
                </li>
                <li className="flex items-center">
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" aria-hidden="true" />
                  <span>Innovative Solutions</span>
                </li>
              </ul>
              <div className="mt-6 sm:mt-8 hidden sm:block">
                <Image src="/images/contact-us.png" alt="Alpha Digital Group Contact Us" width={400} height={300} className="rounded-lg shadow-lg" />
              </div>
              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                <h4 className="text-lg sm:text-xl font-semibold">Alternative Contact Options:</h4>
                <p className="text-sm sm:text-base">
                  <Mail className="inline mr-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  <span>For RFPs and business queries: </span>
                  <a href="mailto:ross@alphadigitalgroup" className="underline">ross@alphadigitalgroup</a>
                </p>
                <p className="text-sm sm:text-base">
                  <MessageCircle className="inline mr-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  <span>General questions: </span>
                  <a href="https://knowledge.alphadigitalgroup.co/" target="_blank" rel="noopener noreferrer" className="underline">Knowledge Base & Chat Bot</a>
                </p>
                <p className="text-sm sm:text-base">
                  <Phone className="inline mr-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  <span>Prefer WhatsApp? </span>
                  <a href="https://wa.me/66828362713" target="_blank" rel="noopener noreferrer" className="underline">Click here</a>
                </p>
              </div>
              <div className="mt-6 sm:mt-8">
                <p className="text-xs sm:text-sm">We encourage all forms of business opportunities, ideas, and potential partnerships. We have several stealth projects that may be suitable for angel investors and venture capital, which may also offer employment opportunities from time to time.</p>
                <p className="text-xs sm:text-sm mt-2 sm:mt-4">For all job-related inquiries, please visit our <a href="https://alpha-digital-group.breezy.hr/" target="_blank" rel="noopener noreferrer" className="underline">careers page</a> for the latest opportunities.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ContactPage;