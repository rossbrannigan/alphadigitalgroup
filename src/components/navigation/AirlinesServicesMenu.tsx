import React from 'react';
import { tw } from 'twind';

const AirlinesServicesMenu = () => {
  // List of commercial consulting services related to an airline
  const services = [
    `Revenue Management`,
    `Network Planning`, // Updated service
    `Marketing and Branding`,
    `Customer Experience Enhancement`,
    `Fleet Management`,
    `Operational Efficiency Improvement`,
    `Safety and Compliance Consulting`,
    `Financial Analysis and Strategy`,
    `Technology Integration`,
    `Staff Training and Development`,
    `Distribution and E-commerce`, // Added service
    `Interim Airline Leadership and Management`, // Existing service
  ];

  return (
    <div className={tw(`dropdown-menu`)}>
      <h2 className={tw(`text-lg font-semibold mb-2`)}>Explore Airline Services</h2>
      <ul className={tw(`space-y-2`)}>
        {services.map((service, index) => (
          <li key={index} className={tw(`text-gray-700`)}>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AirlinesServicesMenu;
