import React from "react";
import Head from 'next/head';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { Target, BarChart2, TrendingUp, Users, Zap, Briefcase } from 'lucide-react';
import { useTranslations } from 'next-intl';

const MarketingStrategyPage: React.FC = () => {
  const t = useTranslations('MarketingStrategy');

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>{t('pageTitle')}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={t('metaDescription')} />
      </Head>

      {/* Google Analytics and Tag Manager Scripts */}
      <GoogleAnalytics gaId="G-25Y0G3QQE6" />
      <GoogleTagManager gtmId="G-25Y0G3QQE6" />

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 mt-16">
        <div className="space-y-12">
          <section id="intro">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('introTitle')}</h1>
            <p className="text-lg text-gray-700">{t('introText')}</p>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">{t('servicesTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Target size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">{t('services.marketResearch.title')}</h3>
                </div>
                <p className="text-white">{t('services.marketResearch.description')}</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <BarChart2 size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">{t('services.brandPositioning.title')}</h3>
                </div>
                <p className="text-white">{t('services.brandPositioning.description')}</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <TrendingUp size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">{t('services.marketingMix.title')}</h3>
                </div>
                <p className="text-white">{t('services.marketingMix.description')}</p>
              </div>
              <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] p-6 rounded-lg">
                <div className="flex items-center text-white mb-3">
                  <Users size={24} className="mr-4" />
                  <h3 className="text-xl font-semibold">{t('services.customerJourney.title')}</h3>
                </div>
                <p className="text-white">{t('services.customerJourney.description')}</p>
              </div>
            </div>
          </section>

          <section id="expertise">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">{t('expertiseTitle')}</h2>
            <p className="text-lg text-gray-700 mb-4">{t('expertiseIntro')}</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="text-lg text-gray-700">{t('expertiseItem1')}</li>
              <li className="text-lg text-gray-700">{t('expertiseItem2')}</li>
              <li className="text-lg text-gray-700">{t('expertiseItem3')}</li>
              <li className="text-lg text-gray-700">{t('expertiseItem4')}</li>
              <li className="text-lg text-gray-700">{t('expertiseItem5')}</li>
              <li className="text-lg text-gray-700">{t('expertiseItem6')}</li>
              <li className="text-lg text-gray-700">{t('expertiseItem7')}</li>
            </ul>
            <p className="text-lg text-gray-700">{t('expertiseOutro')}</p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">{t('processTitle')}</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">{t('processItem1')}</li>
              <li className="text-lg text-gray-700">{t('processItem2')}</li>
              <li className="text-lg text-gray-700">{t('processItem3')}</li>
              <li className="text-lg text-gray-700">{t('processItem4')}</li>
              <li className="text-lg text-gray-700">{t('processItem5')}</li>
              <li className="text-lg text-gray-700">{t('processItem6')}</li>
              <li className="text-lg text-gray-700">{t('processItem7')}</li>
              <li className="text-lg text-gray-700">{t('processItem8')}</li>
              <li className="text-lg text-gray-700">{t('processItem9')}</li>
            </ol>
          </section>

          <section id="tools">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">{t('toolsTitle')}</h2>
            <p className="text-lg text-gray-700 mb-4">{t('toolsIntro')}</p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <BarChart2 size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">{t('toolAnalytics')}</p>
              </div>
              <div className="flex items-center">
                <Users size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">{t('toolHubspot')}</p>
              </div>
              <div className="flex items-center">
                <Zap size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">{t('toolSemrush')}</p>
              </div>
              <div className="flex items-center">
                <Briefcase size={24} className="text-purple-600 mr-4" />
                <p className="text-lg text-gray-700">{t('toolHootsuite')}</p>
              </div>
            </div>
          </section>

          <section id="cta">
            <div className="bg-gradient-to-r from-[rgba(128,19,176,255)] to-[rgba(126,19,184,255)] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
              <p className="text-xl mb-6">{t('ctaText')}</p>
              <a
                href="mailto:ross@alphadigitalgroup.co"
                className="inline-block bg-white text-[rgba(128,19,176,255)] py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                {t('ctaButton')}
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MarketingStrategyPage;