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
      <PageBanner title="Gallery" image={pageBanners.gallery} />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
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
      </section>
    </>
  );
}
