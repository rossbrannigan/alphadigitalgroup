import React from "react";
import Head from 'next/head';
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { useTranslations } from 'next-intl';

const ServicesPage: React.FC = () => {
  const t = useTranslations('ServicesPage');

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>{t('pageTitle')}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={t('metaDescription')} />
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
        <section className="mb-8" id="intro">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('introTitle')}</h1>
            <p className="text-gray-700">{t('introText')}</p>
          </div>
        </section>

        {/* Marketing Strategy Section */}
        <section id="marketing-strategy" className="mb-12">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{t('marketingStrategy.title')}</h2>
            <p className="text-gray-700">{t('marketingStrategy.description')}</p>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>
                <strong>{t('marketingStrategy.marketResearch.title')}:</strong> {t('marketingStrategy.marketResearch.description')}
              </li>
              <li>
                <strong>{t('marketingStrategy.audienceSegmentation.title')}:</strong> {t('marketingStrategy.audienceSegmentation.description')}
              </li>
              <li>
                <strong><a href="/services/content-marketing" className="text-blue-600 hover:underline">{t('marketingStrategy.contentMarketing.title')}:</a></strong> {t('marketingStrategy.contentMarketing.description')}
              </li>
              <li>
                <strong>{t('marketingStrategy.campaignManagement.title')}:</strong> {t('marketingStrategy.campaignManagement.description')}
              </li>
              <li>
                <strong>{t('marketingStrategy.performanceAnalytics.title')}:</strong> {t('marketingStrategy.performanceAnalytics.description')}
              </li>
            </ul>
          </div>
        </section>

        {/* Brand Strategy Section */}
        <section id="brand-strategy" className="mb-12">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{t('brandStrategy.title')}</h2>
            <p className="text-gray-700">{t('brandStrategy.description')}</p>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>
                <strong>{t('brandStrategy.mediaPlanning.title')}:</strong> {t('brandStrategy.mediaPlanning.description')}
              </li>
              <li>
                <strong>{t('brandStrategy.sem.title')}:</strong> {t('brandStrategy.sem.description')}
              </li>
              <li>
                <strong>{t('brandStrategy.socialMedia.title')}:</strong> {t('brandStrategy.socialMedia.description')}
              </li>
              <li>
                <strong>{t('brandStrategy.seo.title')}:</strong> {t('brandStrategy.seo.description')}
              </li>
            </ul>
          </div>
        </section>

        {/* Commercial Strategy Section */}
        <section id="commercial-strategy" className="mb-12">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{t('commercialStrategy.title')}</h2>
            <p className="text-gray-700">{t('commercialStrategy.description')}</p>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>
                <strong>{t('commercialStrategy.revenueOptimization.title')}:</strong> {t('commercialStrategy.revenueOptimization.description')}
              </li>
              <li>
                <strong>{t('commercialStrategy.pricingStrategy.title')}:</strong> {t('commercialStrategy.pricingStrategy.description')}
              </li>
              <li>
                <strong>{t('commercialStrategy.marketExpansion.title')}:</strong> {t('commercialStrategy.marketExpansion.description')}
              </li>
            </ul>
          </div>
        </section>

        {/* Interim Leadership Section */}
        <section id="interim-leadership" className="mb-12">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{t('interimLeadership.title')}</h2>
            <p className="text-gray-700">{t('interimLeadership.description')}</p>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>
                <strong>{t('interimLeadership.cmo.title')}:</strong> {t('interimLeadership.cmo.description')}
              </li>
              <li>
                <strong>{t('interimLeadership.cdo.title')}:</strong> {t('interimLeadership.cdo.description')}
              </li>
              <li>
                <strong>{t('interimLeadership.cro.title')}:</strong> {t('interimLeadership.cro.description')}
              </li>
            </ul>
          </div>
        </section>

        {/* Digital Strategy Section */}
        <section id="digital-strategy" className="mb-12">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{t('digitalStrategy.title')}</h2>
            <p className="text-gray-700">{t('digitalStrategy.description')}</p>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>
                <strong>{t('digitalStrategy.aiStrategy.title')}:</strong> {t('digitalStrategy.aiStrategy.description')}
              </li>
              <li>
                <strong>{t('digitalStrategy.dataStrategy.title')}:</strong> {t('digitalStrategy.dataStrategy.description')}
              </li>
              <li>
                <strong>{t('digitalStrategy.digitalTransformation.title')}:</strong> {t('digitalStrategy.digitalTransformation.description')}
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;