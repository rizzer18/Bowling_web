import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
const RobotoSlabFont = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["700"],
});
export const metadata: Metadata = {
  title: "Bowlingový Club SV | Týniště nad Orlicí",
   icons: {
    icon: "/WhatsApp Image 2025-11-03 at 13.54.41_1a26547b.jpg",
  },
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
    "sv",
  ],
  authors: [{ name: "Roman Roshkanyuk", url: "https://https://bowlingovyclubsv.cz" }],
  creator: "Roman Roshkanyuk",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Bowlingový Club SV",
    description:
      "Bowlingový Club SV – bowlingový klub v Týništi nad Orlicí. Nabízíme možnost zahrát si bowling a ping-pong a organizovat různé akce.",
    url: "https://https://bowlingovyclubsv.cz",
    siteName: "Bowlingový Club SV",
    images: [
      {
        url: "https://https://bowlingovyclubsv.cz/WhatsApp Image 2025-11-03 at 13.54.41_1a26547b.jpg",
        width: 1200,
        height: 630,
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
    images: ["https://https://bowlingovyclubsv.cz/WhatsApp Image 2025-11-03 at 13.54.41_1a26547b.jpg"],
    creator: "@RomanRoshkanyuk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${RobotoSlabFont.variable} AAAAAA`}>{children}</body>
    </html>
  );
}
