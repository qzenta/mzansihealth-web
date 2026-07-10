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
      <div className="mt-6 space-y-4 text-foreground/80">
        <p>
          This placeholder Terms of Use page will be replaced with finalised terms covering use
          of this website and the services described on it.
        </p>
        <p>
          By using this website, you agree to use it for lawful purposes only. All content on
          this site is the property of {siteConfig.name} unless otherwise stated.
        </p>
        <p>
          For any questions about these terms, contact us at{" "}
          <a href={`mailto:${siteConfig.emails.info}`} className="text-primary hover:underline">
            {siteConfig.emails.info}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
