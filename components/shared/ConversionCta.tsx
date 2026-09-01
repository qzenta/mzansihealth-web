import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import TrackedLink from "@/components/shared/TrackedLink";

interface ConversionCtaProps {
  heading: string;
  requestLabel?: string;
  page: string;
  showCall?: boolean;
}

export default function ConversionCta({ heading, requestLabel = "Request a Care Assessment", page, showCall = true }: ConversionCtaProps) {
  return (
    <div className="mt-12 rounded-2xl bg-primary p-8 text-center text-white">
      <h2 className="text-xl font-semibold">{heading}</h2>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/contact"
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-neutral"
        >
          {requestLabel}
        </Link>
        <TrackedLink
          event="whatsapp_click"
          eventParams={{ page, line: "primary" }}
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
        >
          WhatsApp Us
        </TrackedLink>
        {showCall && (
          <TrackedLink
            event="phone_click"
            eventParams={{ page, line: "primary" }}
            href={`tel:${siteConfig.phoneIntl}`}
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Call Us
          </TrackedLink>
        )}
      </div>
    </div>
  );
}
