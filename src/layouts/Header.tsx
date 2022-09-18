import Head from "next/head";
import NextHeadSeo from "next-head-seo";

const Header = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Jungle Meet Forum" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Welcome Jungle Meet Forum</title>
      </Head>
      <NextHeadSeo title="Jungle Meet Forum" canonical="" description="" customMetaTags={[]} og={{}} />
    </>
  );
};

export default Header;
