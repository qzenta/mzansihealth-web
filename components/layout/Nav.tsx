import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/our-team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="border-b border-neutral bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-bold text-primary">
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
        <a
          href={`tel:${siteConfig.phoneIntl}`}
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark"
        >
          Call Now
        </a>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-neutral px-4 py-2 md:hidden">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap text-sm font-medium text-foreground hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
