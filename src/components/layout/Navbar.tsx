"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeChanger from "@/components/theme/ThemeChanger";
import { usePathname } from "next/navigation";
import meImage from "@/images/me-small.webp";
import MobileNavigation from "@/components/layout/nav/MobileNavigation";
import DesktopNavigation from "@/components/layout/nav/DesktopNavigation";
import { useHeaderScroll } from "@/lib/use-header-scroll";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/en";
  const { headerRef, avatarRef } = useHeaderScroll(isHomePage);

  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-none flex-col"
        style={{
          height: "var(--header-height)",
          marginBottom: "var(--header-mb)",
        }}
      >
        {isHomePage && (
          <>
            <div
              ref={avatarRef}
              className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
            />
            <div
              className="sm:px-8 top-0 order-last -mb-3 pt-3"
              style={{
                position:
                  "var(--header-position)" as React.CSSProperties["position"],
              }}
            >
              <div className="mx-auto w-full max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div
                      className="top-[var(--avatar-top,theme(spacing.3))] w-full"
                      style={{
                        position:
                          "var(--header-inner-position)" as React.CSSProperties["position"],
                      }}
                    >
                      <div className="relative">
                        <div
                          className="absolute left-0 top-3 origin-left transition-opacity h-10 w-10 rounded-full bg-white/90 p-0.5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
                          style={{
                            opacity: "var(--avatar-border-opacity, 0)",
                            transform: "var(--avatar-border-transform)",
                          }}
                        />
                        <Link
                          href="/"
                          aria-label="Home"
                          className="block h-16 w-16 origin-left pointer-events-auto"
                          style={{ transform: "var(--avatar-image-transform)" }}
                        >
                          <Image
                            src={meImage}
                            alt="Avatar"
                            sizes="4rem"
                            priority
                            className="h-16 w-16 rounded-full object-cover bg-zinc-700"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <div
          ref={headerRef}
          className="top-0 z-10 h-16 pt-6"
          style={{
            position:
              "var(--header-position)" as React.CSSProperties["position"],
          }}
        >
          <div
            className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full"
            style={{
              position:
                "var(--header-inner-position)" as React.CSSProperties["position"],
            }}
          >
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="relative flex gap-4">
                    <div className="flex flex-1">
                      {!isHomePage && (
                        <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                          <Link
                            href="/"
                            aria-label="Home"
                            className="pointer-events-auto block"
                          >
                            <Image
                              src={meImage}
                              alt="Avatar"
                              sizes="2.25rem"
                              className="h-9 w-9 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
                            />
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-1 justify-end md:justify-center">
                      <MobileNavigation className="pointer-events-auto md:hidden" />
                      <DesktopNavigation className="pointer-events-auto hidden md:block" />
                    </div>
                    <div className="flex justify-end md:flex-1">
                      <div className="pointer-events-auto">
                        <ThemeChanger />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className="flex-none"
        style={{ height: "var(--content-offset)" }}
      ></div>
    </>
  );
}
