import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeScript from "@/components/theme/ThemeScript";
import ScrollToTop from "@/components/layout/ScrollToTop";
import LoadingBar from "@/components/layout/LoadingBar";
import BackgroundDecor from "@/components/layout/BackgroundDecor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - Sourav Shrestha",
    default: "Sourav Shrestha aka CBS - Software Developer",
  },
  description: "Portfolio of a passionate software developer",
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
