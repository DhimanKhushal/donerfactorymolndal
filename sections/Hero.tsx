"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";

const heroSlides = [
  {
    title: "Döner",
    eyebrow: "Mölndals Signaturdöner",
    heading: "Konsten av den\nvertikala grillen.",
    description:
      "Högrev, kycklingdöner och nybakat bröd möts med krispiga grönsaker, picklat och husets såser.",
    src: "/hero/hero-doner.webp",
    imageFocus: "56% center",
  },
  {
    title: "Pizza",
    eyebrow: "Stenugn & Värme",
    heading: "Pizza med glöd,\nkrisp och karaktär.",
    description:
      "Från klassiska favoriter till kebabpizza och specialare, bakade för att kännas generösa och nygräddade.",
    src: "/hero/hero-pizza.webp",
    imageFocus: "58% center",
  },
  {
    title: "Burgare",
    eyebrow: "Factory Burgers",
    heading: "Saftiga burgare\nmed streetkänsla.",
    description:
      "Hemkryddad nötfärs, smält ost, picklat, dressingar och pommes för en kraftigare måltid.",
    src: "/hero/hero-burger.webp",
    imageFocus: "60% center",
  },
];

const HERO_ROTATE_MS = 3200;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = heroSlides[activeIndex];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, HERO_ROTATE_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="relative -mt-25 flex min-h-screen items-center overflow-hidden border-b border-white/6 bg-[#1a100f] pt-25 sm:-mt-30 sm:pt-30 md:-mt-26 md:pt-26">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={`${slide.title} hero image`}
            fill
            priority={index === 0}
            sizes="100vw"
            style={{ objectPosition: slide.imageFocus }}
            className={`hero-background object-cover object-center transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_30%,rgba(206,98,20,0.32),transparent_28%),linear-gradient(90deg,rgba(22,13,12,0.97)_0%,rgba(22,13,12,0.76)_38%,rgba(22,13,12,0.58)_68%,rgba(22,13,12,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,15,15,0.18)_0%,rgba(15,15,15,0.08)_22%,rgba(15,15,15,0.9)_100%)]" />
        <div className="pointer-events-none absolute inset-x-[22%] top-0 h-[45%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22),transparent_56%)] opacity-40 blur-3xl" />
      </div>

      <Container className="relative z-10 flex min-h-[calc(100vh-7rem)] w-full items-center pb-24 pt-24 sm:pb-28 sm:pt-32 xl:pb-34 xl:pt-34">
        <div className="hero-fade-in w-full space-y-10 text-left sm:space-y-12">
          <div key={activeIndex} className="hero-copy-slide max-w-3xl space-y-2 sm:space-y-5">
            <p className="section-label">
              {activeSlide.eyebrow}
            </p>
            <div className="space-y-6">
              <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-white md:text-6xl">
                {activeSlide.heading.split("\n").map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="max-w-xl text-base text-accent/78 md:text-lg">
                {activeSlide.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <Link
                href="/menu"
                className="rounded-xl bg-primary px-6 py-3 text-center text-sm font-medium uppercase tracking-widest text-white transition duration-300 hover:bg-primary/90 sm:min-w-48 md:text-base"
              >
                Visa Menyn
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-medium uppercase tracking-widest text-accent transition duration-300 hover:border-white/35 hover:bg-white/10 hover:text-white sm:min-w-48 md:text-base"
              >
                Kontakta Oss
              </Link>
            </div>

            <div className="flex items-center gap-2 pt-2 xl:hidden">
              {heroSlides.map((slide, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`relative h-2 overflow-hidden rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-12 bg-white/16 shadow-[0_0_18px_rgba(139,46,46,0.55)]"
                        : "w-2.5 bg-white/28"
                    }`}
                    aria-label={`Visa ${slide.title}`}
                  >
                    {isActive ? (
                      <span
                        key={`${activeIndex}-${slide.src}-mobile`}
                        className="hero-thumb-progress absolute inset-y-0 left-0 w-full rounded-full bg-[linear-gradient(90deg,#8b2e2e,#f5e6d3)]"
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-10 z-20 hidden px-8 xl:block">
        <div data-gsap-stagger className="mx-auto grid w-full max-w-7xl gap-3 xl:ml-auto xl:mr-0 xl:max-w-3xl xl:grid-cols-3">
          {heroSlides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative overflow-hidden rounded-3xl border p-2 text-left backdrop-blur-xl transition duration-500 ${
                  isActive
                    ? "border-primary/80 bg-primary/20 shadow-[0_18px_60px_rgba(139,46,46,0.34),0_0_0_1px_rgba(245,230,211,0.12)]"
                    : "border-white/10 bg-black/34 hover:border-white/22"
                }`}
              >
                <span className="absolute inset-x-0 top-0 z-10 h-[3px] overflow-hidden rounded-t-3xl bg-white/10">
                  {isActive ? (
                    <span
                      key={`${activeIndex}-${slide.src}`}
                      className="hero-thumb-progress block h-full rounded-full bg-[linear-gradient(90deg,#8b2e2e,#f5e6d3)] shadow-[0_0_18px_rgba(245,230,211,0.72)]"
                    />
                  ) : null}
                </span>
                <div className="grid grid-cols-[5rem_1fr] items-center gap-3 sm:grid-cols-1">
                  <div className="relative h-16 overflow-hidden rounded-2xl sm:h-24">
                    <Image
                      src={slide.src}
                      alt={`${slide.title} thumbnail`}
                      fill
                      sizes="(max-width: 640px) 80px, (max-width: 1024px) 33vw, 220px"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/12" />
                  </div>
                  <div className="min-w-0 px-1 sm:px-2 sm:pb-2">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-primary/90">
                      0{index + 1}
                    </p>
                    <p className="mt-1 font-heading text-xl text-white">
                      {slide.title}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
