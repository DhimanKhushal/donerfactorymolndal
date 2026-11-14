"use client";

import { motion } from "framer-motion";
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
    src: "/assets/hero/doner-hero.webp",
    imageFocus: "56% center",
  },
  {
    title: "Pizza",
    eyebrow: "Stenugn & Värme",
    heading: "Pizza med glöd,\nkrisp och karaktär.",
    description:
      "Från klassiska favoriter till kebabpizza och specialare, bakade för att kännas generösa och nygräddade.",
    src: "/assets/hero/pizza-hero.webp",
    imageFocus: "58% center",
  },
  {
    title: "Burgare",
    eyebrow: "Factory Burgers",
    heading: "Saftiga burgare\nmed streetkänsla.",
    description:
      "Hemkryddad nötfärs, smält ost, picklat, dressingar och pommes för en kraftigare måltid.",
    src: "/assets/hero/burger-hero.webp",
    imageFocus: "60% center",
  },
];

const HERO_ROTATE_MS = 3200;
const deliveryPlatforms = [
  {
    name: "Foodora",
    href: "https://www.foodora.se/en/restaurant/vff3/doner-factory-molndal-vff3",
    iconSrc: "/assets/partners/foodora-logo.png",
    iconAlt: "Foodora icon",
    iconClass: "bg-[#D70F64] p-1",
    mobileClass: "bg-[#D70F64]",
  },
  {
    name: "Uber Eats",
    href: "https://www.ubereats.com/se-en/store/doner-factory-molndal/WHHl59ekUPCW6BVd-Xvs9A?srsltid=AfmBOoo9AcGoGkcAh0a_Rv-ywR1hCkTxfIyI3OtXuN9rHITooYlqxzTS",
    iconSrc: "/assets/partners/uber-eats-logo.svg",
    iconAlt: "Uber Eats icon",
    iconClass: "bg-[#0d0f10] p-1.5 ring-1 ring-white/12",
    mobileClass: "bg-[#0d0f10]",
  },
  {
    name: "Wolt",
    href: "https://wolt.com/en/swe/goteborg/restaurant/dner-factory-mlndal",
    iconSrc: "/assets/partners/wolt-logo.png",
    iconAlt: "Wolt icon",
    iconClass: "bg-[#21aef3] p-1.5",
    mobileClass: "bg-[#21aef3]",
  },
] as const;

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

      <Container className="relative z-10 flex min-h-[calc(100vh-7rem)] w-full items-center pb-36 pt-24 sm:pb-40 sm:pt-32 xl:pb-34 xl:pt-34">
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

            <motion.div
              className="flex w-full max-w-sm flex-col gap-3 pt-2 sm:max-w-none sm:flex-row sm:flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="w-full sm:w-auto"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/menu"
                  className="block w-full rounded-xl bg-primary px-6 py-3 text-center text-sm font-medium uppercase text-white transition duration-300 hover:bg-primary/90 sm:min-w-48 md:text-base"
                >
                  Visa Menyn
                </Link>
              </motion.div>
              <motion.div
                className="w-full sm:w-auto"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="block w-full rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-medium uppercase text-accent transition duration-300 hover:border-white/35 hover:bg-white/10 hover:text-white sm:min-w-48 md:text-base"
                >
                  Kontakta Oss
                </Link>
              </motion.div>
            </motion.div>

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

      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden items-center xl:flex">
        <motion.div
          initial={{ opacity: 0, x: 34 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2"
        >
          <div className="pointer-events-auto relative w-[17rem] overflow-hidden rounded-l-[2rem] rounded-r-none border border-r-0 border-[#412321] bg-[linear-gradient(180deg,rgba(22,17,17,0.985),rgba(15,12,12,0.99))] px-7 py-8 shadow-[0_28px_90px_rgba(0,0,0,0.5),0_0_0_1px_rgba(139,46,46,0.08),inset_0_1px_0_rgba(255,255,255,0.03)]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(139,46,46,0.12),transparent_38%)] opacity-55" />
            <div className="relative z-10 space-y-5">
              <p className="text-center text-[0.72rem] font-bold uppercase tracking-[0.32em] text-[#a33a36]">
                Beställ online
              </p>

              <div className="space-y-3.5">
                {deliveryPlatforms.map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.42,
                      delay: 0.3 + index * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex items-center justify-between rounded-[1.55rem] border border-white/[0.04] bg-[linear-gradient(180deg,rgba(43,37,37,0.92),rgba(35,30,30,0.92))] px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-300 hover:border-[#8b2e2e]/28"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex h-[3.4rem] w-[3.4rem] items-center justify-center overflow-hidden rounded-[1.1rem] shadow-[0_10px_26px_rgba(0,0,0,0.18)] ${platform.iconClass}`}
                      >
                        <Image
                          src={platform.iconSrc}
                          alt={platform.iconAlt}
                          width={44}
                          height={44}
                          className="h-full w-full object-contain"
                        />
                      </span>
                      <span className="text-[0.98rem] font-semibold leading-tight text-[#f5e6d3]">
                        {platform.name === "Uber Eats" ? (
                          <>
                            Uber
                            <br />
                            Eats
                          </>
                        ) : (
                          platform.name
                        )}
                      </span>
                    </div>
                    <span className="text-[1.7rem] leading-none text-white/18 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white/28">
                      ›
                    </span>
                  </motion.a>
                ))}
              </div>

              <p className="pt-1 text-center font-heading text-[0.88rem] italic text-[#8a7c74]">
                Mölndals favorit
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-20 px-4 sm:px-6 xl:hidden">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-[1.35rem] shadow-[0_16px_44px_rgba(0,0,0,0.3)]">
          <div className="grid grid-cols-3">
            {deliveryPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noreferrer noopener"
                className={`flex h-18 items-center justify-center ${platform.mobileClass}`}
                aria-label={`Beställ via ${platform.name}`}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center overflow-hidden">
                  <Image
                    src={platform.iconSrc}
                    alt={platform.iconAlt}
                    width={44}
                    height={44}
                    className="h-full w-full object-contain"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-10 z-20 hidden px-8 xl:block">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex items-end justify-between gap-8">
            <div data-gsap-stagger className="grid max-w-3xl flex-1 gap-3 xl:grid-cols-3">
            {heroSlides.map((slide, index) => {
              const isActive = index === activeIndex;

              return (
              <motion.button
                key={slide.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
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
                      <p className="text-[10px] uppercase text-primary/90">
                        0{index + 1}
                      </p>
                      <p className="mt-1 font-heading text-xl text-white">
                        {slide.title}
                      </p>
                    </div>
                  </div>
              </motion.button>
            );
          })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
