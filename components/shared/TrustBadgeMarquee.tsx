"use client";

interface TrustBadgeMarqueeProps {
  badges: readonly { label: string }[];
}

export default function TrustBadgeMarquee({ badges }: TrustBadgeMarqueeProps) {
  // Duplicated once so the scrolling track can loop seamlessly at -50%.
  const track = [...badges, ...badges];

  return (
    <div className="group overflow-hidden border-y border-secondary/40 bg-secondary/30 py-6">
      <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
        {track.map((badge, i) => (
          <span
            key={`${badge.label}-${i}`}
            className="flex items-center gap-2 whitespace-nowrap rounded-full border border-neutral bg-white px-5 py-2 text-sm font-medium text-primary shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-secondary"
              aria-hidden="true"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            {badge.label}
          </span>
        ))}
      </div>
    </div>
  );
}
