import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { emergencyNotice, services, serviceDetails, siteConfig, teamMembers } from "@/lib/site-config";
import { faqSchema } from "@/lib/schema";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const details = serviceDetails[slug];

  if (!service || !details) notFound();

  const clinicalManager = teamMembers.find((member) => member.role === "Clinical Manager");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(details.faqs)) }}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.name}
            fill
            priority
            sizes="100vw"
            style={{ objectPosition: service.objectPosition ?? "center" }}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-dark/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent" />
        </div>
        <div className="relative mx-auto flex min-h-[280px] max-w-6xl flex-col justify-center px-4 py-16 text-center sm:px-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{service.name}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">{service.description}</p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary/25 py-16">
        <div className="bg-dot-texture-dark pointer-events-none absolute inset-0 opacity-15" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-semibold text-primary">Who It&rsquo;s For</h2>
              <p className="mt-2 text-foreground/80">{details.whoItsFor}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary">Typical Support Provided</h2>
              <ul className="mt-3 space-y-2">
                {details.typicalSupport.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-foreground/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary">How Mzansi HealthCare Provides This Service</h2>
              <p className="mt-2 text-foreground/80">
                Caregivers are matched per contract to suit your care requirements, and every
                caregiver works under the direct clinical supervision of our Registered Nurse and
                Clinical Manager{clinicalManager ? `, ${clinicalManager.name}` : ""}.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary">What This Service Does Not Cover</h2>
              <p className="mt-2 text-foreground/80">{details.doesNotCover}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary">How Care Begins</h2>
              <p className="mt-2 text-foreground/80">
                Tell us what you need, we discuss the care required, and we build a care
                arrangement matched to your situation.{" "}
                <Link href="/how-it-works" className="text-primary hover:underline">
                  See the full process →
                </Link>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary">Frequently Asked Questions</h2>
              <div className="mt-4 space-y-4">
                {details.faqs.map((item) => (
                  <div key={item.question} className="rounded-2xl border border-neutral bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-primary">{item.question}</h3>
                    <p className="mt-2 text-sm text-foreground/80">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
              <p className="font-semibold">{emergencyNotice.heading}</p>
              <p className="mt-1">{emergencyNotice.body}</p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-primary p-8 text-center text-white">
            <h2 className="text-xl font-semibold">Ready to discuss {service.name.toLowerCase()}?</h2>
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
