import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { ShoppingCart, Truck, CreditCard, BarChart2, Package, Search, PieChart, GitBranch } from 'lucide-react';

const EcommerceServicesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>E-commerce Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Expert E-commerce Services for Online Business Growth and Optimization" />
      </Head>

      {/* Google Analytics and Tag Manager Scripts */}
      <Script
        id="google-analytics-script"
        src="https://www.googletagmanager.com/gtag/js?id=G-25Y0G3QQE6"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics-config-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-25Y0G3QQE6');
          `,
        }}
      />
      <GoogleAnalytics gaId="G-25Y0G3QQE6" />
      <GoogleTagManager gtmId="G-25Y0G3QQE6" />

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 mt-16">
        <div className="space-y-12">
          <section id="intro">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">E-commerce Services</h1>
            <p className="text-lg text-gray-700">
              At Alpha Digital Group, we specialize in comprehensive e-commerce solutions that drive online business growth and maximize digital sales potential. Our expert team leverages cutting-edge technologies and industry-leading strategies to create powerful, user-friendly online shopping experiences that convert browsers into loyal customers.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our E-commerce Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <ShoppingCart size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">E-commerce Platform Development</h3>
                </div>
                <p className="text-white">We build robust, scalable e-commerce platforms tailored to your unique business needs.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Search size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">SEO for E-commerce</h3>
                </div>
                <p className="text-white">We optimize your online store for search engines to drive organic traffic and increase visibility.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <CreditCard size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Payment Gateway Integration</h3>
                </div>
                <p className="text-white">We integrate secure, efficient payment solutions to streamline the checkout process.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Truck size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Logistics and Fulfillment Optimization</h3>
                </div>
                <p className="text-white">We enhance your order fulfillment process to ensure timely deliveries and customer satisfaction.</p>
              </div>
            </div>
          </section>

          <section id="ecommerce-expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">E-commerce Expertise</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Alpha Digital Group, we pride ourselves on our extensive expertise in various aspects of e-commerce. Our proficiency includes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">User Experience (UX) Design for E-commerce</li>
              <li className="text-lg text-gray-700">Conversion Rate Optimization (CRO)</li>
              <li className="text-lg text-gray-700">E-commerce Analytics and Data-Driven Decision Making</li>
              <li className="text-lg text-gray-700">Mobile Commerce (M-commerce) Optimization</li>
              <li className="text-lg text-gray-700">Multi-channel and Omni-channel Retail Strategies</li>
              <li className="text-lg text-gray-700">E-commerce Security and Fraud Prevention</li>
              <li className="text-lg text-gray-700"><a href="/services/digital/ecommerce/internationalization">Internationalization and i18n</a></li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We specialize in developing custom e-commerce strategies tailored to every industry, ensuring that our solutions perfectly align with your specific business context and online sales objectives.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Power of Effective E-commerce</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in e-commerce provides immense value to businesses seeking to establish or enhance their online presence. Heres why it matters:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Global Reach:</span> Access customers worldwide, 24/7, without geographical limitations.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Scalability:</span> Easily scale your business to handle increased demand and growth.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Cost-Effectiveness:</span> Reduce operational costs compared to traditional brick-and-mortar stores.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Data-Driven Insights:</span> Gather valuable customer data to inform business decisions and personalize experiences.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Competitive Advantage:</span> Stay ahead in the digital marketplace with cutting-edge e-commerce capabilities.
              </li>
            </ul>
          </section>

          <section id="tech-stack">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our E-commerce Technology Stack</h2>
            <p className="text-lg text-gray-700 mb-4">
              We leverage cutting-edge technologies to deliver exceptional e-commerce results:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <BarChart2 size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Advanced e-commerce platforms like Shopify, WooCommerce, and Magento</p>
              </div>
              <div className="flex items-center">
                <PieChart size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">AI-powered product recommendation engines for personalized shopping experiences</p>
              </div>
              <div className="flex items-center">
                <GitBranch size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Headless commerce architectures for flexible, scalable storefronts</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in these modern technologies allows us to create comprehensive e-commerce solutions that drive real results and maximize your online business potential.
            </p>
          </section>

          <section id="ecommerce-tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">E-commerce Tools We Use</h2>
            <p className="text-lg text-gray-700 mb-4">
              We utilize a range of sophisticated tools to develop and optimize effective e-commerce solutions:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Google Analytics for e-commerce tracking and insights</li>
              <li className="text-lg text-gray-700">Hotjar for heatmaps and user behavior analysis</li>
              <li className="text-lg text-gray-700">Optimizely for A/B testing and conversion optimization</li>
              <li className="text-lg text-gray-700">Stripe and PayPal for secure payment processing</li>
              <li className="text-lg text-gray-700">Mailchimp for email marketing automation</li>
              <li className="text-lg text-gray-700">Yotpo for customer reviews and user-generated content</li>
            </ul>
            <p className="text-lg text-gray-700">
              Our proficiency with these tools enables us to create data-driven e-commerce strategies that optimize your online presence and drive sustainable growth in the digital marketplace.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our E-commerce Development Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Discovery and Requirements Gathering: Understanding your business needs and e-commerce goals</li>
              <li className="text-lg text-gray-700">Platform Selection: Choosing the right e-commerce platform based on your requirements</li>
              <li className="text-lg text-gray-700">UX/UI Design: Creating user-friendly, conversion-optimized store layouts</li>
              <li className="text-lg text-gray-700">Development and Integration: Building your e-commerce platform and integrating necessary tools</li>
              <li className="text-lg text-gray-700">Payment and Shipping Setup: Configuring secure payment gateways and efficient shipping methods</li>
              <li className="text-lg text-gray-700">Content Population: Adding products, categories, and relevant content to your store</li>
              <li className="text-lg text-gray-700">Testing and Quality Assurance: Ensuring your e-commerce platform functions flawlessly</li>
              <li className="text-lg text-gray-700">Launch and Marketing: Going live with your store and implementing marketing strategies</li>
              <li className="text-lg text-gray-700">Ongoing Optimization: Continuously improving your e-commerce performance based on data and user feedback</li>
            </ol>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Online Sales?</h2>
              <p className="text-xl mb-6">Lets create a powerful e-commerce solution that drives growth and delights your customers.</p>
              <a
                href="mailto:ross@alphadigitalgroup.co"
                className="inline-block bg-white text-[rgba(128,19,176,255)] py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Contact Us Today
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default EcommerceServicesPage;