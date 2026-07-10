import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-primary sm:text-4xl">Privacy Policy</h1>
      <div className="mt-6 space-y-4 text-foreground/80">
        <p>
          {siteConfig.name}{" "}
          respects your privacy. This placeholder policy will be replaced with a finalised
          version covering data collection, use, and storage once legal review is complete.
        </p>
        <p>
          Information submitted via our contact form (name, phone, email, service required, and
          message) is used solely to respond to your enquiry and is not shared with third
          parties except as required to deliver our services.
        </p>
        <p>
          For any privacy-related questions, contact us at{" "}
          <a href={`mailto:${siteConfig.emails.info}`} className="text-primary hover:underline">
            {siteConfig.emails.info}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
