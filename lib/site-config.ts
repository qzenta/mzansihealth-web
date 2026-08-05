export const siteConfig = {
  name: "Mzansi HealthCare",
  legalName: "Mzansi HealthCare (Pty) Ltd",
  domain: "www.mzansihealth.co.za",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mzansihealth.co.za",
  tagline: "Compassionate Home Healthcare You Can Trust",
  description:
    "Professional home and community care for individuals and families throughout South Africa — based in Queenstown, Eastern Cape.",
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
  serviceArea: "South Africa",
  mapQuery: "15 Red Duiker Road, Madeira Park, Queenstown, 5319, Eastern Cape, South Africa",
} as const;

// Hero carousel — 3 different photo settings/subjects (not the same photoshoot), each with its
// own headline/description so the copy varies with the image instead of repeating. Slide 3
// replaced 13 Jul 2026: the previous outdoor rural-outreach photo read as NGO/aid-camp imagery
// rather than a professional local home-healthcare service — swapped for an indoor home-visit
// scene instead. Free-license Pexels sample imagery. TODO: replace with real client photos per
// PRD-001 once received.
export const heroImages = [
  {
    src: "/images/hero-caregiver-bedside.jpg",
    alt: "A caregiver holding the hand of an elderly patient at her bedside",
    objectPosition: "73% 0%",
    headline: "Compassionate Home Healthcare You Can Trust",
    description:
    "Professional home and community care for individuals and families throughout South Africa — based in Queenstown, Eastern Cape.",
  },
  {
    src: "/images/service-home-nursing.jpg",
    alt: "A nurse checking a patient's vital signs at home",
    objectPosition: "center 15%",
    headline: "Skilled Nursing Care, Delivered at Home",
    description: "Qualified caregivers providing medication supervision, vital checks, and clinical support at home.",
  },
  {
    src: "/images/hero-companionship.jpg",
    alt: "A caregiver and an elderly patient smiling together at home",
    objectPosition: "center 25%",
    headline: "Care That Meets You, Wherever You Are",
    description: "From post-hospital recovery to 24-hour live-in support, our team is with you every step of the way.",
  },
] as const;

// Per-page banners — each uses a dedicated photo not reused anywhere else on the site (hero,
// service cards, or gallery), so no two pages show the same image. Free-license Pexels sample
// imagery, same sourcing/TODO convention as the hero and service card photos above.
export const pageBanners = {
  about: {
    src: "/images/banner-about.jpg",
    alt: "A Mzansi HealthCare caregiver sitting with an elderly patient in a warm living room",
    objectPosition: "center 35%",
  },
  services: {
    src: "/images/banner-services.jpg",
    alt: "A caregiver showing an elderly patient something on a tablet",
    objectPosition: "center 15%",
  },
  gallery: {
    src: "/images/banner-gallery.jpg",
    alt: "A caregiver sitting with an elderly patient at home",
    objectPosition: "center 20%",
  },
  ourTeam: {
    src: "/images/banner-our-team.jpg",
    alt: "Two smiling Mzansi HealthCare caregivers standing together in a warm living room",
    objectPosition: "center 20%",
  },
  contact: {
    src: "/images/banner-contact-call.jpg",
    alt: "A smiling Mzansi HealthCare receptionist answering a phone call at the front desk",
    objectPosition: "center 30%",
  },
  faq: {
    src: "/images/banner-faq.jpg",
    alt: "A caregiver assisting an elderly patient at home",
    objectPosition: "center",
  },
} as const;

// Hero trust-stat row — icon + bold label + short descriptor, shown inside the hero card itself
// (per whauctions.com/buysellassets.php reference, 13 Jul 2026). Icon keys map to HeroCarousel's
// internal icon set.
export const heroStats = [
  { icon: "users", title: "Qualified Caregivers", description: "Trained & Experienced" },
  { icon: "map-pin", title: "Home Visits", description: "Nationwide" },
  { icon: "shield-check", title: "Trusted Care", description: "Compassionate & Reliable" },
  { icon: "clock", title: "Flexible Scheduling", description: "Hourly to 24-Hour" },
] as const;

// Social links — PLACEHOLDER hrefs ("#") only. Daniel confirmed no real Mzansi social accounts
// exist yet in any source doc; he will supply the real URLs later. Do not treat these as live —
// swap each href once the real account URL is provided, and do not fabricate URLs in the meantime.
export const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter / X", href: "#" },
] as const;

