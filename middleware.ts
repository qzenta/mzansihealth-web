import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

// TEMPORARY SITE PAUSE — 13 Jul 2026, per Lizzy's request (CC Handoff "Client Communication —
// 13 Jul 2026" section). Serves a minimal holding page for every route instead of the real site,
// without touching Cloudflare DNS, Email Routing, or Brevo/contact-form wiring underneath.
// To restore the full site once Daniel/Lizzy sign off: delete this file.

const BYPASS_PREFIXES = ["/api", "/_next", "/images", "/favicon.ico", "/robots.txt", "/sitemap.xml"];

function holdingHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${siteConfig.name} — Site Under Review</title>
<meta name="robots" content="noindex, nofollow" />
<style>
  * { box-sizing: border-box; }
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0f5c5c;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    color: #ffffff;
    padding: 24px;
  }
  .card { max-width: 480px; text-align: center; }
  h1 { font-size: 1.75rem; font-weight: 700; margin: 0 0 16px; }
  p { font-size: 1rem; line-height: 1.6; color: rgba(255, 255, 255, 0.85); margin: 0 0 32px; }
  .actions { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }
  a.btn {
    display: inline-block;
    padding: 12px 24px;
    border-radius: 9999px;
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
  }
  .btn-primary { background: #ffffff; color: #0f5c5c; }
  .btn-secondary { background: #7cc7a1; color: #ffffff; }
</style>
</head>
<body>
  <div class="card">
    <h1>${siteConfig.name}</h1>
    <p>Our website is currently being updated. For urgent enquiries, please call or WhatsApp us directly and our team will assist you.</p>
    <div class="actions">
      <a class="btn btn-primary" href="tel:${siteConfig.phoneIntl}">Call ${siteConfig.phone}</a>
      <a class="btn btn-secondary" href="${siteConfig.whatsappLink}">WhatsApp Us</a>
    </div>
  </div>
</body>
</html>`;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const bypassed = BYPASS_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
  if (bypassed) {
    return NextResponse.next();
  }

  return new NextResponse(holdingHtml(), {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Retry-After": "86400",
      "Cache-Control": "no-store",
      "X-Frame-Options": "SAMEORIGIN",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Content-Security-Policy": "default-src 'self'; style-src 'unsafe-inline';",
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
