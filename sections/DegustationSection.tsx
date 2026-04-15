import Image from "next/image";

import { Container } from "@/components/layout/Container";

export function DegustationSection() {
  return (
    <section className="group bg-[#121010] py-24 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.08fr] lg:items-center lg:gap-20">
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_40%,_rgba(139,46,46,0.12),_transparent_52%)] blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.2rem] bg-[#161212] shadow-[0_40px_120px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out group-hover:-translate-y-1">
            <div className="relative h-[28rem] sm:h-[34rem]">
              <Image
                src="/doner-her.jpg"
                alt="Doner Factory matsal"
                fill
                className="object-cover object-center brightness-[0.48] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.32)_45%,rgba(0,0,0,0.65)_100%)]" />
            </div>
          </div>

          <div className="absolute bottom-[-2rem] right-[-0.5rem] w-[14rem] rounded-[2rem] bg-[#9d3434] px-8 py-10 shadow-[0_28px_60px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-out group-hover:translate-y-[-0.35rem] group-hover:rotate-[-2deg] sm:w-[15rem]">
            <p className="font-heading text-3xl italic leading-tight text-white sm:text-[2.2rem]">
              Grundat i
              <br />
              besatthet.
            </p>
            <div className="mt-8 h-1.5 w-14 rounded-full bg-white/20" />
          </div>
        </div>

        <div className="space-y-8 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.55em] text-primary/80">
            Hantverket
          </p>

          <div className="space-y-6">
            <h2 className="max-w-3xl font-heading text-5xl leading-[0.9] text-white transition-transform duration-500 ease-out group-hover:translate-x-1 sm:text-6xl lg:text-[5.3rem]">
              Mer än
              <br />
              en måltid, <span className="text-white/30">en</span>
              <br />
              <span className="text-white/30">atmosfär.</span>
            </h2>

            <div className="max-w-2xl space-y-6 text-base leading-9 text-accent/52 sm:text-lg">
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

          <div className="flex items-center gap-6 pt-4 text-primary">
            <span className="h-px w-16 bg-primary/70" />
            <p className="font-heading text-2xl italic sm:text-3xl">
              Fabrikens standard
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
