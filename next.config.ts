import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Makes Cloudflare bindings (e.g. the CONTENT KV namespace) available to
// getCloudflareContext() during `next dev`. No-op for production builds.
initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  images: {
    // The runtime Image Optimization API is unavailable on Cloudflare Workers
    // (no sharp/Node optimizer), so we keep it disabled and instead ship
    // source assets already sized and compressed for their display dimensions
    // (see src/images/*.webp). next/image still provides correct intrinsic
    // sizing and build-time blur placeholders from the static imports.
    unoptimized: true,
  },
  // One hostname for search: send cbsdev.me/* to www.cbsdev.me/* permanently.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "cbsdev.me" }],
        destination: "https://www.cbsdev.me/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
