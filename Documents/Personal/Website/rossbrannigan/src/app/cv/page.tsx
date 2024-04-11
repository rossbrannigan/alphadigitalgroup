import Image from "next/image";
import Head from 'next/head';
import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
      <GoogleAnalytics gaId="G-R17NJV1L4N" />
      <GoogleTagManager gtmId="G-R17NJV1L4N" /> 

        <title>Global management consulting | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Global management consulting" />

      </Head>

      


      {/* Header */}
<header className="bg-black shadow-lg">
  <div className="container mx-auto py-4 flex items-center justify-between">
    <div className="mr-4">
      <a href="/">
        {/* Added border-none class */}
        <Image src="/ross_brannigan_logo.svg" alt="Ross Brannigan Signature" width={250} height={150} className="border-none" />
      </a>
    </div>
    <nav>
      <ul className="flex space-x-6">
        <li><a href="https://calendly.com/ross-brannigan/30min?month=2024-04" className="text-white hover:text-yellow-400 transition-colors duration-300">Schedule A Call</a></li>
        <li><a href="marketplace" className="text-white hover:text-yellow-400 transition-colors duration-300">Marketplace</a></li>
        <li><a href="cv" className="text-white hover:text-yellow-400 transition-colors duration-300">CV</a></li>
        <li><a href="Media" className="text-white hover:text-yellow-400 transition-colors duration-300">Media</a></li>
        <li><a href="locations" className="text-white hover:text-yellow-400 transition-colors duration-300">Locations</a></li>
        <li><a href="about" className="text-white hover:text-yellow-400 transition-colors duration-300">About</a></li>
        <li><a href="blog" className="text-white hover:text-yellow-400 transition-colors duration-300">Blog</a></li>
        {/* Changed button text to "Get Ahead" and modified button styles */}
        <li><a href="/hire-us" className="text-black bg-white py-2 px-4 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-300">Get Ahead</a></li>
      </ul>
    </nav>
  </div>
</header>

{/* Main content */}
<main className="container mx-auto py-8 px-4">
  <section className="mb-8">
    <h1 className="text-3xl font-bold mb-4 text-black font-georgia">Ross Brannigan</h1>
    <p className="text-lg text-black font-times-new-roman">Sathorn, Bangkok, Thailand | +66-82-836-2713 | rossbrannigan@gmail.com | linkedin/in/ross-brannigan</p>
  </section>

  {/* Professional Summary */}
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-4 text-black font-georgia">Professional Summary</h2>
    <p className="text-lg text-black font-times-new-roman">
      Results-driven leader with extensive experience across eCommerce, Digital Products, Marketing, Sales, & Operations. Proven expertise in spearheading cross-functional teams & executing strategic initiatives at top multinational corporations including Etihad, air berlin, Facebook, Groupon, Dell, & Yahoo. Adept at leading diverse teams in complex environments, combining strategic vision with tactical execution. Entrepreneurial mindset with a strong sense of professionalism, integrity, & ethics. Seeking a senior global role in a progressive organization to leverage multidisciplinary expertise & drive results.
    </p>
  </section>

  {/* Education */}
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-4 text-black font-georgia">Education</h2>
    <ul className="list-disc pl-6 text-black font-times-new-roman">
      <li>Cranfield University, Executive MSc in Aviation Management (Deferred due to Covid 19)</li>
      <li>IE Business School, Master of Business Administration (Marketing), Fundacion Carolina Scholarship recipient</li>
      <li>ESDES Business School, Bac+3 in International Business, French Grande école</li>
    </ul>
  </section>

  {/* Professional Experience */}
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-4 text-black font-georgia">Professional Experience</h2>
    {/* Insert Professional Experience content here */}
  </section>

  {/* Languages */}
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-4 text-black font-georgia">Languages</h2>
    {/* Insert Languages content here */}
  </section>

  {/* Technical Skills */}
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-4 text-black font-georgia">Technical Skills</h2>
    {/* Insert Technical Skills content here */}
  </section>

  {/* Additional Information */}
  <section>
    <h2 className="text-xl font-semibold mb-4 text-black font-georgia">Additional Information</h2>
    {/* Insert Additional Information content here */}
  </section>
</main>




{/* Footer */}
<footer className="bg-black text-white py-8">
  <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between">
    {/* Logo */}
    <div className="mb-4 lg:mb-0 lg:order-1 lg:self-start">
      <Image
        src="/ross-logo-initial-icon.svg"
        alt="Ross Brannigan Initials"
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
            <li className="mb-0.5">
              <a href="https://calendly.com/ross-brannigan/30min?month=2024-04" className="hover:text-white text-xs">
                Schedule A Call
              </a>
            </li>
            <li className="mb-0.5">
              <a href="Marketplace" className="hover:text-white text-xs">
                Marketplace
              </a>
            </li>
            <li className="mb-0.5">
              <a href="CV" className="hover:text-white text-xs">
                CV
              </a>
            </li>
            <li className="mb-0.5">
              <a href="locations" className="hover:text-white text-xs">
                Locations
              </a>
            </li>
            <li className="mb-0.5">
              <a href="Media" className="hover:text-white text-xs">
                Media
              </a>
            </li>
            <li className="mb-0.5">
              <a href="about" className="hover:text-white text-xs">
                About 
              </a>
            </li>
            <li className="mb-0.5">
              <a href="blog" className="hover:text-white text-xs">
                Blog
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
                Contact Ross
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
  </div>


  {/* Divider */}
  <hr className="border-t border-gray-600 w-full my-8" />
  {/* Copyright text */}
  <p className="text-xs text-gray-300 text-center lg:order-5">
    © 2020-2024. All rights reserved.
  </p>
  {/* Powered by Ross Brannigan */}
  <p className="text-xs text-gray-300 text-center mt-4 lg:order-6">
    Powered by <a href="https://www.rossbrannigan.co" target="_blank" rel="noopener noreferrer" className="underline">Ross Brannigan</a>
  </p>
</footer>

    </div>
  );
}
