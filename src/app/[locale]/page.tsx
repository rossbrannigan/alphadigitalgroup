import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { FiMessageCircle } from 'react-icons/fi';
import './styles.css';
import { AiOutlineLineChart, AiOutlineTool, AiOutlineRise, AiOutlineTeam, AiOutlineBank } from 'react-icons/ai';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import BrandCircle from './components/BrandCircle';  // Adjust the import path as necessary

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div className="bg-gray-100 min-h-screen">

      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('metaDescription')} />
        <link rel="icon" href="/favicon.ico" />

        {/* Google Analytics and Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-25Y0G3QQE6"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-25Y0G3QQE6');
            `,
          }}
        ></script>
        <GoogleAnalytics gaId="G-25Y0G3QQE6"/>
        <GoogleTagManager gtmId="G-25Y0G3QQE6"/> 
      </Head>

      {/* Slider section */}
      <section className="carousel">
        <div className="carousel-item" style={{ height: "1000px" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/brain-wave.gif" alt={t('sliderAlt')} fill style={{ objectFit: 'cover' }} unoptimized />
          </div>
          <div className="relative z-10 text-center max-w-2xl mx-auto p-4 text-white flex flex-col justify-center items-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">{t('sliderTitle')}</h1>
            <p className="text-base sm:text-lg md:text-xl mb-4">{t('sliderSubtitle')}</p>
            <a href="/services/packages">
              <button className="bg-white text-purple-600 font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-full mt-4 sm:mt-8 hover:bg-purple-100 transition duration-300 ease-in-out border-2 border-green-400">{t('getStartedButton')}</button>
            </a>
          </div>
        </div>
        {/* Additional carousel items */}
        <div className="carousel-item" style={{ height: "1000px" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/brain-wave.gif" alt={t('sliderAlt2')} fill style={{ objectFit: 'cover' }} unoptimized />
          </div>
          <div className="relative z-10 text-center max-w-2xl mx-auto p-4 text-white flex flex-col justify-center items-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">{t('sliderTitle2')}</h1>
            <p className="text-base sm:text-lg md:text-xl mb-4">{t('sliderSubtitle2')}</p>
            <a href="/marketplace">
              <button className="bg-white text-purple-600 font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-full mt-4 sm:mt-8 hover:bg-purple-100 transition duration-300 ease-in-out border-2 border-green-400">{t('getStartedButton')}</button>
            </a>
          </div>
        </div>
        <div className="carousel-item" style={{ height: "1000px" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/brain-wave.gif" alt={t('sliderAlt3')} fill style={{ objectFit: 'cover' }} unoptimized />
          </div>
          <div className="relative z-10 text-center max-w-2xl mx-auto p-4 text-white flex flex-col justify-center items-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">{t('sliderTitle3')}</h1>
            <p className="text-base sm:text-lg md:text-xl mb-4">{t('sliderSubtitle3')}</p>
            <a href="/marketplace">
              <button className="bg-white text-purple-600 font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-full mt-4 sm:mt-8 hover:bg-purple-100 transition duration-300 ease-in-out border-2 border-green-400">{t('getStartedButton')}</button>
            </a>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">{t('brandsTitle')}</h2>
            <p className="mt-4 text-lg text-gray-600">{t('brandsSubtitle')}</p>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-16">
            <BrandCircle 
              src="/airberlin.svg" 
              alt="airberlin" 
              width={120} 
              height={120} 
              hoverText={t('airberlinhoverText')}
            />
            <BrandCircle 
              src="/hans.svg" 
              alt="hans" 
              width={100} 
              height={100} 
              hoverText={t('hanshoverText')}
            />
            <BrandCircle 
              src="/etihad.svg" 
              alt="etihad" 
              width={80} 
              height={80} 
              hoverText={t('etihadhoverText')}
            />
          </div>
        </div>
      </section>

      {/* List Section */}
      <section className="bg-white lg:py-28 pt-28 overflow-hidden">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="mb-16 text-center">
            <h2 className="text-base text-[rgba(137,12,181,255)] font-semibold tracking-wide uppercase">
              {t('listSectionTitle')}
            </h2>
            <p className="mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
              {t('listSectionSubtitle')}
            </p>
          </div>
          <div className="flex flex-wrap -mx-8 items-center">
            <div className="w-full lg:w-1/2 px-8">
              <ul className="space-y-12">
                <li className="flex -mx-4">
                  <div className="px-4">
                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold rounded-full bg-[rgba(137,12,181,0.1)] text-[rgba(137,12,181,255)]">
                      1
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold text-purple-600">{t('listItem1Title')}</h3>
                    <p className="text-gray-500 leading-loose">
                      {t('listItem1Description')}
                    </p>
                  </div>
                </li>
                <li className="flex -mx-4">
                  <div className="px-4">
                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold rounded-full bg-[rgba(137,12,181,0.1)] text-[rgba(137,12,181,255)]">
                      2
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold text-purple-600">{t('listItem2Title')}</h3>
                    <p className="text-gray-500 leading-loose">
                      {t('listItem2Description')}
                    </p>
                  </div>
                </li>
                <li className="flex -mx-4">
                  <div className="px-4">
                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold rounded-full bg-[rgba(137,12,181,0.1)] text-[rgba(137,12,181,255)]">
                      3
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold text-purple-600">{t('listItem3Title')}</h3>
                    <p className="text-gray-500 leading-loose">
                      {t('listItem3Description')}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 px-8">
              <div className="lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0">
                <img src="/features.svg" alt={t('listSectionImageAlt')} className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature section */}
      <section className="bg-white pb-6">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="container mx-auto px-6 p-6 bg-white">
            <div className="mb-16 text-center">
              <h4 className="text-base text-[rgba(137,12,181,255)] font-semibold tracking-wide uppercase">{t('featureSectionTitle')}</h4>
              <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
                {t('featureSectionSubtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-b p-8">
                <div className="flex items-center mb-6">
                  <AiOutlineLineChart className="h-6 w-6 text-[rgba(137,12,181,255)]" />
                  <div className="ml-4 text-xl text-[rgba(137,12,181,255)] font-semibold">{t('feature1Title')}</div>
                </div>
                <p className="leading-loose text-gray-500">
                  {t('feature1Description')}
                </p>
              </div>
              <div className="border-b p-8">
                <div className="flex items-center mb-6">
                  <AiOutlineRise className="h-6 w-6 text-[rgba(137,12,181,255)]" />
                  <div className="ml-4 text-xl text-[rgba(137,12,181,255)] font-semibold">{t('feature2Title')}</div>
                </div>
                <p className="leading-loose text-gray-500">
                  {t('feature2Description')}
                </p>
              </div>
              <div className="border-b p-8">
                <div className="flex items-center mb-6">
                  <AiOutlineTool className="h-6 w-6 text-[rgba(137,12,181,255)]" />
                  <div className="ml-4 text-xl text-[rgba(137,12,181,255)] font-semibold">{t('feature3Title')}</div>
                </div>
                <p className="leading-loose text-gray-500">
                  {t('feature3Description')}
                </p>
              </div>
              <div className="border-b p-8">
                <div className="flex items-center mb-6">
                  <AiOutlineTeam className="h-6 w-6 text-[rgba(137,12,181,255)]" />
                  <div className="ml-4 text-xl text-[rgba(137,12,181,255)] font-semibold">{t('feature4Title')}</div>
                </div>
                <p className="leading-loose text-gray-500">
                  {t('feature4Description')}
                </p>
              </div>
              <div className="border-b p-8">
                <div className="flex items-center mb-6">
                  <AiOutlineBank className="h-6 w-6 text-[rgba(137,12,181,255)]" />
                  <div className="ml-4 text-xl text-[rgba(137,12,181,255)] font-semibold">{t('feature5Title')}</div>
                </div>
                <p className="leading-loose text-gray-500">
                  {t('feature5Description')}
                </p>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <AiOutlineTool className="h-6 w-6 text-[rgba(137,12,181,255)]" />
                  <div className="ml-4 text-xl text-[rgba(137,12,181,255)] font-semibold">{t('feature6Title')}</div>
                </div>
                <p className="leading-loose text-gray-500">
                  {t('feature6Description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Chat Button */}
      <section className="fixed bottom-8 left-8">
        <a href="https://wa.me/66828362713" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center">
          <FiMessageCircle className="h-6 w-6 inline-block mr-2" /> {/* WhatsApp Icon */}
          Chat on WhatsApp
        </a>
      </section>

      <Script id="tawk-script" strategy="lazyOnload">
        {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/667a7c95eaf3bd8d4d14248e/1i177dadk';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
        `}
      </Script>
    </div>
  );
}
