"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { Container } from "@/components/layout/Container";

const navLinks = [
  { href: "/", label: "Hem" },
  { href: "/menu", label: "Meny" },
  { href: "/contact", label: "Kontakt" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={`mx-auto mt-3 w-[min(100%-1rem,88rem)] rounded-[1.1rem] border transition-all duration-500 ease-out ${
            isScrolled
              ? "border-white/10 bg-[#120f0e]/46 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
              : "border-white/6 bg-[#120f0e]/14 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-lg"
          }`}
        >
          <Container className="grid h-20 grid-cols-[1fr_auto] items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
            <Link href="/" className="min-w-0">
              <p className="font-heading text-xl text-white sm:text-2xl">
                Doner Factory Mölndal
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.36em] text-accent/45 sm:text-xs">
                Premium Döner
              </p>
            </Link>

            <nav className="hidden items-center justify-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-[0.32em] text-accent/75 transition duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex justify-end">
              <Link
                href="/menu"
                className="rounded-xl border border-primary/30 bg-primary/85 px-5 py-3 text-xs font-medium uppercase tracking-[0.28em] text-white transition duration-300 hover:border-primary/50 hover:bg-primary sm:px-6 sm:text-sm"
              >
                Se menyn
              </Link>
            </div>
          </Container>

          <Container className="pb-4 md:hidden">
            <nav className="flex items-center gap-5 overflow-x-auto text-xs uppercase tracking-[0.28em] text-accent/70">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      </header>

      <div className="h-[7.5rem] md:h-[6.5rem]" aria-hidden="true" />
    </>
  );
}
