"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, heroStats } from "@/lib/site-config";

interface HeroCarouselProps {
  slides: readonly {
    src: string;
    alt: string;
    objectPosition?: string;
    headline: string;
    description: string;
  }[];
  intervalMs?: number;
}

const statIcons: Record<string, ReactNode> = {
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  "shield-check": (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
};

export default function HeroCarousel({ slides, intervalMs = 6000 }: HeroCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % slides.length) + slides.length) % slides.length);
    },
    [slides.length]
  );

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, slides.length, intervalMs]);

  return (
    <div className="mx-3 mt-3 sm:mx-6 sm:mt-6">
      <div
        className="relative overflow-hidden rounded-3xl shadow-xl sm:rounded-[2rem]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="absolute inset-0">
          {slides.map((slide, i) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              style={{ objectPosition: slide.objectPosition ?? "center" }}
              className={`object-cover transition-opacity duration-1000 ease-in-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-primary-dark/55" />
          <div className="absolute inset-0 bg-gradient-to-l from-primary-dark/90 via-primary-dark/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-dot-texture-light opacity-30" />
          <div
            className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-secondary/25 blur-3xl"
            aria-hidden="true"
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20 sm:text-right">
          <div className="relative">
            {slides.map((slide, i) => (
              <div
                key={slide.src}
                className={`transition-opacity duration-700 ease-in-out ${
                  i === index ? "relative opacity-100" : "absolute inset-0 opacity-0"
                }`}
                aria-hidden={i !== index}
              >
                <h1 className="animate-fade-in-up text-[26px] font-bold leading-tight text-white sm:ml-auto sm:max-w-3xl sm:text-5xl sm:leading-normal md:text-6xl">
                  {slide.headline}
                </h1>
                <p className="animate-fade-in-up mx-auto mt-4 max-w-2xl text-base text-white/90 sm:mr-0 sm:ml-auto sm:text-lg [animation-delay:150ms]">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>
          <div className="animate-fade-in-up mt-8 flex flex-wrap justify-center gap-4 sm:justify-end [animation-delay:300ms]">
            <a
              href={`tel:${siteConfig.phoneIntl}`}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Call Now
            </a>
            <a
              href={siteConfig.whatsappLink}
              className="rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-primary-dark transition-transform hover:-translate-y-0.5 hover:opacity-90"
            >
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-white hover:text-primary"
            >
              Request Care
            </Link>
          </div>

          <div className="animate-fade-in-up mt-10 flex flex-wrap justify-center gap-x-6 gap-y-6 border-t border-white/15 pt-8 sm:justify-end [animation-delay:450ms]">
            {heroStats.map((stat, i) => (
              <div
                key={stat.title}
                className={`flex flex-col items-center px-2 text-center sm:px-4 ${
                  i > 0 ? "sm:border-l sm:border-white/20" : ""
                }`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary-dark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    {statIcons[stat.icon]}
                  </svg>
                </div>
                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-white">{stat.title}</p>
                <p className="text-xs text-white/70">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {slides.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => goTo(index - 1)}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 sm:left-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => goTo(index + 1)}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 sm:right-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2">
              {slides.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  aria-label={`Show slide ${i + 1} of ${slides.length}`}
                  aria-current={i === index}
                  onClick={() => goTo(i)}
                  className="flex h-6 w-6 items-center justify-center"
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
                    }`}
                  />
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
