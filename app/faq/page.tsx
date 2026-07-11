import type { Metadata } from "next";
import PageBanner from "@/components/shared/PageBanner";
import { pageBanners, siteConfig } from "@/lib/site-config";
import { faqSchema, faqs } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Frequently asked questions about ${siteConfig.name}'s home healthcare services.`,
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <PageBanner title="Frequently Asked Questions" image={pageBanners.faq} />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-6">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-2xl border border-neutral bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-primary">{item.question}</h2>
              <p className="mt-2 text-sm text-foreground/80">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
