import type { Metadata } from "next";
import PageBanner from "@/components/shared/PageBanner";
import { pageBanners, siteConfig, trustPoints } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} and our commitment to compassionate home healthcare.`,
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title={`About ${siteConfig.name}`} image={pageBanners.about} tall />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="space-y-4 text-foreground/80">
          <p>
            {/* Placeholder narrative — real About Us copy pending client content per PRD-001 */}
            {siteConfig.name} provides professional home and community healthcare services across{" "}
            {siteConfig.serviceArea}. Our mission is to bring compassionate, reliable, and
            personalised care directly into the homes of the individuals and families who need it
            most.
          </p>
          <p>
            Full About Us narrative is pending final content from the client — this placeholder
            reflects the intended tone and structure and will be replaced once real copy is
            supplied.
          </p>
        </div>
      </section>

      <section className="bg-neutral/40 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-primary">Why Families Choose Us</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <div key={point.title} className="rounded-2xl border border-neutral bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-primary">{point.title}</h3>
                <p className="mt-2 text-sm text-foreground/80">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
