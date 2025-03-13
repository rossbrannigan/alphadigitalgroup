import React from "react";
import Image from "next/image";
import Head from "next/head";
import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google';

// Declare JSX namespace for custom elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': any;
    }
  }
}

const BlogPage: React.FC = () => {
  // Get today's date
  const today = new Date();
  // Format today's date as YYYY-MM-DD
  const formattedDate = today.toISOString().split('T')[0];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Title */}
      <Head>
        <GoogleAnalytics gaId="G-25Y0G3QQE6" />
        <GoogleTagManager gtmId="G-25Y0G3QQE6" /> 
        <title>{"Web3 Consulting & Services | Alpha Digital Group"}</title>
        <meta name="description" content="Explore Alpha Digital Group's Web3 consulting and services. We specialize in blockchain, DeFi, NFTs, and more. Transform your business with our expert guidance." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-yellow-400 shadow-lg" style={{ backgroundColor: '#bdff03' }}>
        <div className="container mx-auto py-4 flex items-center justify-between">
          <div className="mr-4">
            <a href="/">
              <Image src="/company-logo.svg" alt="Alpha Digital Group Logo" width={250} height={150} />
            </a>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="industries" className="text-purple-800 hover:text-black transition-colors duration-300">Industries</a></li>
              <li><a href="capabilities" className="text-purple-800 hover:text-black transition-colors duration-300">Capabilities</a></li>
              <li><a href="featured-insights" className="text-purple-800 hover:text-black transition-colors duration-300">Featured Insights</a></li>
              <li><a href="locations" className="text-purple-800 hover:text-black transition-colors duration-300">Locations</a></li>
              <li><a href="about-us" className="text-purple-800 hover:text-black transition-colors duration-300">About Us</a></li>
              <li><a href="https://www.linkedin.com/company/alphadigitalgroup" className="text-purple-800 hover:text-black transition-colors duration-300">Alpha Digital Blog</a></li>
              <li><a href="/hire-us" className="text-white bg-purple-600 py-2 px-4 rounded-full hover:bg-black hover:text-yellow-400 transition-colors duration-300">Get Started</a></li>
            </ul>
          </nav>
        </div>
      </header>

