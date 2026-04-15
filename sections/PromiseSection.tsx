"use client";

import { useEffect, useRef, useState } from "react";

import Link from "next/link";

import { Container } from "@/components/layout/Container";

const promises = [
  {
    icon: "◜",
    title: "Färska\nråvaror",
    description:
      "Hämtas dagligen från lokala producenter för att ge maximal fräschör, näring och smak.",
    featured: false,
  },
  {
    icon: "▤",
    title: "Autentiska\nrecept",
    description:
      "Tillagningstekniker från generationer tillbaka bevaras för att skydda det kulinariska arvet.",
    featured: true,
  },
  {
    icon: "⚡",
    title: "Snabb\nservice",
    description:
      "Effektiva köksflöden som respekterar din tid utan att kompromissa med kvaliteten.",
    featured: false,
  },
  {
    icon: "✪",
    title: "Premium\nkvalitet",
    description:
      "Noggrann hygien, hög presentation och konsekvent kvalitet i varje servering.",
    featured: false,
  },
];

const CARD_STAGGER_MS = 170;

export function PromiseSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visibleCards, setVisibleCards] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let hasAnimated = false;
    const timeouts: number[] = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated) return;

        hasAnimated = true;

        promises.forEach((_, index) => {
          const timeoutId = window.setTimeout(() => {
            setVisibleCards(index + 1);
          }, index * CARD_STAGGER_MS);

          timeouts.push(timeoutId);
        });

        observer.disconnect();
      },
      {
        threshold: 0.22,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#161313] py-24 sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,_rgba(139,46,46,0.08),_transparent_34%),linear-gradient(180deg,_rgba(255,255,255,0.02)_0%,_rgba(255,255,255,0)_18%,_rgba(0,0,0,0.12)_100%)]" />

      <Container className="relative z-10 space-y-14">
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.55em] text-primary/80">
            Vårt löfte
          </p>
          <h2 className="font-heading text-5xl leading-none text-white sm:text-6xl lg:text-[5.2rem]">
            Varför Doner Factory?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {promises.map((promise, index) => {
            const isVisible = index < visibleCards;

            return (
              <article
                key={promise.title}
                className={`rounded-[2.2rem] border p-10 shadow-[0_28px_80px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 ${
                  promise.featured
                    ? "border-[#513133] bg-[#241b1c]"
                    : "border-white/7 bg-white/[0.035]"
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/22 text-2xl text-primary">
                  {promise.icon}
                </div>
                <h3 className="mt-9 whitespace-pre-line font-heading text-3xl leading-tight text-white">
                  {promise.title}
                </h3>
                <p className="mt-6 max-w-[22ch] text-base leading-8 text-accent/46">
                  {promise.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="flex justify-center pt-4">
          <Link
            href="/contact"
            className="rounded-xl bg-primary px-12 py-4 text-sm font-semibold uppercase tracking-[0.36em] text-white transition hover:bg-primary/90"
          >
            Boka bord
          </Link>
        </div>
      </Container>
    </section>
  );
}
