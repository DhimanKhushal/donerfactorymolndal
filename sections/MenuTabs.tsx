"use client";

import { motion } from "framer-motion";
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
      <div
        data-gsap-reveal
        className="hide-scrollbar -mx-6 flex gap-2 overflow-x-auto px-6 pb-2 sm:mx-0 sm:flex-wrap sm:gap-3 sm:px-0 sm:pb-0"
      >
        {menuCategories.map((category) => {
          const isActive = category.slug === currentCategory.slug;

          return (
            <motion.button
              key={category.slug}
              type="button"
              onClick={() => setActiveCategory(category.slug)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`shrink-0 rounded-xl px-4 py-2 text-xs font-medium uppercase transition sm:rounded-full sm:px-5 sm:py-3 sm:text-sm md:text-base ${
                isActive
                  ? "bg-primary text-white"
                  : "border border-white/10 bg-white/5 text-accent/70 hover:border-primary/40 hover:text-white"
              }`}
            >
              {category.name}
            </motion.button>
          );
        })}
      </div>
      <MenuCategoryBlock category={currentCategory} />
    </div>
  );
}
