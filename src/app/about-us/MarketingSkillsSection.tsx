"use client";

import React from "react";
import { SiGoogleanalytics, SiGoogleads, SiGoogletagmanager, SiSemrush, SiAhrefs, SiMoz, SiUbersuggest, SiMailchimp, SiConstantcontact, SiHubspot, SiZapier, SiTrello, SiSlack, SiMicrosoftexcel, SiMicrosoftpowerpoint } from "react-icons/si";

const marketingSkills = [
  {
    category: "Analytics & Reporting",
    skills: [
      { name: "Google Analytics 4", icon: <SiGoogleanalytics /> },
      { name: "Google Tag Manager", icon: <SiGoogletagmanager /> },
      { name: "SEMrush", icon: <SiSemrush /> },
      { name: "Ahrefs", icon: <SiAhrefs /> },
      { name: "Moz", icon: <SiMoz /> },
      { name: "Ubersuggest", icon: <SiUbersuggest /> },
    ],
  },
  {
    category: "Advertising & PPC",
    skills: [
      { name: "Google Ads", icon: <SiGoogleads /> },
      { name: "Facebook Ads", icon: <SiGoogleads /> },
      { name: "LinkedIn Ads", icon: <SiGoogleads /> },
      { name: "Microsoft Ads", icon: <SiGoogleads /> },
    ],
  },
  {
    category: "Email Marketing",
    skills: [
      { name: "Mailchimp", icon: <SiMailchimp /> },
      { name: "Constant Contact", icon: <SiConstantcontact /> },
      { name: "HubSpot", icon: <SiHubspot /> },
    ],
  },
  {
    category: "Automation & Productivity",
    skills: [
      { name: "Zapier", icon: <SiZapier /> },
      { name: "Trello", icon: <SiTrello /> },
      { name: "Slack", icon: <SiSlack /> },
    ],
  },
  {
    category: "Office & Presentation",
    skills: [
      { name: "Microsoft Excel", icon: <SiMicrosoftexcel /> },
      { name: "Microsoft PowerPoint", icon: <SiMicrosoftpowerpoint /> },
    ],
  },
];

const MarketingSkillsSection: React.FC = () => {
  return (
    <section className="mb-16 bg-white rounded-lg shadow-xl p-8 w-full">
      <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">Our Marketing Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {marketingSkills.map((category, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4 shadow-md h-full">
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

export default MarketingSkillsSection;
