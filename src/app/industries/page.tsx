import Image from "next/image";
import Head from 'next/head';

const IndustriesPage: React.FC = () => {
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
        {/* Introductory Text */}
        <section className="mb-8" id="intro">
          <div className="px-4">
            <h1 className="text-3xl font-semibold text-purple-800 mb-4">Welcome to Alpha Digital Group - Industries We Serve</h1>
            <p className="text-purple-800">
              At Alpha Digital Group, we pride ourselves on offering top-tier management consulting services tailored to various industries. With our expertise and dedication, we provide strategic guidance and innovative solutions to propel businesses forward in today's dynamic market landscape. Explore how we deliver value across a diverse range of sectors:
            </p>
          </div>
        </section>

        {/* Industries Section */}
        <section className="mb-8" id="industries">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Industries</h2>
            <p className="text-purple-800">
              At Alpha Digital Group, we offer management consulting services across several industries, including:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li><a href="#airlines" className="text-purple-800">Airlines</a></li>
              <li><a href="#aviation" className="text-purple-800">Aviation</a></li>
              <li><a href="#technology" className="text-purple-800">Technology</a></li>
              <li><a href="#consumer-internet" className="text-purple-800">Consumer Internet</a></li>
              <li><a href="#media" className="text-purple-800">Media</a></li>
            </ul>
            <p className="text-purple-800 mt-4">
              Our expert consultants collaborate closely with clients in these sectors to deliver strategic guidance and innovative solutions that drive growth and success.
            </p>
          </div>
        </section>
        
        {/* Airlines Section */}
        <section className="mb-8" id="airlines">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Airlines</h2>
            <p className="text-purple-800">
              In the highly competitive airline industry, operational efficiency and customer satisfaction are paramount. Our seasoned consultants work closely with airlines to optimize processes, enhance customer experience, and navigate industry complexities. From revenue management strategies to cost optimization initiatives, we help airlines achieve sustainable growth and competitive advantage.
            </p>
          </div>
        </section>

        {/* Aviation Section */}
        <section className="mb-8" id="aviation">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Aviation</h2>
            <p className="text-purple-800">
              In the fast-paced world of aviation, staying ahead requires strategic vision and meticulous planning. Alpha Digital Group offers specialized consulting services to airlines, airports, and aviation service providers. Whether it&apos;s streamlining operations, implementing cutting-edge technologies, or enhancing safety protocols, we empower aviation stakeholders to thrive in a rapidly evolving environment.
            </p>
          </div>
        </section>

        {/* Technology Section */}
        <section className="mb-8" id="technology">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Technology</h2>
            <p className="text-purple-800">
              In the ever-evolving tech landscape, innovation is the key to success. Our expert consultants partner with technology firms to drive innovation, streamline operations, and capitalize on emerging opportunities. From software development to digital transformation initiatives, we equip technology companies with the tools and strategies needed to stay ahead of the curve and deliver unparalleled value to their customers.
            </p>
          </div>
        </section>

        {/* Consumer Internet Section */}
        <section className="mb-8" id="consumer-internet">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Consumer Internet</h2>
            <p className="text-purple-800">
              The consumer internet sector is characterized by fierce competition and rapidly changing consumer preferences. At Alpha Digital Group, we help companies navigate this dynamic landscape with strategic insights and actionable recommendations. Whether it's developing scalable business models, optimizing user experiences, or leveraging data analytics, we empower consumer internet companies to thrive in the digital age.
            </p>
          </div>
        </section>

        {/* Media Section */}
        <section className="mb-8" id="media">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Media</h2>
            <p className="text-purple-800">
              In the digital era, the media industry faces unprecedented challenges and opportunities. Our seasoned consultants collaborate with media companies to navigate digital disruption, monetize content effectively, and adapt to shifting consumer behaviors. From content strategy to audience engagement initiatives, we help media organizations innovate and succeed in an ever-evolving landscape.
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

export default IndustriesPage;