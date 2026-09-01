"use client";

import { trackEvent } from "@/lib/analytics";

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  event: string;
  eventParams?: Record<string, string>;
  children: React.ReactNode;
}

export default function TrackedLink({ event, eventParams, children, ...anchorProps }: TrackedLinkProps) {
  return (
    <a {...anchorProps} onClick={() => trackEvent(event, eventParams)}>
      {children}
    </a>
  );
}
