import Link from "next/link";
import HeroCarousel from "@/components/shared/HeroCarousel";
import ServiceCard from "@/components/shared/ServiceCard";
import TeamMemberCard from "@/components/shared/TeamMemberCard";
import TrustBadgeMarquee from "@/components/shared/TrustBadgeMarquee";
import { heroImages, services, siteConfig, teamMembers, trustBadges, whyChooseUs } from "@/lib/site-config";
import { faqSchema, faqs } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* Hero — sample/stock photos (Pexels, free license), not real client photos.
          TODO: replace with real client photos per PRD-001 once received.
          Headline/description vary per slide — see HeroCarousel + heroImages in site-config.ts. */}
      <HeroCarousel slides={heroImages} />

      {/* Trust badges — generic/descriptive only, no third-party names or logos.
          See lib/site-config.ts for the confirmation note before adding claim-based badges. */}
      <TrustBadgeMarquee badges={trustBadges} />

      {/* Trust points */}
      <section className="relative overflow-hidden py-16">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top, color-mix(in srgb, var(--color-secondary) 12%, transparent), transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
            Why Choose {siteConfig.name} — The Mzansi Difference
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((point) => (
              <div key={point.title} tabIndex={0} className="flip-card h-60 outline-none">
                <div className="flip-card-inner">
                  <div className="flip-card-front flex flex-col items-center justify-center rounded-2xl border border-neutral bg-white p-6 text-center shadow-sm">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/15 text-secondary"
                      aria-hidden="true"
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
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <h3 className="mt-4 font-semibold text-primary">{point.title}</h3>
                    <p className="mt-2 text-xs text-foreground/50">Hover to read more</p>
                  </div>
                  <div className="flip-card-back flex flex-col items-center justify-center rounded-2xl bg-primary p-6 text-center shadow-sm">
                    <h3 className="font-semibold text-white">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/90">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-neutral/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">Our Services</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                name={service.name}
                description={service.description}
                image={service.image}
                objectPosition={service.objectPosition}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Meet the team */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">Meet Our Team</h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">Need Professional Home Care?</h2>
          <p className="mt-3 text-white/90">
            Reach out today and let our team design a care plan for you or your loved one.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-neutral"
          >
            Request Care Today
          </Link>
        </div>
      </section>
    </>
  );
}
