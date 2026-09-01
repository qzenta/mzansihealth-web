export const siteConfig = {
  name: "Mzansi HealthCare",
  legalName: "Mzansi HealthCare (Pty) Ltd",
  domain: "www.mzansihealth.co.za",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mzansihealth.co.za",
  tagline: "Compassionate Home Healthcare You Can Trust",
  description:
    "Professional home and community care for individuals and families in Komani (Queenstown) and surrounding areas, Eastern Cape.",
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
  serviceArea: "Komani (Queenstown) and surrounding areas, Eastern Cape",
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
    "Professional home and community care for individuals and families in Komani (Queenstown) and surrounding areas, Eastern Cape.",
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
    alt: "A Mzansi HealthCare caregiver assisting an elderly patient with a mobility exercise",
    objectPosition: "center 20%",
  },
  gallery: {
    src: "/images/banner-gallery.jpg",
    alt: "A caregiver and an elderly patient in a wheelchair laughing together on a garden patio",
    objectPosition: "center 35%",
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
  { icon: "map-pin", title: "Home Visits", description: "Komani & Surrounds" },
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
  { label: "Local Home Visits" },
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

// Service landing page detail content, per CC Implementation Handoff §7. Every field is a
// paraphrase/expansion of the already-confirmed `services` description above (or of other
// already-confirmed facts — the caregiver/clinical-supervision model, the How It Works steps,
// the emergency-scope notice) — no new clinical specifics, qualifications, or capabilities are
// introduced here. Content gap: the handoff's P1 priority list treats "Palliative Care" and
// "Chronic/Ongoing Care" as two separate pages, but only one confirmed service — "Chronic
// Illness and Palliative Care" — exists in the approved source content, so both priorities are
// served by the single `chronic-illness-and-palliative-care` page below rather than splitting
// one set of facts into two thin, near-duplicate pages (see §32).
export const serviceDetails: Record<
  string,
  {
    whoItsFor: string;
    typicalSupport: string[];
    doesNotCover: string;
    faqs: { question: string; answer: string }[];
  }
> = {
  "post-hospital-recovery-care": {
    whoItsFor:
      "Patients recently discharged from hospital who need continued, professional support to recover safely at home.",
    typicalSupport: [
      "Wound care",
      "Mobility assistance",
      "Medication management",
      "Follow-up routines to support recovery",
    ],
    doesNotCover:
      "This service supports recovery at home — it is not a substitute for hospital-based emergency or acute medical treatment.",
    faqs: [
      {
        question: "How soon after discharge can post-hospital care start?",
        answer:
          "Reach out via phone, WhatsApp, or a care assessment request as soon as discharge is confirmed, and our team will get back to you promptly to arrange care.",
      },
      {
        question: "Who supervises post-hospital recovery care?",
        answer:
          "Every caregiver works under the direct clinical supervision of our Registered Nurse and Clinical Manager, Elizabeth Ratau.",
      },
    ],
  },
  "elderly-care-and-companionship": {
    whoItsFor:
      "Elderly individuals who need assistance with daily activities, or companionship to prevent isolation.",
    typicalSupport: [
      "Bathing and dressing",
      "Meal preparation",
      "Companionship to prevent isolation",
      "General assistance with daily activities",
    ],
    doesNotCover:
      "This service supports daily living and companionship — it does not replace medical treatment or emergency care.",
    faqs: [
      {
        question: "Can elderly care be a few hours a day, or does it need to be live-in?",
        answer:
          "Both — care can range from a few hours a day to 24-hour live-in support, depending on what's needed.",
      },
      {
        question: "Are caregivers trained for elderly care specifically?",
        answer:
          "Caregivers are matched per contract to suit each client's needs, and all work under the direct clinical supervision of our Registered Nurse and Clinical Manager, Elizabeth Ratau.",
      },
    ],
  },
  "chronic-illness-and-palliative-care": {
    whoItsFor:
      "Patients living with chronic conditions or a terminal illness, and their families, who need comfort-focused, ongoing support.",
    typicalSupport: [
      "Comfort-focused, dignified care",
      "Support for ongoing chronic conditions",
      "Palliative support for terminal illness",
      "Emotional well-being support for patients and families",
    ],
    doesNotCover:
      "This service focuses on comfort and ongoing support at home — it does not include hospice or hospital-based medical treatment.",
    faqs: [
      {
        question: "Do you provide both chronic illness support and palliative care?",
        answer:
          "Yes — this service covers ongoing support for chronic conditions as well as comfort-focused palliative care for terminal illness.",
      },
      {
        question: "Who oversees clinical care for chronic and palliative patients?",
        answer:
          "Our Registered Nurse and Clinical Manager, Elizabeth Ratau, oversees clinical operations and supervises the caregiving team directly.",
      },
    ],
  },
  "medication-supervision-and-vital-checks": {
    whoItsFor:
      "Patients who need help taking medication correctly and having their vital signs monitored at home.",
    typicalSupport: [
      "Ensuring correct medication and timing",
      "Blood pressure monitoring",
      "Pulse and temperature checks",
      "Tracking health progress over time",
    ],
    doesNotCover:
      "This service supervises medication and monitors vitals at home — it does not include prescribing or diagnosing, which remain with the patient's doctor.",
    faqs: [
      {
        question: "Can this service be combined with other care, like elderly or post-hospital care?",
        answer:
          "Yes — medication supervision and vital checks are often provided alongside other services as part of a broader care arrangement.",
      },
      {
        question: "Who supervises medication and vital-check care?",
        answer:
          "Every caregiver works under the direct clinical supervision of our Registered Nurse and Clinical Manager, Elizabeth Ratau.",
      },
    ],
  },
  "24-hour-live-in-and-hourly-care": {
    whoItsFor:
      "Anyone who needs flexible care — from a few hours of daily support to round-the-clock live-in assistance.",
    typicalSupport: [
      "Round-the-clock live-in support",
      "Flexible hourly visits",
      "Care scheduled around your needs",
    ],
    doesNotCover:
      "This service provides scheduled home care — it is not an emergency medical service.",
    faqs: [
      {
        question: "What's the difference between hourly and live-in care?",
        answer:
          "Hourly care covers a set number of daily visits, while live-in care provides round-the-clock support from a caregiver based in the home.",
      },
      {
        question: "Can I change between hourly and live-in care later?",
        answer:
          "Discuss your situation with our team via a care assessment request — care arrangements are reviewed and can be adjusted as circumstances change.",
      },
    ],
  },
  "hospital-to-home-transition-support": {
    whoItsFor:
      "Patients and families preparing to move from hospital back home, who want a coordinated, safe transition.",
    typicalSupport: [
      "Coordination with hospital staff and family",
      "Caregiver readiness ahead of discharge",
      "Equipment setup at home",
      "Recovery planning",
    ],
    doesNotCover:
      "This service coordinates the move from hospital to home — it does not replace the hospital's own discharge and treatment process.",
    faqs: [
      {
        question: "When should we arrange hospital-to-home support?",
        answer:
          "As early as possible once discharge is being planned, so caregiver readiness and equipment setup can be arranged in time.",
      },
      {
        question: "Do you coordinate directly with hospital staff?",
        answer:
          "Yes — this service is built around coordinating with hospital staff and family to ensure a smooth, safe transfer home.",
      },
    ],
  },
  "disability-care": {
    whoItsFor:
      "Individuals living with physical or intellectual disabilities who want to live independently and confidently at home.",
    typicalSupport: [
      "Mobility assistance",
      "Daily routine support",
      "Therapy exercise assistance",
      "Personal care",
    ],
    doesNotCover:
      "This service supports daily living and independence at home — it does not include specialist medical or therapeutic treatment itself.",
    faqs: [
      {
        question: "Is disability care tailored to the individual?",
        answer:
          "Yes — care is matched per contract to each client's specific needs, under the direct clinical supervision of our Registered Nurse and Clinical Manager, Elizabeth Ratau.",
      },
      {
        question: "Can disability care be combined with other services?",
        answer:
          "Yes — disability care is often arranged alongside services like medication supervision or live-in care, based on what's needed.",
      },
    ],
  },
};

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

// "Who We Help" — homepage section grouping the 7 confirmed services (above) into the customer
// situations they serve, per the CC Implementation Handoff (1 Sep 2026) §6.C. Descriptions are
// paraphrases of the already-confirmed service copy, not new factual claims.
export const whoWeHelp = [
  {
    title: "Recovering After Hospital",
    description:
      "Support for patients recently discharged, including wound care, mobility assistance, and follow-up routines to speed up recovery.",
  },
  {
    title: "Ageing at Home",
    description:
      "Gentle, respectful assistance with daily activities — bathing, dressing, meal preparation, and companionship.",
  },
  {
    title: "Living With an Ongoing Condition",
    description: "Compassionate support for chronic conditions, focused on comfort, dignity, and daily wellbeing.",
  },
  {
    title: "Needing Palliative Support",
    description: "Comfort-focused, dignified care for patients living with a terminal illness, and their families.",
  },
  {
    title: "Living With a Disability",
    description:
      "Home-based support with mobility, daily routines, and personal care, so clients can live independently.",
  },
] as const;

// "How It Works" — customer journey steps, per handoff §6.E / §8. Deliberately generic process
// language (no timelines, numbers, or operational specifics that haven't been confirmed) —
// adapt once Azande/Lizzy confirm the actual step-by-step intake process.
export const howItWorks = [
  {
    step: 1,
    title: "Tell Us What You Need",
    description: "Call, WhatsApp, or send a Request a Care Assessment form — tell us about the care situation.",
  },
  {
    step: 2,
    title: "We Discuss the Care Required",
    description: "Our team talks through the patient's needs, home situation, and the kind of support that fits.",
  },
  {
    step: 3,
    title: "We Build a Care Arrangement",
    description: "We put together a care plan and arrangement suited to the patient and family.",
  },
  {
    step: 4,
    title: "We Match a Caregiver",
    description: "A caregiver suited to the care requirements is assigned, under the supervision of our Clinical Manager.",
  },
  {
    step: 5,
    title: "Care Begins",
    description: "Care starts at home, on the agreed schedule — hourly, live-in, or however it was arranged.",
  },
  {
    step: 6,
    title: "We Review as Needed",
    description: "We stay in touch with the family and adjust the care arrangement as circumstances change.",
  },
] as const;

// Resource Centre architecture — handoff §18. Priority topics for future articles/care guides:
//   1. What to expect after hospital discharge
//   2. When an elderly person may need home care
//   3. Hourly vs live-in care
//   4. Preparing a home for recovery
//   5. How families can choose a home-care provider
//   6. What post-hospital home care involves
//   7. Understanding palliative home care
//   8. Supporting someone living with chronic illness
// No articles are written or published here — §18 requires clinical review before publishing
// any healthcare content, and no review workflow exists yet. Per §18's own fallback rule
// ("mark content as DRAFT — NOT FOR PUBLICATION" if no review workflow can be established), the
// safer choice is to publish zero draft article content rather than risk publishing something
// that reads as reviewed clinical guidance. The array below is the intended shape for when
// content is ready and reviewed.
export const resourceArticles: {
  slug: string;
  title: string;
  excerpt: string;
  status: "draft" | "published";
}[] = [];

// Testimonials — handoff §20 / D5. No genuine testimonials exist yet (confirmed, not assumed).
// This array stays empty until Daniel supplies consented, attributed testimonials; the
// Testimonials component below renders nothing when it's empty, so no page shows a visible
// "coming soon" placeholder that reads as thin. Do not fabricate entries here.
export const testimonials: { quote: string; author: string }[] = [];

// Emergency notice — handoff §17. Verified South African public emergency numbers only; do not
// add response-time claims or imply Mzansi HealthCare is an emergency medical service.
export const emergencyNotice = {
  heading: "Not an Emergency Service",
  body: "Mzansi HealthCare provides scheduled home healthcare — we are not an emergency medical service. In a medical emergency, call 10177 (ambulance) or 112 (from a mobile phone) immediately.",
} as const;

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
