import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeScript from "@/components/theme/ThemeScript";
import ScrollToTop from "@/components/layout/ScrollToTop";
import LoadingBar from "@/components/layout/LoadingBar";
import BackgroundDecor from "@/components/layout/BackgroundDecor";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL as BASE_URL, PERSON_ID } from "@/lib/site";
import portraitImage from "@/images/me.webp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const isProd = process.env.NEXT_PUBLIC_ENV === "PROD";
const ADSENSE_CLIENT = "ca-pub-1045531918718879";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s - Sourav Shrestha",
    default: "Sourav Shrestha aka CBS - Software Developer",
  },
  description:
    "Portfolio of Sourav Shrestha (CBS) — Specialist Programmer with 7+ years of experience in .NET, RPA, and scalable web applications.",
  keywords: [
    "Sourav Shrestha",
    "CBS",
    "software developer",
    "full stack developer",
    ".NET developer",
    "RPA developer",
    "portfolio",
    "cbsdev",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Sourav Shrestha — CBS",
    title: "Sourav Shrestha aka CBS - Software Developer",
    description:
      "Portfolio of Sourav Shrestha (CBS) — Specialist Programmer with 7+ years of experience in .NET, RPA, and scalable web applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sourav Shrestha — CBS | Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourav Shrestha aka CBS - Software Developer",
    description:
      "Portfolio of Sourav Shrestha (CBS) — Specialist Programmer with 7+ years of experience in .NET, RPA, and scalable web applications.",
    images: ["/og-image.png"],
  },
  robots: isProd
    ? { index: true, follow: true }
    : { index: false, follow: false },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  ...(isProd ? { other: { "google-adsense-account": ADSENSE_CLIENT } } : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased scroll-smooth"
    >
      <head>
        <meta name="theme-color" content="#fafafa" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <ThemeScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} flex h-full bg-zinc-50 dark:bg-black`}>
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": PERSON_ID,
              name: "Sourav Shrestha",
              alternateName: ["CBS", "cbsdev"],
              url: BASE_URL,
              image: `${BASE_URL}${portraitImage.src}`,
              jobTitle: "Specialist Programmer",
              description:
                "Specialist Programmer in Bangalore with 7+ years of experience in .NET, RPA, and web applications.",
              worksFor: { "@type": "Organization", name: "Infosys" },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressRegion: "KA",
                addressCountry: "IN",
              },
              email: "souravshrestha@cbsdev.me",
              sameAs: [
                "https://github.com/SouravShrestha",
                "https://www.linkedin.com/in/souravshrestha",
                "https://www.instagram.com/sourav__shrestha",
                "https://souravshrestha.hashnode.dev",
                "https://www.npmjs.com/~cbsdev",
                "https://www.credly.com/users/sourav-shrestha",
                "https://www.chess.com/member/Starboy_CBS",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Sourav Shrestha — CBS",
              url: BASE_URL,
              author: { "@id": PERSON_ID },
            },
          ]}
        />
        {isProd && (
          <Script
            id="google-adsense"
            async
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          />
        )}
        <LoadingBar />
        <ScrollToTop />
        <div className="flex w-full">
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
            </div>
          </div>
          <div className="relative z-10 flex w-full flex-col">
            <div className="pointer-events-none absolute inset-0 flex justify-center sm:px-8">
              <div className="flex w-full max-w-7xl lg:px-8">
                <div className="relative w-full">
                  <BackgroundDecor />
                </div>
              </div>
            </div>
            <Navbar />
            <main className="flex w-full flex-1 flex-col">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
