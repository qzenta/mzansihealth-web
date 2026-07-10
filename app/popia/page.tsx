import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "POPIA Compliance",
  description: `${siteConfig.name}'s commitment to POPIA (Protection of Personal Information Act) compliance.`,
};

export default function PopiaPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-primary sm:text-4xl">POPIA Compliance</h1>
      <div className="mt-6 space-y-4 text-foreground/80">
        {/* Placeholder POPIA notice — real policy pending legal review, same treatment as Privacy Policy/Terms */}
        <p>
          {siteConfig.name}{" "}
          is committed to protecting your personal information in line with
          South Africa&rsquo;s Protection of Personal Information Act (POPIA). This placeholder
          notice will be replaced with a finalised POPIA compliance statement once legal review is
          complete.
        </p>
        <p>
          We process personal information collected via this website (such as contact form
          submissions) lawfully, for the specific purpose of responding to enquiries and
          delivering our healthcare services, and we take reasonable steps to keep this
          information secure.
        </p>
        <p>
          Under POPIA, you have the right to access, correct, or request deletion of your
          personal information held by us. To exercise these rights or raise a privacy concern,
          contact our Information Officer at{" "}
          <a href={`mailto:${siteConfig.emails.info}`} className="text-primary hover:underline">
            {siteConfig.emails.info}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
