import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-primary sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-foreground/60">Last updated: 4 August 2026</p>
      <div className="mt-6 space-y-6 text-foreground/80">
        {/* Template-based generic SA SMB/healthcare privacy policy — nothing legally blank at
            launch. Not a final lawyer-reviewed policy; review before major changes to data
            practices. */}
        <p>
          {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your
          privacy and is committed to protecting the personal information you share with us. This
          Privacy Policy explains what information we collect through this website, why we
          collect it, how we use and store it, and the choices you have.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-primary">Information we collect</h2>
          <p className="mt-2">
            When you submit our contact form, we collect the information you provide directly:
            your name, phone number, email address, the service you are enquiring about, and your
            message. We do not collect payment information, medical records, or other sensitive
            personal information through this website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary">Why we collect it</h2>
          <p className="mt-2">
            We use this information solely to respond to your enquiry, discuss the care services
            you are interested in, and, where you become a client, to coordinate that care. We do
            not use your information for unrelated marketing without your separate consent, and we
            do not sell your personal information.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary">How we store and share it</h2>
          <p className="mt-2">
            Contact form submissions are transmitted via our email service provider,{" "}
            <strong>Brevo</strong> (Sendinblue SAS), which processes this information on our
            behalf strictly to deliver the enquiry email to our team. Brevo acts as a third-party
            processor and does not use your information for its own purposes. We take reasonable
            technical and organisational measures to keep your information secure, and we do not
            share your information with any other third party except where required by law.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary">How long we keep it</h2>
          <p className="mt-2">
            We retain contact form enquiries for as long as reasonably necessary to respond to
            you and, if you become a client, for the duration of our care relationship plus any
            period required by law or professional record-keeping obligations. Enquiries that do
            not proceed to a client relationship are retained for no longer than 24 months before
            being deleted.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary">Your rights</h2>
          <p className="mt-2">
            Under the Protection of Personal Information Act (POPIA), you have the right to
            access, correct, or request deletion of the personal information we hold about you,
            and to object to or restrict how we process it. See our{" "}
            <Link href="/popia" className="text-primary hover:underline">
              POPIA Compliance
            </Link>{" "}
            page and{" "}
            <Link href="/consent" className="text-primary hover:underline">
              Consent
            </Link>{" "}
            page for more detail on how to exercise these rights.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary">Contact us</h2>
          <p className="mt-2">
            For any privacy-related questions or to exercise your rights, contact us at{" "}
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
