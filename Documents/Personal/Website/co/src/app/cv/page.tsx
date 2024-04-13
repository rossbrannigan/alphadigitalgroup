import Image from "next/image";
import Head from 'next/head';
import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <GoogleAnalytics gaId="G-R17NJV1L4N" />
        <GoogleTagManager gtmId="G-R17NJV1L4N" />
        <title>Ross Brannigan | CV</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="CV of Ross Brannigan" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Ross Brannigan | CV" />
        <meta property="og:description" content="CV of Ross Brannigan" />
        <meta property="og:image" content="ross-standing.png" />
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
          <p className="text-lg text-black font-times-new-roman">
            <a href="https://www.google.com/maps?q=Sathorn,Bangkok,Thailand" target="_blank" rel="noopener noreferrer">Sathorn, Bangkok, Thailand</a> | <a href="tel:+66828362713">+66-82-836-2713</a> | <a href="mailto:rossbrannigan@gmail.com">rossbrannigan@gmail.com</a> | <a href="https://www.linkedin.com/in/ross-brannigan/" target="_blank" rel="noopener noreferrer">linkedin/in/ross-brannigan</a>
          </p>
        </section>

  {/* Professional Summary */}
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-4 text-black font-georgia">Professional Summary</h2>
    <p className="text-lg text-black font-times-new-roman">
      Results-driven leader with extensive experience across eCommerce, Digital Products, Marketing, Sales, & Operations. Proven expertise in spearheading cross-functional teams & executing strategic initiatives at top multinational corporations including Etihad, air berlin, Facebook, Groupon, Dell, & Yahoo. Adept at leading diverse teams in complex environments, combining strategic vision with tactical execution. Entrepreneurial mindset with a strong sense of professionalism, integrity, & ethics. Seeking a senior global role in a progressive organization to leverage multidisciplinary expertise & drive results.
    </p>
  </section>

        {/* Key Skills */}
<section className="mb-8">
  <h2 className="text-xl font-semibold mb-4 text-black font-georgia">Key Skills</h2>
  <div className="grid grid-cols-4">
    <div className="col-span-1">
      <ul className="list-disc pl-6 text-black font-times-new-roman">
        <li>Product Management</li>
        <li>Marketing</li>
      </ul>
    </div>
    <div className="col-span-1">
      <ul className="list-disc pl-6 text-black font-times-new-roman">
        <li>Business Development</li>
        <li>Revenue Management</li>
      </ul>
    </div>
    <div className="col-span-1">
      <ul className="list-disc pl-6 text-black font-times-new-roman">
        <li>Strategy</li>
        <li>Data, Analytics & AI Strategy</li>
      </ul>
    </div>
    <div className="col-span-1">
      <ul className="list-disc pl-6 text-black font-times-new-roman">
        <li>Leadership</li>
        <li>Digital</li>
      </ul>
    </div>
  </div>
</section>

