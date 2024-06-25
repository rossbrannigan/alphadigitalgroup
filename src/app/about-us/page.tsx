import Image from "next/image";
import Head from 'next/head';
import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>About Alpha Digital Group | A Leading Digital & Commercial Services Marketplace</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Global management consulting" />
      </Head>
      
      <Script
        id="google-analytics-script"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-25Y0G3QQE6"
      />
      <Script
        id="google-analytics-inline-script"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-25Y0G3QQE6');
          `,
        }}
      />
      <GoogleAnalytics gaId="G-25Y0G3QQE6" />
      <GoogleTagManager gtmId="G-25Y0G3QQE6" />

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
              🌐 LinkedIn: <a href="https://www.linkedin.com/in/ross-brannigan/" target="_blank" rel="noopener noreferrer" className="text-purple-800">Ross Brannigan&apos;s LinkedIn Profile</a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
