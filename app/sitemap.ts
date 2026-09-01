import type { MetadataRoute } from "next";
import { services, siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/how-it-works",
    "/gallery",
    "/our-team",
    "/caregiver-trust",
    "/for-healthcare-professionals",
    "/contact",
    "/resources",
    "/faq",
    "/privacy-policy",
    "/terms",
    "/popia",
    "/consent",
    ...services.map((service) => `/services/${service.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