{/* Professional Experience */}
<section className="mb-8">
  <h2 className="text-xl font-semibold mb-4 text-black font-georgia">Professional Experience</h2>

  {/* Dohop */}
  <div className="mb-6">
    <div className="flex justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-1 text-black">Dohop <span className="text-gray-700 italic">(Travel Technology)</span></h3>
        <p className="text-gray-700 italic">A travel tech company entering the Asian market.</p>
      </div>
      <div className="text-right">
        <p className="text-black mb-1 italic"><span className="font-bold">Bangkok, Thailand</span></p>
        <p className="text-black mb-1 italic">June 2023 – March 2024</p>
      </div>
    </div>
    <p className="mb-3 text-black"><span className="font-bold italic">Partner Success Manager Asia</span></p>
    <ul className="list-disc pl-6">
      <li className="text-black">Optimized performance of existing partners significantly. Accelerated growth of Thai VietJet in the Thai market by over 500% in just 6 months.</li>
      <li className="text-black">Reignited previously stalled accounts in Indonesia & generated new business with the leading airline in Korea.</li>
    </ul>
  </div>
  
  {/* Hans Airways */}
  <div className="mb-6">
    <div className="flex justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-1 text-black">Hans Airways <span className="text-gray-700 italic">(Airline)</span></h3>
        <p className="text-gray-700 italic">Ambitious post-pandemic startup airline serving the UK & India.</p>
      </div>
      <div className="text-right">
        <p className="text-black mb-1 italic"><span className="font-bold">Phuket, Thailand</span></p>
        <p className="text-black mb-1 italic">September 2021 – June 2023</p>
      </div>
    </div>
    <p className="mb-3 text-black"><span className="font-bold italic">Head of Marketing & Digital Strategy</span></p>
    <ul className="list-disc pl-6">
      <li className="text-black">Launched a long-haul airline between the UK & India market in under 12 months. Reported directly to CCO & CEO.</li>
      <li className="text-black">Accomplished with maximum efficiency & minimal cost using world-class digital product, marketing, and AI know-how.</li>
    </ul>
  </div>

  {/* G42 */}
  <div className="mb-6">
    <div className="flex justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-1 text-black">G42 <span className="text-gray-700 italic">(AI & Cloud Technology)</span></h3>
        <p className="text-gray-700 italic">One of the top AI and technology companies in the Middle East.</p>
      </div>
      <div className="text-right">
        <p className="text-black mb-1 italic"><span className="font-bold">Abu Dhabi, United Arab Emirates</span></p>
        <p className="text-black mb-1 italic">February 2021 – August 2021</p>
      </div>
    </div>
    <p className="mb-3 text-black"><span className="font-bold italic">Senior Marketing Specialist</span></p>
    <ul className="list-disc pl-6">
      <li className="text-black">Spearheaded the development of a strategic marketing plan for a leading cloud provider's expansion into the UAE market, reporting directly to the COO and CEO.</li>
    </ul>
  </div>

  {/* Etihad Airways PJSC */}
  <div className="mb-6">
    <div className="flex justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-1 text-black">Etihad Airways PJSC <span className="text-gray-700 italic">(Airline)</span></h3>
        <p className="text-gray-700 italic">Etihad is one of the world's best airlines with an exceptional guest experience.</p>
      </div>
      <div className="text-right">
        <p className="text-black mb-1 italic"><span className="font-bold">Abu Dhabi, United Arab Emirates</span></p>
        <p className="text-black mb-1 italic">October 2018 – October 2020</p>
      </div>
    </div>
    <p className="mb-3 text-black"><span className="font-bold italic">Senior Manager | Digital Retail & Pricing</span></p>
    <ul className="list-disc pl-6">
      <li className="text-black">Senior leadership role reporting to head of department. Inspired & motivated a high-performing team to accelerate the ancillary pricing strategy for the airline, utilizing data science & artificial intelligence.</li>
      <li className="text-black">Built pricing strategy for commercial initiatives that contributed to over $300 million in ancillary revenue.</li>
    </ul>
  </div>

  {/* World Hotels AG */}
  <div className="mb-6">
    <div className="flex justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-1 text-black">World Hotels AG <span className="text-gray-700 italic">(Travel/Hospitality)</span></h3>
        <p className="text-gray-700 italic">The world's leading independent luxury hotel group.</p>
      </div>
      <div className="text-right">
        <p className="text-black mb-1 italic"><span className="font-bold">Frankfurt, Germany</span></p>
        <p className="text-black mb-1 italic">October 2017 – March 2018</p>
      </div>
    </div>
    <p className="mb-3 text-black"><span className="font-bold italic">Director of eCommerce</span></p>
    <ul className="list-disc pl-6">
      <li className="text-black">Restructured & modernized ecommerce and digital marketing service offering for portfolio of >200 global luxury properties.</li>
      <li className="text-black">Managed global team of 4 in EMEA, AMERICAS & APAC. Unfortunately, left role due to 2 broken ribs.</li>
    </ul>
  </div>

   {/* City Jet DAC */}
  <div className="mb-6">
    <div className="flex justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-1 text-black">City Jet DAC <span className="text-gray-700 italic">(Airline)</span></h3>
        <p className="text-gray-700 italic">One of the best European regional airlines</p>
      </div>
      <div className="text-right">
        <p className="text-black mb-1 italic"><span className="font-bold">Swords, Ireland</span></p>
        <p className="text-black mb-1 italic">January 2016 – June 2017</p>
      </div>
    </div>
    <p className="mb-3 text-black"><span className="font-bold italic">ECommerce Manager</span></p>
    <ul className="list-disc pl-6">
      <li className="text-black">Senior leadership role reporting directly to CCO & responsible for digital product strategy & digital marketing.</li>
      <li className="text-black">Motivated a turnaround in existing team responsible for developing and executing eCommerce and digital marketing strategies.</li>
      <li className="text-black">Achieved significant improvement of results across online advertising, social media, SEO, PPC, website and app development, UX, media agency management, web analytics, and CMS (acquisition costs reduced 50%, digital distribution increased 20%).</li>
    </ul>
  </div>

  {/* Air Berlin */}
  <div className="mb-6">
    <div className="flex justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-1 text-black">Air Berlin <span className="text-gray-700 italic">(Airline)</span></h3>
        <p className="text-gray-700 italic">Formerly the second largest airline in Germany and major operator</p>
      </div>
      <div className="text-right">
        <p className="text-black mb-1 italic"><span className="font-bold">Berlin, Germany</span></p>
        <p className="text-black mb-1 italic">April 2014 – September 2015</p>
      </div>
    </div>
    <p className="mb-3 text-black"><span className="font-bold italic">Head of Online Sales</span></p>
    <ul className="list-disc pl-6">
      <li className="text-black">Revitalized online and digital commercial performance as a key leader in the turnaround effort.</li>
      <li className="text-black">Championed the onboarding of Data & AI driven vendors that significantly improved conversion.</li>
    </ul>
  </div>

  {/* Jet Wave */}
  <div className="mb-6">
    <div className="flex justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-1 text-black">Jet Wave <span className="text-gray-700 italic">(Private Airline Marketplace)</span></h3>
        <p className="text-gray-700 italic">Private startup with vision to connect unscheduled travel</p>
      </div>
      <div className="text-right">
        <p className="text-black mb-1 italic"><span className="font-bold">Berlin, Germany</span></p>
        <p className="text-black mb-1 italic">April 2013 – March 2014</p>
      </div>
    </div>
    <p className="mb-3 text-black"><span className="font-bold italic">Founder | Business & Product Development</span></p>
    <ul className="list-disc pl-6">
      <li className="text-black">Spearheaded the launch of an "uber for private jets" venture across key European markets, leveraging the guidance and resources of the prestigious Founder Institute, a Silicon Valley start-up incubator.</li>
    </ul>
  </div>

  {/* Groupon */}
  <div className="mb-6">
    <div className="flex justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-1 text-black">Groupon <span className="text-gray-700 italic">(Consumer Internet / Technology)</span></h3>
        <p className="text-gray-700 italic">The world’s fastest revenue-growing company in history</p>
      </div>
      <div className="text-right">
        <p className="text-black mb-1 italic"><span className="font-bold">Berlin, Germany</span></p>
        <p className="text-black mb-1 italic">March 2012 – March 2013</p>
      </div>
    </div>
    <p className="mb-3 text-black"><span className="font-bold italic">Head of Affiliate Marketing</span></p>
    <ul className="list-disc pl-6">
      <li className="text-black">Headed a global team of over 20 reports inc. highly skilled marketers, data analysts, partners managers & country managers.</li>
      <li className="text-black">Spearheaded growth of the affiliate channel by 10% YoY, generating an incremental $30 million in revenue. Slashed acquisition costs by 5%.</li>
    </ul>
  </div>

  {/* Dell */}
  <div className="mb-6">
    <div className="flex justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-1 text-black">Dell <span className="text-gray-700 italic">(Technology)</span></h3>
        <p className="text-gray-700 italic">One of the largest and most successful technology companies in the world</p>
      </div>
      <div className="text-right">
        <p className="text-black mb-1 italic"><span className="font-bold">Dublin, Ireland</span></p>
        <p className="text-black mb-1 italic">September 2010 – March 2012</p>
      </div>
    </div>
    <p className="mb-3 text-black"><span className="font-bold italic">Manager | Online Media</span></p>
    <ul className="list-disc pl-6">
      <li className="text-black">Managed a $12 million annual media budget and guided 3 media agency reports to reach Dell’s quarterly business targets.</li>
      <li className="text-black">Improved performance of ongoing business relationship with agency partners and important media publishers (inc. Google).</li>
    </ul>
  </div>

  {/* Meta / Facebook */}
  <div className="mb-6">
    <div className="flex justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-1 text-black">Meta / Facebook <span className="text-gray-700 italic">(Consumer Internet / Technology)</span></h3>
        <p className="text-gray-700 italic">The largest social network in the world & one of the best managed companies</p>
      </div>
      <div className="text-right">
        <p className="text-black mb-1 italic"><span className="font-bold">Dublin, Ireland</span></p>
        <p className="text-black mb-1 italic">October 2009 – September 2010</p>
      </div>
    </div>
    <p className="mb-3 text-black"><span className="font-bold italic">Online Sales Analyst</span></p>
    <ul className="list-disc pl-6">
      <li className="text-black">Propelled Facebook's early growth as one of the first hires in Europe, providing key sales support & BI for management.</li>
    </ul>
  </div>

  {/* Yahoo! Inc. */}
  <div className="mb-6">
    <div className="flex justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-1 text-black">Yahoo! Inc. <span className="text-gray-700 italic">(Consumer Internet / Technology)</span></h3>
        <p className="text-gray-700 italic">One of the first and largest global internet consumer brands</p>
      </div>
      <div className="text-right">
        <p className="text-black mb-1 italic"><span className="font-bold">Dublin/Barcelona, Ireland/Spain</span></p>
        <p className="text-black mb-1 italic">December 2006 – September 2009</p>
      </div>
    </div>
    <p className="mb-3 text-black"><span className="font-bold italic">Media Account Manager</span></p>
    <ul className="list-disc pl-6">
      <li className="text-black">Managing advertising and media campaigns across global Yahoo! digital products and properties (e.g. Yahoo! Finance).</li>
      <li className="text-black">Promoted to steer media account management team in Dublin. Became one of the best performers in department within 6 months.</li>
    </ul>
  </div>
  
  {/* Insert other professional experiences here */}
