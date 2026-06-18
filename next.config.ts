import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The runtime Image Optimization API is unavailable on Cloudflare Workers
    // (no sharp/Node optimizer), so we keep it disabled and instead ship
    // source assets already sized and compressed for their display dimensions
    // (see src/images/*.webp). next/image still provides correct intrinsic
    // sizing and build-time blur placeholders from the static imports.
    unoptimized: true,
  },
};

export default nextConfig;
