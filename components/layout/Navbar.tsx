"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/layout/Container";

const navLinks = [
  { href: "/", label: "Hem" },
  { href: "/menu", label: "Meny" },
  { href: "/gallery", label: "Galleri" },
  { href: "/contact", label: "Kontakt" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 24;
      setIsScrolled(nextScrolled);

      if (nextScrolled) {
        setIsMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const widthClass =
    "w-[calc(100%-3rem)] max-w-[77rem] lg:w-[calc(100%-4rem)] lg:max-w-[76rem]";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={`mx-auto mt-3 ${widthClass} rounded-2xl border transition-all duration-500 ease-out ${
            isScrolled
              ? "border-white/10 bg-[#120f0e]/46 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
              : "border-white/6 bg-[#120f0e]/14 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-lg"
          }`}
        >
          <Container className="grid h-[4.8rem] grid-cols-[1fr_auto] items-center gap-3 sm:h-[5.15rem] min-[769px]:grid-cols-[1fr_auto_1fr]">
            <Link href="/" className="min-w-0">
              <div className="flex min-w-0 items-center gap-3">
                <div className="relative h-10 w-43 shrink-0 overflow-hidden min-[360px]:w-46 sm:h-11 sm:w-52 md:h-[3.15rem] md:w-56 lg:w-60">
                  <Image
                    src="/logo/doner-factory.svg"
                    alt="Doner Factory"
                    fill
                    priority
                    sizes="(max-width: 640px) 184px, (max-width: 1024px) 208px, 256px"
                    className="object-cover"
                    style={{ objectPosition: "center 56%" }}
                  />
                </div>
              </div>
            </Link>

            <nav className="hidden items-center justify-center gap-8 min-[769px]:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium uppercase tracking-[0.32em] text-accent/75 transition duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden justify-end min-[769px]:flex">
              <Link
                href="/menu"
                className="rounded-xl border border-primary/30 bg-primary/85 px-5 py-3 text-sm font-medium uppercase tracking-[0.28em] text-white transition duration-300 hover:border-primary/50 hover:bg-primary sm:px-6"
              >
                Se menyn
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 min-[769px]:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                    isMenuOpen ? "top-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                    isMenuOpen ? "top-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </Container>

          <div
            className={`overflow-hidden transition-[max-height,opacity,transform] duration-400 ease-out min-[769px]:hidden ${
              isMenuOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <Container className="border-t border-white/8 pb-5 pt-4">
              <nav
                id="mobile-navigation"
                className={`space-y-2 transition duration-300 ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-2 opacity-0"
                }`}
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl border border-white/8 bg-white/3 px-4 py-3 text-sm font-medium uppercase tracking-[0.24em] text-accent/80 transition hover:border-primary/30 hover:text-white min-[769px]:text-base"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/menu"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-medium uppercase tracking-[0.24em] text-white transition hover:bg-primary/90 min-[769px]:text-base"
                >
                  Se menyn
                </Link>
              </nav>
            </Container>
          </div>
        </div>
      </header>

      <div className="h-[5.9rem] min-[769px]:h-[6.2rem]" aria-hidden="true" />
    </>
  );
}
