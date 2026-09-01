import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import CookiePreferencesLink from "@/components/shared/CookiePreferencesLink";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/our-team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/popia", label: "POPIA" },
  { href: "/consent", label: "Consent" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 overflow-hidden bg-primary-dark text-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, color-mix(in srgb, var(--color-secondary) 18%, transparent), transparent 55%), radial-gradient(ellipse at 100% 100%, color-mix(in srgb, var(--color-accent) 15%, transparent), transparent 55%)",
        }}
        aria-hidden="true"
      />
      <div className="bg-dot-texture-light pointer-events-none absolute inset-0 opacity-[0.15]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none"
        aria-hidden="true"
      >
        <span className="footer-watermark">Mzansi</span>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="inline-block rounded-lg bg-white px-3 py-2">
            <Image
              src="/images/logo-lockup.png"
              alt={siteConfig.name}
              width={1023}
              height={390}
              className="h-8 w-auto"
            />
          </div>
          <p className="mt-3 text-sm text-white/70">{siteConfig.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-2 space-y-1 text-sm text-white/70">
            <li>
              <a href={`tel:${siteConfig.phoneIntl}`} className="hover:text-white">
                {siteConfig.phone}
              </a>{" "}
              /{" "}
              <a href={`tel:${siteConfig.phoneSecondaryIntl}`} className="hover:text-white">
                {siteConfig.phoneSecondary}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp
              </a>{" "}
              /{" "}
              <a
                href={siteConfig.whatsappSecondaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp (alt)
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.emails.info}`} className="hover:text-white">
                {siteConfig.emails.info}
              </a>
            </li>
            <li>{siteConfig.address}</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Quick Links</p>
          <ul className="mt-2 space-y-1 text-sm text-white/70">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
            <CookiePreferencesLink />
          </div>
        </div>
      </div>
    </footer>
  );
}
