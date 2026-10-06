import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fullTitle = `${site.name} | ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: fullTitle,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    title: fullTitle,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description: site.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1F3A",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${jakarta.variable} ${inter.variable}`}
    >
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}