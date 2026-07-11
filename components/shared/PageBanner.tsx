import Image from "next/image";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  image: { src: string; alt: string };
}

export default function PageBanner({ title, subtitle, image }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image.src} alt={image.alt} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">{subtitle}</p>}
      </div>
    </section>
  );
}