</section>

{/* Education */}
<section className="mb-8">
  <h2 className="text-xl font-bold mb-4 text-black font-georgia uppercase">Education</h2>

  <div className="mb-6">
    <div className="flex justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-1 text-black">Cranfield University</h3>
        <p className="text-gray-700 italic">Executive MSc in Aviation Management</p>
      </div>
      <div className="text-right">
        <p className="text-black mb-1"><span className="font-bold">United Kingdom</span></p>
        <p className="text-black mb-1 italic">2019-2020</p>
      </div>
    </div>
    <ul className="list-disc pl-6">
      <li className="text-black">Deferred due to Covid 19</li>
    </ul>
  </div>

  <div className="mb-6">
    <div className="flex justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-1 text-black">IE Business School</h3>
        <p className="text-gray-700 italic">Master of Business Administration (Marketing)</p>
      </div>
      <div className="text-right">
        <p className="text-black mb-1"><span className="font-bold">Madrid, Spain</span></p>
        <p className="text-black mb-1 italic">2007-2008</p>
      </div>
    </div>
    <ul className="list-disc pl-6">
      <li className="text-black">Fundacion Carolina Scholarship recipient</li>
    </ul>
  </div>

  <div className="mb-6">
    <div className="flex justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-1 text-black">ESDES Business School</h3>
        <p className="text-gray-700 italic">Bac+3 in International Business. French Grande école.</p>
      </div>
      <div className="text-right">
        <p className="text-black mb-1"><span className="font-bold">Lyon, France</span></p>
        <p className="text-black mb-1 italic">2003-2004</p>
      </div>
    </div>
  </div>
