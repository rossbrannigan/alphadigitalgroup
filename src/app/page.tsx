import Image from "next/image";
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>

        <title>Global management consulting | Alpha Digital Group</title>
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

        {/* Modern Homepage Layouts */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 min-h-screen flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Empower Your Digital Journey</h1>
            <p className="text-lg md:text-xl">Unlock boundless possibilities with Alpha Digital Group.</p>
            <a href="/hire-us">
              <button className="bg-white text-purple-600 font-bold px-6 py-3 rounded-full mt-8 hover:bg-purple-100 transition duration-300 ease-in-out" style={{ border: '2px solid #BDFF03' }}>Get Started</button>
            </a>
          </div>
        </div>

        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
              <Image src="/digital-product-logo.png" alt="Digital Product Placeholder" width={200} height={200} className="mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Digital Product Leadership</h2>
              <p className="text-gray-600 text-center">Empower your digital products with innovative leadership.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
              <Image src="/digital-marketing-logo.png" alt="Digital Marketing Placeholder" width={200} height={200} className="mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Digital Marketing Leadership</h2>
              <p className="text-gray-600 text-center">Lead your digital marketing campaigns to success with our expert guidance.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
              <Image src="/aviation-management-logo.png" alt="Aviation Management Placeholder" width={200} height={200} className="mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Aviation Management Leadership</h2>
              <p className="text-gray-600 text-center">Navigate the skies of aviation management with our strategic leadership solutions.</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section with Background Image */}
        <div className="bg-cover bg-center min-h-screen/1.2" style={{ backgroundImage: 'url("/alpha-hero.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
          <div className="container mx-auto flex items-center justify-center h-full p-8">
            <div className="text-center">
              <h2 className="text-4xl font-semibold text-purple-600 mb-2">Join Us Today</h2>
              <p className="text-lg text-purple-600 mb-4">Unlock your potential with our services.</p>
              <a href="/hire-us">
                <button className="bg-purple-600 text-white font-bold px-8 py-3 rounded-full hover:bg-purple-700 transition duration-300 ease-in-out">Get Started</button>
              </a>
            </div>
          </div>
        </div>

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
<li className="mb-0.5 flex items-center">
  📝 
  <a href="contact" className="ml-2 text-xs hover:text-white">
    Contact Us Form
  </a>
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
              <form data-netlify="true">
                <div className="flex items-center">
                  <input
                    type="email"
                    className="bg-gray-100 border-2 border-gray-300 rounded-l-md py-2 px-4 w-full text-black" 
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
}