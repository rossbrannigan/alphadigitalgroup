import { tw } from 'twind';
import Particles from 'react-particles-js';
import Arrow from '@/constants/svg/arrow.svg';

const ParticleBg = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 200, // Reduced the number of particles for better performance
          density: {
            enable: true,
            value_area: 3000,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          direction: `right`,
          speed: 0.3,
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
          },
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: false,
          },
        },
      },
      retina_detect: true,
    }}
  />
);

// Replace `caseStudies` with your actual case study data
const caseStudies = [
  {
    title: `Digital Transformation for Global Airline`,
    image: `/images/case-study-1.jpg`,
    alt: `Case study 1`,
  },
  {
    title: `Commercial Strategy for Luxury Hotel Chain`,
    image: `/images/case-study-2.jpg`,
    alt: `Case study 2`,
  },
  {
    title: `Operational Excellence for Cruise Line Company`,
    image: `/images/case-study-3.jpg`,
    alt: `Case study 3`,
  },
  // Add more case studies as needed
];

const CasesSection = () => (
  <section>
    <div className={tw`w-full min-h-screen bg-gray-900 relative`}>
      <div className={tw`absolute left-0 top-0 h-screen w-full overflow-hidden`}>
        <ParticleBg />
      </div>
      <div className={tw`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`}>
        <h1 className={tw`text-white text-4xl lg:text-7xl font-bold text-center`}>
          Transforming Businesses, Driving Growth
        </h1>
        <p className={tw`text-white text-gray-400 text-center text-xl mt-12`}>
          Explore our success stories and see how we've helped leading organizations across the airline, hospitality,
          and related industries achieve remarkable outcomes.
        </p>
        <div className={tw`mx-auto pt-24`}>
          <div className={tw`w-full flex flex-wrap justify-around`}>
            {caseStudies.map((study) => (
              <div
                key={study.title}
                className={tw`xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105`}
              >
                <div className={tw`h-64 z-20`}>
                  <img
                    src={study.image}
                    alt={study.alt}
                    className={tw`h-full w-full object-cover object-center overflow-hidden rounded`}
                    width={400}
                    height={300}
                  />
                </div>
                <div className={tw`p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`}>
                  <p className={tw`uppercase text-sm text-gray-700 text-center pb-1`}>Case Study</p>
                  <p className={tw`text-gray-500 text-center pb-1 text-sm`}>{study.title}</p>
                </div>
              </div>
            ))}
            <span
              className={tw`-mt-8 pb-12 lg:mt-4 flex items-center text-xl text-indigo-400 cursor-pointer z-30 hover:text-indigo-600`}
            >
              Explore More Success Stories
              <Arrow className={tw`h-6 w-6 fill-current ml-2`} />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CasesSection;
