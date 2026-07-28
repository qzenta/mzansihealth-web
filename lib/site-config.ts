export const siteConfig = {
  name: "Mzansi HealthCare",
  legalName: "Mzansi HealthCare (Pty) Ltd",
  domain: "www.mzansihealth.co.za",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mzansihealth.co.za",
  tagline: "Compassionate Home Healthcare You Can Trust",
  description: "Professional home and community care for individuals and families across Komani.",
  // Primary line, used for the main Call/WhatsApp CTAs everywhere.
  phone: "0756211562",
  phoneIntl: "+27756211562",
  whatsappNumber: "27756211562",
  whatsappLink: "https://wa.me/27756211562",
  // Secondary lines — listed alongside the primary on the footer and Contact page only.
  phoneSecondary: "0723336407",
  phoneSecondaryIntl: "+27723336407",
  whatsappSecondaryNumber: "27614280115",
  whatsappSecondaryLink: "https://wa.me/27614280115",
  emails: {
    info: "info@mzansihealth.co.za",
    admin: "admin@mzansihealth.co.za",
    azande: "azande@mzansihealth.co.za",
    lizzy: "lizzy@mzansihealth.co.za",
  },
  // Physical office address, confirmed directly from the client's own Website Draft (source of
  // truth over the earlier CK/CIPC-derived address, which Lizzy disputed on 13 Jul 2026).
  address: "15 Red Duiker Road, Madeira Park, Queenstown, 5319, Eastern Cape",
  addressParts: {
    streetAddress: "15 Red Duiker Road, Madeira Park",
    addressLocality: "Queenstown",
    postalCode: "5319",
    addressRegion: "Eastern Cape",
  },
  serviceArea: "Komani and surrounding areas, Eastern Cape",
  mapQuery: "15 Red Duiker Road, Madeira Park, Queenstown, 5319, Eastern Cape, South Africa",
} as const;

