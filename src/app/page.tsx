import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { FiMessageCircle } from 'react-icons/fi'; // Import WhatsApp icon
import './styles.css'; // Import your custom styles
import { AiOutlineLineChart, AiOutlineTool, AiOutlineRise, AiOutlineTeam, AiOutlineBank } from 'react-icons/ai'; // Import icons from react-icons


export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        {/* Title and Meta Description */}
        <title>Global Management Consulting | Alpha Digital Group</title>
        <meta name="description" content="Unlock boundless possibilities with Alpha Digital Group’s global management consulting services. Empower your digital journey with our leadership in digital products, digital marketing, and aviation management." />
        <link rel="icon" href="/favicon.ico" />

        {/* Google Analytics and Tag Manager */}
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
        <GoogleAnalytics gaId="G-25Y0G3QQE6"/>
        <GoogleTagManager gtmId="G-25Y0G3QQE6"/> 
      </Head>

      {/* Slider section */}
      <section className="carousel">
        <div className="carousel-item" style={{ height: "1000px" }}> {/* Adjusted inline height */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/brain-wave.gif" alt="Image 1" layout="fill" objectFit="cover" unoptimized />
          </div>
          <div className="relative z-10 text-center max-w-2xl mx-auto p-4 text-white flex flex-col justify-center items-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Empower Your Digital Journey</h1>
            <p className="text-base sm:text-lg md:text-xl mb-4">Unlock boundless possibilities with Alpha Digital Group.</p>
            <a href="/marketplace">
              <button className="bg-white text-purple-600 font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-full mt-4 sm:mt-8 hover:bg-purple-100 transition duration-300 ease-in-out border-2 border-green-400">Get Started</button>
            </a>
          </div>
        </div>
        {/* Additional carousel items */}
        <div className="carousel-item" style={{ height: "1000px" }}> {/* Adjusted inline height */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/brain-wave.gif" alt="Image 2" layout="fill" objectFit="cover" unoptimized />
          </div>
          <div className="relative z-10 text-center max-w-2xl mx-auto p-4 text-white flex flex-col justify-center items-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Empower Your Digital Journey</h1>
            <p className="text-base sm:text-lg md:text-xl mb-4">Unlock boundless possibilities with Alpha Digital Group.</p>
            <a href="/marketplace">
              <button className="bg-white text-purple-600 font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-full mt-4 sm:mt-8 hover:bg-purple-100 transition duration-300 ease-in-out border-2 border-green-400">Get Started</button>
            </a>
          </div>
        </div>
        <div className="carousel-item" style={{ height: "1000px" }}> {/* Adjusted inline height */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/brain-wave.gif" alt="Image 3" layout="fill" objectFit="cover" unoptimized />
          </div>
          <div className="relative z-10 text-center max-w-2xl mx-auto p-4 text-white flex flex-col justify-center items-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Empower Your Digital Journey</h1>
            <p className="text-base sm:text-lg md:text-xl mb-4">Unlock boundless possibilities with Alpha Digital Group.</p>
            <a href="/marketplace">
              <button className="bg-white text-purple-600 font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-full mt-4 sm:mt-8 hover:bg-purple-100 transition duration-300 ease-in-out border-2 border-green-400">Get Started</button>
            </a>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">These Folks Get It</h2>
            <p className="mt-4 text-lg text-gray-600">Check out some of our trusted partners</p>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-16">
            <div className="w-40 h-40 flex justify-center items-center rounded-full bg-gray-100 shadow-md">
              <Image src="/airberlin.svg" alt="airberlin" width={120} height={120} />
            </div>
            <div className="w-40 h-40 flex justify-center items-center rounded-full bg-gray-100 shadow-md">
              <Image src="/hans.svg" alt="hans" width={100} height={100} />
            </div>
            <div className="w-40 h-40 flex justify-center items-center rounded-full bg-gray-100 shadow-md">
              <Image src="/etihad.svg" alt="etihad" width={80} height={80} />
            </div>
            {/* Add more logo divs as needed */}
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="bg-white py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">The Future of Airlines</h2>
            <p className="mt-4 text-lg text-gray-600">Explore the latest innovations shaping the future of airlines.</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative" style={{ maxWidth: '1000px', width: '100%', paddingBottom: '35%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                width="1000"
                height="350"
                src="https://www.youtube.com/embed/za3HjrAYmhM?si=yDpqk_BHYGgrEfGt"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* List Section */}

<section className="bg-white lg:py-28 pt-28 overflow-hidden">
  <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
    <div className="mb-16 text-center">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
        UNLOCK GROWTH POTENTIAL
      </h2>
      <p className="mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
        Maximize Revenue and Business Transformation
      </p>
    </div>
    <div className="flex flex-wrap -mx-8 items-center">
      <div className="w-full lg:w-1/2 px-8">
        <ul className="space-y-12">
          <li className="flex -mx-4">
            <div className="px-4">
              <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold rounded-full bg-blue-50 text-blue-500">
                1
              </span>
            </div>
            <div className="px-4">
              <h3 className="my-4 text-xl font-semibold text-purple-600">Strategic Advisory</h3>
              <p className="text-gray-500 leading-loose">
                Our seasoned consultants provide expert guidance on commercial strategies, digital transformation, and operational excellence to drive sustainable growth and profitability for your business.
              </p>
            </div>
          </li>
          <li className="flex -mx-4">
            <div className="px-4">
              <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold rounded-full bg-blue-50 text-blue-500">
                2
              </span>
            </div>
            <div className="px-4">
              <h3 className="my-4 text-xl font-semibold text-purple-600">Digital Solutions</h3>
              <p className="text-gray-500 leading-loose">
                Leverage our cutting-edge digital expertise to enhance customer experiences, streamline processes, and unlock new revenue streams through innovative digital solutions tailored to your unique needs.
              </p>
            </div>
          </li>
          <li className="flex -mx-4">
            <div className="px-4">
              <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold rounded-full bg-blue-50 text-blue-500">
                3
              </span>
            </div>
            <div className="px-4">
              <h3 className="my-4 text-xl font-semibold text-purple-600">Interim Leadership</h3>
              <p className="text-gray-500 leading-loose">
                Gain experienced leaders who can seamlessly step in and drive critical initiatives, manage transitions, and provide hands-on guidance to keep your organization running smoothly during times of change.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-1/2 px-8">
        <div className="lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0">
          <img src="/features.svg" alt="Digital transformation services at Alpha Digital Group" className="w-full h-full" />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Feature section */}
      <section className="bg-white pb-6">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="container mx-auto px-6 p-6 bg-white">
            <div className="mb-16 text-center">
              <h4 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">CAPABILITIES</h4>
              <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
                How We Drive Transformative Growth
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-b p-8">
                <div className="flex items-center mb-6">
                  <AiOutlineLineChart className="h-6 w-6 text-indigo-500" />
                  <div className="ml-4 text-xl text-indigo-500 font-semibold">Commercial Strategy</div>
                </div>
                <p className="leading-loose text-gray-500">
                  Leverage our deep industry expertise to develop commercial strategies that optimize revenue streams,
                  enhance customer experiences, and fortify your competitive edge.
                </p>
              </div>
              <div className="border-b p-8">
                <div className="flex items-center mb-6">
                  <AiOutlineRise className="h-6 w-6 text-indigo-500" />
                  <div className="ml-4 text-xl text-indigo-500 font-semibold">Digital Transformation</div>
                </div>
                <p className="leading-loose text-gray-500">
                  Embrace the power of digital technologies to streamline operations, unlock new business models, and
                  future-proof your organization with our comprehensive digital transformation solutions
                </p>
              </div>
              <div className="border-b p-8">
                <div className="flex items-center mb-6">
                  <AiOutlineTool className="h-6 w-6 text-indigo-500" />
                  <div className="ml-4 text-xl text-indigo-500 font-semibold">Operational Excellence</div>
                </div>
                <p className="leading-loose text-gray-500">
                  Maximize efficiency and productivity through our data-driven approach to optimizing processes, enhancing
                  resource utilization, and driving continuous improvement across your operations.
                </p>
              </div>
              <div className="border-b p-8">
                <div className="flex items-center mb-6">
                  <AiOutlineTeam className="h-6 w-6 text-indigo-500" />
                  <div className="ml-4 text-xl text-indigo-500 font-semibold">Interim Leadership</div>
                </div>
                <p className="leading-loose text-gray-500">
                  Bridge critical leadership gaps with our seasoned executives who bring hands-on experience and a proven
                  track record of delivering results in times of change or transition.
                </p>
              </div>
              <div className="border-b p-8">
                <div className="flex items-center mb-6">
                  <AiOutlineBank className="h-6 w-6 text-indigo-500" />
                  <div className="ml-4 text-xl text-indigo-500 font-semibold">Industry-Specific Solutions</div>
                </div>
                <p className="leading-loose text-gray-500">
                  Benefit from our tailored solutions that address the unique challenges and opportunities within the
                  airline, hospitality, and related industries, ensuring a competitive advantage.
                </p>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <AiOutlineTool className="h-6 w-6 text-indigo-500" />
                  <div className="ml-4 text-xl text-indigo-500 font-semibold">Strategic Partnerships</div>
                </div>
                <p className="leading-loose text-gray-500">
                  Extend your capabilities and accelerate growth through our strategic partnerships with industry-leading
                  technology providers, offering seamless integrations and cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Digital Leadership Section */}
      <section className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
            <Image src="/digital-product-logo.png" alt="Digital Product Leadership" width={200} height={200} className="mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Digital Product Leadership</h2>
            <p className="text-gray-600 text-center">Empower your digital products with innovative leadership.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
            <Image src="/digital-marketing-logo.png" alt="Digital Marketing Leadership" width={200} height={200} className="mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Digital Marketing Leadership</h2>
            <p className="text-gray-600 text-center">Lead your digital marketing campaigns to success with our expert guidance.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
            <Image src="/aviation-management-logo.png" alt="Aviation Management Leadership" width={200} height={200} className="mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Aviation Management Leadership</h2>
            <p className="text-gray-600 text-center">Navigate the skies of aviation management with our strategic leadership solutions.</p>
          </div>
        </div>
      </section>

      {/* WhatsApp Chat Button */}
      <section className="fixed bottom-8 left-8">
        <a href="https://wa.me/66828362713" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center">
          <FiMessageCircle className="h-6 w-6 inline-block mr-2" /> {/* WhatsApp Icon */}
          Chat on WhatsApp
        </a>
      </section>

      <Script id="tawk-script" strategy="lazyOnload">
        {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/667a7c95eaf3bd8d4d14248e/1i177dadk';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
        `}
      </Script>
    </div>
  );
}
