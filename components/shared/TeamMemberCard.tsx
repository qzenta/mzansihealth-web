interface TeamMemberCardProps {
  name: string;
  role: string;
  initials: string;
  bio: string;
}

export default function TeamMemberCard({ name, role, initials, bio }: TeamMemberCardProps) {
  return (
    <div className="rounded-2xl border border-neutral bg-white p-6 text-center shadow-sm">
      <div
        className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-white"
        aria-hidden="true"
      >
        {initials}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-primary">{name}</h3>
      <p className="text-sm font-medium text-foreground/60">{role}</p>
      <p className="mt-2 text-sm text-foreground/80">{bio}</p>
    </div>
  );
}
