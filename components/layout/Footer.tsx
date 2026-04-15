import Link from "next/link";

import { Container } from "@/components/layout/Container";

const openingHours = [
  "Mån - Tors: 11:00 - 21:00",
  "Fre - Lör: 11:00 - 22:00",
  "Sön: 12:00 - 21:00",
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#120f0f]/92 py-10">
      <Container className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-3">
          <p className="font-heading text-2xl text-white">Doner Factory Mölndal</p>
          <p className="max-w-md text-sm leading-7 text-accent/62">
            Döner med tydlig identitet, nybakat bröd och varma smaker för lunch,
            middag och snabba stopp mitt i Mölndal.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent/42">
            Hitta Rätt
          </p>
          <div className="space-y-2 text-sm text-accent/68">
            <p>Göteborgsvägen 1</p>
            <p>431 30 Mölndal</p>
            <p>+46 31 123 45 67</p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent/42">
            Snabbvägar
          </p>
          <div className="flex flex-wrap gap-3 text-sm uppercase tracking-[0.2em] text-accent/64">
            <Link href="/" className="transition hover:text-white">
              Hem
            </Link>
            <Link href="/menu" className="transition hover:text-white">
              Meny
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Kontakt
            </Link>
          </div>
          <div className="space-y-1 pt-2 text-sm text-accent/56">
            {openingHours.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
