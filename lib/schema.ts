import { siteConfig } from "./site-config";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phoneIntl,
    email: siteConfig.emails.info,
    description: siteConfig.description,
    areaServed: siteConfig.serviceArea,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Eastern Cape",
      addressCountry: "ZA",
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export const homeFaqs = [
  {
    question: "What areas does Mzansi Healthcare serve?",
    answer: `We provide home and community healthcare services across ${siteConfig.serviceArea}.`,
  },
  {
    question: "How do I request care?",
    answer:
      "Call us, message us on WhatsApp, or submit the contact form on this site and our team will be in touch to discuss your needs.",
  },
  {
    question: "What healthcare services do you offer?",
    answer:
      "Home nursing, elderly care, disability support, post-operative care, medication assistance, and community healthcare.",
  },
];
