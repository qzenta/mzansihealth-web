import type { Metadata } from "next";
import PageBanner from "@/components/shared/PageBanner";
import ServiceCard from "@/components/shared/ServiceCard";
import { pageBanners, services, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description: `Home nursing, elderly care, disability support, and more from ${siteConfig.name}.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Professional, compassionate healthcare services delivered where you need them most."
        image={pageBanners.services}
      />
      <section className="bg-neutral/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                name={service.name}
                description={service.description}
                image={service.image}
                objectPosition={service.objectPosition}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
