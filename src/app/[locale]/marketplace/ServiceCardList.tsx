'use client';

import React, { useEffect, useState } from 'react';

interface Service {
  title: string;
  description: string;
  priceTableId?: string;
}

const ServiceCard: React.FC<Service> = ({ title, description, priceTableId }) => {
  const [error, setError] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    script.onerror = () => setError(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (scriptLoaded && priceTableId) {
      const stripeTable = document.createElement('stripe-pricing-table');
      stripeTable.setAttribute('pricing-table-id', priceTableId);
      stripeTable.setAttribute('publishable-key', 'pk_live_51OzdDN2KKbBgfCwqKoIShIjFkusasFpbP2ZlynP3gNyQ15fO5jXfwcFBlsoCK6gFfRn6Q2qtYyFBYK0pGdfoLE7y00bLcnNS4J');
      stripeTable.addEventListener('error', () => setError(true));
      document.getElementById(`stripe-container-${priceTableId}`)?.appendChild(stripeTable);
    }
  }, [scriptLoaded, priceTableId]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {priceTableId ? (
          scriptLoaded ? (
            error ? (
              <p className="text-red-500">Unable to load pricing. Please try again later.</p>
            ) : (
              <div className="mt-4" id={`stripe-container-${priceTableId}`}>
                {/* Stripe pricing table will be appended here */}
              </div>
            )
          ) : (
            <p className="text-gray-500">Loading...</p>
          )
        ) : (
          <p className="text-blue-500">Pricing coming soon. Contact us for more information.</p>
        )}
      </div>
    </div>
  );
};

interface ServiceCardListProps {
  services: Service[];
}

const ServiceCardList: React.FC<ServiceCardListProps> = ({ services }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard
          key={service.priceTableId || service.title}
          title={service.title}
          description={service.description}
          priceTableId={service.priceTableId}
        />
      ))}
    </div>
  );
};

export default ServiceCardList;
