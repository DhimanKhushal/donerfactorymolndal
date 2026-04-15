import type { MenuCategory } from "@/lib/menu-data";

type MenuCategoryBlockProps = {
  category: MenuCategory;
};

export function MenuCategoryBlock({ category }: MenuCategoryBlockProps) {
  return (
    <section className="space-y-6 rounded-[2rem] border border-white/10 bg-secondary/80 p-6 sm:p-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-primary/75">
          {category.name}
        </p>
        <p className="max-w-2xl text-base leading-8 text-accent/65">
          {category.description}
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {category.items.map((item) => (
          <div
            key={item.name}
            className="rounded-[1.5rem] border border-white/10 bg-background/70 p-5"
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <h3 className="font-heading text-2xl text-white">{item.name}</h3>
              <span className="text-sm text-primary">{item.price}</span>
            </div>
            <p className="mb-3 text-xs uppercase tracking-[0.26em] text-accent/45">
              {item.tag}
            </p>
            <p className="text-sm leading-7 text-accent/70">
              <span className="font-medium text-accent">Ingredienser:</span>{" "}
              {item.ingredients}
            </p>
            {item.note ? (
              <p className="mt-3 text-sm leading-6 text-accent/55">{item.note}</p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
