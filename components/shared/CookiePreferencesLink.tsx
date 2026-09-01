"use client";

import { resetConsent } from "@/lib/consent";

export default function CookiePreferencesLink() {
  return (
    <button type="button" onClick={resetConsent} className="hover:text-white">
      Cookie Preferences
    </button>
  );
}
