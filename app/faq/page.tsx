import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { faqSchema, faqs } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Frequently asked questions about ${siteConfig.name}'s home healthcare services.`,
};

export default function FaqPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <h1 className="text-center text-3xl font-bold text-primary sm:text-4xl">
        Frequently Asked Questions
      </h1>
      <div className="mt-10 space-y-6">
        {faqs.map((item) => (
          <div key={item.question} className="rounded-2xl border border-neutral bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-primary">{item.question}</h2>
            <p className="mt-2 text-sm text-foreground/80">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
