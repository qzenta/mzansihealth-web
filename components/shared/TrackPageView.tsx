"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function TrackPageView({ event, params }: { event: string; params?: Record<string, string> }) {
  useEffect(() => {
    trackEvent(event, params);
    // Fire once per mount only — deliberately no dependency on `params` to avoid re-firing on
    // every render if a caller passes a new object literal each time.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event]);

  return null;
}
