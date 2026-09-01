import type { Metadata } from "next";
import ContactForm from "@/components/shared/ContactForm";
import GoogleMap from "@/components/shared/GoogleMap";
import PageBanner from "@/components/shared/PageBanner";
import { emergencyNotice, pageBanners, siteConfig } from "@/lib/site-config";
import TrackedLink from "@/components/shared/TrackedLink";

export const metadata: Metadata = {
  title: "Request a Care Assessment",
  description: `Request a care assessment from ${siteConfig.name} — call, WhatsApp, or send a message.`,
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Request a Care Assessment"
        subtitle="Tell us about the care needed and our team will get back to you as soon as possible."
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
                  <TrackedLink
                    event="phone_click"
                    eventParams={{ page: "contact", line: "primary" }}
                    href={`tel:${siteConfig.phoneIntl}`}
                    className="hover:text-primary"
                  >
                    {siteConfig.phone}
                  </TrackedLink>{" "}
                  /{" "}
                  <TrackedLink
                    event="phone_click"
                    eventParams={{ page: "contact", line: "secondary" }}
                    href={`tel:${siteConfig.phoneSecondaryIntl}`}
                    className="hover:text-primary"
                  >
                    {siteConfig.phoneSecondary}
                  </TrackedLink>
                </li>
                <li>
                  <span className="block text-sm font-medium text-foreground">WhatsApp</span>
                  <TrackedLink
                    event="whatsapp_click"
                    eventParams={{ page: "contact", line: "primary" }}
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    Message us on WhatsApp
                  </TrackedLink>{" "}
                  /{" "}
                  <TrackedLink
                    event="whatsapp_click"
                    eventParams={{ page: "contact", line: "secondary" }}
                    href={siteConfig.whatsappSecondaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    alt line
                  </TrackedLink>
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

          <div className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
            <p className="font-semibold">{emergencyNotice.heading}</p>
            <p className="mt-1">{emergencyNotice.body}</p>
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
