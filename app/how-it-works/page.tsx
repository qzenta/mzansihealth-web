import type { Metadata } from "next";
import Link from "next/link";
import { howItWorks, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "How It Works",
  description: `How to request home healthcare from ${siteConfig.name}, from first enquiry to care beginning at home.`,
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-primary-dark py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">How It Works</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            From your first enquiry to care beginning at home — here&rsquo;s what to expect.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary/25 py-16">
        <div className="bg-dot-texture-dark pointer-events-none absolute inset-0 opacity-15" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <ol className="space-y-6">
            {howItWorks.map((item) => (
              <li
                key={item.step}
                className="flex gap-4 rounded-2xl border border-neutral bg-white p-6 shadow-sm"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white"
                  aria-hidden="true"
                >
                  {item.step}
                </span>
                <div>
                  <h2 className="font-semibold text-primary">{item.title}</h2>
                  <p className="mt-1 text-sm text-foreground/80">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-2xl bg-primary p-8 text-center text-white">
            <h2 className="text-xl font-semibold">Ready to talk about the care you need?</h2>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-neutral"
              >
                Request a Care Assessment
              </Link>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                WhatsApp Us
              </a>
              <a
                href={`tel:${siteConfig.phoneIntl}`}
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