// Trust badges — generic, descriptive, no third-party names/logos. Do NOT add claim-based
// badges (e.g. "Medical Aid Accepted", "NHI Registered") without Daniel's confirmation that
// they are actually true — see CC-Handoff-Mobile-Nav-Carousel-Banners-Badges.md §4.
export const trustBadges = [
  { label: "Home Visits" },
  { label: "Flexible Scheduling" },
  { label: "Qualified Caregivers" },
  { label: "Nationwide Service" },
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

// Why Choose Us — the 6-point "Mzansi Difference" list from the Website Draft. Each card flips
// on hover to reveal a related photo behind the description (reuses already-sourced imagery —
// these are small decorative card backs, not primary display images).
export const whyChooseUs = [
  {
    title: "Compassion Comes First",
    description:
      "Every caregiver on our team serves with empathy, respect, and kindness. We treat every patient as family — because to us, care is deeply personal.",
    image: { src: "/images/hero-caregiver.jpg", objectPosition: "center 30%" },
  },
  {
    title: "Professionally Supervised Clinical Care",
    description:
      "All our caregivers work under the clinical guidance of an experienced Registered Nurse and Clinical Manager, ensuring safe and high-quality medical support at home.",
    image: { src: "/images/service-home-nursing.jpg", objectPosition: "center 20%" },
  },
  {
    title: "Personalised Care Plans",
    description:
      "We know every patient is unique. Our care plans are tailored to individual medical needs, recovery goals, and family preferences.",
    image: { src: "/images/gallery/gallery-elderly-companionship.jpg", objectPosition: "center 20%" },
  },
  {
    title: "Reliable and Flexible Services",
    description:
      "From short hourly visits to 24-hour live-in care, we're available whenever and however you need us — always punctual, professional, and dependable.",
    image: { src: "/images/gallery/gallery-live-in-care.jpg", objectPosition: "center" },
  },
  {
    title: "Transparent and Ethical Management",
    description:
      "Under the leadership of Managing Director Azande Nomnqa, we uphold honesty, accountability, and clear communication in everything we do.",
    image: { src: "/images/gallery/gallery-hospital-transition.jpg", objectPosition: "center 30%" },
  },
  {
    title: "Restoring Dignity and Independence",
    description:
      "Our goal is not just to provide care, but to help every patient live with dignity, comfort, and confidence in their own home.",
    image: { src: "/images/gallery/gallery-disability-care.jpg", objectPosition: "center" },
  },
] as const;

// Gallery photos — free-license Pexels sample imagery sourced 13 Jul 2026 (previously this page
// had no real images at all, just an icon placeholder). TODO: replace with real client photos
// per PRD-001 once received.
export const galleryItems = [
  {
    title: "Post-Hospital Recovery in Action",
    tag: "Post-Hospital Recovery Care",
    image: "/images/gallery/gallery-post-hospital-recovery.jpg",
    objectPosition: "center 30%",
  },
  {
    title: "Elderly Companionship",
    tag: "Elderly Care and Companionship",
    image: "/images/gallery/gallery-elderly-companionship.jpg",
    objectPosition: "center 20%",
  },
  {
    title: "Chronic Illness and Palliative Support",
    tag: "Chronic Illness and Palliative Care",
    image: "/images/gallery/gallery-chronic-palliative.jpg",
    objectPosition: "center",
  },
  {
    title: "Medication and Vital Checks",
    tag: "Medication Supervision and Vital Checks",
    image: "/images/gallery/gallery-medication-vitals.jpg",
    objectPosition: "center 25%",
  },
  {
    title: "Live-In and Hourly Care",
    tag: "24-Hour Live-In and Hourly Care",
    image: "/images/gallery/gallery-live-in-care.jpg",
    objectPosition: "center",
  },
  {
    title: "Hospital-to-Home Transitions",
    tag: "Hospital-to-Home Transition Support",
    image: "/images/gallery/gallery-hospital-transition.jpg",
    objectPosition: "center 30%",
  },
  {
    title: "Disability Care in Action",
    tag: "Disability Care",
    image: "/images/gallery/gallery-disability-care.jpg",
    objectPosition: "center",
  },
] as const;

// Named/photographed team profiles — permanent staff only (per client feedback, 5 Aug 2026).
// Individual caregivers (previously Feziwe Gumede, Minenhle Makhathini) are intentionally NOT
// listed here: caregiver assignments change per contract, so they're represented collectively via
// `ourCaregivers` below instead of by name/photo.
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
] as const;

// Generic caregiver description block — replaces individual caregiver profiles (per client
// feedback, 5 Aug 2026): assignments change per contract, so caregivers are represented
// collectively rather than by name/photo. Only Azande and Elizabeth remain named/photographed.
export const ourCaregivers = {
  title: "Our Caregivers",
  description:
    "Beyond our leadership team, Mzansi HealthCare draws on a pool of qualified, experienced caregivers — each carefully selected, trained, and matched to every client's specific needs. Caregiver assignments are made per contract to best suit your care requirements, and every caregiver works under the direct clinical supervision of our Registered Nurse and Clinical Manager, Elizabeth Ratau.",
} as const;
