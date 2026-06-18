"use client";

import { Suspense } from "react";
import { useRouteLoading } from "@/lib/use-route-loading";

function LoadingBarIndicator() {
  const loading = useRouteLoading();
  if (!loading) return null;

  return (
    <div
      className="loading-bar"
      role="progressbar"
      aria-label="Loading page"
      aria-busy="true"
    >
      <div className="gradient-loader" />
    </div>
  );
}

/**
 * A thin gradient progress bar pinned to the top of the page that appears
 * whenever a new route is loading. `useSearchParams` (used inside the hook)
 * forces client-side rendering, so it's wrapped in Suspense to keep the rest
 * of the app statically renderable.
 */
export default function LoadingBar() {
  return (
    <Suspense fallback={null}>
      <LoadingBarIndicator />
    </Suspense>
  );
}
