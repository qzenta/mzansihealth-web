import type { Metadata } from "next";
import ServiceCard from "@/components/shared/ServiceCard";
import { services, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description: `Home nursing, elderly care, disability support, and more from ${siteConfig.name}.`,
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-center text-3xl font-bold text-primary sm:text-4xl">Our Services</h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-foreground/80">
        Professional, compassionate healthcare services delivered where you need them most.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            name={service.name}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
}
