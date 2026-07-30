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
      <div className={`relative h-72 w-full overflow-hidden ${photo ? "" : "bg-primary"}`}>
        {photo ? (
          <>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              style={{ objectPosition: photo.objectPosition ?? "center" }}
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent"
              aria-hidden="true"
            />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center text-white/70" aria-hidden="true">
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
        <div className="absolute inset-x-0 bottom-0 p-4">
          <div className="inline-block rounded-lg bg-black/40 px-3 py-1.5 backdrop-blur-sm">
            <h3 className="text-lg font-bold leading-tight text-white">{name}</h3>
          </div>
          <div className="mt-2">
            <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-dark shadow-md">
              {role}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        {tagline && <p className="mb-3 text-xs text-foreground/70">{tagline}</p>}
        <p className="flex-1 text-sm leading-relaxed text-foreground/80">{bio}</p>
      </div>
    </div>
  );
}
