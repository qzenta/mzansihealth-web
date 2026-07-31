import Image from "next/image";

interface GalleryCardProps {
  title: string;
  tag: string;
  image: string;
  objectPosition?: string;
}

export default function GalleryCard({ title, tag, image, objectPosition }: GalleryCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-neutral bg-secondary/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectPosition: objectPosition ?? "center" }}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <p className="text-sm font-semibold text-primary">{tag}</p>
        <p className="mt-1 text-sm text-foreground/80">{title}</p>
      </div>
    </div>
  );
}
