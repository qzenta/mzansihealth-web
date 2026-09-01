import type { Metadata } from "next";
import GalleryCard from "@/components/shared/GalleryCard";
import PageBanner from "@/components/shared/PageBanner";
import { galleryItems, pageBanners, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Gallery",
  description: `A look at ${siteConfig.name}'s care in action.`,
};

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        title="Gallery"
        image={pageBanners.gallery}
        tall
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />
      <section className="relative overflow-hidden bg-secondary/25 py-16">
        <div className="bg-dot-texture-dark pointer-events-none absolute inset-0 opacity-15" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mx-auto max-w-2xl text-center text-foreground/80">
            A look at our care in action across each of our service areas.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <GalleryCard
                key={item.title}
                title={item.title}
                tag={item.tag}
                image={item.image}
                objectPosition={item.objectPosition}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
