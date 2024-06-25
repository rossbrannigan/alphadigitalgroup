// components/FeatureSection.tsx
import { tw } from 'twind';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      {/* Feature items */}
      <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
        <div className={tw(`flex items-center mb-6`)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)}>
            <path fillRule="evenodd" d="M18.293 1.293a1 1 0 011.414 1.414l-9 9a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 10.586l8.293-8.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <div className={tw(`ml-4 text-xl`)}>Commercial Strategy</div>
        </div>
        {/* Rest of the component */}
      </div>
      {/* Other feature items */}
    </div>
  </section>
);

export default FeatureSection;
