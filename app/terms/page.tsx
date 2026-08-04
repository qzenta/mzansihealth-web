import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms of use for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-primary sm:text-4xl">Terms of Use</h1>
      <p className="mt-2 text-sm text-foreground/60">Last updated: 4 August 2026</p>
      <div className="mt-6 space-y-6 text-foreground/80">
        {/* Template-based generic SA SMB terms — nothing legally blank at launch. Not a final
            lawyer-reviewed policy. */}
        <p>
          These Terms of Use govern your access to and use of this website
          ({siteConfig.domain}), operated by {siteConfig.legalName}. By using this website, you
          agree to these terms.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-primary">Use of this website</h2>
          <p className="mt-2">
            You may use this website for lawful purposes only, including to learn about our home
            healthcare services and to enquire about them via the contact form. You may not use
            this website in any way that could damage, disable, or impair it, or that interferes
            with any other party&rsquo;s use of it.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary">No medical advice</h2>
          <p className="mt-2">
            The content on this website is provided for general informational purposes about our
            services and does not constitute medical advice. It is not a substitute for
            professional medical assessment, diagnosis, or treatment. Actual care plans are agreed
            directly with our clinical team based on each patient&rsquo;s individual needs.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary">Intellectual property</h2>
          <p className="mt-2">
            All content on this website, including text, images, and logos, is the property of{" "}
            {siteConfig.name} or its licensors, unless otherwise stated, and may not be
            reproduced without our prior written permission.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary">Limitation of liability</h2>
          <p className="mt-2">
            While we take reasonable care to keep this website accurate and up to date, we make
            no warranties about the completeness or accuracy of its content, and we are not
            liable for any loss arising from your reliance on information published here.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary">Governing law</h2>
          <p className="mt-2">
            These terms are governed by the laws of the Republic of South Africa.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary">Contact us</h2>
          <p className="mt-2">
            For any questions about these terms, contact us at{" "}
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
