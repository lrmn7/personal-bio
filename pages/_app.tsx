import type { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';

import "../styles/globals.css";

import { NextSeo } from "next-seo";
import Head from "next/head";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />

      <NextSeo
        title="L RMN  | いつか、私がヒトじゃなくなっても"
        titleTemplate="L RMN - Mostly Sleepless"
        defaultTitle="L RMN  | Mostly Sleepless"
        description="Hey! I'm L RMN , I love exploring everything related to technology. Aside from that, I have a great interest in the world of photography, especially virtual photography in video games!"
        openGraph={{
          url: "https://hi-lrmn.is-a.dev/",
          title: "L RMN | いつか、私がヒトじゃなくなっても",
          description:
            "Hey! I'm L RMN , I love exploring everything related to technology. Aside from that, I have a great interest in the world of photography, especially virtual photography in video games!",
          images: [
            {
              url: "https://hi-lrmn.is-a.dev/og-image.png",
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
              "Virtual Photography, Blogger, Discord Bot Developer, Web Developer, Mewwme's, Web Developer, Discord Music Bot, tech enthusiast, open source",
          },
        ]}
      />

      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
