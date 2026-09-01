"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { CONSENT_CHANGE_EVENT, getConsent, type ConsentValue } from "@/lib/consent";

export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const [consent, setConsent] = useState<ConsentValue>(null);

  useEffect(() => {
    // Deliberately NOT a lazy useState initializer: that would call getConsent() (which reads
    // localStorage) during the client's hydration render, which can differ from the server's
    // render (always null, no window) and cause a hydration mismatch. Reading it here, after
    // mount, guarantees the first render matches the server (no script tags) and only updates
    // once hydration is safely done.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConsent(getConsent());
    const onChange = (e: Event) => setConsent((e as CustomEvent<ConsentValue>).detail);
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
  }, []);

  if (!gaId || consent !== "accepted") return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
