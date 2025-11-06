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
    icon: "/ChatGPT_Image_Nov_6,_2025,_10_58_28_AM.png",
    shortcut: "/ChatGPT_Image_Nov_6,_2025,_10_58_28_AM.png",
    apple: "/ChatGPT_Image_Nov_6,_2025,_10_58_28_AM.png",
  },
  openGraph: {
    title: "Bowlingový Club SV",
    description:
      "Bowlingový Club SV – bowlingový klub v Týništi nad Orlicí. Nabízíme možnost zahrát si bowling a ping-pong a organizovat různé akce.",
    url: "https://bowlingovyclubsv.cz",
    siteName: "Bowlingový Club SV",
    images: [
    //  {
    //    url: "https://bowlingovyclubsv.cz/ImmagesLogo.png",
    //    width: 1200,
    //    height: 630,
    //    alt: "Bowlingový Club SV",
    //  },
     {
       url: "https://bowlingovyclubsv.cz/5215587291475152473_120.jpg",
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
       url: "https://bowlingovyclubsv.cz/5215587291475152473_120.jpg",
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
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Bowlingový Club SV",
              "url": "https://bowlingovyclubsv.cz",
              "logo": "https://bowlingovyclubsv.cz/ChatGPT_Image Nov_6,_2025, 10_58_28_AM.png",
            }),
          }}
        />
      </head>
      <body className={`${RobotoSlabFont.variable} AAAAAA`}>{children}</body>
    </html>
  );
}
