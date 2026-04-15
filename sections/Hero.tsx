import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";

const stats = [
  { value: "10+", label: "År av erfarenhet" },
  { value: "50+", label: "Rätter på menyn" },
  { value: "1000+", label: "Nöjda gäster / vecka" },
  { value: "100%", label: "Färska råvaror" },
];

export function Hero() {
  return (
    <section className="relative -mt-[7.5rem] flex min-h-screen items-end overflow-hidden border-b border-white/6 bg-[#1a100f] pt-[7.5rem] md:-mt-[6.5rem] md:pt-[6.5rem]">
      <div className="absolute inset-0">
        <Image
          src="/doner-her.jpg"
          alt="Doner Factory Mölndal hero"
          fill
          priority
          className="hero-background object-cover object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_30%,_rgba(206,98,20,0.35),_transparent_28%),linear-gradient(90deg,_rgba(22,13,12,0.96)_0%,_rgba(22,13,12,0.72)_42%,_rgba(22,13,12,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(15,15,15,0.18)_0%,_rgba(15,15,15,0.08)_22%,_rgba(15,15,15,0.9)_100%)]" />
        <div className="pointer-events-none absolute inset-x-[22%] top-0 h-[45%] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.22),_transparent_56%)] opacity-40 blur-3xl" />
      </div>

      <Container className="relative z-10 flex w-full pb-18 pt-32 sm:pb-24 lg:pb-28 lg:pt-40">
        <div className="hero-fade-in ml-auto space-y-12 text-right">
          <div className="ml-auto max-w-3xl space-y-9">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-primary/80">
              Mölndals Signaturdöner
            </p>
            <div className="space-y-6">
              <h1 className="max-w-3xl font-heading text-5xl leading-[0.92] text-white sm:text-6xl lg:text-[5.25rem]">
                Konsten av den
                <br />
                vertikala grillen.
              </h1>
              <p className="ml-auto max-w-xl text-base leading-8 text-accent/74 sm:text-lg">
                Upplev husets döner i en miljö där långsam grillning, varma
                kryddor och nybakat bröd möts i en modern restaurangupplevelse
                med tydligt fokus på smak, rytm och råvara.
              </p>
            </div>

            <div className="flex flex-wrap justify-end gap-4 pt-2">
              <Link
                href="/menu"
                className="rounded-xl bg-primary px-6 py-3 text-sm font-medium uppercase tracking-[0.26em] text-white transition duration-300 hover:bg-primary/90"
              >
                Visa Menyn
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium uppercase tracking-[0.26em] text-accent transition duration-300 hover:border-white/35 hover:bg-white/10 hover:text-white"
              >
                Kontakta Oss
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-white/8 bg-black/25 p-5 backdrop-blur-sm"
              >
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-accent/66">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
