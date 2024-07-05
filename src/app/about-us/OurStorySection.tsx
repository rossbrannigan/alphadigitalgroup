"use client";
import React, { useEffect, useRef } from 'react';

const OurStorySection = () => {
  const mapRef = useRef(null);

  const locations = [
    { name: 'Abu Dhabi', lat: 24.453884, lng: 54.377344, logo: 'etihad.svg' },
    { name: 'Dubai', lat: 25.276987, lng: 55.296249, logo: '/path/to/dubai-logo.png' },
    { name: 'Phuket', lat: 7.9519, lng: 98.3381, logo: 'hans.svg' },
    { name: 'Bangkok', lat: 13.7563, lng: 100.5018, logo: 'tvj.jpg' },
    { name: 'Seoul', lat: 37.5665, lng: 126.9780, logo: 'air_premia.jpeg' },
    { name: 'Berlin', lat: 52.5200, lng: 13.4050, logo: 'air_berlin.png' },
    { name: 'Melbourne', lat: -37.8136, lng: 144.9631, logo: 'jetstar.jpeg' },
    { name: 'Accra', lat: 5.6037, lng: -0.1870, logo: 'sentra.png' },
  ];

  useEffect(() => {
    const loadGoogleMaps = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCoYiZhK-bLa8taz2lUaQQJj-WRjC0omYM&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    window.initMap = () => {
      const bounds = new window.google.maps.LatLngBounds();
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 4,
        styles: [
          {
            stylers: [{ saturation: -100 }]
          }
        ]
      });

      locations.forEach((location) => {
        const position = new window.google.maps.LatLng(location.lat, location.lng);
        bounds.extend(position);

        const markerSize = ['Berlin', 'Seoul', 'Melbourne', 'Accra'].includes(location.name) ? 30 : 50;

        const marker = new window.google.maps.Marker({
          position: position,
          map: map,
          title: location.name,
          icon: {
            url: location.logo,
            scaledSize: new window.google.maps.Size(markerSize, markerSize),
          },
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `<div><h3>${location.name}</h3></div>`,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });

      map.fitBounds(bounds);

      const listener = window.google.maps.event.addListener(map, "idle", function() { 
        if (map.getZoom() > 7) map.setZoom(7); 
        window.google.maps.event.removeListener(listener); 
      });
    };

    loadGoogleMaps();
  }, []);

  return (
    <section className="mb-16 bg-white rounded-lg shadow-xl p-8">
      <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">Our Story In a Nutshell</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 pr-4">
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Born from adversity, Alpha Digital Group emerged as a beacon of innovation during the tumultuous times of the Covid-19 pandemic. In 2020, as the world ground to a halt and airlines faced unprecedented challenges, our founder Ross Brannigan saw an opportunity where others saw only obstacles.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Leveraging his extensive experience in marketing and management roles at tech giants like Facebook, Dell, and Yahoo!, as well as leading airlines such as Etihad and Airberlin, Ross laid the foundation for a company that would not just weather the storm, but thrive in it.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            From securing contracts with startup airlines to advising cutting-edge travel tech companies, Alpha Digital Group quickly established itself as a go-to consultancy for businesses seeking to navigate the new digital landscape. Our success is built on a bedrock of values that define who we are:
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            At Alpha Digital Group, we are not just adapting to the future of digital strategy – we are defining it. Join us on this exhilarating journey as we continue to push boundaries and redefine whats possible in the digital realm.
          </p>
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Our Global Experience</h3>
          <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;