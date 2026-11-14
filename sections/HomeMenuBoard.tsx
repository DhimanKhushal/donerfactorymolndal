"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { Container } from "@/components/layout/Container";
import { getMenuItemImage } from "@/lib/menu-images";
import { menuCategories } from "@/lib/menu-data";

function getDisplayItemName(name: string) {
  return name.replace(/^\d+\.\s*/, "");
}

function getPricePillClass() {
  return "bg-[#a23a36] text-white shadow-[0_10px_24px_rgba(0,0,0,0.2)]";
}

export function HomeMenuBoard() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]?.slug);

  const currentCategory =
    menuCategories.find((category) => category.slug === activeCategory) ??
    menuCategories[0];

  return (
    <section className="relative overflow-hidden bg-[#181211] py-18 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(139,46,46,0.18),transparent_28%),radial-gradient(circle_at_88%_30%,rgba(245,230,211,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_20%,rgba(183,122,42,0.1)_100%)]" />
      <Container className="relative z-10 space-y-10">
        <div data-gsap-reveal className="mx-auto max-w-3xl space-y-5 text-center">
          <p className="section-label mx-auto">Full meny</p>
          <h2 className="section-title">
            Smaker för varje craving, samlade på ett ställe.
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-accent/76 sm:text-base">
            Från saftig döner och nygräddad pizza till burgare, vegetariska
            favoriter och något sött efter maten. Här hittar du hela urvalet
            tydligt presenterat, så det blir enkelt att välja rätt direkt.
          </p>
        </div>

        <div className="space-y-8">
          <div
            data-gsap-reveal
            className="hide-scrollbar -mx-2 flex gap-3 overflow-x-auto px-2 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
          >
            {menuCategories.map((category) => {
              const isActive = category.slug === currentCategory.slug;

              return (
                <motion.button
                  key={category.slug}
                  type="button"
                  onClick={() => setActiveCategory(category.slug)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.985 }}
                  className={`shrink-0 rounded-full border px-5 py-3 text-sm font-medium uppercase tracking-[0.04em] transition sm:px-7 ${
                    isActive
                      ? "border-[#a23a36] bg-[#a23a36] text-white"
                      : "border-white/10 bg-white/[0.04] text-accent/72 hover:border-white/18 hover:text-white"
                  }`}
                >
                  {category.name}
                </motion.button>
              );
            })}
          </div>

          <div
            data-gsap-reveal
            className="rounded-[2rem] border border-white/10 bg-[#231916]/92 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.28)] sm:p-8"
          >
            <div className="space-y-3">
              <p className="text-2xl font-medium text-[#a23a36] md:text-3xl">
                {currentCategory.name}
              </p>
              <p className="max-w-3xl text-sm leading-7 text-accent/72 sm:text-base">
                {currentCategory.description}
              </p>
            </div>

            <div className="mt-7 grid gap-3 lg:grid-cols-2">
              {currentCategory.items.map((item, itemIndex) => (
                <article
                  key={`${currentCategory.slug}-${item.name}`}
                  className="rounded-[1.35rem] border border-white/10 bg-[#1a1311] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] sm:p-4"
                >
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="shrink-0 font-heading text-2xl font-semibold leading-none text-white sm:text-[1.75rem]">
                        {itemIndex + 1}.
                      </span>
                      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#8d3d2a]/55 bg-black/25 shadow-[0_10px_22px_rgba(0,0,0,0.28)] sm:h-11 sm:w-11">
                        <Image
                          src={getMenuItemImage(currentCategory.slug, item)}
                          alt={item.name}
                          fill
                          sizes="44px"
                          className="object-cover"
                        />
                      </div>
                      <h3 className="min-w-0 font-heading text-[1.35rem] font-semibold leading-none text-white sm:text-[1.55rem]">
                        {getDisplayItemName(item.name)}
                      </h3>
                    </div>

                    <span
                      className={`menu-price shrink-0 rounded-full px-3 py-1 ${getPricePillClass()}`}
                    >
                      {item.price}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm leading-6 text-accent/72 sm:text-[0.97rem]">
                    <p>
                      <span className="font-semibold text-white">Ingredienser:</span>{" "}
                      {item.ingredients}
                    </p>
                    {item.note ? <p>{item.note}</p> : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
