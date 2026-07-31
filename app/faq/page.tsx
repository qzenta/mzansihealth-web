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
      <section className="relative overflow-hidden bg-neutral/40 py-16">
        <div className="bg-dot-texture-dark pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-6">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-neutral bg-secondary/10 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h2 className="font-semibold text-primary">{item.question}</h2>
                <p className="mt-2 text-sm text-foreground/80">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
