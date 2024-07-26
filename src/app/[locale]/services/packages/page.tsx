import React from "react";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { FiMessageCircle } from 'react-icons/fi';
import { AiOutlineLineChart, AiOutlineTool, AiOutlineRise, AiOutlineTeam, AiOutlineBank } from 'react-icons/ai';
import { useTranslations } from 'next-intl';
import { CheckCircleIcon } from 'lucide-react';

interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
}

const PackagesPage = () => {
  const digitalMarketingPackages: Package[] = [
    {
      name: "Starter",
      price: "$2,500",
      description: "Perfect for small businesses looking to establish their digital presence.",
      features: [
        "Basic Marketing Strategy",
        "Social Media Management (2 platforms)",
        "Monthly Performance Report",
        "Basic SEO Optimization",
        "Email Marketing (1 campaign/month)"
      ]
    },
    {
      name: "Growth",
      price: "$5,000",
      description: "Ideal for growing businesses aiming to expand their market reach.",
      features: [
        "Comprehensive Marketing Strategy",
        "Social Media Management (4 platforms)",
        "Bi-weekly Performance Reports",
        "Advanced SEO Optimization",
        "Content Marketing (2 pieces/month)",
        "PPC Campaign Management",
        "Email Marketing (2 campaigns/month)"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large businesses with complex needs.",
      features: [
        "Full-Scale Marketing & Brand Strategy",
        "Social Media Management (All relevant platforms)",
        "Weekly Performance Reports",
        "Enterprise-level SEO Optimization",
        "Content Marketing (4+ pieces/month)",
        "Advanced PPC & Retargeting Campaigns",
        "Email Marketing Automation",
        "Conversion Rate Optimization",
        "Dedicated Account Manager"
      ]
    }
  ];

  const commercialStrategyPackages: Package[] = [
    {
      name: "Market Entry",
      price: "$10,000",
      description: "Ideal for businesses looking to enter new markets or launch new products.",
      features: [
        "Market Analysis & Research",
        "Competitor Landscape Evaluation",
        "Entry Strategy Development",
        "Risk Assessment",
        "Initial Go-to-Market Plan"
      ]
    },
    {
      name: "Growth Accelerator",
      price: "$20,000",
      description: "Perfect for established businesses aiming to scale and increase market share.",
      features: [
        "Comprehensive Business Model Analysis",
        "Revenue Stream Optimization",
        "Pricing Strategy Refinement",
        "Sales Funnel Optimization",
        "Growth Roadmap Development",
        "Quarterly Performance Reviews"
      ]
    },
    {
      name: "Enterprise Transformation",
      price: "Custom",
      description: "Tailored for large organizations seeking comprehensive commercial transformation.",
      features: [
        "End-to-End Commercial Strategy Overhaul",
        "Business Portfolio Optimization",
        "Market Expansion Planning",
        "Long-term Strategic Partnerships Development",
        "Digital Transformation Integration",
        "Continuous Strategy Adjustment & Support"
      ]
    }
  ];

  const interimLeadershipPackages: Package[] = [
    {
      name: "Interim CMO",
      price: "$25,000",
      description: "Expert leadership for your marketing department during transitions or for specific projects.",
      features: [
        "Strategic Marketing Leadership",
        "Brand Strategy Development",
        "Marketing Team Management",
        "Budget Optimization",
        "Performance Metrics Implementation",
        "Stakeholder Communication"
      ]
    },
    {
      name: "Interim CDO",
      price: "$30,000",
      description: "Drive digital transformation and innovation with experienced digital leadership.",
      features: [
        "Digital Strategy Formulation",
        "Technology Stack Assessment",
        "Digital Team Leadership",
        "Data-Driven Decision Making",
        "Digital Product Development",
        "Change Management"
      ]
    },
    {
      name: "Interim CRO",
      price: "Custom",
      description: "Maximize revenue growth with seasoned revenue operations leadership.",
      features: [
        "Revenue Strategy Development",
        "Sales Process Optimization",
        "Customer Success Management",
        "Revenue Forecasting",
        "Cross-Functional Alignment",
        "Performance Analysis & Reporting"
      ]
    }
  ];

  const digitalStrategyPackages: Package[] = [
    {
      name: "Essentials",
      price: "$15,000",
      description: "Perfect for businesses starting their digital transformation journey.",
      features: [
        "Digital Transformation Assessment",
        "Basic AI Integration Strategy",
        "Customer Journey Mapping",
        "Data Audit & Basic Analytics Setup",
        "E-commerce Readiness Evaluation"
      ]
    },
    {
      name: "Advanced",
      price: "$30,000",
      description: "Ideal for businesses looking to significantly enhance their digital capabilities.",
      features: [
        "Comprehensive Digital Transformation Roadmap",
        "Advanced AI & Machine Learning Strategy",
        "Omnichannel Customer Experience Design",
        "Full Data Strategy & Analytics Implementation",
        "Digital Product Development Strategy",
        "E-commerce Optimization Plan"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations seeking full-scale digital innovation.",
      features: [
        "End-to-End Digital Transformation Consulting",
        "Enterprise-wide AI & Automation Strategy",
        "Predictive Customer Experience Modeling",
        "Advanced Data Governance & Big Data Strategy",
        "IoT & Emerging Tech Integration Planning",
        "Global E-commerce & Digital Product Strategy"
      ]
    }
  ];

  const renderPackages = (packages: Package[], title: string, icon: React.ReactNode, bgColor: string) => (
    <section className={`mb-20 py-16 ${bgColor} rounded-3xl shadow-xl`}>
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
        {icon}
        <span className="ml-4">{title}</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8 px-8">
        {packages.map((pkg, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col justify-between">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{pkg.name}</h3>
              <p className="text-4xl font-bold text-[rgba(133,17,180,255)] mb-4">{pkg.price}<span className="text-lg text-gray-500">/month</span></p>
              <p className="text-gray-600 mb-6">{pkg.description}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-gray-600">
                    <CheckCircleIcon className="h-5 w-5 text-[rgba(133,17,180,255)] mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-8 pb-8 mt-auto">
              <Link href="/contact" passHref>
                <button className="w-full bg-[rgba(133,17,180,255)] text-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <Head>
        <title>Digital Marketing, Commercial Strategy & Interim Leadership | Alpha Digital Group</title>
        <meta name="description" content="Elevate your business with Alpha Digital Group's comprehensive solutions. From digital marketing and commercial strategy to interim leadership, our tailored packages drive growth and maximize ROI." />
        <link rel="icon" href="/favicon.ico" />

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
      </Head>

      <GoogleAnalytics gaId="G-25Y0G3QQE6"/>
      <GoogleTagManager gtmId="G-25Y0G3QQE6"/>

      {/* Placeholder for header */}
      <header className="h-16 bg-white shadow-md"></header>

      <main className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-16">
        <section className="text-center mb-16" id="intro">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Our Service Packages</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored solutions to elevate your digital presence, accelerate commercial growth, and provide expert leadership. Choose the perfect package to drive your business forward.
          </p>
        </section>

        {renderPackages(digitalMarketingPackages, "Digital Marketing Packages", <AiOutlineLineChart className="text-5xl text-[rgba(133,17,180,255)]" />, "bg-purple-50")}
        {renderPackages(commercialStrategyPackages, "Commercial Strategy Packages", <AiOutlineRise className="text-5xl text-[rgba(133,17,180,255)]" />, "bg-blue-50")}
        {renderPackages(interimLeadershipPackages, "Interim Leadership Packages", <AiOutlineTeam className="text-5xl text-[rgba(133,17,180,255)]" />, "bg-green-50")}
        {renderPackages(digitalStrategyPackages, "Digital Strategy Packages", <AiOutlineTool className="text-5xl text-[rgba(133,17,180,255)]" />, "bg-yellow-50")}

        <section className="mt-20 text-center bg-gradient-to-r from-[rgba(133,17,180,0.1)] to-[rgba(189,255,3,0.1)] p-12 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Not sure which package is right for you?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of experts is here to help you choose the perfect solution for your business needs. 
            Let&apos;s create a strategy that drives results.
          </p>
          <div className="flex flex-col items-center">
            <div className="mb-6 relative w-48 h-48 overflow-hidden rounded-full">
              <Image
                src="/default-avatar.png"
                alt="Ross"
                layout="fill"
                objectFit="cover"
                className="filter grayscale"
              />
            </div>
            <p className="text-2xl font-semibold text-gray-800 mb-6">Ross</p>
            <Link href="/contact" passHref>
              <button className="bg-[rgba(189,255,3,255)] text-gray-900 py-3 px-8 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300 transform hover:scale-105 flex items-center justify-center">
                <FiMessageCircle className="mr-2" /> Schedule a Consultation
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PackagesPage;