import type { Metadata } from "next";
import ContactForm from "@/components/shared/ContactForm";
import GoogleMap from "@/components/shared/GoogleMap";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} — call, WhatsApp, or send a message.`,
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-primary sm:text-4xl">Contact Us</h1>
      <p className="mt-4 max-w-2xl text-foreground/80">
        Reach out and our team will get back to you as soon as possible.
      </p>

      <div className="mt-10 grid gap-12 md:grid-cols-2">
        <ContactForm />

        <div>
          <h2 className="text-lg font-semibold text-primary">Get in Touch</h2>
          <ul className="mt-4 space-y-3 text-foreground/80">
            <li>
              <span className="block text-sm font-medium text-foreground">Phone</span>
              <a href={`tel:${siteConfig.phoneIntl}`} className="hover:text-primary">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <span className="block text-sm font-medium text-foreground">WhatsApp</span>
              <a href={siteConfig.whatsappLink} className="hover:text-primary">
                Message us on WhatsApp
              </a>
            </li>
            <li>
              <span className="block text-sm font-medium text-foreground">Email</span>
              <a href={`mailto:${siteConfig.emails.info}`} className="hover:text-primary">
                {siteConfig.emails.info}
              </a>
            </li>
            <li>
              <span className="block text-sm font-medium text-foreground">Service Area</span>
              {siteConfig.serviceArea}
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-lg font-semibold text-primary">Where We Serve</h2>
        <p className="mt-2 max-w-2xl text-sm text-foreground/80">
          {/* No confirmed office address in PRD-001 — showing the service area rather than a specific pin */}
          We don&rsquo;t operate from a single storefront — our caregivers come to you across{" "}
          {siteConfig.serviceArea}.
        </p>
        <div className="mt-4">
          <GoogleMap />
        </div>
      </div>
    </section>
  );
}
