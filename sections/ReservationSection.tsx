import Link from "next/link";

import { Container } from "@/components/layout/Container";

const quickFacts = [
  { label: "Adress", value: "Göteborgsvägen 1, Mölndal" },
  { label: "Öppet idag", value: "11:00 - 21:00" },
  { label: "Specialitet", value: "Högrev döner & nybakat bröd" },
];

export function ReservationSection() {
  return (
    <section className="bg-[#171111] pb-24 pt-10 lg:pb-28">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(135deg,rgba(139,46,46,0.2),rgba(18,15,14,0.94)_38%,rgba(18,15,14,0.98)_100%)] shadow-[0_28px_90px_rgba(0,0,0,0.34)]">
          <div className="grid gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-12">
            <div className="space-y-7">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.42em] text-primary/80">
                  Klar För Nästa Måltid?
                </p>
                <h2 className="max-w-2xl font-heading text-4xl leading-[0.95] text-white sm:text-5xl lg:text-6xl">
                  Döner med tydlig karaktär,
                  <br />
                  serverad mitt i Mölndal.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-accent/72 sm:text-lg">
                  När du vill ha handskuret kött, nybakat bröd och såser med
                  egen identitet ska det vara enkelt att hitta rätt. Börja med
                  menyn eller gå direkt till kontakt för beställning och frågor.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/menu"
                  className="rounded-xl bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:bg-primary/90"
                >
                  Se menyn
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl border border-white/14 bg-white/[0.04] px-7 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-accent transition hover:border-white/26 hover:bg-white/[0.07] hover:text-white"
                >
                  Kontakt & öppettider
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-[1.35rem] border border-white/8 bg-white/[0.04] p-5 backdrop-blur-sm"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent/42">
                    {fact.label}
                  </p>
                  <p className="mt-3 font-heading text-2xl leading-tight text-white sm:text-[2rem]">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
