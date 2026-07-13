import Image from "next/image";

interface ServiceCardProps {
  name: string;
  description: string;
  image: string;
  objectPosition?: string;
}

export default function ServiceCard({ name, description, image, objectPosition }: ServiceCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-video w-full">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectPosition: objectPosition ?? "center" }}
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-primary">{name}</h3>
        <p className="mt-2 text-sm text-foreground/80">{description}</p>
      </div>
    </div>
  );
}
