import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false, // Remove the x-powered-by header for security
  compress: true, // Enables gzip compression for faster page loads
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: [], // Add domains for external images if needed
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true, // Help catch bugs early
  swcMinify: true, // Enables SWC minification for faster builds
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Remove console in production
  },
  trailingSlash: false, // Better for sharing links with hash fragments
  // Updated rewrites to better handle social media bots
  async rewrites() {
    return {
      beforeFiles: [
        // Social media crawlers often ignore hash fragments
        // This rewrite helps them see the share page properly
        {
          source: '/direct-share/:roastContent',
          destination: '/direct-share/:roastContent',
        }
      ]
    };
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: process.env.NODE_ENV === 'production' 
              ? "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.google-analytics.com *.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: *.google-analytics.com; connect-src 'self' *.google-analytics.com; font-src 'self';"
              : "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self';",
          }
        ],
      },
    ];
  },
};

export default nextConfig;
