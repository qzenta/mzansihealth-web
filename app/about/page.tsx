import type { Metadata } from "next";
import PageBanner from "@/components/shared/PageBanner";
import { about, pageBanners, siteConfig, values } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} and our commitment to compassionate home healthcare.`,
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title={`About ${siteConfig.name}`}
        image={pageBanners.about}
        tall
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <section className="relative overflow-hidden bg-secondary/25 py-16">
        <div className="bg-dot-texture-dark pointer-events-none absolute inset-0 opacity-15" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-4 text-foreground/80">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-neutral bg-secondary/10 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h2 className="font-semibold text-primary">Our Mission</h2>
              <p className="mt-2 text-sm text-foreground/80">{about.mission}</p>
            </div>
            <div className="rounded-2xl border border-neutral bg-secondary/10 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h2 className="font-semibold text-primary">Our Vision</h2>
              <p className="mt-2 text-sm text-foreground/80">{about.vision}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at bottom, color-mix(in srgb, var(--color-secondary) 12%, transparent), transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-primary">Our Values</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-neutral bg-secondary/10 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-semibold text-primary">{value.title}</h3>
                <p className="mt-2 text-sm text-foreground/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
