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
          sizes="100vw"
          style={{ objectPosition: image.objectPosition ?? "center" }}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent" />
        <div className="absolute inset-0 bg-dot-texture-light opacity-[0.06]" />
        <div
          className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-secondary/25 blur-3xl"
          aria-hidden="true"
        />
      </div>
      <div
        className={`relative mx-auto flex max-w-6xl flex-col justify-center px-4 text-center sm:px-6 ${
          tall ? "min-h-[420px] py-16 sm:min-h-[480px]" : "min-h-[220px] py-16 sm:py-20"
        }`}
      >
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">{subtitle}</p>}
      </div>
    </section>
  );
}
