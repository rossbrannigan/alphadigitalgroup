import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { Brain, Cpu, BarChart2, Database, Network, Lock, Search, PieChart } from 'lucide-react';

const AIStrategyServicesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>AI Strategy Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Expert AI Strategy Services for Business Innovation and Growth" />
      </Head>

      {/* Google Analytics and Tag Manager Scripts */}
      <Script
        id="google-analytics-script"
        src="https://www.googletagmanager.com/gtag/js?id=G-25Y0G3QQE6"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics-config-script"
        strategy="afterInteractive"
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
      <main className="container mx-auto py-8 px-4 mt-16">
        <div className="space-y-12">
          <section id="intro">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">AI Strategy Services</h1>
            <p className="text-lg text-gray-700">
              At Alpha Digital Group, we specialize in developing comprehensive AI strategies that drive business innovation and maximize growth potential. Our expert team leverages cutting-edge AI technologies and industry-leading methodologies to create powerful, tailored AI solutions that transform businesses and deliver measurable results.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our AI Strategy Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Brain size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">AI Readiness Assessment</h3>
                </div>
                <p className="text-white">We evaluate your organizations AI readiness and identify key areas for implementation.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Cpu size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Custom AI Solution Development</h3>
                </div>
                <p className="text-white">We design and implement tailored AI solutions to address your specific business challenges.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Database size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">AI-Driven Data Analytics</h3>
                </div>
                <p className="text-white">We harness the power of AI to extract actionable insights from your data.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Network size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">AI Integration and Deployment</h3>
                </div>
                <p className="text-white">We seamlessly integrate AI solutions into your existing infrastructure and workflows.</p>
              </div>
            </div>
          </section>

          <section id="ai-expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">AI Strategy Expertise</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Alpha Digital Group, we pride ourselves on our extensive expertise in various aspects of AI strategy. Our proficiency includes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Machine Learning and Deep Learning</li>
              <li className="text-lg text-gray-700">Natural Language Processing (NLP)</li>
              <li className="text-lg text-gray-700">Computer Vision and Image Recognition</li>
              <li className="text-lg text-gray-700">Predictive Analytics and Forecasting</li>
              <li className="text-lg text-gray-700">Robotic Process Automation (RPA)</li>
              <li className="text-lg text-gray-700">AI Ethics and Responsible AI Implementation</li>
              <li className="text-lg text-gray-700"><a href="/services/digital/ai/explainable-ai">Explainable AI (XAI)</a></li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We specialize in developing custom AI strategies tailored to every industry, ensuring that our solutions perfectly align with your specific business context and innovation objectives.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Power of Effective AI Strategy</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in AI strategy provides immense value to businesses seeking to leverage AI for growth and innovation. Heres why it matters:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Competitive Advantage:</span> Stay ahead in your industry by leveraging cutting-edge AI technologies.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Operational Efficiency:</span> Streamline processes and reduce costs through AI-driven automation.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Enhanced Decision-Making:</span> Make data-driven decisions with AI-powered insights and predictive analytics.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Personalized Customer Experiences:</span> Deliver tailored experiences that increase customer satisfaction and loyalty.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Innovation:</span> Unlock new business opportunities and revenue streams through AI-driven innovation.
              </li>
            </ul>
          </section>

          <section id="tech-stack">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our AI Technology Stack</h2>
            <p className="text-lg text-gray-700 mb-4">
              We leverage cutting-edge AI technologies to deliver exceptional results:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <BarChart2 size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Advanced machine learning frameworks like TensorFlow and PyTorch</p>
              </div>
              <div className="flex items-center">
                <PieChart size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Cloud-based AI services from leading providers like AWS, Google Cloud, and Azure</p>
              </div>
              <div className="flex items-center">
                <Lock size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Secure and scalable AI infrastructure for enterprise-grade deployments</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in these modern AI technologies allows us to create comprehensive AI strategies that drive real results and maximize your business potential.
            </p>
          </section>

          <section id="ai-tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">AI Tools We Use</h2>
            <p className="text-lg text-gray-700 mb-4">
              We utilize a range of sophisticated tools to develop and implement effective AI strategies:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Jupyter Notebooks for data exploration and model prototyping</li>
              <li className="text-lg text-gray-700">MLflow for machine learning lifecycle management</li>
              <li className="text-lg text-gray-700">Kubeflow for scalable, portable machine learning on Kubernetes</li>
              <li className="text-lg text-gray-700">Apache Spark for large-scale data processing</li>
              <li className="text-lg text-gray-700">Databricks for collaborative AI and analytics</li>
              <li className="text-lg text-gray-700">H2O.ai for automated machine learning</li>
            </ul>
            <p className="text-lg text-gray-700">
              Our proficiency with these tools enables us to create data-driven AI strategies that optimize your business processes and drive sustainable growth in the digital age.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our AI Strategy Development Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Discovery and Requirements Gathering: Understanding your business needs and AI goals</li>
              <li className="text-lg text-gray-700">AI Readiness Assessment: Evaluating your organizations current capabilities and infrastructure</li>
              <li className="text-lg text-gray-700">Strategy Formulation: Developing a comprehensive AI roadmap aligned with your business objectives</li>
              <li className="text-lg text-gray-700">Solution Design: Creating tailored AI solutions to address your specific challenges</li>
              <li className="text-lg text-gray-700">Data Preparation and Integration: Ensuring your data is ready for AI implementation</li>
              <li className="text-lg text-gray-700">Model Development and Training: Building and refining AI models to meet your needs</li>
              <li className="text-lg text-gray-700">Testing and Validation: Rigorously testing AI solutions to ensure accuracy and reliability</li>
              <li className="text-lg text-gray-700">Deployment and Integration: Implementing AI solutions into your existing workflows</li>
              <li className="text-lg text-gray-700">Monitoring and Optimization: Continuously improving AI performance based on real-world feedback</li>
            </ol>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl mb-6">Lets create a powerful AI strategy that drives innovation and accelerates your growth.</p>
              <a
                href="mailto:ross@alphadigitalgroup.co"
                className="inline-block bg-white text-[rgba(128,19,176,255)] py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Contact Us Today
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AIStrategyServicesPage;