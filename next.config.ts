import type { NextConfig } from "next";

// Next.js dev mode's HMR/webpack runtime relies on eval(), which a strict CSP blocks —
// that break is silent (no console error), it just kills all client-side hydration.
const scriptSrc = ["'self'", "'unsafe-inline'", "https://www.googletagmanager.com", "https://www.google-analytics.com", "https://www.clarity.ms"];
if (process.env.NODE_ENV !== "production") {
  scriptSrc.push("'unsafe-eval'");
}

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  {
    key: "Content-Security-Policy",
    value: `default-src 'self'; script-src ${scriptSrc.join(" ")}; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://api.brevo.com https://www.google-analytics.com https://www.clarity.ms https://*.clarity.ms; frame-src https://www.google.com; frame-ancestors 'self';`,
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
