import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "POPIA Compliance",
  description: `${siteConfig.name}'s commitment to POPIA (Protection of Personal Information Act) compliance.`,
};

export default function PopiaPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-primary sm:text-4xl">POPIA Compliance</h1>
      <p className="mt-2 text-sm text-foreground/60">Last updated: 4 August 2026</p>
      <div className="mt-6 space-y-6 text-foreground/80">
        {/* Template-based generic POPIA notice — nothing legally blank at launch. Not a final
            lawyer-reviewed policy. */}
        <p>
          {siteConfig.name} is committed to protecting your personal information in line with
          South Africa&rsquo;s Protection of Personal Information Act, 4 of 2013 (POPIA). This
          notice explains our role as the responsible party and how we process personal
          information collected through this website.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-primary">Responsible party</h2>
          <p className="mt-2">
            {siteConfig.legalName} is the responsible party for personal information collected
            via this website. Our Information Officer can be reached at{" "}
            <a href={`mailto:${siteConfig.emails.info}`} className="text-primary hover:underline">
              {siteConfig.emails.info}
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary">Lawful processing</h2>
          <p className="mt-2">
            We process personal information collected via this website (such as contact form
            submissions) lawfully, and only for the specific purpose of responding to your
            enquiry and, where applicable, coordinating and delivering our home healthcare
            services. We rely on your consent, given by submitting the contact form, as the basis
            for this processing — see our{" "}
            <Link href="/consent" className="text-primary hover:underline">
              Consent
            </Link>{" "}
            page for detail.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary">Third-party processors</h2>
          <p className="mt-2">
            We use <strong>Brevo</strong> (Sendinblue SAS) as a third-party operator to deliver
            contact form submissions to our team by email. Brevo processes this information only
            on our instruction and does not use it for its own purposes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary">Security safeguards</h2>
          <p className="mt-2">
            We take reasonable technical and organisational steps to keep the personal
            information we hold secure and to prevent unauthorised access, loss, or disclosure.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary">Your rights</h2>
          <p className="mt-2">
            Under POPIA, you have the right to: be notified that your information is being
            collected; access the personal information we hold about you; request correction or
            deletion of inaccurate, irrelevant, or unlawfully held information; object to
            processing of your information; and withdraw consent at any time. To exercise any of
            these rights, or to lodge a complaint about how we handle your information, contact
            our Information Officer at{" "}
            <a href={`mailto:${siteConfig.emails.info}`} className="text-primary hover:underline">
              {siteConfig.emails.info}
            </a>
            . If you are not satisfied with our response, you may also lodge a complaint with the
            Information Regulator of South Africa (
            <a
              href="https://inforegulator.org.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              inforegulator.org.za
            </a>
            ).
          </p>
        </div>
      </div>
    </section>
  );
}
