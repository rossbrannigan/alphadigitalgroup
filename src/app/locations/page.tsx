import Image from "next/image";
import Head from 'next/head';
import { GoogleMapsEmbed } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google'

const LocationsPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        {/* Add Google Analytics tracking tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-25Y0G3QQE6"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-25Y0G3QQE6');
            `,
          }}
        ></script>
        {/* Google Analytics and Google Tag Manager components */}
        <GoogleAnalytics gaId="G-25Y0G3QQE6" />
        <GoogleTagManager gtmId="G-25Y0G3QQE6" />
        {/* Page title, icon, and meta description */}
        <title>Global management consulting | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Global management consulting" />
      </Head>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        {/* Introductory Text */}
        <section className="mb-8" id="intro">
          <div className="px-4">
            <h1 className="text-3xl font-semibold text-purple-800 mb-4">Our Locations</h1>
            <p className="text-purple-800">
              Alpha Digital Group is headquartered in Dubai, with a strong presence in Singapore and Bangkok. Our strategic locations allow us to serve clients efficiently across the globe.
            </p>
          </div>
        </section>

        {/* Locations Section */}
        <section className="mb-8" id="locations">
          <div className="px-4 py-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Locations</h2>
            <ul className="list-disc pl-6 mt-4">
              <li className="text-purple-800">Dubai</li>
              <li className="text-purple-800">Singapore</li>
              <li className="text-purple-800">Bangkok</li>
            </ul>
            <p className="text-purple-800 mt-4">
              Our offices in these vibrant cities allow us to collaborate closely with clients and partners, delivering impactful solutions tailored to their specific needs.
            </p>
          </div>
        </section>

            <GoogleMapsEmbed
      apiKey="AIzaSyCoYiZhK-bLa8taz2lUaQQJj-WRjC0omYM"
      height={200}
      width="100%"
      mode="place"
      q="Dubai"
    />

      </main>
    </div>
  );
};

export default LocationsPage;