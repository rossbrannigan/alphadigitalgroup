import { GA_TRACKING_ID } from '../lib/gtag'
// other imports

export default class MyDocument extends NextDocument {
    render() {
        return (
            <Html lang="en">

                {/* other code */}

            <Head>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                        }}
                    />
            </Head>

            {/* Other code */}

        </Html>
        )
    }
}