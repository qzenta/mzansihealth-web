import Image from "next/image";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  photo?: { src: string; alt: string; objectPosition?: string };
}

export default function TeamMemberCard({ name, role, bio, photo }: TeamMemberCardProps) {
  return (
    <div className="rounded-2xl border border-neutral bg-white p-6 text-center shadow-sm">
      {photo ? (
        <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full ring-1 ring-inset ring-secondary/30">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="80px"
            style={{ objectPosition: photo.objectPosition ?? "center" }}
            className="object-cover"
          />
        </div>
      ) : (
        <div
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary/15 text-secondary ring-1 ring-inset ring-secondary/30"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-9 w-9"
          >
            <path d="M20 21a8 8 0 0 0-16 0" />
            <circle cx="12" cy="8" r="5" />
          </svg>
        </div>
      )}
      <h3 className="mt-4 text-lg font-semibold text-primary">{name}</h3>
      <p className="text-sm font-medium text-foreground/60">{role}</p>
      <p className="mt-2 text-sm text-foreground/80">{bio}</p>
    </div>
  );
}
