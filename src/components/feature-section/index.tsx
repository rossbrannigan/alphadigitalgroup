import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>CAPABILITIES</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
            How We Drive Transformative Growth
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Commercial Strategy</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Leverage our deep industry expertise to develop commercial strategies that optimize revenue streams,
              enhance customer experiences, and fortify your competitive edge.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Digital Transformation</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
              Embrace the power of digital technologies to streamline operations, unlock new business models, and
              future-proof your organization with our comprehensive digital transformation solutions
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Operational Excellence</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Maximize efficiency and productivity through our data-driven approach to optimizing processes, enhancing
              resource utilization, and driving continuous improvement across your operations.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Interim Leadership</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Bridge critical leadership gaps with our seasoned executives who bring hands-on experience and a proven
              track record of delivering results in times of change or transition.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Industry-Specific Solutions</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Benefit from our tailored solutions that address the unique challenges and opportunities within the
              airline, hospitality, and related industries, ensuring a competitive advantage.
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Strategic Partnerships</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Extend your capabilities and accelerate growth through our strategic partnerships with industry-leading
              technology providers, offering seamless integrations and cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
