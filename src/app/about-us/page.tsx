// pages/about/AboutPage.tsx

import Image from "next/image";
import Head from 'next/head';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>About Ross Brannigan | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Global management consulting" />

      </Head>

      {/* Header */}
      <header className="bg-yellow-400 shadow-lg" style={{ backgroundColor: '#bdff03' }}>
        <div className="container mx-auto py-4 flex items-center justify-between">
          <div className="mr-4">
            <a href="/">
              <Image src="/company-logo.svg" alt="Alpha Digital Group Logo" width={250} height={150} />
            </a>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="industries" className="text-purple-800 hover:text-black transition-colors duration-300">Industries</a></li>
              <li><a href="capabilities" className="text-purple-800 hover:text-black transition-colors duration-300">Capabilities</a></li>
              <li><a href="featured-insights" className="text-purple-800 hover:text-black transition-colors duration-300">Featured Insights</a></li>
              <li><a href="locations" className="text-purple-800 hover:text-black transition-colors duration-300">Locations</a></li>
              <li><a href="about-us" className="text-purple-800 hover:text-black transition-colors duration-300">About Us</a></li>
              <li><a href="https://www.linkedin.com/company/alphadigitalgroup" className="text-purple-800 hover:text-black transition-colors duration-300">Alpha Digital Blog</a></li>
              {/* Changed text color to white */}
              <li><a href="/hire-us" className="text-white bg-purple-600 py-2 px-4 rounded-full hover:bg-black hover:text-yellow-400 transition-colors duration-300">Get Started</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        {/* About Alpha Digital Group Section */}
        <section className="mb-8" id="alpha-digital-group">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <div className="flex justify-center mb-4">
              <div className="relative rounded-full overflow-hidden w-32 h-32">
                <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
                <Image src="/ross.png" alt="Ross Brannigan" layout="fill" className="object-cover" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">About Alpha Digital Group</h2>
            <p className="text-purple-800">
              Alpha Digital Group, led by Ross Brannigan, a native of Ireland, is driven by a passion for business and a visionary approach to aligning existing business models with emerging trends and digital strategies. Ross, equipped with a top-ranked MBA from IE Business School and a wealth of leadership experience at prominent international entities such as Etihad, Facebook, and Yahoo!, leads the group in empowering companies across the Middle East, Europe, and Asia to achieve their commercial objectives, enhance customer experience, and foster innovation.
            </p>
            <p className="text-purple-800 mt-4">
              Proficient in English, Spanish, and German, Ross possesses a robust grasp of project and product management, underscored by his dedication to innovation, continual learning, and value creation for both clientele and businesses alike. 
            </p>
            <p className="text-purple-800 mt-4">
              You can reach Ross:
              <br />
              📞 Phone: +66 82 836 2717
              <br />
              ✉️ Email: <a href="mailto:rossbrannigan@gmail.com" className="text-purple-800">rossbrannigan@gmail.com</a>
              <br />
              🌐 LinkedIn: <a href="https://www.linkedin.com/in/ross-brannigan/" target="_blank" rel="noopener noreferrer" className="text-purple-800">Ross Brannigan's LinkedIn Profile</a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between">
          {/* Logo */}
          <div className="mb-4 lg:mb-0 lg:order-1 lg:self-start">
            <Image
              src="/company-logo-small.png"
              alt="Alpha Digital Group Logo"
              width={40}
              height={40}
            />
          </div>
          {/* Links */}
          <div className="lg:ml-auto lg:order-3">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-gray-300 mb-2 text-xs font-bold">Quick Links</h3>
                <ul className="text-gray-300">
                  <li className="mb-0.5"> {/* Reduced bottom margin */}
                    <a href="industries" className="hover:text-white text-xs">
                      Industries
                    </a>
                  </li>
                  <li className="mb-0.5"> {/* Reduced bottom margin */}
                    <a href="capabilities" className="hover:text-white text-xs">
                      Capabilities
                    </a>
                  </li>
                  <li className="mb-0.5"> {/* Reduced bottom margin */}
                    <a href="featured-insights" className="hover:text-white text-xs">
                      Featured Insights
                    </a>
                  </li>
                  <li className="mb-0.5"> {/* Reduced bottom margin */}
                    <a href="locations" className="hover:text-white text-xs">
                      Locations
                    </a>
                  </li>
                  <li className="mb-0.5"> {/* Reduced bottom margin */}
                    <a href="hire-us" className="hover:text-white text-xs">
                      Hire Us
                    </a>
                  </li>
                  <li className="mb-0.5"> {/* Reduced bottom margin */}
                    <a href="about-us" className="hover:text-white text-xs">
                      About Us
                    </a>
                  </li>
                  <li className="mb-0.5"> {/* Reduced bottom margin */}
                    <a
                      href="https://www.linkedin.com/company/alphadigitalgroup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white text-xs"
                    >
                      Alpha Digital Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-gray-300 mb-2 text-xs font-bold">Contact Us</h3>
                <ul className="text-gray-300">
                  <li className="mb-0.5 flex items-center">
                    📞 <span className="ml-2 text-xs">+66 82 836 2713</span>
                  </li>
                  <li className="mb-0.5 flex items-center">
                    ✉️ <span className="ml-2 text-xs">rossbrannigan@gmail.com</span>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://www.linkedin.com/company/alphadigitalgroup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white text-xs"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Subscription Box */}
          <div className="mt-8 lg:mt-0 lg:order-2 lg:ml-auto self-start lg:ml-12">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Subscribe to Our Newsletter
              </h2>
              <form>
                <div className="flex items-center">
                  <input
                    type="email"
                    className="bg-gray-100 border-2 border-gray-300 rounded-l-md py-2 px-4 w-full"
                    placeholder="Your email address"
                  />
                  <button
                    type="submit"
                    className="bg-purple-600 text-white font-bold px-6 py-2 rounded-r-md hover:bg-purple-700 transition duration-300 ease-in-out"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Divider */}
        <hr className="border-t border-gray-600 w-full my-8" />
        {/* Copyright text */}
        <p className="text-xs text-gray-300 text-center lg:order-5">
          © 2020-2024 Alpha Digital Group. All rights reserved.
        </p>
        {/* Powered by Ross Brannigan */}
        <p className="text-xs text-gray-300 text-center mt-4 lg:order-6">
          Powered by <a href="https://www.rossbrannigan.co" target="_blank" rel="noopener noreferrer" className="underline">Ross Brannigan</a>
        </p>
      </footer>
    </div>
  );
};

export default AboutPage;