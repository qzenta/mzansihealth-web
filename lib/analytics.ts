"use client";

// Minimal wrapper around gtag — safe no-op when GA4 isn't configured (no NEXT_PUBLIC_GA_ID) or
// hasn't loaded yet. Event names match the handoff §23 minimum/advanced conversion-event list;
// we do not collect any personal/health data in these events, only the event name and page
// context (e.g. service name, not patient details).
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
