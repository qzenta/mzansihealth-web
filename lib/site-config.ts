export const siteConfig = {
  name: "Mzansi Healthcare",
  domain: "www.mzansihealth.co.za",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mzansihealth.co.za",
  tagline: "Compassionate Home Healthcare You Can Trust",
  description: "Professional home and community care for individuals and families across Komani.",
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

// Hero carousel — reuses the cohesive session-8 photoshoot set (same free-license Pexels
// sample imagery, same caregiver/room, per CC-Handoff-Mobile-Nav-Carousel-Banners-Badges).
// TODO: replace with real client photos per PRD-001 once received.
export const heroImages = [
  {
    src: "/images/hero-caregiver.jpg",
    alt: "A caregiver holding the hand of an elderly patient",
    objectPosition: "center 30%",
  },
  {
    src: "/images/service-elderly-care.jpg",
    alt: "A caregiver assisting an elderly patient at home",
    objectPosition: "center 35%",
  },
  {
    src: "/images/service-post-operative.jpg",
    alt: "Family and caregivers supporting a patient during recovery",
    objectPosition: "center 20%",
  },
] as const;

// Per-page banners — reuse existing sample imagery cropped to a wide banner aspect ratio,
// same sourcing/TODO convention as the hero and service card photos above.
// About uses the faceless hands/wheelchair shot instead of a face-forward photo — an "about"
// banner doesn't need a face, and it avoids re-showing the same person as the hero/service cards.
export const pageBanners = {
  about: {
    src: "/images/service-disability-support.jpg",
    alt: "A caregiver's hands assisting with a wheelchair at home",
    objectPosition: "center",
  },
  services: {
    src: "/images/service-home-nursing.jpg",
    alt: "A nurse providing home healthcare to a patient",
    objectPosition: "center 25%",
  },
  gallery: {
    src: "/images/service-community.jpg",
    alt: "Community healthcare outreach in action",
    objectPosition: "center 25%",
  },
  ourTeam: {
    src: "/images/service-elderly-care.jpg",
    alt: "A caregiver attending to an elderly patient",
    objectPosition: "center 30%",
  },
  contact: {
    src: "/images/hero-caregiver.jpg",
    alt: "A caregiver holding the hand of an elderly patient",
    objectPosition: "center 25%",
  },
  faq: {
    src: "/images/service-medication.jpg",
    alt: "Medication assistance for a patient",
    objectPosition: "center",
  },
} as const;

// Trust badges — generic, descriptive, no third-party names/logos. Do NOT add claim-based
// badges (e.g. "Medical Aid Accepted", "NHI Registered") without Daniel's confirmation that
// they are actually true — see CC-Handoff-Mobile-Nav-Carousel-Banners-Badges.md §4.
export const trustBadges = [
  { label: "Home Visits" },
  { label: "Flexible Scheduling" },
  { label: "Qualified Caregivers" },
  { label: "Komani & Surrounds" },
] as const;

// Service card photos are free-license Pexels stock (sample imagery per CC-Handoff-Hero-Imagery),
// not real client/caregiver photos. TODO: replace with real client photos per PRD-001 once received.
export const services = [
  {
    slug: "home-nursing",
    name: "Home Nursing",
    description:
      "Qualified nursing care delivered in the comfort of your own home, tailored to your medical needs.",
    image: "/images/service-home-nursing.jpg",
    objectPosition: "center 25%",
  },
  {
    slug: "elderly-care",
    name: "Elderly Care",
    description:
      "Compassionate, dignified support for elderly family members, from companionship to daily living assistance.",
    image: "/images/service-elderly-care.jpg",
    objectPosition: "center 30%",
  },
  {
    slug: "disability-support",
    name: "Disability Support",
    description:
      "Personalised care plans that help individuals living with disabilities maintain independence and quality of life.",
    image: "/images/service-disability-support.jpg",
    objectPosition: "center",
  },
  {
    slug: "post-operative-care",
    name: "Post-operative Care",
    description:
      "Attentive recovery support at home following surgery, working alongside your medical team.",
    image: "/images/service-post-operative.jpg",
    objectPosition: "center 20%",
  },
  {
    slug: "medication-assistance",
    name: "Medication Assistance",
    description:
      "Reliable help managing prescriptions and medication schedules to keep treatment on track.",
    image: "/images/service-medication.jpg",
    objectPosition: "center",
  },
  {
    slug: "community-healthcare",
    name: "Community Healthcare",
    description:
      "Outreach healthcare services supporting individuals and families across the wider community.",
    image: "/images/service-community.jpg",
    objectPosition: "center 25%",
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
