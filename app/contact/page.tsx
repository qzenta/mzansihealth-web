import type { Metadata } from "next";
import ContactForm from "@/components/shared/ContactForm";
import GoogleMap from "@/components/shared/GoogleMap";
import PageBanner from "@/components/shared/PageBanner";
import { pageBanners, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} — call, WhatsApp, or send a message.`,
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Reach out and our team will get back to you as soon as possible."
        image={pageBanners.contact}
        tall
      />
      <section className="relative overflow-hidden bg-secondary/25 py-16">
        <div className="bg-dot-texture-dark pointer-events-none absolute inset-0 opacity-15" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral bg-white p-6 shadow-sm">
              <ContactForm />
            </div>

            <div className="rounded-2xl border border-neutral bg-secondary/10 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-primary">Get in Touch</h2>
              <ul className="mt-4 space-y-3 text-foreground/80">
                <li>
                  <span className="block text-sm font-medium text-foreground">Phone</span>
                  <a href={`tel:${siteConfig.phoneIntl}`} className="hover:text-primary">
                    {siteConfig.phone}
                  </a>{" "}
                  /{" "}
                  <a href={`tel:${siteConfig.phoneSecondaryIntl}`} className="hover:text-primary">
                    {siteConfig.phoneSecondary}
                  </a>
                </li>
                <li>
                  <span className="block text-sm font-medium text-foreground">WhatsApp</span>
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    Message us on WhatsApp
                  </a>{" "}
                  /{" "}
                  <a
                    href={siteConfig.whatsappSecondaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    alt line
                  </a>
                </li>
                <li>
                  <span className="block text-sm font-medium text-foreground">Email</span>
                  <a href={`mailto:${siteConfig.emails.info}`} className="hover:text-primary">
                    {siteConfig.emails.info}
                  </a>
                </li>
                <li>
                  <span className="block text-sm font-medium text-foreground">Address</span>
                  {siteConfig.address}
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
              You&rsquo;ll find us at {siteConfig.address}, and our caregivers come directly to
              you across {siteConfig.serviceArea}.
            </p>
          </div>
        </div>

        {/* Full-bleed map, breaks out of the max-w-5xl content column to span the full width. */}
        <div className="relative left-1/2 mt-4 w-screen -translate-x-1/2">
          <GoogleMap />
        </div>
      </section>
    </>
  );
}
