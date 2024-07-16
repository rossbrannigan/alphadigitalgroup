// pages/_app.tsx

import { AppProps } from "next/app";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import * as gtag from "../lib/gtag";
import { builder } from '@builder.io/react';
import '../src/app/globals.css';
import i18n from '../i18n'; // Import your i18n instance

const isProduction = process.env.NODE_ENV === "production";

// Initialize Builder.io
if (process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);
}

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // Invoke analytics function only for production
      if (isProduction) gtag.pageview(url);
    };

    i18n.on('languageChanged', (lng) => {
      // Handle language change events here if needed
    });

    return () => {
      i18n.off('languageChanged');
    };
  }, [i18n, isProduction]);

  return <Component {...pageProps} />;
};

export default MyApp;
