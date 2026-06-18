"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * Tracks whether the app is currently navigating to a new route so a loading
 * indicator can be displayed.
 *
 * App Router gives us no built-in navigation events, so the "start" of a
 * navigation is inferred by intercepting clicks on internal links (and browser
 * back/forward), and the "finish" is detected when the pathname or query string
 * actually changes.
 */
export function useRouteLoading() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  // The route finished changing — hide the bar.
  useEffect(() => {
    setLoading(false);
  }, [pathname, searchParams]);

  useEffect(() => {
    function startIfInternal(href: string | null | undefined) {
      if (!href) return;
      try {
        const target = new URL(href, window.location.href);
        // Ignore links that leave the site.
        if (target.origin !== window.location.origin) return;
        // Ignore links that resolve to the page we're already on (e.g. in-page
        // hash links), which never trigger a route change.
        const samePage =
          target.pathname === window.location.pathname &&
          target.search === window.location.search;
        if (samePage) return;
        setLoading(true);
      } catch {
        /* malformed href — nothing to do */
      }
    }

    function onClick(event: MouseEvent) {
      // Let modified / non-primary clicks (open in new tab, etc.) through.
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return; // new tab/window
      if (anchor.hasAttribute("download")) return;
      if (anchor.getAttribute("rel")?.includes("external")) return;

      startIfInternal(anchor.getAttribute("href"));
    }

    function onPopState() {
      setLoading(true);
    }

    document.addEventListener("click", onClick);
    window.addEventListener("popstate", onPopState);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  return loading;
}
