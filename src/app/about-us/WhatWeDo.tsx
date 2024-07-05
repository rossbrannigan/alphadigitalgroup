"use client";

import React from "react";
import { FaSearchengin, FaMoneyBillAlt, FaChartLine, FaDatabase } from "react-icons/fa";

const WhatWeDo: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-100 rounded-lg p-6 shadow-md flex flex-col items-center text-center">
            <span className="text-purple-800 text-4xl mb-4">
              <FaSearchengin />
            </span>
            <h3 className="text-xl font-bold mb-2">Digital Transformation</h3>
            <p className="text-gray-700">
              We drive cutting-edge digital transformation through SEO, PPC, SMM, and content creation.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 shadow-md flex flex-col items-center text-center">
            <span className="text-purple-800 text-4xl mb-4">
              <FaMoneyBillAlt />
            </span>
            <h3 className="text-xl font-bold mb-2">Commercial Success</h3>
            <p className="text-gray-700">
              We unlock commercial success through CRM, sales automation, and account management.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 shadow-md flex flex-col items-center text-center">
            <span className="text-purple-800 text-4xl mb-4">
              <FaChartLine />
            </span>
            <h3 className="text-xl font-bold mb-2">Impactful Marketing</h3>
            <p className="text-gray-700">
              We craft impactful marketing strategies through email campaigns, CRO, and brand identity.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 shadow-md flex flex-col items-center text-center">
            <span className="text-purple-800 text-4xl mb-4">
              <FaDatabase />
            </span>
            <h3 className="text-xl font-bold mb-2">Data and Analytics</h3>
            <p className="text-gray-700">
              We harness the power of data and analytics to drive informed, data-driven decisions.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-700">
            Whether you are looking to revolutionize your digital presence, unlock new commercial opportunities, or amplify your marketing efforts, our agency is here to be your trusted partner in driving cutting-edge solutions that deliver tangible results.
          </p>
          <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-3 px-6 rounded-lg mt-4">
            Lets Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
