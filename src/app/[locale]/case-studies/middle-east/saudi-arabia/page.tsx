import React from 'react';
import Link from 'next/link';

const SaudiArabia: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Case Studies and Insights: SaudiArabia</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Topic: </h2>
        <p className="mb-4">
          Explore the world of ----- Saudi Arabia's unique general trading companies that play a crucial role in the country's economy and international trade.
        </p>
        <Link href="/case-studies/asia/japan/sogo-shosha">
          <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Learn more about Sōgō Shōsha
          </div>
        </Link>
      </section>
      
      {/* Add more sections for other Japanese case studies and insights */}
    </div>
  );
};

export default SaudiArabia;