{/* Blog Content */}
<main className="container mx-auto py-8 grid grid-cols-3 gap-8">
  {/* Recent Posts */}
  <section className="col-span-2">
    {/* Note: This section contains the blog post */}
    <h2 className="text-2xl font-semibold text-purple-800 mb-4">Recent Posts</h2>
    <div className="text-black">
      <h3 className="text-lg font-semibold mb-2">Enhancing Airline Web Applications with NDC: Optimizing for Performance and Customer Experience ({formattedDate})</h3>
      {/* Introduction */}
      <h4 className="text-lg font-semibold mb-2">Introduction</h4>
      <p>
        As the airline industry continues to evolve, airlines are increasingly relying on advanced technologies to enhance their web applications and deliver superior customer experiences. One such technology is the New Distribution Capability (NDC), a standard developed by IATA to modernize airline distribution and enable richer, more personalized content and services. In this article, we will explore how airlines can optimize their web applications for enterprise APIs, specifically through NDC, to improve performance, scalability, and customer satisfaction.
      </p>
      {/* Include image for NDC explained */}
      <div>
        <img src="ndc-explained.png" alt="NDC Explained" className="mb-4" />
      </div>
      {/* Understanding NDC */}
      <h4 className="text-lg font-semibold mb-2">Understanding NDC Requirements: </h4>
      <p>
        Before integrating with NDC APIs, airlines must understand the requirements of the standard, including authentication methods, data formats, and transaction protocols. NDC APIs enable airlines to offer personalized offers, rich media content, and ancillary services directly to customers and travel agencies, requiring adherence to specific guidelines for data exchange and communication.
      </p>
      {/* Efficient API Consumption */}
      <h4 className="text-lg font-semibold mb-2">Efficient API Consumption: </h4>
      <p>
        Airlines can optimize API consumption by leveraging NDC APIs to access relevant data and services efficiently. By aggregating data, utilizing batch operations, and implementing caching mechanisms, airlines can minimize the number of API calls and reduce latency, ensuring a seamless booking experience for customers.
      </p>
      {/* Include other sections here */}
      {/* Authentication and Authorization */}
      <h4 className="text-lg font-semibold mb-2">Authentication and Authorization</h4>
      <p>
        Secure authentication and authorization mechanisms are essential for accessing NDC APIs. Airlines can implement robust authentication protocols, such as OAuth 2.0, to ensure secure access to NDC resources. Fine-grained authorization controls help restrict access to sensitive data and functionalities based on user roles and permissions, enhancing security and compliance with industry regulations.
      </p>
      {/* Include image for NDC airlines */}
      <div>
        <img src="ndc-airlines.webp" alt="NDC Airlines" className="mb-4" />
      </div>
      {/* Error Handling and Retry Policies */}
      <h4 className="text-lg font-semibold mb-2">Error Handling and Retry Policies</h4>
      <p>
        Effective error handling is critical for managing API errors and ensuring a smooth customer experience. Airlines should implement robust error handling mechanisms and configure retry policies with exponential backoff strategies to handle transient errors and mitigate the impact of temporary API failures, minimizing disruption to the booking process.
      </p>
      {/* Data Validation and Sanitization */}
      <h4 className="text-lg font-semibold mb-2">Data Validation and Sanitization</h4>
      <p>
        To prevent security vulnerabilities, airlines must implement data validation and sanitization measures when interacting with NDC APIs. By validating input data and sanitizing output data, airlines can protect against injection attacks and ensure that only properly formatted data is transmitted to and from the NDC API, maintaining data integrity and security.
      </p>
      {/* Optimized Data Transfer */}
      <h4 className="text-lg font-semibold mb-2">Optimized Data Transfer</h4>
      <p>
        Minimizing payload size and optimizing data transfer speeds are crucial for enhancing application performance. Airlines can optimize data transfer by requesting only necessary data fields from NDC endpoints and employing compression techniques like gzip to reduce bandwidth usage and improve transfer speeds, resulting in faster booking transactions and improved customer satisfaction.
      </p>
      {/* Performance Optimization */}
      <h4 className="text-lg font-semibold mb-2">Performance Optimization</h4>
      <p>
        Profiling API requests and optimizing critical operations can help airlines identify and address performance bottlenecks in their web applications. By implementing asynchronous processing and parallelization techniques, airlines can execute multiple API requests concurrently, improving responsiveness and user experience, especially during peak booking periods.
      </p>
      {/* Monitoring and Logging */}
      <h4 className="text-lg font-semibold mb-2">Monitoring and Logging</h4>
      <p>
        Continuous monitoring and logging are essential for maintaining NDC API health and detecting performance issues. Airlines should implement robust monitoring and logging mechanisms to track API usage, identify anomalies, and troubleshoot problems in real-time, ensuring reliable operation and seamless integration with NDC APIs.
      </p>
      {/* Scalability and Load Balancing */}
      <h4 className="text-lg font-semibold mb-2">Scalability and Load Balancing</h4>
      <p>
        Designing web applications for scalability is crucial for handling fluctuating NDC API traffic. Airlines can deploy multiple instances of their applications behind a load balancer and utilize auto-scaling capabilities provided by cloud platforms to dynamically adjust resources based on demand, ensuring optimal performance and reliability during peak travel seasons.
      </p>
      {/* Security Best Practices */}
      <h4 className="text-lg font-semibold mb-2">Security Best Practices</h4>
      <p>
        Adhering to security best practices is paramount for protecting sensitive customer data and ensuring compliance with industry regulations. Airlines should utilize TLS encryption for data in transit, securely store NDC API credentials, and regularly update software dependencies to patch vulnerabilities and mitigate security risks, safeguarding customer information and maintaining trust.
      </p>
      {/* Documentation and Testing */}
      <h4 className="text-lg font-semibold mb-2">Documentation and Testing</h4>
      <p>
        Comprehensive documentation and rigorous testing are essential for successful integration with NDC APIs. Airlines should maintain detailed documentation for NDC API usage and conduct thorough testing, including unit tests, integration tests, and end-to-end tests, to validate functionality, performance, and security aspects of API interactions, ensuring a seamless booking experience for customers.
      </p>
      {/* Conclusion */}
      <h4 className="text-lg font-semibold mb-2">Conclusion</h4>
      <p>
        Optimizing web applications for NDC APIs presents airlines with an opportunity to enhance performance, scalability, and customer experience in the increasingly competitive travel industry. By adhering to best practices for API consumption, authentication, error handling, data validation, and security, airlines can leverage NDC APIs to offer personalized booking experiences, rich content, and ancillary services, driving customer satisfaction and loyalty in the digital age.
      </p>
    </div>
  </section>
        {/* Vertical Navigation */}
        <aside className="col-span-1">
          <div className="bg-white p-4 rounded-lg shadow-md text-black">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Blog History</h3>
            <ul className="text-sm text-gray-800">
              <li className="mb-1">
                <a href="#" className="hover:text-purple-600">April 2024</a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-purple-600">March 2024</a>
              </li>
              {/* Add more months as needed */}
            </ul>
          </div>
        </aside>
      </main>

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
            <div className="grid grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-gray-300 mb-2 text-xs font-bold">Quick Links</h3>
                <ul className="text-gray-300">
                  <li className="mb-0.5"> {/* Reduced bottom margin */}
                    <a href="industries" className="hover:text-white text-xs">
                      Industries
                    </a>
                  </li>
                  <li className="mb-0.5"> {/* Reduced bottom margin */}
                    <a href="capabilities" className="hover:text-white text-xs">
                      Capabilities
                    </a>
                  </li>
                  <li className="mb-0.5"> {/* Reduced bottom margin */}
                    <a href="featured-insights" className="hover:text-white text-xs">
                      Featured Insights
                    </a>
                  </li>
                  <li className="mb-0.5"> {/* Reduced bottom margin */}
                    <a href="locations" className="hover:text-white text-xs">
                      Locations
                    </a>
                  </li>
                  <li className="mb-0.5"> {/* Reduced bottom margin */}
                    <a href="hire-us" className="hover:text-white text-xs">
                      Hire Us
                    </a>
                  </li>
                  <li className="mb-0.5"> {/* Reduced bottom margin */}
                    <a href="about-us" className="hover:text-white text-xs">
                      About Us
                    </a>
                  </li>
                  <li className="mb-0.5"> {/* Reduced bottom margin */}
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
                    📝 <a href="contact" className="ml-2 text-xs hover:text-white">Contact Us Form</a>
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
          {/* Subscription Box */}
          <div className="mt-8 lg:mt-0 lg:order-2 lg:ml-auto self-start lg:ml-12">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Subscribe to Our Newsletter
              </h2>
              <form data-netlify="true">
                <div className="flex items-center">
                  <input
                    type="email"
                    className="bg-gray-100 border-2 border-gray-300 rounded-l-md py-2 px-4 w-full text-black" 
                    placeholder="Your email address"
                  />
                  <button
                    type="submit"
                    className="bg-purple-600 text-white font-bold px-6 py-2 rounded-r-md hover:bg-purple-700 transition duration-300 ease-in-out"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
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
    </div>
  );
};

export default BlogPage;