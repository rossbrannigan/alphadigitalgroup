import React from 'react';
import Link from 'next/link';

const Europe: React.FC = () => {
  const countries = [
    { name: 'Germany', path: '/case-studies/asia/Germany' },
    // Add other Asian countries as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Case Studies and Insights: Europe</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((country) => (
          <Link href={country.path} key={country.name}>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold">{country.name}</h2>
              <p className="mt-2 text-gray-600">Explore case studies and insights from {country.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Europe;