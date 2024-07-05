"use client";

import React from "react";
import { FaDatabase, FaLaptopCode, FaChartLine, FaCloud, FaMobileAlt, FaShieldAlt, FaProjectDiagram } from "react-icons/fa";
import { SiMicrosoftexcel, SiGoogleanalytics, SiAdobexd, SiFigma, SiShopify, SiTensorflow, SiKubernetes, SiAmazonaws, SiEthereum, SiDjango } from "react-icons/si";

const skills = [
  {
    category: "Office & Analytics",
    skills: [
      { name: "Microsoft Office", icon: <SiMicrosoftexcel /> },
      { name: "Google Analytics 4", icon: <SiGoogleanalytics /> },
      { name: "Tag Manager", icon: <SiGoogleanalytics /> },
      // Add more skills here
    ],
  },
  {
    category: "Ad Tech & Affiliate Networks",
    skills: [
      { name: "Google Ad Manager", icon: <FaChartLine /> },
      { name: "Amazon", icon: <FaChartLine /> },
      { name: "Trade Desk", icon: <FaChartLine /> },
      // Add more skills here
    ],
  },
  {
    category: "Front & Back-end",
    skills: [
      { name: "HTML", icon: <FaLaptopCode /> },
      { name: "CSS", icon: <FaLaptopCode /> },
      { name: "JavaScript", icon: <FaLaptopCode /> },
      { name: "Node.js", icon: <FaLaptopCode /> },
      { name: "React", icon: <FaLaptopCode /> },
      { name: "Vue", icon: <FaLaptopCode /> },
      { name: "Angular", icon: <FaLaptopCode /> },
      // Add more skills here
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: <SiAmazonaws /> },
      { name: "Azure", icon: <FaCloud /> },
      { name: "GCP", icon: <FaCloud /> },
      { name: "Docker", icon: <FaCloud /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      // Add more skills here
    ],
  },
  {
    category: "Cyber Security",
    skills: [
      { name: "Kali", icon: <FaShieldAlt /> },
      { name: "Distil", icon: <FaShieldAlt /> },
      { name: "Cloudflare", icon: <FaShieldAlt /> },
      // Add more skills here
    ],
  },
  {
    category: "Data Science & AI",
    skills: [
      { name: "NumPy", icon: <FaDatabase /> },
      { name: "Pandas", icon: <FaDatabase /> },
      { name: "Scikit-learn", icon: <FaDatabase /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      // Add more skills here
    ],
  },
  {
    category: "Project Management",
    skills: [
      { name: "Figma", icon: <SiFigma /> },
      { name: "Adobe XD", icon: <SiAdobexd /> },
      { name: "GitHub", icon: <FaProjectDiagram /> },
      // Add more skills here
    ],
  },
  // Add more categories and skills here
];

const DigitalSkillsSection: React.FC = () => {
  return (
    <section className="mb-16 bg-white rounded-lg shadow-xl p-8 w-full">
      <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">Our Digital Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((category, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-bold mb-4">{category.category}</h3>
            <ul>
              {category.skills.map((skill, idx) => (
                <li key={idx} className="flex items-center mb-2">
                  <span className="text-purple-800 text-xl mr-2">{skill.icon}</span>
                  <span className="text-gray-700">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalSkillsSection;
