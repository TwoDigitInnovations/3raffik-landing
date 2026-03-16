import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Join 3raffik's affiliate marketing platform. Companies create campaigns, affiliates share QR codes & referral links, everyone earns more. Start free today!" />
        <meta name="keywords" content="affiliate marketing, referral links, QR codes, commission tracking, digital marketing, affiliate network" />
        <meta property="og:title" content="3raffik - Smart Affiliate Marketing Platform" />
        <meta property="og:description" content="Transform your business with smart affiliate marketing. Connect companies with passionate affiliates and grow sales through QR codes & referral links." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="3raffik - Smart Affiliate Marketing Platform" />
        <meta name="twitter:description" content="Transform your business with smart affiliate marketing. Connect companies with passionate affiliates and grow sales through QR codes & referral links." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
