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
      streetAddress: siteConfig.addressParts.streetAddress,
      addressLocality: siteConfig.addressParts.addressLocality,
      postalCode: siteConfig.addressParts.postalCode,
      addressRegion: siteConfig.addressParts.addressRegion,
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

export const faqs = [
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
      "Post-hospital recovery care, elderly care and companionship, chronic illness and palliative care, medication supervision and vital checks, 24-hour live-in and hourly care, hospital-to-home transition support, and disability care.",
  },
  {
    question: "Are your caregivers qualified?",
    answer:
      "Yes — our caregivers are trained and experienced in delivering compassionate, professional home healthcare.",
  },
  {
    question: "How quickly can care begin?",
    answer:
      "Reach out via phone, WhatsApp, or the contact form and our team will get back to you promptly to discuss your needs and next steps.",
  },
];
