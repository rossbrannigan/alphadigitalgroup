import { tw } from 'twind';
import Button from '@/components/button';

const solutionLinks = [
  `Commercial Strategy`,
  `Digital Transformation`,
  `Interim Leadership`,
  `Operational Excellence`,
  `Change Management`,
  `Industry Insights`,
];

const industriesLinks = [`Airlines`, `Hospitality`, `Travel & Tourism`, `Logistics`, `Retail`, `Manufacturing`];

const resourceLinks = [`Case Studies`, `Whitepapers`, `Blog`, `Events`, `Webinars`, `FAQs`];

const Footer = () => (
  <footer className={tw`bg-gray-900 text-white pt-16 pb-20`}>
    <div className={tw`max-w-7xl mx-auto px-8 lg:px-0 flex flex-wrap`}>
      <div className={tw`mb-14 flex items-center w-full`}>
        <img className={tw`h-12 w-12 mr-4`} src="logo.svg" alt="logo" width={48} height={48} />
        <p className={tw`text-4xl font-bold`}>Alpha Digital Group </p>
      </div>
      <div className={tw`w-full lg:w-1/2`}>
        <ul className={tw`text-lg font-light flex flex-wrap w-full`}>
          <li className={tw`w-1/2 md:w-1/3 lg:w-1/3`}>
            <div>
              <h4 className={tw`text-gray-300 text-base font-bold mb-1`}>Solutions</h4>
              <ul>
                {solutionLinks.map((link) => (
                  <li className={tw`text-gray-400 text-sm font-medium leading-6`} key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className={tw`w-1/2 md:w-1/3 lg:w-1/3`}>
            <div>
              <h4 className={tw`text-gray-300 text-base font-bold mb-1`}>Industries</h4>
              <ul>
                {industriesLinks.map((link) => (
                  <li className={tw`text-gray-400 text-sm font-medium leading-6`} key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className={tw`w-1/2 md:w-1/3 lg:w-1/3`}>
            <div>
              <h4 className={tw`text-gray-300 text-base font-bold mb-1`}>Resources</h4>
              <ul>
                {resourceLinks.map((link) => (
                  <li className={tw`text-gray-400 text-sm font-medium leading-6`} key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className={tw`w-full lg:w-1/2 mt-12 lg:mt-0`}>
        <div className={tw`border border-gray-700 rounded py-5 px-4`}>
          <h4 className={tw`font-mono text-sm uppercase text-gray-400 mb-3`}>Stay Updated</h4>
          <div className={tw`flex w-full`}>
            <input
              aria-label="email address"
              type="text"
              className={tw`border border-gray-700 bg-gray-800 min-w-0 w-full rounded text-gray-300 py-2 px-3 mr-2`}
              placeholder="Enter your email"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
