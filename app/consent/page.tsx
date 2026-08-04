import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Consent",
  description: `How ${siteConfig.name} obtains and manages your consent to being contacted and to processing your personal information.`,
};

export default function ConsentPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-primary sm:text-4xl">Consent</h1>
      <p className="mt-2 text-sm text-foreground/60">Last updated: 4 August 2026</p>
      <div className="mt-6 space-y-6 text-foreground/80">
        {/* Template-based generic consent notice — nothing legally blank at launch. Not a final
            lawyer-reviewed policy. */}
        <p>
          This page explains how {siteConfig.name} obtains your consent before collecting or
          using your personal information through this website, in line with our{" "}
          <Link href="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/popia" className="text-primary hover:underline">
            POPIA Compliance
          </Link>{" "}
          notice.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-primary">Consent to being contacted</h2>
          <p className="mt-2">
            When you submit our contact form with your name, phone number, email address, service
            of interest, and message, you are consenting to {siteConfig.name} contacting you by
            phone, WhatsApp, or email to respond to your enquiry and discuss the care services you
            are interested in. We only use these details for this purpose, and we do not add you
            to any marketing list without asking you separately first.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary">Consent to processing</h2>
          <p className="mt-2">
            By submitting the contact form, you also consent to us processing the information you
            provide as described in our Privacy Policy and POPIA Compliance notice, including
            sharing it with our email service provider, Brevo, solely to deliver your enquiry to
            our team.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary">Withdrawing consent</h2>
          <p className="mt-2">
            You may withdraw your consent at any time. Withdrawing consent does not affect the
            lawfulness of any processing carried out before the withdrawal, and will not affect
            care already agreed upon or in progress. To withdraw consent, or to ask us to stop
            contacting you, email us at{" "}
            <a href={`mailto:${siteConfig.emails.info}`} className="text-primary hover:underline">
              {siteConfig.emails.info}
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary">Questions</h2>
          <p className="mt-2">
            If you have any questions about how we obtain or use your consent, contact us at{" "}
            <a href={`mailto:${siteConfig.emails.info}`} className="text-primary hover:underline">
              {siteConfig.emails.info}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
