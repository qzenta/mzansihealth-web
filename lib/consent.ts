"use client";

// Cookie-consent state, stored in localStorage so the choice persists across visits without a
// server round-trip. GA4/Clarity must not load until this is "accepted" — see
// GoogleAnalytics.tsx / MicrosoftClarity.tsx, which read this before rendering their <Script>
// tags. "declined" and "accepted" are both terminal choices (no banner shown again until reset
// via the footer "Cookie Preferences" link); null means no choice made yet.
export type ConsentValue = "accepted" | "declined" | null;

const STORAGE_KEY = "mzansi-cookie-consent";
export const CONSENT_CHANGE_EVENT = "mzansi-cookie-consent-change";

export function getConsent(): ConsentValue {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "declined" ? value : null;
  } catch {
    // localStorage can throw in private-browsing/blocked-storage contexts — treat as no choice.
    return null;
  }
}

export function setConsent(value: "accepted" | "declined") {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Ignore — if storage is blocked, the banner will just reappear next visit.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: value }));
}

export function resetConsent() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: null }));
}
