import React from 'react';
import Slider from 'react-slick';
import { tw } from 'twind';
import Button from '@/components/button';

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {/* Slide 1 - Airlines */}
      <div>
        <div className={tw(`relative`)}>
          <img src="1.gif" alt="Airlines" className={tw(`w-full h-auto`)} />
          <div className={tw(`absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center`)}>
            <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8 bg-black bg-opacity-50`)}>
              <h1
                className={tw(
                  `font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-white`,
                )}
              >
                Your <span style={{ color: '#bdff03' }}>airline</span> business, beyond expectations
              </h1>
              <div className={tw(`max-w-xl mx-auto`)}>
                <p className={tw(`mt-10 text-gray-200 text-center text-xl lg:text-3xl`)}>
                  {' '}
                  {/* Slightly darker white text color */}
                  Achieve growth and transformation, beyond your expectations.
                </p>
              </div>
              <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
                <Button primary>Get started</Button>
                <span className={tw(`mx-2`)}>or</span>
                <Button>Contact us</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slide 2 - Hospitality */}
      <div>
        <div className={tw(`relative`)}>
          <img src="2.gif" alt="Image 2" className={tw(`w-full h-auto`)} />
          <div className={tw(`absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center`)}>
            <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8 bg-black bg-opacity-50`)}>
              <h1
                className={tw(
                  `font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-white`,
                )}
              >
                Your <span style={{ color: '#8511b4' }}>hospitality</span> business, beyond expectations
              </h1>
              <div className={tw(`max-w-xl mx-auto`)}>
                <p className={tw(`mt-10 text-gray-200 text-center text-xl lg:text-3xl`)}>
                  {' '}
                  {/* Slightly darker white text color */}
                  Achieve growth and transformation, beyond your expectations.
                </p>
              </div>
              <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
                <Button primary>Get started</Button>
                <span className={tw(`mx-2`)}>or</span>
                <Button>Contact us</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slide 3 */}
      <div>
        <div className={tw(`relative`)}>
          <img src="3.gif" alt="Image 3" className={tw(`w-full h-auto`)} />
          <div className={tw(`absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center`)}>
            <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8 bg-black bg-opacity-50`)}>
              <h1
                className={tw(
                  `font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-white`,
                )}
              >
                Your business, beyond expectations
              </h1>
              <div className={tw(`max-w-xl mx-auto`)}>
                <p className={tw(`mt-10 text-gray-200 text-center text-xl lg:text-3xl`)}>
                  {' '}
                  {/* Slightly darker white text color */}
                  Achieve growth and transformation, beyond your expectations.
                </p>
              </div>
              <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
                <Button primary>Get started</Button>
                <span className={tw(`mx-2`)}>or</span>
                <Button>Contact us</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default SlickCarousel;
