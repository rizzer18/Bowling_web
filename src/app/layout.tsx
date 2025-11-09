import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const RobotoSlabFont = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["700"],
});
export const metadata: Metadata = {
  title: "Bowlingový Club SV | Týniště nad Orlicí",
  description:
    "Bowlingový Club SV – bowlingový klub v Týništi nad Orlicí. Nabízíme možnost zahrát si bowling a ping-pong. Vždy vás rádi uvítáme a poskytneme vám odpovídající služby. Máme také možnost organizovat různé akce.",
  keywords: [
    "bowling",
    "ping-pong",
    "club",
    "Týniště nad Orlicí",
    "zábava",
    "akce",
    "SV",
  ],
  authors: [{ name: "Roman Roshkanyuk", url: "https://bowlingovyclubsv.cz" }],
  creator: "Roman Roshkanyuk",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "https://bowlingovyclubsv.cz/favicon.ico",
    shortcut: "https://bowlingovyclubsv.cz/favicon.ico",
    apple: "https://bowlingovyclubsv.cz/favicon.ico",
  },
  openGraph: {
    title: "Bowlingový Club SV",
    description:
      "Bowlingový Club SV – bowlingový klub v Týništi nad Orlicí. Nabízíme možnost zahrát si bowling a ping-pong a organizovat různé akce.",
    url: "https://bowlingovyclubsv.cz",
    siteName: "Bowlingový Club SV",
    images: [
      {
        url: "https://bowlingovyclubsv.cz/logo512.png",
        width: 600,
        height: 600,
        alt: "Bowlingový Club SV",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bowlingový Club SV",
    description:
      "Bowlingový Club SV – bowlingový klub v Týništi nad Orlicí. Nabízíme možnost zahrát si bowling a ping-pong a organizovat různé akce.",
    images: [
      {
        url: "https://bowlingovyclubsv.cz/logo512.png",
        width: 600,
        height: 600,
        alt: "Bowlingový Club SV",
      },
    ],
    creator: "@RomanRoshkanyuk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Bowlingový Club SV",
              url: "https://bowlingovyclubsv.cz",
              logo: "https://bowlingovyclubsv.cz/favicon.ico",
              image: "https://bowlingovyclubsv.cz/favicon.ico",
              telephone: "+420607496833",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Nádražní 486",
                addressLocality: "Týniště nad Orlicí",
                postalCode: "517 21",
                addressCountry: "CZ",
              },
              sameAs: [
                "https://www.facebook.com/people/Bowlingov%C3%BD-Club-SV/61552814855837/?locale=cs_CZ#",
                "https://www.instagram.com/bowlingovyklub/",
              ],
            }),
          }}
        />
      </head>
      <body className={`${RobotoSlabFont.variable} AAAAAA`}>{children}</body>
    </html>
  );
}
