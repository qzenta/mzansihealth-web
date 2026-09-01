import type { Metadata } from "next";
import { howItWorks, siteConfig } from "@/lib/site-config";
import ConversionCta from "@/components/shared/ConversionCta";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "How It Works",
  description: `How to request home healthcare from ${siteConfig.name}, from first enquiry to care beginning at home.`,
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-primary-dark py-8 text-center text-white sm:py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">How It Works</h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-white/90">
            From your first enquiry to care beginning at home — here&rsquo;s what to expect.
          </p>
        </div>
      </section>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "How It Works" }]} />

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

          <ConversionCta heading="Ready to talk about the care you need?" page="how-it-works" />
        </div>
      </section>
    </>
  );
}
