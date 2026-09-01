"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CONSENT_CHANGE_EVENT, getConsent, setConsent, type ConsentValue } from "@/lib/consent";

export default function CookieConsentBanner() {
  const [consent, setConsentState] = useState<ConsentValue>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // See GoogleAnalytics.tsx for why this isn't a lazy useState initializer — hydration safety.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHasMounted(true);
    setConsentState(getConsent());

    const onChange = (e: Event) => {
      setConsentState((e as CustomEvent<ConsentValue>).detail);
    };
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
  }, []);

  // Avoid a hydration flash: render nothing until mounted and until we know there's no stored
  // decision. Once a decision exists (accepted/declined), the banner stays hidden until the
  // visitor resets it via the footer "Cookie Preferences" link.
  if (!hasMounted || consent !== null) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-neutral bg-white p-4 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] sm:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-foreground/80">
          We use Google Analytics and Microsoft Clarity to understand how visitors use this
          site. These only run if you accept — see our{" "}
          <Link href="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </Link>{" "}
          for detail.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => setConsent("declined")}
            className="rounded-full border border-foreground/20 px-5 py-2 text-sm font-semibold text-foreground hover:bg-neutral"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