</section>

{/* Languages */}
<section className="mb-8">
  <h2 className="text-xs font-bold mb-4 text-black font-georgia uppercase">Languages</h2>
  <ul className="list-disc pl-6">
    <li className="mb-2 text-black text-sm font-times">English (Native)</li>
    <li className="mb-2 text-black text-sm font-times">Spanish (Advanced) - Studied and worked in Spain for 2 years</li>
    <li className="mb-2 text-black text-sm font-times">German (Fluent) - Over 5 years working and living in Germany</li>
    <li className="mb-2 text-black text-sm font-times">Thai (Basic) - 2.5 years living in Thailand</li>
    <li className="mb-2 text-black text-sm font-times">French (Basic) - One year living in Lyon</li>
    <li className="mb-2 text-black text-sm font-times">Italian (Basic) - Taken college classes</li>
    <li className="mb-2 text-black text-sm font-times">Russian (Basic) - Currently learning the Cyrillic alphabet (in 2024). Interested in further developing language competencies, particularly in Pan-European, Chinese, and Arabic.</li>
  </ul>
</section>


{/* Technical Skills */}
<section className="mb-8">
  <h2 className="text-xs font-bold mb-4 text-black font-georgia uppercase">Technical Skills</h2>
  <ul className="list-disc pl-6">
    <li className="mb-2 text-black text-sm font-times">Microsoft Office</li>
    <li className="mb-2 text-black text-sm font-times">Web & Analytics: Google Analytics 4, Tag Manager, Adobe, Mixpanel, Amplitude, Heap</li>
    <li className="mb-2 text-black text-sm font-times">Ad Tech: Google Ad Manager, Amazon, Trade Desk, Criteo, GDN, DSPs, RTB</li>
    <li className="mb-2 text-black text-sm font-times">Affiliate Networks: AWIN, Rakuten, CJ</li>
    <li className="mb-2 text-black text-sm font-times">BI: Python, R, Power BI, Tableau</li>
    <li className="mb-2 text-black text-sm font-times">CRM: Salesforce, HubSpot, Freshworks</li>
    <li className="mb-2 text-black text-sm font-times">Front & Back-end: HTML, CSS, JS, SQL, Python, Node.js, React, Vue, Angular</li>
    <li className="mb-2 text-black text-sm font-times">Product Management: Figma, Adobe XD, Marvel, PRDs, Agile, Lean, Design Thinking</li>
    <li className="mb-2 text-black text-sm font-times">Project & Collaboration: GitHub, Jira, Confluence, Asana, Trello, Slack, Teams, Scrum, Notion, ClickUp</li>
    <li className="mb-2 text-black text-sm font-times">eCommerce Platforms: <a href="http://stackshare.io/rossbrannigan" className="text-blue-600 underline">stackshare.io/rossbrannigan</a>, Shopify, WooCommerce, Magento, BigCommerce, Netlify, Vercel</li>
    <li className="mb-2 text-black text-sm font-times">Travel Tech: Amadeus, Sabre, Res2, Altea, NDC, Hotel Systems, Travelport</li>
    <li className="mb-2 text-black text-sm font-times">Cyber Security: Kali, Distil, Cloudflare, Imperva, NIST</li>
    <li className="mb-2 text-black text-sm font-times">Cloud: AWS, Azure, GCP, Docker, K8s</li>
    <li className="mb-2 text-black text-sm font-times">Blockchain: Ethereum, Hyperledger, Corda, Crypto</li>
    <li className="mb-2 text-black text-sm font-times">UX Design</li>
    <li className="mb-2 text-black text-sm font-times">Data Science: NumPy, Pandas, Scikit-learn, TensorFlow</li>
    <li className="mb-2 text-black text-sm font-times">Mobile App Dev: iOS, Android</li>
    <li className="mb-2 text-black text-sm font-times">DevOps & SRE</li>
    <li className="mb-2 text-black text-sm font-times">Digital Transformation: Strategy, Innovation, CX, Data-driven, Change Management</li>
    <li className="mb-2 text-black text-sm font-times">Marketing Platforms: Canva</li>
    <li className="mb-2 text-black text-sm font-times">AI Tools: ChatGPT, Stable Diffusion, Midjourney, GPT-3, Murf</li>
    <li className="mb-2 text-black text-sm font-times">API Development & Integration: RESTful APIs, GraphQL, Django REST Framework, Flask, Airtable, Contentful, Strapi</li>
    <li className="mb-2 text-black text-sm font-times">Further details about digital skills and digital product portfolio available on <a href="https://github.com/yourgithubusername" className="text-blue-600 underline">GitHub</a>.</li>
  </ul>
