import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, teamMembers } from "@/lib/site-config";
import TrackPageView from "@/components/shared/TrackPageView";
import TrackedLink from "@/components/shared/TrackedLink";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "For Healthcare Professionals",
  description: `Refer a patient to ${siteConfig.name} for home-based recovery, ongoing, or palliative care in Komani (Queenstown), Eastern Cape.`,
};

const referralPathway = [
  { step: 1, title: "Who We Support", description: "Patients being discharged from hospital, or living with an ongoing or chronic condition, who need professional care at home." },
  { step: 2, title: "Referral", description: "Reach out with the patient's care needs — by phone, WhatsApp, or a care assessment request." },
  { step: 3, title: "Assessment", description: "We discuss the patient's care requirements with you and, where appropriate, the family." },
  { step: 4, title: "Care Arrangement", description: "We put together a care arrangement suited to the patient, under the clinical supervision of our Registered Nurse and Clinical Manager." },
  { step: 5, title: "Communication", description: "We stay in touch as care begins and progresses." },
  { step: 6, title: "Ongoing Support", description: "Care is reviewed as the patient's needs change." },
] as const;

export default function HealthcareProfessionalsPage() {
  const clinicalManager = teamMembers.find((member) => member.role === "Clinical Manager");

  return (
    <>
      <TrackPageView event="referral_page_view" />
      <section className="bg-primary-dark py-8 text-center text-white sm:py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">For Healthcare Professionals</h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-white/90">
            Refer patients for professional home-based care — coordinated directly with you and
            the family.
          </p>
        </div>
      </section>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Healthcare Professionals" }]} />

      <section className="relative overflow-hidden bg-secondary/25 py-16">
        <div className="bg-dot-texture-dark pointer-events-none absolute inset-0 opacity-15" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-foreground/80">
            {siteConfig.name} works with hospitals, doctors, clinics, social workers, allied
            health professionals, and retirement communities who need a home-based care option
            for a patient. Every referral is assessed on its own merits and care is arranged
            under the direct clinical supervision of our Registered Nurse and Clinical Manager
            {clinicalManager ? `, ${clinicalManager.name}` : ""}.
          </p>

          <ol className="mt-10 space-y-6">
            {referralPathway.map((item) => (
              <li key={item.step} className="flex gap-4 rounded-2xl border border-neutral bg-white p-6 shadow-sm">
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
            <h2 className="text-xl font-semibold">Have a patient who needs home-based care?</h2>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-neutral"
              >
                Refer a Patient
              </Link>
              <TrackedLink
                event="whatsapp_click"
                eventParams={{ page: "for-healthcare-professionals", line: "primary" }}
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                WhatsApp Us
              </TrackedLink>
              <TrackedLink
                event="phone_click"
                eventParams={{ page: "for-healthcare-professionals", line: "primary" }}
                href={`tel:${siteConfig.phoneIntl}`}
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Call Us
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
