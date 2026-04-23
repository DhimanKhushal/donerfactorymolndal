import Image from "next/image";

import { Container } from "@/components/layout/Container";

const openingHours = [
  "Mån - Lör: 10:00 - 21:00",
  "Sön: 10:00 - 20:00",
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#120f0f]/92 py-10">
      <Container className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-3">
          <div className="relative h-14 w-56">
            <Image
              src="/logo/doner-factory.svg"
              alt="Doner Factory Mölndal"
              fill
              sizes="224px"
              className="object-contain object-left"
            />
          </div>
          <p className="max-w-md text-sm text-accent/72 md:text-base">
            Döner med tydlig identitet, nybakat bröd och varma smaker för lunch,
            middag och snabba stopp mitt i Mölndal.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm md:text-base font-medium uppercase tracking-[0.3em] text-accent/42">
            Hitta Rätt
          </p>
          <div className="space-y-2 text-sm text-accent/72 md:text-base">
            <p>Brogatan 32</p>
            <p>431 30 Mölndal</p>
            <p>0763282782</p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm md:text-base font-medium uppercase tracking-[0.3em] text-accent/42">
            Snabbvägar
          </p>
          
          <div className="space-y-1 pt-2 text-sm text-accent/72 md:text-base">
            {openingHours.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