</section>

{/* Other Information */}
<section className="mb-8">
  <h2 className="text-xs font-bold mb-4 text-black font-georgia uppercase">Other Information</h2>
  {/* Internships */}
  <div className="mb-4">
    <h3 className="text-sm font-bold mb-2 text-black font-times">Internships:</h3>
    <ul className="list-disc pl-6">
      <li className="mb-1 text-black text-sm font-times">GSI Commerce / eBay Enterprise (Summer Internship, Barcelona, Spain, 2006)</li>
      <li className="mb-1 text-black text-sm font-times">National Pen (High School Internship, Dundalk, Ireland, 2002)</li>
    </ul>
  </div>
  {/* Work Experience */}
  <div>
    <h3 className="text-sm font-bold mb-2 text-black font-times">Work Experience:</h3>
    <ul className="list-disc pl-6">
      <li className="mb-1 text-black text-sm font-times">Bar Staff, Dundalk Stadium (Premier horse racing track, Dundalk, Ireland, 2003-2006)</li>
    </ul>
  </div>
</section>

{/* Additional Courses & Certificates */}
<section className="mb-8">
  <h2 className="text-xs font-bold mb-4 text-black font-georgia uppercase">Additional Courses & Certificates</h2>
  <ul className="list-disc pl-6">
    <li className="mb-1 text-black text-sm font-times">Certificate in Digital Product Management (April 2024) - University of Virginia</li>
    <li className="mb-1 text-black text-sm font-times">Strategic Leadership (December 2022) - Dartmouth</li>
    <li className="mb-1 text-black text-sm font-times">Strategic Technology Management (December 2022) - University of Pennsylvania</li>
    <li className="mb-1 text-black text-sm font-times">AI for Business (May 2022) - University of Illinois at Urbana-Champaign</li>
    <li className="mb-1 text-black text-sm font-times">Blockchain Strategy (November 2021) - INSEAD</li>
    <li className="mb-1 text-black text-sm font-times">International Affairs / Espace Mondial (April 2018) - Sciences Po</li>
    <li className="mb-1 text-black text-sm font-times">Full Stack Web and Multiplatform Mobile App Development (April 2018) - Hong Kong University of Science & Tech</li>
    <li className="mb-1 text-black text-sm font-times">Revenue Management & Revenue Strategy (March 2018) - ESSEC Business School</li>
    <li className="mb-1 text-black text-sm font-times">Introduction to Databases (January 2016) - Stanford Online</li>
    <li className="mb-1 text-black text-sm font-times">CS101 (December 2014) - Stanford Online / Stanford University</li>
    <li className="mb-1 text-black text-sm font-times">Financial Markets with Robert Schiller (April 2014) - Coursera / Yale University</li>
    <li className="mb-1 text-black text-sm font-times">Analyzing Global Trends for Business & Society (June 2014) - Coursera / University of Pennsylvania</li>
    <li className="mb-1 text-black text-sm font-times">CS50 with David J. Malan (February 2015) - edX / Harvard University</li>
    <li className="mb-1 text-black text-sm font-times">Data Science Certificate (February 2015) - Coursera / John Hopkins University</li>
    <li className="mb-1 text-black text-sm font-times">Social Media & Community Conference / Dell Social Media Certification (October 2010), London, United Kingdom</li>
    <li className="mb-1 text-black text-sm font-times">Yahoo! Sales Academy - SPIN Sales Techniques (May 2009), Dublin, Ireland</li>
  </ul>
