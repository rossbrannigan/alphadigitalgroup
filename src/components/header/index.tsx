import React from 'react';
import { tw, css } from 'twind/css';
import Button from '@/components/button';
import SlickCarousel from '@/components/SlickCarousel';
import Hans from '@/constants/svg/hans.svg'; // Import Hans SVG
import Sentra from '@/constants/svg/sentra.svg'; // Import Sentra SVG
import Airberlin from '@/constants/svg/airberlin.svg';
import Etihad from '@/constants/svg/etihad.svg'; // Import Etihad SVG

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
  position: relative; /* Ensure relative positioning for z-index to work */
`;

const textContainerStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1; /* Ensure the text container is above the carousel */
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <SlickCarousel />
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>These folks get it</p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <Sentra className={tw(`m-12 mb-8`)} width={250} height={250} />
          {` `}
          {/* Further increased dimensions for Sentra */}
          <Hans className={tw(`m-12`)} width={220} height={220} /> {/* Increased dimensions for Hans */}
          <Etihad className={tw(`m-12`)} width={200} height={200} /> {/* Increased dimensions for Etihad */}
          <Airberlin className={tw(`m-12`)} width={250} height={250} /> {/* Airberlin SVG with increased dimensions */}
        </div>
      </div>
    </div>
  </header>
);

export default Header;
