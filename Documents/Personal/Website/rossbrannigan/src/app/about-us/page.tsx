import React from "react";
import Footer from "../components/footer";

// New metadata to improve SEO
export const metadata = {
  title: 'About Alpha Digital Group | Digital Commerce & Product Consulting',
  description: 'Alpha Digital Group provides market, digital commerce and product consulting services across industries globally. Learn about our founder and our approach.',
  keywords: 'digital consulting, commerce consulting, product consulting, global consulting, Alpha Digital Group',
}

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h1 className="text-2xl font-bold text-gray-900">About Us</h1>
        </div>
      </div>

      <div className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Alpha Digital Group is a consultancy that offers market, digital commerce and product consulting services across industries globally. We help businesses navigate the digital landscape and achieve sustainable growth through strategic insights and practical solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Meet the Founder
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Alpha Digital Group is led by a dedicated founder with extensive experience in digital commerce and product strategy.
              </p>
            </div>
            <div className="mt-10 text-center">
              <div className="space-y-10 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10 md:space-y-0">
                <div className="relative">
                  <div className="aspect-h-3 aspect-w-3 overflow-hidden rounded-md bg-gray-300">
                    <img
                      src="/founder.jpg"
                      alt="Alpha Digital Group Founder"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold leading-6 text-gray-900">
                      Ross Brannigan
                    </h3>
                    <p className="text-base text-indigo-600">Founder & CEO</p>
                    <p className="mt-2 text-base text-gray-500">
                      With years of industry experience, Ross provides strategic guidance and innovative solutions to help businesses thrive in the digital age.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Expertise
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                At Alpha Digital Group, we specialize in helping businesses optimize their digital presence and operations.
              </p>
            </div>
            <div className="mt-10">
              <dl className="space-y-10 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 md:space-y-0">
                <div className="relative">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    Market Analysis
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Comprehensive market research and competitive analysis to identify opportunities for growth.
                  </dd>
                </div>

                <div className="relative">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    Digital Commerce Strategy
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    End-to-end e-commerce solutions, from platform selection to conversion optimization.
                  </dd>
                </div>

                <div className="relative">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    Product Innovation
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Guidance on product development, positioning, and go-to-market strategies.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Approach
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                We believe in a collaborative approach, working closely with our clients to deliver tailored solutions that drive real business results.
              </p>
            </div>
            <div className="mt-10">
              <dl className="space-y-10 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 md:space-y-0">
                <div className="relative">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    Client-Centric
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Your business goals are our priority. We develop strategies that align with your vision and objectives.
                  </dd>
                </div>

                <div className="relative">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    Data-Driven
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Our recommendations are backed by thorough research and analysis, ensuring measurable results.
                  </dd>
                </div>

                <div className="relative">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    Sustainable Growth
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    We focus on long-term success, building strategies that continue to deliver value over time.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
