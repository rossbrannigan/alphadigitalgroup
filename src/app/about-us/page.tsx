import Image from "next/image";
import Head from 'next/head';
import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { FaAward, FaLightbulb, FaShieldAlt, FaUserFriends, FaHandshake, FaSync } from 'react-icons/fa';
import { BeakerIcon, LightBulbIcon, ShieldCheckIcon, UserGroupIcon, HandIcon, RefreshIcon } from '@heroicons/react/outline';
import { FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import OurStorySection from './OurStorySection';
import DigitalSkillsSection from './DigitalSkillsSection';
import MarketingSkillsSection from './MarketingSkillsSection';



const AboutPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-purple-100 to-white min-h-screen">
      <Head>
        <title>About Alpha Digital Group | A Leading Digital & Commercial Services Marketplace</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Global management consulting" />
      </Head>
      
      {/* Google Analytics and Tag Manager scripts */}
      <Script id="google-analytics-script" async src="https://www.googletagmanager.com/gtag/js?id=G-25Y0G3QQE6" />
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
      <main className="container mx-auto py-16 px-4 mt-20">
        {/* Import and use OurStorySection */}
        <OurStorySection />

        {/* Industry Leadership Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">Industry Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-xl p-6 transform transition-transform duration-300 hover:scale-105">
              <div className="text-4xl text-purple-600 mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-purple-700 mb-3">Award-Winning Strategies</h3>
              <p className="text-gray-700">Recognized for our innovative approach to digital marketing and commercial strategy.</p>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6 transform transition-transform duration-300 hover:scale-105">
              <div className="text-4xl text-purple-600 mb-4">📊</div>
              <h3 className="text-xl font-semibold text-purple-700 mb-3">Data-Driven Insights</h3>
              <p className="text-gray-700">Leveraging advanced analytics to drive decision-making and optimize performance.</p>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6 transform transition-transform duration-300 hover:scale-105">
              <div className="text-4xl text-purple-600 mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-purple-700 mb-3">Cutting-Edge Technology</h3>
              <p className="text-gray-700">Staying ahead of the curve with the latest digital tools and platforms.</p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg shadow-2xl p-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex items-center bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-4">
                <BeakerIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-purple-700 mb-2">Commitment to Excellence</h3>
                <p className="text-gray-600">Delivering world-class results consistently.</p>
              </div>
            </div>
            <div className="flex items-center bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-4">
                <LightBulbIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-purple-700 mb-2">Innovation</h3>
                <p className="text-gray-600">Embracing new ideas and technologies.</p>
              </div>
            </div>
            <div className="flex items-center bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-4">
                <ShieldCheckIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-purple-700 mb-2">Integrity</h3>
                <p className="text-gray-600">Upholding strong ethical principles.</p>
              </div>
            </div>
            <div className="flex items-center bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-4">
                <UserGroupIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-purple-700 mb-2">Customer Focus</h3>
                <p className="text-gray-600">Prioritizing our clients success.</p>
              </div>
            </div>
            <div className="flex items-center bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-4">
                <HandIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-purple-700 mb-2">Respect</h3>
                <p className="text-gray-600">Treating everyone with dignity and respect.</p>
              </div>
            </div>
            <div className="flex items-center bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-4">
                <RefreshIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-purple-700 mb-2">Adaptability</h3>
                <p className="text-gray-600">Adjusting to new challenges seamlessly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet The Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">Meet The Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Ross Brannigan */}
            <div className="bg-white rounded-lg shadow-xl p-6 text-center">
              <div className="w-full h-52 mx-auto relative overflow-hidden mb-4">
                <Image src="/Ross_AUH_AI_2021.png" alt="Ross Brannigan" layout="fill" objectFit="cover" className="grayscale hover:filter-none" />
              </div>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">Ross Brannigan</h3>
              <p className="text-gray-600">CEO & Founder</p>
              <p className="text-gray-700 mt-4">
                Ross holds a Masters degree from the prestigious IE Business School in Madrid, Spain. He is an accomplished marketing and commercial strategist, known for his ability to develop and execute innovative, results-driven strategies.
              </p>
              <p className="text-gray-700 mt-2">
                With a keen analytical mind and a talent for problem-solving, Ross brings a strategic approach to every challenge. He is a lifelong learner, constantly expanding his knowledge and skills across diverse domains.
              </p>
              <p className="text-gray-700 mt-2">
                When not working, Ross enjoys staying active through running and fitness. He is also an avid reader, traveler, and appreciator of fine coffee. Ross values quality time with close friends and family, and believes in maintaining a healthy work-life balance.
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://www.linkedin.com/in/ross-brannigan/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors duration-300">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="mailto:ross@alphadigitalgroup.co" className="text-purple-600 hover:text-purple-800 transition-colors duration-300">
                  <FaEnvelope className="w-6 h-6" />
                </a>
                <a href="https://wa.me/66828362713" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors duration-300">
                  <FaWhatsapp className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Co-Founder Placeholder */}
            <div className="bg-white rounded-lg shadow-xl p-6 text-center">
              <div className="w-full h-52 mx-auto relative overflow-hidden mb-4 flex items-center justify-center">
                <div className="w-full h-full bg-gray-300 text-gray-600 text-4xl font-bold flex items-center justify-center">
                  Co-Founder Needed
                </div>
              </div>
              <div className="text-center">
                <div className="mt-4">
                  <p className="text-gray-700">
                    We are seeking a Co-Founder with visionary ambition, healthy intellect, and the confidence to challenge the status quo. Candidates with both commercial and technical backgrounds are welcome. As a Co-Founder, you will play a crucial role in shaping our companys strategy and future direction.
                  </p>
                  <p className="text-gray-700 mt-2">
                    Interested candidates can contact Ross Brannigan directly at <a href="mailto:ross@alphadigitalgroup.co" className="text-purple-600 hover:text-purple-800 transition-colors duration-300">ross@alphadigitalgroup.co</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Non-Executive Board Member / Strategic Advisor Placeholder */}
            <div className="bg-white rounded-lg shadow-xl p-6 text-center">
              <div className="w-full h-52 mx-auto relative overflow-hidden mb-4">
                <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600 text-4xl font-bold">
                  Non-Executive Board Member / Strategic Advisor Needed
                </div>
              </div>
              <p className="text-gray-700 mt-4">
                We are looking for a Non-Executive Board Member / Strategic Advisor to provide strategic guidance and oversight. Candidates should have a strong background in business strategy and a proven track record of advising senior management.
              </p>
              <p className="text-gray-700 mt-2">
                Interested candidates can contact Ross Brannigan directly at <a href="mailto:ross@alphadigitalgroup.co" className="text-purple-600 hover:text-purple-800 transition-colors duration-300">ross@alphadigitalgroup.co</a>.
              </p>
            </div>

            {/* Investors Placeholder */}
            <div className="bg-white rounded-lg shadow-xl p-6 text-center">
              <div className="w-full h-52 mx-auto relative overflow-hidden mb-4">
                <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600 text-4xl font-bold">
                  Seeking Investors
                </div>
              </div>
              <p className="text-gray-700 mt-4">
                We are seeking investors to join us in our journey to innovate and grow. Alpha Digital Group is incubating AI, blockchain, and consumer internet projects as part of its Innovation Lab. If you are interested in supporting our vision and contributing to our success in these cutting-edge fields, we would love to hear from you.
              </p>
              <p className="text-gray-700 mt-2">
                For investment opportunities, please contact Ross Brannigan directly at <a href="mailto:ross@alphadigitalgroup.co" className="text-purple-600 hover:text-purple-800 transition-colors duration-300">ross@alphadigitalgroup.co</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Digital Skills Section */}
        <DigitalSkillsSection />

        
      </main>
    </div>
  );
};

export default AboutPage;