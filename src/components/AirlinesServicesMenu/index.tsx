import React from 'react';
import { tw } from 'twind';

const AirlinesServicesMenu = () => {
  // Define main categories and their subitems
  const categories = [
    {
      main: `Commercial`,
      subitems: [
        `Revenue Management`,
        `Marketing and Branding`,
        `Customer Experience Enhancement`,
        `Distribution and E-commerce`,
      ],
    },
    {
      main: `Operations`,
      subitems: [
        `Network Planning`,
        `Fleet Management`,
        `Operational Efficiency Improvement`,
        `Safety and Compliance Consulting`,
        `Interim Airline Leadership and Management`,
      ],
    },
    {
      main: `Technology`,
      subitems: [`Financial Analysis and Strategy`, `Technology Integration`, `Staff Training and Development`],
    },
  ];

  return (
    <div
      className={tw(
        `absolute bg-white border border-purple-500 p-4 rounded-md shadow-lg z-20`,
        `left-1/2 -translate-x-1/2 top-full py-8 max-w-4xl`,
      )}
    >
      <table className={tw(`w-full`)}>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td className={tw(`pr-8 w-36`)}>
                {/* Main Category */}
                <h2 className={tw(`text-2xl font-semibold mb-4 text-purple-800`)}>{category.main}</h2>
              </td>
              <td className={tw(`min-w-40`)}>
                {/* Subitems */}
                <ul className={tw(`space-y-2`)}>
                  {category.subitems.map((subitem, idx) => (
                    <li key={idx} className={tw(`text-gray-700`)}>
                      {subitem}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AirlinesServicesMenu;
