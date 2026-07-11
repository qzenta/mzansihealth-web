export const siteConfig = {
  name: "Mzansi Healthcare",
  domain: "www.mzansihealth.co.za",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mzansihealth.co.za",
  tagline: "Compassionate Home Healthcare You Can Trust",
  description:
    "Professional home and community healthcare services for individuals and families across Komani and surrounding areas.",
  phone: "0728208445",
  phoneIntl: "+27728208445",
  whatsappNumber: "27728208445",
  whatsappLink: "https://wa.me/27728208445",
  emails: {
    info: "info@mzansihealth.co.za",
    admin: "admin@mzansihealth.co.za",
    azande: "azande@mzansihealth.co.za",
    lizzy: "lizzy@mzansihealth.co.za",
  },
  serviceArea: "Komani and surrounding areas, Eastern Cape",
  // No confirmed street address in PRD-001 — map centers on the service area, not a specific office pin.
  mapQuery: "Komani, Eastern Cape, South Africa",
} as const;

// Service card photos are free-license Pexels stock (sample imagery per CC-Handoff-Hero-Imagery),
// not real client/caregiver photos. TODO: replace with real client photos per PRD-001 once received.
export const services = [
  {
    slug: "home-nursing",
    name: "Home Nursing",
    description:
      "Qualified nursing care delivered in the comfort of your own home, tailored to your medical needs.",
    image: "/images/service-home-nursing.jpg",
  },
  {
    slug: "elderly-care",
    name: "Elderly Care",
    description:
      "Compassionate, dignified support for elderly family members, from companionship to daily living assistance.",
    image: "/images/service-elderly-care.jpg",
  },
  {
    slug: "disability-support",
    name: "Disability Support",
    description:
      "Personalised care plans that help individuals living with disabilities maintain independence and quality of life.",
    image: "/images/service-disability-support.jpg",
  },
  {
    slug: "post-operative-care",
    name: "Post-operative Care",
    description:
      "Attentive recovery support at home following surgery, working alongside your medical team.",
    image: "/images/service-post-operative.jpg",
  },
  {
    slug: "medication-assistance",
    name: "Medication Assistance",
    description:
      "Reliable help managing prescriptions and medication schedules to keep treatment on track.",
    image: "/images/service-medication.jpg",
  },
  {
    slug: "community-healthcare",
    name: "Community Healthcare",
    description:
      "Outreach healthcare services supporting individuals and families across the wider community.",
    image: "/images/service-community.jpg",
  },
] as const;

export const trustPoints = [
  {
    title: "Compassionate Care",
    description: "Every client is treated with warmth, patience, and respect.",
  },
  {
    title: "Qualified Caregivers",
    description: "Our team brings trained, experienced healthcare expertise into your home.",
  },
  {
    title: "Reliable Service",
    description: "Consistent, dependable care you and your family can count on.",
  },
  {
    title: "Personalised Care",
    description: "Care plans built around each individual's specific needs.",
  },
  {
    title: "Community Focus",
    description: "Proudly rooted in and committed to the communities we serve.",
  },
] as const;

export const galleryItems = [
  { title: "Home Nursing Visits", tag: "Home Nursing" },
  { title: "Elderly Companionship", tag: "Elderly Care" },
  { title: "Disability Support in Action", tag: "Disability Support" },
  { title: "Post-operative Recovery Support", tag: "Post-operative Care" },
  { title: "Medication Assistance", tag: "Medication Assistance" },
  { title: "Community Outreach", tag: "Community Healthcare" },
] as const;

export const teamMembers = [
  {
    name: "Azande",
    role: "Caregiver",
    initials: "A",
    bio: "Placeholder bio — real profile pending client content.",
  },
  {
    name: "Lizzy",
    role: "Caregiver",
    initials: "L",
    bio: "Placeholder bio — real profile pending client content.",
  },
] as const;
