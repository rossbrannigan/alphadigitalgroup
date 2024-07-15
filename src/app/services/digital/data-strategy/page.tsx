import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { Database, BarChart2, PieChart, GitBranch, Layers, Zap, Lock, Search } from 'lucide-react';

const DataStrategyServicesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Data Strategy Services | Alpha Digital Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Alpha Digital Group - Expert Data Strategy Services for Business Intelligence and Data-Driven Decision Making" />
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Data Strategy Services</h1>
            <p className="text-lg text-gray-700">
              At Alpha Digital Group, we specialize in developing comprehensive data strategies that empower businesses to harness the full potential of their data assets. Our expert team leverages cutting-edge technologies and industry-leading methodologies to create powerful, tailored data solutions that drive informed decision-making and fuel business growth.
            </p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Data Strategy Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Database size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Data Architecture Design</h3>
                </div>
                <p className="text-white">We design robust data architectures that optimize data flow and accessibility across your organization.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <BarChart2 size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Data Analytics and BI</h3>
                </div>
                <p className="text-white">We implement advanced analytics and business intelligence solutions to extract actionable insights from your data.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Layers size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Data Governance</h3>
                </div>
                <p className="text-white">We establish comprehensive data governance frameworks to ensure data quality, security, and compliance.</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Zap size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">Data Integration and ETL</h3>
                </div>
                <p className="text-white">We develop efficient data integration and ETL processes to consolidate data from multiple sources.</p>
              </div>
            </div>
          </section>

          <section id="data-expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Data Strategy Expertise</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Alpha Digital Group, we pride ourselves on our extensive expertise in various aspects of data strategy. Our proficiency includes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Big Data Technologies and Architectures</li>
              <li className="text-lg text-gray-700">Data Warehousing and Data Lakes</li>
              <li className="text-lg text-gray-700">Machine Learning and Predictive Analytics</li>
              <li className="text-lg text-gray-700">Real-time Data Processing and Streaming</li>
              <li className="text-lg text-gray-700">Data Visualization and Dashboarding</li>
              <li className="text-lg text-gray-700">Data Privacy and Security Compliance (GDPR, CCPA, etc.)</li>
              <li className="text-lg text-gray-700"><a href="/services/digital/data/data-quality-management">Data Quality Management</a></li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We specialize in developing custom data strategies tailored to every industry, ensuring that our solutions perfectly align with your specific business context and data-driven objectives.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Power of Effective Data Strategy</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in data strategy provides immense value to businesses seeking to leverage data for growth and innovation. Heres why it matters:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Informed Decision-Making:</span> Enable data-driven decisions across all levels of your organization.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Operational Efficiency:</span> Streamline processes and reduce costs through data-driven insights and automation.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Customer Intelligence:</span> Gain deep insights into customer behavior and preferences to enhance experiences.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Risk Management:</span> Identify and mitigate risks more effectively with comprehensive data analysis.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Innovation:</span> Uncover new opportunities and drive innovation through advanced data analytics.
              </li>
            </ul>
          </section>

          <section id="tech-stack">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Data Technology Stack</h2>
            <p className="text-lg text-gray-700 mb-4">
              We leverage cutting-edge data technologies to deliver exceptional results:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Database size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Cloud-based data platforms like AWS, Google Cloud, and Azure</p>
              </div>
              <div className="flex items-center">
                <GitBranch size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Big data processing frameworks such as Apache Hadoop and Spark</p>
              </div>
              <div className="flex items-center">
                <Lock size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">Data governance and security tools for enterprise-grade data management</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Our expertise in these modern data technologies allows us to create comprehensive data strategies that drive real results and maximize your business potential.
            </p>
          </section>

          <section id="data-tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Data Tools We Use</h2>
            <p className="text-lg text-gray-700 mb-4">
              We utilize a range of sophisticated tools to develop and implement effective data strategies:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">Tableau and Power BI for data visualization and business intelligence</li>
              <li className="text-lg text-gray-700">Apache Kafka for real-time data streaming and processing</li>
              <li className="text-lg text-gray-700">Snowflake and Amazon Redshift for cloud data warehousing</li>
              <li className="text-lg text-gray-700">Apache Airflow for workflow management and data pipeline orchestration</li>
              <li className="text-lg text-gray-700">Databricks for collaborative data science and analytics</li>
              <li className="text-lg text-gray-700">Talend and Apache NiFi for data integration and ETL processes</li>
            </ul>
            <p className="text-lg text-gray-700">
              Our proficiency with these tools enables us to create data-driven strategies that optimize your business processes and drive sustainable growth in the digital age.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Data Strategy Development Process</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Discovery and Requirements Gathering: Understanding your business needs and data goals</li>
              <li className="text-lg text-gray-700">Data Landscape Assessment: Evaluating your current data infrastructure and practices</li>
              <li className="text-lg text-gray-700">Strategy Formulation: Developing a comprehensive data roadmap aligned with your business objectives</li>
              <li className="text-lg text-gray-700">Data Architecture Design: Creating a scalable and efficient data architecture</li>
              <li className="text-lg text-gray-700">Data Governance Framework: Establishing policies and procedures for data management</li>
              <li className="text-lg text-gray-700">Analytics and BI Implementation: Deploying tools and processes for data analysis and reporting</li>
              <li className="text-lg text-gray-700">Data Integration and ETL: Implementing data integration processes and pipelines</li>
              <li className="text-lg text-gray-700">Testing and Validation: Ensuring data quality and accuracy across systems</li>
              <li className="text-lg text-gray-700">Training and Adoption: Empowering your team with the skills to leverage data effectively</li>
              <li className="text-lg text-gray-700">Continuous Improvement: Regularly refining the data strategy based on evolving business needs</li>
            </ol>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Unlock the Power of Your Data?</h2>
              <p className="text-xl mb-6">Lets create a powerful data strategy that drives insights and accelerates your growth.</p>
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

export default DataStrategyServicesPage;