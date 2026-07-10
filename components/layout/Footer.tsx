import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

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
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-neutral bg-neutral/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-primary">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-foreground/80">{siteConfig.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Contact</p>
          <ul className="mt-2 space-y-1 text-sm text-foreground/80">
            <li>
              <a href={`tel:${siteConfig.phoneIntl}`} className="hover:text-primary">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={siteConfig.whatsappLink} className="hover:text-primary">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.emails.info}`} className="hover:text-primary">
                {siteConfig.emails.info}
              </a>
            </li>
            <li>{siteConfig.serviceArea}</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Quick Links</p>
          <ul className="mt-2 space-y-1 text-sm text-foreground/80">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-primary">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
