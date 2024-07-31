import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag';
import { builder } from '@builder.io/react';
import '../src/app/globals.css';

const isProduction = process.env.NODE_ENV === 'production';

if (process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Inject Simple Analytics script
    const simpleAnalyticsScript = document.createElement('script');
    simpleAnalyticsScript.src = 'https://scripts.simpleanalyticscdn.com/latest.js';
    simpleAnalyticsScript.async = true;
    simpleAnalyticsScript.defer = true;
    simpleAnalyticsScript.setAttribute('data-privacy', 'true'); // Optional attribute for privacy settings
    document.head.appendChild(simpleAnalyticsScript);

    // Fallback for no JavaScript
    const noscriptTag = document.createElement('noscript');
    noscriptTag.innerHTML = '<img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade" />';
    document.body.appendChild(noscriptTag);

    // Inject Beam Analytics script
    const beamScript = document.createElement('script');
    beamScript.src = 'https://beamanalytics.b-cdn.net/beam.min.js';
    beamScript.setAttribute('data-token', '10f45b4c-ecd5-4644-a4fb-a9d75a425b3d');
    beamScript.async = true;
    document.head.appendChild(beamScript);

    // Google Analytics pageview tracking
    const handleRouteChange = (url: string) => {
      const urlObject = new URL(url, window.location.origin);
      if (isProduction) gtag.pageview(urlObject);
    };

    // Optional: Add route change listener here if needed

  }, []);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
