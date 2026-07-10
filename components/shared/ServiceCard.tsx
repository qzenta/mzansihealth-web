interface ServiceCardProps {
  name: string;
  description: string;
}

export default function ServiceCard({ name, description }: ServiceCardProps) {
  return (
    <div className="rounded-2xl border border-neutral bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-lg font-semibold text-primary">{name}</h3>
      <p className="mt-2 text-sm text-foreground/80">{description}</p>
    </div>
  );
}
