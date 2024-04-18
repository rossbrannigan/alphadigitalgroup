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


      <section className="container mx-auto py-8">
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
      </section>
    </div>
  );
};

export default WebDevelopmentPage;