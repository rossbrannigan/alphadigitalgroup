'use client';

import { useState } from 'react';
import Image from 'next/image';

const BrandCircle = ({ src, alt, width, height, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-40 h-40 flex justify-center items-center rounded-full bg-gray-100 shadow-md transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={src} alt={alt} width={width} height={height} />
      <div className={`absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-70 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-white text-center px-4">{hoverText}</p>
      </div>
    </div>
  );
};

export default BrandCircle;