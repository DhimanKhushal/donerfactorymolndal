"use client";

import { Container } from "@/components/layout/Container";

const craftVideoSrc = "/assets/gallery/restaurant-walkthrough-enhanced.mp4";

export function DegustationSection() {

  return (
    <section className="group relative overflow-hidden border-y border-white/6 bg-[#17100f] py-18 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(139,46,46,0.18),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.025),transparent_32%,rgba(0,0,0,0.18)_100%)]" />
      <Container className="relative z-10 grid gap-12 lg:grid-cols-[1fr_1.08fr] lg:items-center lg:gap-20">
        <div data-gsap-reveal className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-6 rounded-3xl bg-[radial-gradient(circle_at_30%_40%,_rgba(139,46,46,0.12),_transparent_52%)] blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl bg-[#161212] shadow-[0_40px_120px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out group-hover:-translate-y-1">
            <div className="relative h-[28rem] sm:h-[34rem]">
              <video
                className="h-full w-full object-cover object-center brightness-[0.72] contrast-[1.08] saturate-[1.08] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/assets/hero/doner-hero.webp"
              >
                <source src={craftVideoSrc} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.32)_45%,rgba(0,0,0,0.65)_100%)]" />
              <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/32 px-4 py-2 text-xs font-medium uppercase text-accent/80 backdrop-blur-md">
                Filmat i restaurangen
              </div>
            </div>
          </div>

          <div className="absolute bottom-[-1.5rem] left-5 w-[12.5rem] rounded-3xl bg-[#9d3434] px-6 py-7 shadow-[0_28px_60px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-out group-hover:translate-y-[-0.35rem] group-hover:rotate-[-2deg] sm:bottom-[-2rem] sm:left-auto sm:right-[-0.5rem] sm:w-[15rem] sm:px-8 sm:py-10">
            <p className="font-heading text-xl md:text-2xl font-medium italic leading-tight text-white">
              Grundat i
              <br />
              besatthet.
            </p>
            <div className="mt-6 h-1.5 w-14 rounded-full bg-white/20 sm:mt-8" />
          </div>
        </div>

        <div data-gsap-reveal className="space-y-7 text-left sm:space-y-8">
          <p className="section-label">
            Hantverket
          </p>

          <div className="space-y-6">
            <h2 className="max-w-3xl font-heading text-2xl font-semibold leading-tight text-white transition-transform duration-500 ease-out group-hover:translate-x-1 md:text-5xl">
              Mer än en
              <br />
              måltid, <span className="text-white/30">en atmosfär.</span>
            </h2>

            <div className="max-w-2xl space-y-5 text-sm text-accent/74 sm:space-y-6 md:text-base">
              <p>
                På Doner Factory Mölndal tror vi på den ursprungliga skönheten
                i eld och rena råvaror. Varje skiva kött handskärs, varje deg
                knådas dagligen och varje sås bär på en väl bevarad
                familjehemlighet.
              </p>
              <p>
                Vi har förenat den traditionella själen i medelhavets street
                food med en sofistikerad nordisk känsla för kvalitet,
                precision och atmosfär.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2 text-primary sm:gap-6 sm:pt-4">
            <span className="h-px w-12 bg-primary/70 sm:w-16" />
            <p className="font-heading text-xl md:text-2xl font-medium italic">
              Fabrikens standard
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
