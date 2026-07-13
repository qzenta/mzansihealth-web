import Image from "next/image";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  image: { src: string; alt: string; objectPosition?: string };
  tall?: boolean;
}

export default function PageBanner({ title, subtitle, image, tall = false }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          style={{ objectPosition: image.objectPosition ?? "center" }}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
      </div>
      <div
        className={`relative mx-auto flex max-w-6xl flex-col justify-center px-4 text-center sm:px-6 ${
          tall ? "min-h-[420px] py-16 sm:min-h-[480px]" : "min-h-[220px] py-16 sm:py-20"
        }`}
      >
        <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">{subtitle}</p>}
      </div>
    </section>
  );
}
