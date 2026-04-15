"use client";

import { useState } from "react";

import { MenuCategoryBlock } from "@/components/menu/MenuCategoryBlock";
import { menuCategories } from "@/lib/menu-data";

export function MenuTabs() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].slug);

  const currentCategory =
    menuCategories.find((category) => category.slug === activeCategory) ??
    menuCategories[0];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {menuCategories.map((category) => {
          const isActive = category.slug === currentCategory.slug;

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
      <MenuCategoryBlock category={currentCategory} />
    </div>
  );
}
