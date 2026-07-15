import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeScript from "@/components/theme/ThemeScript";
import ScrollToTop from "@/components/layout/ScrollToTop";
import LoadingBar from "@/components/layout/LoadingBar";
import BackgroundDecor from "@/components/layout/BackgroundDecor";
import JsonLd from "@/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://cbsdev.me";
const isProd = process.env.NEXT_PUBLIC_ENV === "PROD";

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
              name: "Sourav Shrestha",
              alternateName: "CBS",
              url: BASE_URL,
              jobTitle: "Specialist Programmer",
              email: "souravshrestha@cbsdev.me",
              sameAs: [
                "https://github.com/souravshrestha",
                "https://linkedin.com/in/sourav-shrestha-10992710b",
                "https://www.instagram.com/sourav__shrestha",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Sourav Shrestha — CBS",
              url: BASE_URL,
            },
          ]}
        />
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
