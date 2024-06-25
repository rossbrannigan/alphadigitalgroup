import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      image: '/brain-wave.gif',
      title: 'Empower Your Digital Journey',
      description: 'Unlock boundless possibilities with Alpha Digital Group.',
      buttonLink: '/marketplace',
      buttonText: 'Get Started',
    },
    {
      image: '/another-image.jpg',
      title: 'Innovate with Alpha Digital',
      description: 'Leading the way in digital transformation.',
      buttonLink: '/services',
      buttonText: 'Learn More',
    },
    // Add more slides as needed
  ];

  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 min-h-screen flex items-center justify-center text-white relative p-4">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src="/brain-wave.gif" alt="Unleash the Power of Digital to Supercharge Revenue" layout="fill" objectFit="cover" unoptimized />
      </div>
      <Slider {...settings} className="relative z-10 w-full max-w-4xl mx-auto">
        {slides.map((slide, index) => (
          <div key={index} className="text-center p-4">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-112 overflow-hidden">
              <Image src={slide.image} alt={slide.title} layout="fill" objectFit="cover" unoptimized />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-4">{slide.title}</h1>
            <p className="text-base sm:text-lg md:text-xl mt-4">{slide.description}</p>
            <a href={slide.buttonLink}>
              <button className="bg-white text-purple-600 font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-full mt-4 sm:mt-8 hover:bg-purple-100 transition duration-300 ease-in-out border-2 border-green-400">{slide.buttonText}</button>
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
