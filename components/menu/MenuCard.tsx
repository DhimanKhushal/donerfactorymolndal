import type { MenuItem } from "@/lib/menu-data";
import Image from "next/image";
import { getMenuItemImage } from "@/lib/menu-images";

type MenuCardProps = {
  item: MenuItem;
  categorySlug?: string;
};

export function MenuCard({ item, categorySlug = item.tag.toLowerCase() }: MenuCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-primary/40 hover:bg-white/10">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-primary/25 bg-primary/12 shadow-[0_10px_26px_rgba(0,0,0,0.25)] ring-1 ring-white/15">
              <Image
                src={getMenuItemImage(categorySlug, item)}
                alt={item.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <h3 className="min-w-0 font-heading text-lg md:text-xl font-semibold text-white">{item.name}</h3>
          </div>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            {item.price}
          </span>
        </div>
        <p className="text-sm text-accent/72 md:text-base">
          <span className="font-medium text-accent">Ingredienser:</span>{" "}
          {item.ingredients}
        </p>
        {item.note ? (
          <p className="text-sm text-accent/68 md:text-base">{item.note}</p>
        ) : null}
      </div>
    </article>
  );
}
