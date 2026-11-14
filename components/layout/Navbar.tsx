"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

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
    "w-[calc(100%-2rem)] max-w-[82rem] lg:w-[calc(100%-3rem)] lg:max-w-[81rem]";

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
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
                <motion.div
                  key={link.href}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.18 }}
                >
                  <Link
                    href={link.href}
                    className={`relative px-3 py-2 text-sm font-medium uppercase transition duration-300 ${
                      isActiveLink(link.href)
                        ? "text-white"
                        : "text-accent/75 hover:text-white"
                    }`}
                  >
                    {isActiveLink(link.href) ? (
                      <span className="absolute inset-x-3 bottom-0 h-px bg-primary/70" />
                    ) : null}
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="hidden justify-end min-[769px]:flex">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/menu"
                  className={`rounded-xl px-5 py-3 text-sm font-medium uppercase transition duration-300 sm:px-6 ${
                    isActiveLink("/menu")
                      ? "border border-primary/55 bg-primary text-white shadow-[0_0_0_1px_rgba(245,230,211,0.08),0_18px_36px_rgba(139,46,46,0.24)]"
                      : "border border-primary/30 bg-primary/85 text-white hover:border-primary/50 hover:bg-primary"
                  }`}
                >
                  Se menyn
                </Link>
              </motion.div>
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
                    className={`block rounded-xl px-4 py-3 text-sm font-medium uppercase transition min-[769px]:text-base ${
                      isActiveLink(link.href)
                        ? "border border-white/8 bg-white/3 text-white"
                        : "border border-white/8 bg-white/3 text-accent/80 hover:border-primary/30 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/menu"
                  onClick={() => setIsMenuOpen(false)}
                  className={`mt-4 block rounded-xl px-4 py-3 text-center text-sm font-medium uppercase transition min-[769px]:text-base ${
                    isActiveLink("/menu")
                      ? "border border-primary/40 bg-primary text-white"
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                >
                  Se menyn
                </Link>
              </nav>
            </Container>
          </div>
        </motion.div>
      </header>

      <div className="h-[5.9rem] min-[769px]:h-[6.2rem]" aria-hidden="true" />
    </>
  );
}
