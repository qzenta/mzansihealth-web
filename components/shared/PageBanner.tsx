import Image from "next/image";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  image: { src: string; alt: string; objectPosition?: string };
  tall?: boolean;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageBanner({ title, subtitle, image, tall = false, breadcrumbs }: PageBannerProps) {
  return (
    <>
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
            tall ? "min-h-[220px] py-10 sm:min-h-[260px] sm:py-12" : "min-h-[140px] py-8 sm:py-10"
          }`}
        >
          <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{title}</h1>
          {subtitle && <p className="mx-auto mt-3 max-w-2xl text-base text-white/90">{subtitle}</p>}
        </div>
      </section>
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
    </>
  );
}
