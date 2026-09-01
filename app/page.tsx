import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/shared/HeroCarousel";
import ServiceCard from "@/components/shared/ServiceCard";
import TeamMemberCard from "@/components/shared/TeamMemberCard";
import TrustBadgeMarquee from "@/components/shared/TrustBadgeMarquee";
import Testimonials from "@/components/shared/Testimonials";
import {
  heroImages,
  howItWorks,
  ourCaregivers,
  services,
  siteConfig,
  teamMembers,
  trustBadges,
  whoWeHelp,
  whyChooseUs,
} from "@/lib/site-config";
import { faqSchema, faqs } from "@/lib/schema";

export const metadata: Metadata = {
  // Root page title.template inheritance from layout.tsx doesn't apply to the "/" segment
  // itself in this Next.js version (verified: every other page gets "X | Mzansi HealthCare"
  // via the template, this one didn't) — so the brand suffix is appended explicitly here.
  title: "Home Care Services in Komani (Queenstown) | Mzansi HealthCare",
  description:
    "Professional home healthcare in Komani (Queenstown) and surrounding areas, Eastern Cape — qualified caregivers, personalised care plans, and clinical oversight.",
};

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

      {/* Who We Help */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
            Who We Help
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {whoWeHelp.map((item) => (
              <div key={item.title} className="rounded-2xl border border-neutral bg-secondary/10 p-5 text-center shadow-sm">
                <h3 className="font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust points */}
      <section className="relative overflow-hidden bg-secondary/25 py-16">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top, color-mix(in srgb, var(--color-secondary) 12%, transparent), transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
            Why Choose {siteConfig.name} — The Mzansi Difference
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((point) => (
              <div
                key={point.title}
                tabIndex={0}
                className="flip-card h-60 rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front flex flex-col items-center justify-center overflow-hidden rounded-2xl p-6 text-center shadow-sm">
                    <Image
                      src={point.image.src}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectPosition: point.image.objectPosition ?? "center" }}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primary-dark/70" aria-hidden="true" />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/50 to-primary-dark/30"
                      aria-hidden="true"
                    />
                    <div className="relative flex flex-col items-center">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/40"
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
                      <h3 className="mt-4 font-semibold text-white">{point.title}</h3>
                      <p className="mt-2 text-xs text-white/70">Tap or hover to read more</p>
                    </div>
                  </div>
                  <div className="flip-card-back flex flex-col items-center justify-center overflow-hidden rounded-2xl p-6 text-center shadow-sm">
                    <Image
                      src={point.image.src}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectPosition: point.image.objectPosition ?? "center" }}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primary-dark/75" aria-hidden="true" />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/60 to-transparent"
                      aria-hidden="true"
                    />
                    <div className="relative">
                      <h3 className="font-semibold text-white">{point.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/90">{point.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-secondary/25 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">Our Services</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                name={service.name}
                description={service.description}
                image={service.image}
                objectPosition={service.objectPosition}
                slug={service.slug}
              />
            ))}

            {/* Non-service CTA tiles — complete the 3x3 grid without adding unverified service
                claims (only the 7 services above are sourced from the client's Website Draft). */}
            <Link
              href="/services"
              className="group flex flex-col justify-center overflow-hidden rounded-2xl bg-primary p-6 text-center text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto h-8 w-8"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              <h3 className="mt-4 text-lg font-semibold">See Everything We Offer</h3>
              <p className="mt-2 text-sm text-white/80">
                Browse the full list of services in detail on our Services page.
              </p>
            </Link>
            <Link
              href="/contact"
              className="group flex flex-col justify-center overflow-hidden rounded-2xl border border-secondary/30 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto h-8 w-8 text-secondary"
                aria-hidden="true"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-primary">Not Sure What You Need?</h3>
              <p className="mt-2 text-sm text-foreground/70">
                Talk to our team and we&rsquo;ll help you find the right kind of care.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
            How It Works
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {howItWorks.map((item) => (
              <div key={item.step} className="rounded-2xl border border-neutral bg-secondary/10 p-6 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                  {item.step}
                </span>
                <h3 className="mt-3 font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/how-it-works" className="text-sm font-semibold text-primary hover:underline">
              More on how care begins →
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-secondary/25 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">Where We Serve</h2>
          <p className="mt-4 text-foreground/80">
            {siteConfig.name} is based in {siteConfig.address}, providing home healthcare across
            Queenstown / Komani and the surrounding Eastern Cape area.
          </p>
        </div>
      </section>

      <Testimonials />

      {/* Meet the team */}
      <section className="relative overflow-hidden bg-secondary/25 py-16">
        <div className="bg-dot-texture-dark pointer-events-none absolute inset-0 opacity-15" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">Meet Our Team</h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-secondary/30 bg-white p-6 text-center shadow-sm">
            <h3 className="text-lg font-semibold text-primary">{ourCaregivers.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">{ourCaregivers.description}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Need Professional Home Care?</h2>
          <p className="mt-3 text-white/90">
            Reach out today and let our team design a care plan for you or your loved one.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-neutral"
          >
            Request a Care Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
