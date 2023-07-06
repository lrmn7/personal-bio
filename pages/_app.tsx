import type { AppProps } from "next/app";
import "../styles/globals.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

import "@fontsource/jost/400.css"
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css"
import "@fontsource/jost/700.css"
import "@fontsource/sen/400.css"
import "@fontsource/sen/700.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="L RMN  | いつか、私がヒトじゃなくなっても"
        titleTemplate="L RMN"
        defaultTitle="L RMN  | Web Developer"
        description="Hey! I'm L RMN , A Web Developer, Blogger, Dreamer, Observer 🗿!"
        openGraph={{
          url: "https://lrmn.is-a.dev/",
          title: "L RMN | いつか、私がヒトじゃなくなっても",
          description:
            "Hey! I'm L RMN , A Web Developer, Blogger, Dreamer, Observer 🗿!",
          images: [
            {
              url: "https://lrmn.is-a.dev/avatar.jpg",
              alt: "L RMN  | いつか、私がヒトじゃなくなっても",
            },
          ],
        }}
        twitter={{
          handle: "@romanromannya",
          site: "@romanromannya",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Frontend Developer, L RMN , L RMN  Tech, L RMN tech, Web Developer, web development, web developer, blogger, tech enthusiast, open source",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/pwa-512x512.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
