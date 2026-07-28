import Image from "next/image";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  tagline?: string;
  photo?: { src: string; alt: string; objectPosition?: string };
}

export default function TeamMemberCard({ name, role, bio, tagline, photo }: TeamMemberCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-neutral bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-72 w-full overflow-hidden bg-primary/5">
        {photo ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            style={{ objectPosition: photo.objectPosition ?? "center" }}
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-secondary" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-20 w-20"
            >
              <path d="M20 21a8 8 0 0 0-16 0" />
              <circle cx="12" cy="8" r="5" />
            </svg>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold leading-tight text-primary">{name}</h3>
        <p className="mt-1 text-xs font-semibold text-secondary">{role}</p>
        {tagline && <p className="mt-1 mb-3 text-xs text-foreground/50">{tagline}</p>}
        <p className={`text-sm leading-relaxed text-foreground/80 ${tagline ? "flex-1" : "mt-2 flex-1"}`}>{bio}</p>
      </div>
    </div>
  );
}
