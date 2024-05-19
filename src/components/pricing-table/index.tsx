import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';

const features = [
  `Commercial Strategy Development`,
  `Digital Transformation Roadmap`,
  `Interim Leadership Placement`,
  `Industry Best Practices`,
  `Performance Optimization`,
  `Change Management Support`,
  `Tailored Solutions`,
  `Ongoing Advisory Services`,
];

const PricingTable = () => (
  <section className={tw`bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12`}>
    <div className={tw`relative max-w-7xl mx-auto mb-24`}>
      <div className={tw`overflow-hidden lg:max-w-none lg:flex`}>
        <div className={tw`py-8 px-6 md:px-0 lg:flex-shrink-1`}>
          <h2 className={tw`text-4xl lg:text-7xl font-bold text-gray-800 mb-12`}>Unlock Your Potential</h2>
          <p className={tw`mt-6 text-base leading-6 text-gray-500`}>
            Our tailored consulting solutions are designed to drive growth, optimize operations, and future-proof your
            business in the airline, hospitality, and related industries. Leverage our expertise to gain a competitive
            edge.
          </p>
          <div className={tw`mt-8`}>
            <div className={tw`flex items-center`}>
              <h3
                className={tw`flex-shrink-0 pr-4 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600`}
              >
                What's Included
              </h3>
              <div className={tw`flex-1 border-t-2 border-gray-200`} />
            </div>
            <ul className={tw`mt-8 lg:grid lg:grid-cols-2`}>
              {features.map((feature) => (
                <li className={tw`flex items-center lg:col-span-1`} key={feature}>
                  <div className={tw`flex-shrink-0`}>
                    <Check className={tw`h-8 w-8 mr-3 mb-1`} />
                  </div>
                  <p className={tw`text-gray-600`}>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={tw`py-8 px-6 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12`}>
          <p className={tw`text-lg font-medium text-gray-800`}>Tailored Solutions</p>
          <div className={tw`my-4 flex items-center justify-center text-6xl leading-none font-bold text-gray-800`}>
            Custom Pricing
          </div>
          <Button primary modifier="mt-6">
            Request a Consultation
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
