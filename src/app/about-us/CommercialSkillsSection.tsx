"use client";

import React from "react";
import { SiSalesforce, SiZoho, SiSap, SiOracle, SiMicrosoft, SiSugarcrm, SiHubspot, SiZendeskcrm, SiSalesmate, SiPipedrive, SiCrm } from "react-icons/si";

const commercialSkills = [
  {
    category: "CRM Systems",
    skills: [
      { name: "Salesforce", icon: <SiSalesforce /> },
      { name: "Zoho CRM", icon: <SiZoho /> },
      { name: "SAP CRM", icon: <SiSap /> },
      { name: "Oracle CRM", icon: <SiOracle /> },
      { name: "Microsoft Dynamics CRM", icon: <SiMicrosoft /> },
      { name: "SugarCRM", icon: <SiSugarcrm /> },
      { name: "HubSpot CRM", icon: <SiHubspot /> },
      { name: "Zendesk CRM", icon: <SiZendeskcrm /> },
    ],
  },
  {
    category: "Sales Automation",
    skills: [
      { name: "Salesmate", icon: <SiSalesmate /> },
      { name: "Pipedrive", icon: <SiPipedrive /> },
      { name: "Zoho CRM", icon: <SiZoho /> },
      { name: "HubSpot CRM", icon: <SiHubspot /> },
    ],
  },
  {
    category: "General Commercial Skills",
    skills: [
      { name: "Customer Relationship Management (CRM)", icon: <SiCrm /> },
      { name: "Sales Forecasting", icon: <SiCrm /> },
      { name: "Lead Generation", icon: <SiCrm /> },
      { name: "Account Management", icon: <SiCrm /> },
      { name: "Negotiation", icon: <SiCrm /> },
      { name: "Presentation Skills", icon: <SiCrm /> },
    ],
  },
];

const CommercialSkillsSection: React.FC = () => {
  return (
    <section className="mb-16 bg-white rounded-lg shadow-xl p-8 w-full">
      <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">Our Commercial Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {commercialSkills.map((category, index) => (
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

export default CommercialSkillsSection;
