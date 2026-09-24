import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE } from "@/lib/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fredoka = localFont({
  src: "./fonts/Fredoka[wdth,wght].ttf",
  variable: "--font-fredoka",
  weight: "500 700",
  display: "swap",
});

const dmSans = localFont({
  src: "./fonts/DMSans[opsz,wght].ttf",
  variable: "--font-dm-sans",
  weight: "400 700",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Melt Into The Good Old Days`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "RETROMELT brings back nostalgic Indian childhood chocolates, candies and toffees — 80s, 90s and 2000s treats you haven't tasted in years.",
  keywords: [
    "nostalgic chocolates",
    "retro chocolates",
    "childhood chocolates",
    "90s chocolates India",
    "2000s nostalgia candy",
    "old school Indian chocolates",
    "retro candy table events",
  ],
  openGraph: {
    title: `${SITE.name} — Melt Into The Good Old Days`,
    description:
      "Old treats. Real memories. Discover RETROMELT's nostalgic collection of childhood chocolates and candies.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-chocolate">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
