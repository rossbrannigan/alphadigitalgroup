import React, { useState } from 'react';
import { tw } from 'twind';
import Button from '@/components/button';
import AirlinesServicesMenu from '@/components/AirlinesServicesMenu';

interface Link {
  label: string;
  href: string;
}

const links: Link[] = [
  {
    label: `Airlines`,
    href: `/`,
  },
  {
    label: `Hospitality`,
    href: `/`,
  },
  {
    label: `Other`,
    href: `/`,
  },
  {
    label: `Blog`,
    href: `/`,
  },
];

const secondaryLinks: Link[] = [
  {
    label: `Contact Sales`,
    href: `/`,
  },
  {
    label: `Log In`,
    href: `/`,
  },
  {
    label: `Get Started`,
    href: `/`,
  },
];

const Navigation = () => {
  const [showAirlinesDropdownMenu, setShowAirlinesDropdownMenu] = useState(false);

  return (
    <nav className={tw(`bg-white sticky top-0 z-10`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`flex items-center justify-between h-24`)}>
          <div className={tw(`flex items-center`)}>
            <div className={tw(`flex-shrink-0`)}>
              <img className={tw(`h-12 w-12`)} src="logo.svg" alt="logo" width={48} height={48} />
            </div>
            <div className={tw(`hidden md:block`)}>
              <div className={tw(`ml-10 flex items-baseline space-x-4`)}>
                {links.map((link: Link) => (
                  <div key={link.label} className={tw(`relative`)}>
                    {/* Airlines link and dropdown container */}
                    {link.label === `Airlines` && (
                      <div
                        className={tw(`relative`)}
                        onMouseEnter={() => setShowAirlinesDropdownMenu(true)}
                        onMouseLeave={() => setShowAirlinesDropdownMenu(false)}
                      >
                        {/* Airlines link */}
                        <a
                          href={link.href}
                          className={tw(`text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium`, {
                            'text-gray-900': showAirlinesDropdownMenu,
                            'hover:bg-gray-100': showAirlinesDropdownMenu,
                          })}
                        >
                          {link.label}
                        </a>
                        {/* Airlines Services Menu */}
                        {showAirlinesDropdownMenu && <AirlinesServicesMenu />}
                      </div>
                    )}
                    {/* Other links */}
                    {link.label !== `Airlines` && (
                      <a
                        href={link.href}
                        className={tw(`text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium`)}
                      >
                        {link.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={tw(`hidden md:block`)}>
            <div className={tw(`ml-4 flex items-center md:ml-6`)}>
              <Button modifier="border-0 mr-2">Contact Sales</Button>
              <Button modifier="border-0 mr-2">Log In</Button>
              <Button primary>Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
