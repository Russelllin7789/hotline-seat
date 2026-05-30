import type { NextConfig } from "next";

const basePath =
  process.env.NODE_ENV === "production" ? "/hotline-seat" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(basePath
    ? { basePath, assetPrefix: `${basePath}/` }
    : {}),
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "cdn-icons-png.flaticon.com" },
      { protocol: "https", hostname: "img.icons8.com" },
    ],
  },
};

export default nextConfig;
