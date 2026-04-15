import type { MenuItem } from "@/lib/menu-data";

type MenuCardProps = {
  item: MenuItem;
};

export function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:border-primary/40 hover:bg-white/10">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-2xl text-white">{item.name}</h3>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            {item.price}
          </span>
        </div>
        <p className="text-sm uppercase tracking-[0.28em] text-accent/45">
          {item.tag}
        </p>
        <p className="text-base leading-7 text-accent/70">
          <span className="font-medium text-accent">Ingredienser:</span>{" "}
          {item.ingredients}
        </p>
        {item.note ? (
          <p className="text-sm leading-6 text-accent/55">{item.note}</p>
        ) : null}
      </div>
    </article>
  );
}
