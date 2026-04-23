import type { MenuCategory } from "@/lib/menu-data";
import Image from "next/image";
import { getMenuItemImage } from "@/lib/menu-images";

type MenuCategoryBlockProps = {
  category: MenuCategory;
};

export function MenuCategoryBlock({ category }: MenuCategoryBlockProps) {
  return (
    <section
      data-gsap-reveal
      className="space-y-6 rounded-3xl border border-white/10 bg-secondary/80 p-6 sm:p-8"
    >
      <div className="space-y-3">
        <p className="text-xl md:text-2xl font-medium text-primary/75">
          {category.name}
        </p>
        <p className="max-w-2xl text-sm text-accent/74 md:text-base">
          {category.description}
        </p>
      </div>
      <div data-gsap-stagger className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        {category.items.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-white/10 bg-background/70 p-4 sm:p-5"
          >
            <div className="mb-3 flex items-start justify-between gap-3 sm:gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-primary/25 bg-primary/12 shadow-[0_10px_26px_rgba(0,0,0,0.25)] ring-1 ring-white/15">
                  <Image
                    src={getMenuItemImage(category.slug, item)}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <h3 className="min-w-0 font-heading text-lg md:text-xl font-semibold text-white">{item.name}</h3>
              </div>
              <span className="shrink-0 font-heading text-xs font-medium text-primary sm:text-sm">{item.price}</span>
            </div>
            <p className="text-sm text-accent/72 md:text-base">
              <span className="font-medium text-accent">Ingredienser:</span>{" "}
              {item.ingredients}
            </p>
            {item.note ? (
              <p className="mt-3 text-sm text-accent/68 md:text-base">{item.note}</p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
