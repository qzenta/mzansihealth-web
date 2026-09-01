import type { Metadata } from "next";
import Link from "next/link";
import { caregiverQualifications, ourCaregivers, siteConfig, teamMembers } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "How We Select and Supervise Our Caregivers",
  description: `How ${siteConfig.name} matches and supervises caregivers, under direct clinical oversight.`,
};

export default function CaregiverTrustPage() {
  const clinicalManager = teamMembers.find((member) => member.role === "Clinical Manager");

  return (
    <>
      <section className="bg-primary-dark py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            How We Select and Supervise Our Caregivers
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            The people caring for you or your family matter — here&rsquo;s how caregiving is
            matched and overseen at {siteConfig.name}.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary/25 py-16">
        <div className="bg-dot-texture-dark pointer-events-none absolute inset-0 opacity-15" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-10">
            <div className="rounded-2xl border border-neutral bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-primary">Clinical Oversight</h2>
              <p className="mt-2 text-foreground/80">
                Every caregiver works under the direct clinical supervision of our Registered
                Nurse and Clinical Manager
                {clinicalManager ? `, ${clinicalManager.name}` : ""}
                {clinicalManager ? `, ${clinicalManager.tagline}` : ""}. {clinicalManager?.bio}
              </p>
            </div>

            <div className="rounded-2xl border border-neutral bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-primary">How Caregivers Are Matched</h2>
              <p className="mt-2 text-foreground/80">{ourCaregivers.description}</p>
            </div>

            <div className="rounded-2xl border border-neutral bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-primary">Qualifications</h2>
              <p className="mt-2 text-foreground/80">{caregiverQualifications.clinicalOversight}</p>
              <p className="mt-2 text-foreground/80">{caregiverQualifications.poolTraining}</p>
            </div>
          </div>

          {/* Screening, training-curriculum, and continuity/replacement specifics are
              intentionally NOT published here — no confirmed source material exists for these
              beyond what's stated above (handoff §9: "Do not invent operational controls. If
              information is unavailable, produce a content gap report rather than making
              assumptions."). See the content-gap table in the implementation report. */}

          <div className="mt-12 rounded-2xl bg-primary p-8 text-center text-white">
            <h2 className="text-xl font-semibold">Have questions about who will be caring for you?</h2>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