// Hero carousel — deliberately pulls from 3 different photo settings/subjects (not the same
// photoshoot) so the rotation doesn't read as one repeated scene. Free-license Pexels sample
// imagery. TODO: replace with real client photos per PRD-001 once received.
export const heroImages = [
  {
    src: "/images/hero-caregiver.jpg",
    alt: "A caregiver holding the hand of an elderly patient",
    objectPosition: "center 30%",
  },
  {
    src: "/images/service-home-nursing.jpg",
    alt: "A nurse checking a patient's vital signs at home",
    objectPosition: "center 15%",
  },
  {
    src: "/images/service-community.jpg",
    alt: "Community healthcare outreach in action",
    objectPosition: "center 15%",
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

// Service card photos are free-license Pexels stock (sample imagery), not real client/caregiver
// photos. TODO: replace with real client photos per PRD-001 once received.
export const services = [
  {
    slug: "post-hospital-recovery-care",
    name: "Post-Hospital Recovery Care",
    description:
      "Support for patients recently discharged from hospital — including wound care, mobility assistance, medication management, and follow-up routines to speed up recovery.",
    image: "/images/service-post-operative.jpg",
    objectPosition: "center 20%",
  },
  {
    slug: "elderly-care-and-companionship",
    name: "Elderly Care and Companionship",
    description:
      "Gentle, respectful care for elderly individuals who require assistance with daily activities such as bathing, dressing, meal preparation, and companionship to prevent isolation.",
    image: "/images/service-elderly-care.jpg",
    objectPosition: "center 30%",
  },
  {
    slug: "chronic-illness-and-palliative-care",
    name: "Chronic Illness and Palliative Care",
    description:
      "Professional, compassionate support for patients living with chronic conditions or terminal illnesses, focusing on comfort, dignity, and emotional well-being.",
    image: "/images/service-home-nursing.jpg",
    objectPosition: "center 25%",
  },
  {
    slug: "medication-supervision-and-vital-checks",
    name: "Medication Supervision and Vital Checks",
    description:
      "Ensuring patients take the correct medication at the right time, while monitoring vital signs like blood pressure, pulse, and temperature to track health progress.",
    image: "/images/service-medication.jpg",
    objectPosition: "center",
  },
  {
    slug: "24-hour-live-in-and-hourly-care",
    name: "24-Hour Live-In and Hourly Care",
    description:
      "Flexible care options tailored to your needs — whether you require round-the-clock assistance or just a few hours of daily support.",
    image: "/images/hero-caregiver.jpg",
    objectPosition: "center 25%",
  },
  {
    slug: "hospital-to-home-transition-support",
    name: "Hospital-to-Home Transition Support",
    description:
      "We coordinate closely with hospital staff and families to ensure a smooth, safe transfer from hospital to home, including caregiver readiness, equipment setup, and recovery planning.",
    image: "/images/service-community.jpg",
    objectPosition: "center 25%",
  },
  {
    slug: "disability-care",
    name: "Disability Care",
    description:
      "Comprehensive home-based support for individuals living with physical or intellectual disabilities. Our caregivers assist with mobility, daily routines, therapy exercises, and personal care, helping clients live independently and confidently in their own homes.",
    image: "/images/service-disability-support.jpg",
    objectPosition: "center",
  },
] as const;

// About Us narrative, Mission, and Vision — full copy from the client's Website Draft (13 Jul 2026).
export const about = {
  paragraphs: [
    "Mzansi HealthCare (Pty) Ltd is a proudly South African home-based care company that was founded out of compassion, purpose, and a deep understanding of the need for continued medical support after hospital discharge. We believe that healing doesn't end when a patient leaves the hospital — in fact, that's often when the most personal care begins.",
    "Our company was founded by Azande Nomnqa, a visionary entrepreneur with a strong background in healthcare administration and financial management. He saw the gap between hospital treatment and at-home recovery — where families often feel overwhelmed and unsupported. Mzansi HealthCare was born to fill that gap with professional, qualified, and compassionate caregivers.",
    "At Mzansi HealthCare, we work hand-in-hand with hospitals, families, and patients to create personalized care plans that address each patient's unique medical, emotional, and social needs. Our caregivers are trained professionals who provide skilled assistance — from medication management and wound care to companionship and emotional support — all delivered in the comfort and dignity of home.",
  ],
  mission:
    "To provide professional, compassionate, and affordable home-based healthcare services that restore dignity, promote recovery, and improve quality of life.",
  vision:
    "To become South Africa's most trusted home-care provider, setting the standard for excellence, empathy, and integrity in patient-centered care.",
} as const;

// Our Values — 4 core values from the About Us section of the Website Draft.
export const values = [
  { title: "Compassion", description: "We treat every patient as family." },
  {
    title: "Professionalism",
    description: "Our caregivers are trained, supervised, and deeply committed to ethical practice.",
  },
  { title: "Trust", description: "Families can depend on us to deliver consistent, transparent care." },
  {
    title: "Excellence",
    description: "We go beyond basic care — we bring comfort, hope, and peace of mind.",
  },
] as const;

// Why Choose Us — the 6-point "Mzansi Difference" list from the Website Draft.
export const whyChooseUs = [
  {
    title: "Compassion Comes First",
    description:
      "Every caregiver on our team serves with empathy, respect, and kindness. We treat every patient as family — because to us, care is deeply personal.",
  },
  {
    title: "Professionally Supervised Clinical Care",
    description:
      "All our caregivers work under the clinical guidance of an experienced Registered Nurse and Clinical Manager, ensuring safe and high-quality medical support at home.",
  },
  {
    title: "Personalised Care Plans",
    description:
      "We know every patient is unique. Our care plans are tailored to individual medical needs, recovery goals, and family preferences.",
  },
  {
    title: "Reliable and Flexible Services",
    description:
      "From short hourly visits to 24-hour live-in care, we're available whenever and however you need us — always punctual, professional, and dependable.",
  },
  {
    title: "Transparent and Ethical Management",
    description:
      "Under the leadership of Managing Director Azande Nomnqa, we uphold honesty, accountability, and clear communication in everything we do.",
  },
  {
    title: "Restoring Dignity and Independence",
    description:
      "Our goal is not just to provide care, but to help every patient live with dignity, comfort, and confidence in their own home.",
  },
] as const;

export const galleryItems = [
  { title: "Post-Hospital Recovery in Action", tag: "Post-Hospital Recovery Care" },
  { title: "Elderly Companionship", tag: "Elderly Care and Companionship" },
  { title: "Chronic Illness and Palliative Support", tag: "Chronic Illness and Palliative Care" },
  { title: "Medication and Vital Checks", tag: "Medication Supervision and Vital Checks" },
  { title: "Live-In and Hourly Care", tag: "24-Hour Live-In and Hourly Care" },
  { title: "Hospital-to-Home Transitions", tag: "Hospital-to-Home Transition Support" },
  { title: "Disability Care in Action", tag: "Disability Care" },
] as const;

// Real team profiles from the Website Draft (13 Jul 2026), with real photos (added per Daniel,
// matched to names via filename). Falls back to the generic icon avatar if photo is omitted.
export const teamMembers = [
  {
    name: "Azande Nomnqa",
    role: "Managing Director & Founder",
    tagline: "BCom Accounting · Financial Management · Healthcare Administration",
    bio: "Founder and Managing Director, with a BCom in Accounting from the University of Johannesburg and a background in financial administration at Pretor Group. Azande founded Mzansi HealthCare to bring compassionate, professional, and dignified care to patients recovering at home.",
    photo: {
      src: "/images/team/azande-nomnqa.jpg",
      alt: "Azande Nomnqa, Managing Director and Founder of Mzansi HealthCare",
      objectPosition: "center 25%",
    },
  },
  {
    name: "Elizabeth Ratau",
    role: "Clinical Manager",
    tagline: "Registered Nurse · Midwife · Educator",
    bio: "A Registered Professional Nurse, Midwife, and Educator with over two decades of experience, including leadership roles at the South African Military Health Service. Elizabeth oversees all clinical operations and personally trains and supervises the caregiving team.",
    photo: {
      src: "/images/team/elizabeth-ratau.jpg",
      alt: "Elizabeth Ratau, Clinical Manager at Mzansi HealthCare",
      objectPosition: "center 20%",
    },
  },
  {
    name: "Feziwe Gumede",
    role: "Caregiver",
    tagline: "Home Caregiver Training · Eldercare Home Services",
    bio: "A trained Home Caregiver (Eldercare Home Services) known for her reliability, empathy, and person-centred approach to preserving each client's dignity, comfort, and independence.",
    photo: {
      src: "/images/team/feziwe-gumede.jpg",
      alt: "Feziwe Gumede, Caregiver at Mzansi HealthCare",
      objectPosition: "center 30%",
    },
  },
  {
    name: "Minenhle Makhathini",
    role: "Caregiver",
    tagline: "Caregiving & HIV Counselling · 3+ Years Experience",
    bio: "Trained in Caregiving and HIV Counselling with over three years of experience, Minenhle brings a calm, empathetic approach that gives families confidence their loved ones are in capable hands.",
    photo: {
      src: "/images/team/minenhle-makhathini.jpg",
      alt: "Minenhle Makhathini, Caregiver at Mzansi HealthCare",
      objectPosition: "center 30%",
    },
  },
] as const;