</section>

{/* International Exposure */}
<section className="mb-8">
  <h2 className="text-xs font-bold mb-4 text-black font-georgia uppercase">International Exposure</h2>
  <ul className="list-disc pl-6">
    <li className="mb-1 text-black text-sm font-times">Germany, France, Spain, Italy, China, Latin America, Baltics, South-east Asia</li>
    <li className="mb-1 text-black text-sm font-times">Life-long interest in learning additional international perspectives & cultural traits.</li>
  </ul>
</section>

{/* Management Disposition */}
<section className="mb-8">
  <h2 className="text-xs font-bold mb-4 text-black font-georgia uppercase">Management Disposition</h2>
  <p className="text-black text-sm font-times">Passionate about diversity, creating business value, intrapreneurship & developing people. Participated in several leadership workshops inc. Etihad’s future leadership development program</p>
</section>

{/* Hobbies/Interests */}
<section className="mb-8">
  <h2 className="text-xs font-bold mb-4 text-black font-georgia uppercase">Hobbies/Interests</h2>
  <p className="text-black text-sm font-times">I am an avid runner, sports & health enthusiast with passion for travelling, learning, international business, international affairs, crypto trading, developing my relationships, music & cinema amongst many other interests.</p>
</section>

{/* Other Links */}
<section className="mb-8">
  <h2 className="text-xs font-bold mb-4 text-black font-georgia uppercase">Other Links</h2>
  <ul className="list-disc pl-6">
    <li className="mb-1 text-black text-sm font-times">My personal website</li>
    <li className="mb-1 text-black text-sm font-times">My Web3 website</li>
    <li className="mb-1 text-black text-sm font-times">Medium</li>
    <li className="mb-1 text-black text-sm font-times">X</li>
  </ul>
</section>

{/* References */}
<section className="mb-8">
  <h2 className="text-xs font-bold mb-4 text-black font-georgia uppercase">References</h2>
  <p className="text-black text-sm font-times">Available upon further request.</p>
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
