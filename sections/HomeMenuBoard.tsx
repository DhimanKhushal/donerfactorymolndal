import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { categoryImages, getMenuItemImage } from "@/lib/menu-images";
import { menuCategories } from "@/lib/menu-data";

const categoryAccents: Record<string, string> = {
  doner: "from-[#8b2e2e]/32 via-[#221313] to-[#120f0f]",
  vegetariskt: "from-[#3f6f3f]/24 via-[#171911] to-[#120f0f]",
  pizzor: "from-[#b65b2b]/28 via-[#211411] to-[#120f0f]",
  burgare: "from-[#b37a2a]/26 via-[#201510] to-[#120f0f]",
  gott: "from-[#8b2e65]/22 via-[#1c1218] to-[#120f0f]",
  "lagg-till": "from-[#6b5a3a]/26 via-[#171411] to-[#120f0f]",
};

const sideMenuColumns = [
  ["doner", "vegetariskt", "lagg-till"],
  ["burgare", "gott"],
] as const;

type MenuCategory = (typeof menuCategories)[number];

function MenuCategoryTable({
  category,
  isWide = false,
}: {
  category: MenuCategory;
  isWide?: boolean;
}) {
  return (
    <article
      data-gsap-reveal
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${
        categoryAccents[category.slug] ?? categoryAccents.doner
      } p-5 shadow-[0_24px_90px_rgba(0,0,0,0.24)] sm:p-6 ${
        isWide ? "xl:col-span-2" : ""
      }`}
    >
      <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-white/8 blur-2xl" />
      <div className="relative mb-5 flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-primary/35 bg-black/24 shadow-[0_16px_36px_rgba(0,0,0,0.28)]">
            <Image
              src={categoryImages[category.slug] ?? categoryImages.doner}
              alt=""
              fill
              sizes="64px"
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/12" />
          </div>
          <div>
            <h3 className="font-heading text-2xl text-white sm:text-3xl">
              {category.name}
            </h3>
            <p className="mt-1 max-w-xl text-sm leading-6 text-accent/68">
              {category.description}
            </p>
          </div>
        </div>
        <span className="shrink-0 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-accent/70">
          {category.items.length}
        </span>
      </div>

      <div
        className={`relative grid gap-2 ${
          isWide ? "lg:grid-cols-2 lg:gap-3" : ""
        }`}
      >
        {category.items.map((item) => (
          <div
            key={`${category.slug}-${item.name}`}
            className="grid gap-3 rounded-2xl border border-white/8 bg-black/18 p-3 transition hover:border-primary/28 hover:bg-black/28 sm:grid-cols-[1fr_auto] sm:items-start sm:p-4"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/10 bg-primary/12">
                  <Image
                    src={getMenuItemImage(category.slug, item)}
                    alt=""
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </span>
                <h4 className="truncate font-heading text-lg text-white">
                  {item.name}
                </h4>
              </div>
              <p className="mt-2 text-sm leading-6 text-accent/68">
                {item.ingredients}
              </p>
            </div>
            <p className="rounded-full bg-primary/14 px-3 py-1 text-sm font-semibold text-primary sm:justify-self-end">
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

export function HomeMenuBoard() {
  const totalItems = menuCategories.reduce(
    (total, category) => total + category.items.length,
    0,
  );
  const categoriesBySlug = new Map(
    menuCategories.map((category) => [category.slug, category]),
  );

  return (
    <section className="relative overflow-hidden bg-[#100d0d] py-18 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(139,46,46,0.2),transparent_28%),radial-gradient(circle_at_88%_30%,rgba(245,230,211,0.08),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.025),transparent_20%,rgba(139,46,46,0.08)_100%)]" />
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
          <div className="flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              {totalItems} rätter
            </span>
            <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent/76">
              6 kategorier
            </span>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-2 xl:items-start">
          {sideMenuColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="grid gap-5">
              {column.map((slug) => {
                const category = categoriesBySlug.get(slug);

                if (!category) return null;

                return <MenuCategoryTable key={category.slug} category={category} />;
              })}
            </div>
          ))}

          {categoriesBySlug.get("pizzor") ? (
            <MenuCategoryTable
              category={categoriesBySlug.get("pizzor") as MenuCategory}
              isWide
            />
          ) : null}
        </div>
      </Container>
    </section>
  );
}
