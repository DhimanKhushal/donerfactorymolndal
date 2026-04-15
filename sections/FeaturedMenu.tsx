"use client";

import { useEffect, useMemo, useState } from "react";

import Image from "next/image";

import { menuCategories } from "@/lib/menu-data";

const tabs = [
  { slug: "doner", label: "Döner" },
  { slug: "pizzor", label: "Pizza" },
  { slug: "burgare", label: "Burgare" },
  { slug: "vegetariskt", label: "Vegetariskt" },
];

const AUTO_ROTATE_MS = 3000;

const cardImages: Record<string, string[]> = {
  doner: [
    "/featured-menu/doner-photo.jpg",
    "/featured-menu/doner-photo.jpg",
    "/featured-menu/doner-photo.jpg",
  ],
  pizzor: [
    "/featured-menu/pizza-photo.jpg",
    "/featured-menu/pizza-photo.jpg",
    "/featured-menu/pizza-photo.jpg",
  ],
  burgare: [
    "/featured-menu/burger-photo.jpg",
    "/featured-menu/burger-photo.jpg",
    "/featured-menu/burger-photo.jpg",
  ],
  vegetariskt: [
    "/featured-menu/vegetarian-photo.jpg",
    "/featured-menu/vegetarian-photo.jpg",
    "/featured-menu/vegetarian-photo.jpg",
  ],
};

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
    const images = cardImages[activeCategory] ?? cardImages.doner;

    return currentCategory.items.slice(0, 4).map((item, index) => ({
      id: `${activeCategory}-${item.name}`,
      title: item.name,
      description: item.ingredients,
      price: item.price,
      category: item.tag,
      note: item.note,
      image: images[index % images.length],
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
  }, []);

  return (
    <>
      <section className="bg-surface-container-lowest py-24">
        <div className="mx-auto max-w-screen-2xl px-8">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="space-y-4">
              <span className="block text-xs font-bold uppercase tracking-[0.2rem] text-primary">
                Våra Favoriter
              </span>
              <h2 className="text-4xl font-bold text-stone-100 md:text-5xl">
                Utvalda Rätter
              </h2>
              <p className="max-w-2xl text-base leading-8 text-accent/70">
                Våra mest efterfrågade serveringar just nu, med döner i centrum
                och resten av köket som ett starkt komplement till helheten.
              </p>
            </div>

            <div className="hide-scrollbar flex gap-4 overflow-x-auto pb-2">
              {tabs.map((tab) => {
                const isActive = tab.slug === activeCategory;

                return (
                  <button
                    key={tab.slug}
                    type="button"
                    onClick={() => setActiveCategory(tab.slug)}
                    className={`whitespace-nowrap rounded-full px-6 py-2 text-sm transition-colors ${
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
            className="featured-panel-enter hide-scrollbar flex snap-x snap-mandatory gap-8 overflow-x-auto px-4 pb-8"
          >
            {featuredItems.map((item, index) => (
              <div
                key={item.id}
                className={`featured-card group snap-center transition-transform duration-500 ${
                  item.isCenter
                    ? "min-w-[320px] scale-105 md:min-w-[500px]"
                    : "min-w-[320px] md:min-w-[450px]"
                }`}
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl ${
                    item.isCenter
                      ? "h-[550px]"
                      : "h-[500px] bg-surface-container-low group-hover:scale-[1.02]"
                  } transition-transform duration-500 ease-out`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      item.isCenter
                        ? "group-hover:scale-[1.03]"
                        : "grayscale-[0.12] group-hover:scale-[1.04] group-hover:grayscale-0"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  <div
                    className={`absolute bottom-0 left-0 w-full ${
                      item.isCenter ? "p-10" : "p-8"
                    }`}
                  >
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <span
                          className={`mb-3 inline-block rounded px-3 py-1 text-[10px] font-bold uppercase ${
                            item.isCenter ? "" : "tracking-widest"
                          } ${item.badgeClass}`}
                        >
                          {item.badge}
                        </span>
                        <h3
                          className={`font-bold text-stone-100 ${
                            item.isCenter ? "text-4xl" : "text-3xl"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={`mt-2 max-w-[38ch] leading-7 ${
                            item.isCenter ? "text-base" : "text-sm"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                      <div
                        className={
                          item.isCenter ? "text-3xl font-bold" : "text-2xl font-bold"
                        }
                      >
                        {item.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="rounded-xl bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-[0.22rem] text-white transition hover:bg-primary/90"
            >
              Visa Meny
            </button>
          </div>
        </div>
      </section>

      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ease-out ${
          isMenuOpen
            ? "pointer-events-auto bg-black/48 backdrop-blur-md"
            : "pointer-events-none bg-black/0 backdrop-blur-0"
        }`}
      >
        <div
          className={`absolute inset-x-0 bottom-0 mx-auto flex max-h-[88vh] max-w-screen-2xl flex-col overflow-hidden rounded-t-[2rem] border border-white/10 bg-[#120f0e] shadow-[0_-18px_80px_rgba(0,0,0,0.55)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMenuOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-[8%] scale-[0.985] opacity-0"
          }`}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/8 bg-[#120f0e]/95 px-6 py-5 backdrop-blur md:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.26rem] text-primary/80">
                Hela Menyn
              </p>
              <h3 className="mt-2 font-heading text-3xl text-stone-100">
                Doner Factory Mölndal
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-white transition hover:bg-white/[0.08]"
              aria-label="Stäng meny"
            >
              ×
            </button>
          </div>

          <div className="hide-scrollbar max-h-[calc(88vh-96px)] overflow-y-auto overscroll-contain scroll-smooth px-6 pb-8 pt-6 md:px-8">
            <div className="mb-8 flex flex-wrap gap-3">
              {menuCategories.map((category) => {
                const isActive = category.slug === activeCategory;

                return (
                  <button
                    key={category.slug}
                    type="button"
                    onClick={() => setActiveCategory(category.slug)}
                    className={`rounded-full px-5 py-3 text-sm uppercase tracking-[0.24em] transition ${
                      isActive
                        ? "bg-primary text-white"
                        : "border border-white/10 bg-white/5 text-accent/70 hover:border-primary/40 hover:text-white"
                    }`}
                  >
                    {category.name}
                  </button>
                );
              })}
            </div>

            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-secondary/70 p-6 sm:p-8">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-primary/75">
                  {currentCategory.name}
                </p>
                <p className="max-w-3xl text-base leading-8 text-accent/65">
                  {currentCategory.description}
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                {currentCategory.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-[1.5rem] border border-white/10 bg-background/70 p-5"
                  >
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <h3 className="font-heading text-2xl text-white">
                        {item.name}
                      </h3>
                      <span className="text-sm text-primary">{item.price}</span>
                    </div>
                    <p className="mb-3 text-xs uppercase tracking-[0.26em] text-accent/45">
                      {item.tag}
                    </p>
                    <p className="text-sm leading-7 text-accent/70">
                      <span className="font-medium text-accent">
                        Ingredienser:
                      </span>{" "}
                      {item.ingredients}
                    </p>
                    {item.note ? (
                      <p className="mt-3 text-sm leading-6 text-accent/55">
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
