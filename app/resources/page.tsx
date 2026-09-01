import type { Metadata } from "next";
import { resourceArticles, siteConfig } from "@/lib/site-config";
import ConversionCta from "@/components/shared/ConversionCta";

// Deliberately not linked from nav or sitemap.ts yet — no reviewed articles exist (see the
// resourceArticles comment in site-config.ts). Reachable by direct URL only until content is
// ready, so it doesn't get indexed as a thin page.
export const metadata: Metadata = {
  title: "Care Guides & Resources",
  description: `Articles and care guides from ${siteConfig.name} — coming soon.`,
};

export default function ResourcesPage() {
  const published = resourceArticles.filter((article) => article.status === "published");

  return (
    <section className="bg-secondary/25 py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
          Care Guides &amp; Resources
        </h1>
        {published.length === 0 ? (
          <p className="mt-4 text-foreground/80">
            We&rsquo;re preparing a set of care guides and articles on topics like post-hospital
            recovery, elderly care, and choosing a home-care provider. Nothing&rsquo;s published
            here yet — in the meantime, reach out directly and our team can answer your
            questions.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 text-left sm:grid-cols-2">
            {published.map((article) => (
              <div key={article.slug} className="rounded-2xl border border-neutral bg-white p-6 shadow-sm">
                <h2 className="font-semibold text-primary">{article.title}</h2>
                <p className="mt-2 text-sm text-foreground/80">{article.excerpt}</p>
              </div>
            ))}
          </div>
        )}
        <ConversionCta heading="Have a question in the meantime?" page="resources" />
      </div>
    </section>
  );
}
