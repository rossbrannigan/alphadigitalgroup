import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { Plane, Rocket, Cpu, Globe, Video, ChevronRight } from 'lucide-react';

const IndustriesPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-purple-100 min-h-screen">
      <Head>
        <title>Industries We Serve | Global Management Consulting | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Transforming businesses across Airlines, Aviation, Technology, Consumer Internet, and Media industries through expert management consulting." />
      </Head>

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

      <header className="h-16"></header>

      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="mb-16 text-center" id="intro">
          <h1 className="text-4xl sm:text-5xl font-bold text-purple-800 mb-6">Transforming Industries with Alpha Digital Group</h1>
          <p className="text-xl text-purple-700 max-w-3xl mx-auto">
            Empowering businesses across diverse sectors with cutting-edge management consulting services. Discover how we drive innovation, optimize operations, and catalyze success in today&apos;s dynamic global market.
          </p>
        </section>

        <section className="mb-16" id="industries">
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-purple-800 mb-6">Industries We Serve</h2>
            <p className="text-lg text-purple-700 mb-8">
              Our multidisciplinary expertise spans across various sectors, delivering tailored solutions to drive growth, efficiency, and innovation:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Airlines", icon: Plane, id: "airlines" },
                { name: "Aviation", icon: Rocket, id: "aviation" },
                { name: "Technology", icon: Cpu, id: "technology" },
                { name: "Consumer Internet", icon: Globe, id: "consumer-internet" },
                { name: "Media", icon: Video, id: "media" },
              ].map((industry) => (
                <a
                  key={industry.id}
                  href={`#${industry.id}`}
                  className="flex items-center p-4 bg-purple-50 rounded-lg transition-all hover:bg-purple-100 hover:shadow-md"
                >
                  <industry.icon className="w-8 h-8 text-purple-600 mr-3" />
                  <span className="text-lg font-medium text-purple-800">{industry.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
        
        {["airlines", "aviation", "technology", "consumer-internet", "media"].map((id) => (
          <section key={id} className="mb-12" id={id}>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-purple-800 mb-4 capitalize">{id.replace('-', ' ')}</h2>
              <p className="text-purple-700 mb-4">
                {getIndustryContent(id)}
              </p>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">Key Services:</h3>
              <ul className="list-disc list-inside text-purple-600 mb-4">
                {getIndustryServices(id).map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
              <button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center py-2 px-4 rounded">
                Learn More <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </section>
        ))}

        <section className="mb-16" id="why-choose-us">
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-purple-800 mb-6">Why Choose Alpha Digital Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-purple-700 mb-2">Industry Expertise</h3>
                <p className="text-purple-600">Our consultants bring deep industry knowledge and hands-on experience to every project.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-700 mb-2">Innovative Solutions</h3>
                <p className="text-purple-600">We leverage cutting-edge technologies and methodologies to deliver transformative results.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-700 mb-2">Global Perspective</h3>
                <p className="text-purple-600">Our international team brings diverse insights to solve complex challenges.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-700 mb-2">Tailored Approach</h3>
                <p className="text-purple-600">We customize our strategies to meet the unique needs of each client and industry.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const getIndustryContent = (id: string): string => {
  switch (id) {
    case 'airlines':
      return "We empower airlines to soar above the competition by optimizing operations, enhancing customer experiences, and navigating the complex regulatory landscape of the aviation industry. Our tailored solutions address the unique challenges faced by carriers of all sizes, from legacy airlines to low-cost carriers.";
    case 'aviation':
      return "Our comprehensive aviation consulting services span the entire ecosystem, covering airport management, air traffic control optimization, and sustainable aviation practices. We help stakeholders adapt to evolving technologies, improve safety measures, and implement eco-friendly initiatives to shape the future of air travel.";
    case 'technology':
      return "In the rapidly evolving world of technology, we assist companies in staying ahead of the curve through digital transformation, AI integration, and innovation management. Our expertise covers emerging technologies like blockchain, IoT, and edge computing, enabling clients to harness these advancements for competitive advantage.";
    case 'consumer-internet':
      return "We guide consumer internet companies in leveraging data analytics, improving user experiences, and developing robust growth strategies. Our approach combines deep technical knowledge with consumer behavior insights to help platforms scale efficiently, monetize effectively, and build lasting customer relationships.";
    case 'media':
      return "Our media industry expertise helps clients navigate the shift to digital platforms, optimize content strategies, and develop new revenue streams. We address challenges in content creation, distribution, and monetization, enabling media companies to thrive in an increasingly fragmented and competitive landscape.";
    default:
      return "We provide tailored consulting services to help businesses in this industry thrive and adapt to changing market conditions, leveraging our deep expertise and innovative approaches to solve complex challenges.";
  }
};

const getIndustryServices = (id: string): string[] => {
  switch (id) {
    case 'airlines':
      return [
        "Route optimization and network planning",
        "Customer experience enhancement",
        "Revenue management and pricing strategies",
        "Operational efficiency improvements",
        "Digital transformation and technology integration"
      ];
    case 'aviation':
      return [
        "Airport infrastructure development",
        "Air traffic management modernization",
        "Sustainable aviation fuel adoption",
        "Aviation safety and security enhancements",
        "Regulatory compliance and policy advisory"
      ];
    case 'technology':
      return [
        "Digital transformation roadmaps",
        "AI and machine learning integration",
        "Cloud migration and optimization",
        "Cybersecurity strategy and implementation",
        "Emerging technology adoption (IoT, blockchain, edge computing)"
      ];
    case 'consumer-internet':
      return [
        "User acquisition and retention strategies",
        "Data analytics and personalization",
        "Platform scalability and performance optimization",
        "Monetization strategy development",
        "User experience (UX) design and optimization"
      ];
    case 'media':
      return [
        "Content strategy and production optimization",
        "Digital platform development and integration",
        "Audience engagement and retention strategies",
        "Ad tech and programmatic advertising solutions",
        "Streaming service launch and optimization"
      ];
    default:
      return [
        "Strategic planning and execution",
        "Operational efficiency improvements",
        "Digital transformation initiatives",
        "Market analysis and competitive positioning",
        "Innovation management and new product development"
      ];
  }
};

export default IndustriesPage;