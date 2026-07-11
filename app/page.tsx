import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/shared/ServiceCard";
import TeamMemberCard from "@/components/shared/TeamMemberCard";
import { services, siteConfig, teamMembers, trustPoints } from "@/lib/site-config";
import { faqSchema, faqs } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* Hero — sample/stock photo (Pexels, free license), not a real client photo.
          TODO: replace with real client photo per PRD-001 once received. */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-caregiver.jpg"
            alt="A caregiver holding the hand of an elderly patient"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-28 text-center sm:px-6 sm:py-36">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">{siteConfig.tagline}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteConfig.phoneIntl}`}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
            >
              Call Now
            </a>
            <a
              href={siteConfig.whatsappLink}
              className="rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-primary"
            >
              Request Care
            </Link>
          </div>
        </div>
      </section>

      {/* Trust points */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          Why Families Choose {siteConfig.name}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {trustPoints.map((point) => (
            <div key={point.title} className="rounded-2xl border border-neutral bg-white p-6 text-center shadow-sm">
              <h3 className="font-semibold text-primary">{point.title}</h3>
              <p className="mt-2 text-sm text-foreground/80">{point.description}</p>
            </div>
          ))}
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
        <div className="mx-auto mt-10 grid max-w-2xl gap-6 sm:grid-cols-2">
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
