import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { MotionReveal } from "@/components/ui/Motion";

const openingHours = [
  "Mån - Lör: 10:00 - 21:00",
  "Sön: 10:00 - 20:00",
];

const quickLinks = [
  { href: "/", label: "Hem" },
  { href: "/menu", label: "Meny" },
  { href: "/gallery", label: "Galleri" },
  { href: "/contact", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/10 bg-[#120f0f] py-14 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(139,46,46,0.24),transparent_28%),radial-gradient(circle_at_82%_78%,rgba(245,230,211,0.08),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_28%,rgba(0,0,0,0.22)_100%)]" />
      <Container className="relative z-10 space-y-8">
        <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
          <MotionReveal className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(139,46,46,0.22),rgba(23,17,17,0.9)_58%,rgba(15,15,15,0.96))] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.32)] sm:p-9">
            <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 translate-x-10 -translate-y-10 rounded-full bg-primary/22 blur-3xl" />
            <div className="relative space-y-5">
              <p className="section-label">Doner Factory</p>
              <div className="relative h-14 w-56">
                <Image
                  src="/logo/doner-factory.svg"
                  alt="Doner Factory Mölndal"
                  fill
                  sizes="224px"
                  className="object-contain object-left"
                />
              </div>
              <p className="max-w-xl text-sm leading-7 text-accent/74 md:text-base">
                Döner med tydlig identitet, nybakat bröd och varma smaker för lunch,
                middag och snabba stopp mitt i Mölndal.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <span className="rounded-full border border-white/10 bg-black/22 px-4 py-2 text-sm text-accent/74">
                  Brogatan 32
                </span>
                <span className="rounded-full border border-white/10 bg-black/22 px-4 py-2 text-sm text-accent/74">
                  Mölndal
                </span>
                <span className="rounded-full border border-white/10 bg-black/22 px-4 py-2 text-sm text-accent/74">
                  0763282782
                </span>
              </div>
            </div>
          </MotionReveal>

          <div className="grid gap-5 sm:grid-cols-2">
            <MotionReveal
              className="rounded-[1.75rem] border border-white/10 bg-[#171111]/78 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-7"
              delay={0.08}
            >
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase text-accent/44">
                  Hitta Rätt
                </p>
                <div className="space-y-3 text-sm text-accent/74 md:text-base">
                  <p>Brogatan 32</p>
                  <p>431 30 Mölndal</p>
                  <p>0763282782</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl border border-primary/28 bg-primary/12 px-4 py-3 text-sm font-medium text-white transition hover:border-primary/45 hover:bg-primary/18"
                >
                  Besök kontaktsidan
                </Link>
              </div>
            </MotionReveal>

            <MotionReveal
              className="rounded-[1.75rem] border border-white/10 bg-[#171111]/78 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-7"
              delay={0.16}
            >
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase text-accent/44">
                  Öppettider
                </p>
                <div className="space-y-3 text-sm text-accent/74 md:text-base">
                  {openingHours.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>

        <MotionReveal
          className="flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-black/18 px-6 py-5 backdrop-blur-xl sm:px-7 lg:flex-row lg:items-center lg:justify-between"
          delay={0.22}
        >
          <div className="flex flex-wrap gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-accent/72 transition hover:border-primary/35 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-sm text-accent/46">
            Doner Factory Mölndal. Smaker med karaktär, serverade hela veckan.
          </p>
        </MotionReveal>
      </Container>
    </footer>
  );
}
