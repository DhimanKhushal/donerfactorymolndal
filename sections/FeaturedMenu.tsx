"use client";

import { useEffect, useMemo, useState } from "react";

import Image from "next/image";

import { getMenuItemImage } from "@/lib/menu-images";
import { menuCategories } from "@/lib/menu-data";

const tabs = [
  { slug: "doner", label: "Döner" },
  { slug: "pizzor", label: "Pizza" },
  { slug: "burgare", label: "Burgare" },
  { slug: "vegetariskt", label: "Vegetariskt" },
];

const AUTO_ROTATE_MS = 3000;

const badgeStyles = [
  "bg-tertiary-container",
  "bg-primary-container text-on-primary-container",
  "bg-surface-container-high text-stone-100",
];

export function FeaturedMenu() {
  const [activeCategory, setActiveCategory] = useState("doner");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentCategory =
    menuCategories.find((item) => item.slug === activeCategory) ?? menuCategories[0];

  const featuredItems = useMemo(() => {
    return currentCategory.items.slice(0, 4).map((item, index) => ({
      id: `${activeCategory}-${item.name}`,
      title: item.name,
      description: item.ingredients,
      price: item.price,
      category: item.tag,
      note: item.note,
      image: getMenuItemImage(activeCategory, item),
      badge:
        index === 0
          ? "Populär"
          : index === 1
            ? "Signatur"
            : item.tag,
      badgeClass: badgeStyles[index % badgeStyles.length],
      isCenter: index === 1,
    }));
  }, [activeCategory, currentCategory.items]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) return;

    const intervalId = window.setInterval(() => {
      setActiveCategory((currentCategorySlug) => {
        const currentIndex = tabs.findIndex(
          (tab) => tab.slug === currentCategorySlug,
        );

        const nextIndex =
          currentIndex === -1 ? 0 : (currentIndex + 1) % tabs.length;

        return tabs[nextIndex].slug;
      });
    }, AUTO_ROTATE_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isMenuOpen]);

  return (
    <>
      <section className="relative overflow-hidden border-y border-white/6 bg-[#0f1114] py-18 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(139,46,46,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.028),transparent_30%)]" />
        <div className="relative z-10 mx-auto max-w-screen-2xl px-5 sm:px-6 lg:px-8">
          <div
            data-gsap-reveal
            className="mb-12 flex flex-col justify-between gap-7 sm:mb-16 sm:gap-8 md:flex-row md:items-end"
          >
            <div className="space-y-4">
              <span className="section-label">
                Våra Favoriter
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-stone-100">
                Utvalda Rätter
              </h2>
              <p className="max-w-2xl text-sm text-accent/74 md:text-base">
                Våra mest efterfrågade serveringar just nu, med döner i centrum
                och resten av köket som ett starkt komplement till helheten.
              </p>
            </div>

            <div className="hide-scrollbar -mx-1 flex gap-3 overflow-x-auto px-1 pb-2 sm:mx-0 sm:gap-4 sm:px-0">
              {tabs.map((tab) => {
                const isActive = tab.slug === activeCategory;

                return (
                  <button
                    key={tab.slug}
                    type="button"
                    onClick={() => setActiveCategory(tab.slug)}
                    className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm md:text-base font-medium transition-colors sm:rounded-full sm:px-6 ${
                      isActive
                        ? "bg-primary-container font-bold text-on-primary-container"
                        : "bg-surface-container font-medium text-on-surface-variant hover:bg-surface-container-high"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            key={activeCategory}
            className="featured-panel-enter hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-6 sm:gap-8 sm:px-4 sm:pb-8"
          >
            {featuredItems.map((item, index) => (
              <div
                key={item.id}
                className={`featured-card group snap-center transition-transform duration-500 ${
                  item.isCenter
                    ? "min-w-[84vw] scale-[1.01] sm:min-w-[320px] md:min-w-[500px] md:scale-105"
                    : "min-w-[84vw] sm:min-w-[320px] md:min-w-[450px]"
                }`}
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl ${
                    item.isCenter
                      ? "h-116 sm:h-130"
                      : "h-104 bg-surface-container-low group-hover:scale-[1.02] sm:h-125"
                  } transition-transform duration-500 ease-out`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={`object-contain transition-all duration-700 sm:object-cover ${
                      item.isCenter
                        ? "group-hover:scale-[1.03]"
                        : "grayscale-[0.12] group-hover:scale-[1.04] group-hover:grayscale-0"
                    }`}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute right-5 top-5 rounded-lg border border-primary/35 bg-primary/95 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_16px_36px_rgba(0,0,0,0.35)] sm:right-6 sm:top-6">
                    {item.price}
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 w-full ${
                      item.isCenter ? "p-6 sm:p-10" : "p-5 sm:p-8"
                    }`}
                  >
                    <div className="flex items-end justify-between gap-5">
                      <div className="min-w-0">
                        <span
                          className={`mb-3 inline-block rounded px-3 py-1 text-[10px] font-bold uppercase ${
                            item.isCenter ? "" : "tracking-widest"
                          } ${item.badgeClass}`}
                        >
                          {item.badge}
                        </span>
                        <h3
                          className={`font-heading text-xl md:text-2xl font-medium text-stone-100 ${
                            item.isCenter ? "md:text-2xl" : ""
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="mt-2 max-w-[38ch] text-sm text-accent/82 md:text-base"
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2 flex justify-center sm:mt-4">
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="w-full rounded-xl bg-primary px-7 py-3 text-sm md:text-base font-medium uppercase tracking-[0.22rem] text-white transition hover:bg-primary/90 sm:w-auto"
            >
              Visa Meny
            </button>
          </div>
        </div>
      </section>

      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-x-0 bottom-0 top-[5.25rem] z-40 transition-all duration-500 ease-out sm:top-[6.25rem] md:top-[6.5rem] ${
          isMenuOpen
            ? "pointer-events-auto bg-black/30 backdrop-blur-md"
            : "pointer-events-none bg-black/0 backdrop-blur-0"
        }`}
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className={`absolute inset-x-0 bottom-0 mx-auto flex h-full w-[min(100%-1rem,88rem)] flex-col overflow-hidden rounded-t-2xl border border-white/10 bg-[#120f0e]/58 shadow-[0_-18px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[min(100%-1.5rem,88rem)] ${
            isMenuOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-[8%] scale-[0.985] opacity-0"
          }`}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/8 bg-[#120f0e]/42 px-5 py-4 backdrop-blur-2xl sm:px-6 md:px-8">
            <div>
              <p className="section-label">
                Hela Menyn
              </p>
              <h3 className="mt-2 font-heading text-xl font-semibold text-stone-100 sm:text-2xl md:text-3xl">
                Doner Factory Mölndal
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/4 text-xl text-white transition hover:bg-white/8"
              aria-label="Stäng meny"
            >
              ×
            </button>
          </div>

          <div
            data-lenis-prevent
            className="hide-scrollbar min-h-0 flex-1 overflow-y-auto overscroll-contain scroll-smooth px-5 pb-6 pt-5 sm:px-6 sm:pb-8 sm:pt-6 md:px-8"
          >
            <div className="mb-6 flex flex-wrap gap-3 sm:mb-8">
              {menuCategories.map((category) => {
                const isActive = category.slug === activeCategory;

                return (
                  <button
                    key={category.slug}
                    type="button"
                    onClick={() => setActiveCategory(category.slug)}
                    className={`rounded-xl px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] transition md:text-sm ${
                      isActive
                        ? "bg-primary/90 text-white"
                        : "border border-white/10 bg-white/[0.04] text-accent/70 hover:border-primary/40 hover:text-white"
                    }`}
                  >
                    {category.name}
                  </button>
                );
              })}
            </div>

            <div className="space-y-6 rounded-4xl border border-white/10 bg-white/[0.05] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl sm:p-8">
              <div className="space-y-3">
                <p className="text-xl md:text-2xl font-medium text-primary/75">
                  {currentCategory.name}
                </p>
                <p className="max-w-3xl text-sm text-accent/74 md:text-base">
                  {currentCategory.description}
                </p>
              </div>
              <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
                {currentCategory.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-3xl border border-white/10 bg-background/55 p-4 backdrop-blur-sm sm:p-5"
                  >
                    <div className="mb-3 flex items-start justify-between gap-3 sm:gap-4">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-primary/25 bg-primary/12 shadow-[0_10px_26px_rgba(0,0,0,0.25)] ring-1 ring-white/15">
                          <Image
                            src={getMenuItemImage(currentCategory.slug, item)}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                        <h3 className="min-w-0 font-heading text-lg md:text-xl font-semibold text-white">
                          {item.name}
                        </h3>
                      </div>
                      <span className="shrink-0 font-heading text-xs font-medium text-primary sm:text-sm">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm text-accent/72 md:text-base">
                      <span className="font-medium text-accent">
                        Ingredienser:
                      </span>{" "}
                      {item.ingredients}
                    </p>
                    {item.note ? (
                      <p className="mt-3 text-sm text-accent/68 md:text-base">
                        {item.note}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
