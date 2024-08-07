import React from 'react';
import Link from 'next/link';

const CaseStudiesAndInsights: React.FC = () => {
  const regions = [
    { name: 'Asia', path: '/case-studies/asia' },
    { name: 'Europe', path: '/case-studies/europe' },
    { name: 'Middle East', path: '/case-studies/middle-east' },
    { name: 'North America', path: '/case-studies/north-america' },
    { name: 'Latin America', path: '/case-studies/latin-america' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Case Studies and Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regions.map((region) => (
          <Link href={region.path} key={region.name}>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold">{region.name}</h2>
              <p className="mt-2 text-gray-600">Explore case studies and insights from {region.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesAndInsights;