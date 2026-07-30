"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

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
    <div
      className="relative overflow-hidden"
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
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/35 to-transparent" />
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
  );
}
