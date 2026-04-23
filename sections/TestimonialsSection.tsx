"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Container } from "@/components/layout/Container";

const testimonials = [
  {
    quote:
      "Riktigt bra döner, generösa portioner och smaken känns fräsch varje gång. Perfekt lunchstopp i Mölndal.",
    name: "Amina K.",
    detail: "Återkommande lunchgäst",
    image: "/testimonials/amina.webp",
  },
  {
    quote:
      "Pizzan kom varm, brödet var krispigt och personalen var snabb utan att det kändes stressigt.",
    name: "Marcus L.",
    detail: "Kvällsbeställning",
    image: "/testimonials/marcus.webp",
  },
  {
    quote:
      "Bra variation för hela familjen. Någon tog burger, någon döner och barnen ville direkt tillbaka.",
    name: "Elin R.",
    detail: "Familjebesök",
    image: "/testimonials/elin.webp",
  },
  {
    quote:
      "Det känns modernt, rent och enkelt att beställa. Extra plus för såserna och den picklade rödkålen.",
    name: "Samir D.",
    detail: "Helgmiddag",
    image: "/testimonials/samir.webp",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 3800);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="relative overflow-hidden border-y border-white/6 bg-[#110f12] py-18 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,46,46,0.2),transparent_28%),radial-gradient(circle_at_84%_72%,rgba(245,230,211,0.08),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.025),transparent_34%,rgba(0,0,0,0.2)_100%)]" />
      <Container className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div data-gsap-reveal className="space-y-4">
            <p className="section-label">Vad gästerna säger</p>
            <h2 className="section-title max-w-xl">
              Recensioner som rullar precis som servicen.
            </h2>
            <p className="section-copy max-w-xl">
              En kort testimonial-sektion som ger sidan social proof utan att ta
              över från maten och menyn.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/4.5 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8">
            <div className="pointer-events-none absolute right-8 top-6 font-heading text-8xl leading-none text-primary/16">
              ”
            </div>
            <div key={activeIndex} className="hero-copy-slide relative min-h-72 space-y-8 sm:min-h-60">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
              <p className="max-w-3xl font-heading text-2xl leading-tight text-white sm:text-3xl lg:text-4xl">
                “{activeTestimonial.quote}”
              </p>
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-primary/45 bg-primary/16 shadow-[0_0_28px_rgba(139,46,46,0.35)]">
                  <Image
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">
                    {activeTestimonial.name}
                  </p>
                  <p className="mt-1 text-sm uppercase tracking-[0.22em] text-accent/54">
                    {activeTestimonial.detail}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-4">
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`flex items-center gap-3 rounded-2xl border px-3 py-3 text-left transition ${
                      isActive
                        ? "border-primary/70 bg-primary/18"
                        : "border-white/8 bg-black/18 hover:border-white/20"
                    }`}
                  >
                    <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-heading text-lg text-white">
                        {testimonial.name}
                      </span>
                      <span className="mt-1 block truncate text-xs text-accent/58">
                        {testimonial.detail}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
