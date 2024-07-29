import React from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import ServiceCardList from "./ServiceCardList";

const services = [
  {
    title: "Airline Consulting Services",
    description: "Specialized consultancy services for the aviation sector, offering tailored solutions for airlines of all sizes.",
    priceTableId: "prctbl_1PhyiL2KKbBgfCwq8wOx8c7f",
  },
  {
    title: "Hotel Consulting Services",
    description: "Comprehensive consulting services for the hospitality industry, from boutique hotels to luxury resorts.",
    priceTableId: "prctbl_1PhybP2KKbBgfCwq3YFGBAoD",
  },
  {
    title: "Web3 Services",
    description: "Cutting-edge solutions leveraging blockchain, smart contracts, and decentralized applications.",
    priceTableId: "prctbl_1P1gWs2KKbBgfCwqqRvQBeFU",
  },
  {
    title: "Consultancy as a Service",
    description: "Flexible subscription models for on-demand consultancy across various industries and capabilities.",
    priceTableId: "prctbl_1P0TaV2KKbBgfCwq4A907cBj",
  },
  {
    title: "Coaching Services",
    description: "Personalized coaching to help you achieve your professional and personal goals.",
    priceTableId: "prctbl_1PhyPR2KKbBgfCwq8LQ0ZqbG", // Replace this with the actual pricing table ID for coaching
  },
  {
    title: "Web Development Services",
    description: "web development services tailored for airlines, hotels, and travel companies. We offer custom website design, e-commerce integration, mobile app development, search engine optimization (SEO), and content management systems (CMS) to boost your online presence and drive sales.",
    priceTableId: "prctbl_1P6vBG2KKbBgfCwqezujW7zj", // ID for the new strip product
  },
];

export default function MarketplacePage() {
  return (
    <div className="bg-gradient-to-b from-purple-100 to-white min-h-screen">
      <GoogleAnalytics gaId="G-25Y0G3QQE6" />
      <GoogleTagManager gtmId="G-25Y0G3QQE6" />
      
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-12">
          Our Services Marketplace
        </h1>
        
        <ServiceCardList services={services} />
      </main>
    </div>
  );
}
