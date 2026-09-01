import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { emergencyNotice, services, serviceDetails, teamMembers } from "@/lib/site-config";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import TrackPageView from "@/components/shared/TrackPageView";
import ConversionCta from "@/components/shared/ConversionCta";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

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
    title: `${service.name} in Komani (Queenstown)`,
    description: `${service.description} Serving Komani (Queenstown) and surrounding areas, Eastern Cape.`,
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
      <TrackPageView event="service_page_view" params={{ service: service.slug }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(details.faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.name, path: `/services/${service.slug}` },
            ])
          ),
        }}
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
        <div className="relative mx-auto flex min-h-[180px] max-w-6xl flex-col justify-center px-4 py-8 text-center sm:px-6">
          <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{service.name}</h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-white/90">{service.description}</p>
        </div>
      </section>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.name }]}
      />

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

          <ConversionCta
            heading={`Ready to discuss ${service.name.toLowerCase()}?`}
            page={`service:${service.slug}`}
          />
        </div>
      </section>
    </>
  );
}
