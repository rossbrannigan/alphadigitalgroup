import Image from "next/image";
import Head from "next/head";

const WebDevelopmentPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Travel Web Development | Alpha Digital Group</title>
        <meta name="description" content="Supercharge bookings & brand awareness with a cutting-edge travel website developed by Alpha Digital Group." />
      </Head>
{/* Hero Section */}
<section className="bg-gradient-to-r from-purple-600 to-indigo-600 min-h-screen flex items-center justify-center text-white relative">
  <div className="absolute inset-0 flex items-center justify-center">
    <Image src="/brain-wave.gif" alt="Unleash the Power of Digital to Supercharge Revenue" layout="fill" objectFit="cover" />
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-center">
    <div className="mb-16"> {/* Add margin-bottom to move the text higher */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Unleash the Power of Travel Web Development with Alpha Digital Group</h1>
      <p className="text-lg md:text-xl">Supercharge Bookings & Brand Awareness with a Cutting-Edge Travel Website</p>
    </div>
  </div>
</section>


      {/* Content Section */}
      <section className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Existing Cards */}
          {/* You can keep the existing cards or replace them with new content */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
            <Image src="/digital-product-logo.png" alt="Digital Product Placeholder" width={200} height={200} className="mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Digital Product Leadership</h2>
            <p className="text-gray-600 text-center">Empower your digital products with innovative leadership.</p>
          </div>
          {/* Add new content here */}
          {/* Captivating Design */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Captivating Design</h2>
            <p className="text-gray-600 text-center mb-4">We'll create a visually stunning website that showcases your destinations and services in a way that inspires wanderlust.</p>
          </div>
          {/* Seamless User Experience */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Seamless User Experience</h2>
            <p className="text-gray-600 text-center mb-4">Effortless navigation and intuitive booking processes will ensure visitors convert into paying customers.</p>
          </div>
          {/* Mobile-First Development */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Mobile-First Development</h2>
            <p className="text-gray-600 text-center mb-4">With the rise of mobile travel booking, we prioritize responsive design that provides an exceptional experience on any device.</p>
          </div>
          {/* Search Engine Optimization (SEO) */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Search Engine Optimization (SEO)</h2>
            <p className="text-gray-600 text-center mb-4">Our data-driven approach will optimize your website to rank higher in search results, driving organic traffic and attracting new customers.</p>
          </div>
          {/* Content Marketing Magic */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Content Marketing Magic</h2>
            <p className="text-gray-600 text-center mb-4">We'll craft compelling content that fuels brand awareness, educates travelers, and positions you as an industry leader.</p>
          </div>
          {/* Measurable Results */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Measurable Results</h2>
            <p className="text-gray-600 text-center mb-4">We don't just build websites, we build results. Track your progress with clear analytics and data-driven insights.</p>
          </div>
          {/* End of new content */}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Partner with Alpha Digital Group and Unlock the Full Potential of Your Travel Business</h2>
          <p className="text-white text-lg mb-8">Contact us today for a free consultation!</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full">Get Started</button>
        </div>
      </section>
      
    </div>
  );
};

export default WebDevelopmentPage;