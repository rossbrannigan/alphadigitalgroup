import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
import { builder } from '@builder.io/react';
import '../src/app/globals.css';

const isProduction = process.env.NODE_ENV === "production";

if (process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const urlObject = new URL(url, window.location.origin);
      if (isProduction) gtag.pageview(urlObject);
    };

    // Add route change listener here if needed
  }, []);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);