"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/our-team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative border-b border-neutral bg-white">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-primary-dark px-4 py-1.5 text-center text-xs text-white sm:justify-end sm:px-6">
        <a href={`mailto:${siteConfig.emails.info}`} className="hover:underline">
          {siteConfig.emails.info}
        </a>
        <a href={`tel:${siteConfig.phoneIntl}`} className="hover:underline">
          {siteConfig.phone}
        </a>
        <span className="hidden md:inline">{siteConfig.serviceArea}</span>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-bold text-primary" onClick={() => setIsOpen(false)}>
          {siteConfig.name}
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
