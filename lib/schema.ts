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

export function serviceSchema(service: { name: string; description: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.description,
    url: `${siteConfig.siteUrl}/services/${service.slug}`,
    areaServed: siteConfig.serviceArea,
    provider: {
      "@type": "MedicalBusiness",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phoneIntl,
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.path}`,
    })),
  };
}

export function personSchema(member: { name: string; role: string; bio: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    description: member.bio,
    worksFor: {
      "@type": "MedicalBusiness",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
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
    question: `What areas does ${siteConfig.name} serve?`,
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
  {
    question: "Do you provide overnight or live-in care?",
    answer:
      "Yes — our 24-Hour Live-In and Hourly Care service covers everything from a few hours of daily support to round-the-clock live-in care.",
  },
  {
    question: "How are caregivers selected and supervised?",
    answer:
      "Caregivers are matched per contract to suit each client's care requirements, and every caregiver works under the direct clinical supervision of our Registered Nurse and Clinical Manager, Elizabeth Ratau.",
  },
  {
    question: "How much does home care cost?",
    answer:
      "Pricing depends on the type and hours of care required. Contact us for a care assessment and we'll discuss a care arrangement and cost suited to your situation.",
  },
  {
    question: "Is Mzansi HealthCare an emergency medical service?",
    answer:
      "No. We provide scheduled home healthcare, not emergency response. In a medical emergency, call 10177 (ambulance) or 112 from a mobile phone.",
  },
  {
    question: "Will my family be kept informed about the care being provided?",
    answer:
      "Yes — we work directly with families as well as patients, and stay in touch to review the care arrangement as circumstances change.",
  },
  {
    question: "How is my personal information handled?",
    answer:
      "We only use the information you provide to respond to your enquiry and coordinate care — see our Privacy Policy and POPIA Compliance pages for full detail.",
  },
];
