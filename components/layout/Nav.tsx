"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, socialLinks } from "@/lib/site-config";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/our-team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

const socialIconPaths: Record<string, string> = {
  Facebook:
    "M22 12a10 10 0 1 0-11.5 9.87v-6.98H7.9V12h2.6V9.8c0-2.57 1.53-3.99 3.87-3.99 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.28 0-1.68.8-1.68 1.62V12h2.86l-.46 2.89h-2.4v6.98A10 10 0 0 0 22 12z",
  LinkedIn:
    "M4.98 3.5C4.98 4.88 3.94 6 2.5 6S0 4.88 0 3.5 1.04 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v15h-4V8zm7 0h3.8v2.05h.06c.53-1 1.83-2.05 3.77-2.05C19.5 8 21 10.13 21 14.03V23h-4v-8.1c0-1.93-.03-4.4-2.68-4.4-2.68 0-3.1 2.1-3.1 4.27V23h-4V8z",
  "Twitter / X":
    "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
};

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative border-b border-neutral bg-white">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 bg-primary-dark px-4 py-1.5 text-xs text-white sm:px-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <a href={`mailto:${siteConfig.emails.info}`} className="hover:underline">
            {siteConfig.emails.info}
          </a>
          <span className="flex items-center gap-1">
            <span className="hidden sm:inline text-white/70">Call:</span>
            <a href={`tel:${siteConfig.phoneIntl}`} className="hover:underline">
              {siteConfig.phone}
            </a>
            {" / "}
            <a href={`tel:${siteConfig.phoneSecondaryIntl}`} className="hover:underline">
              {siteConfig.phoneSecondary}
            </a>
          </span>
          <span className="hidden md:inline">{siteConfig.address}</span>
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          {socialLinks.map((social) =>
            social.label === "Instagram" ? (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="-m-1 p-1 text-white/70 transition hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
                </svg>
              </a>
            ) : (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="-m-1 p-1 text-white/70 transition hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d={socialIconPaths[social.label]} />
                </svg>
              </a>
            )
          )}
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="shrink-0" onClick={() => setIsOpen(false)}>
          <Image
            src="/images/logo-lockup.png"
            alt={siteConfig.name}
            width={1023}
            height={390}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>
        <nav className="hidden gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${siteConfig.phoneIntl}`}
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            Call Now
          </a>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-neutral md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              {isOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <nav id="mobile-nav" className="flex flex-col border-t border-neutral bg-white px-4 py-2 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-neutral py-3 text-sm font-medium text-foreground last:border-b-0 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
