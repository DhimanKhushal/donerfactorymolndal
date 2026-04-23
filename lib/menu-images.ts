import type { MenuItem } from "@/lib/menu-data";

export const categoryImages: Record<string, string> = {
  doner: "/menu-generated/menu-doner.webp",
  vegetariskt: "/menu-generated/menu-vegetarian.webp",
  pizzor: "/menu-generated/menu-pizza.webp",
  burgare: "/menu-generated/menu-burger.webp",
  gott: "/menu-generated/menu-dessert.webp",
  "lagg-till": "/menu-generated/menu-sides.webp",
};

export function getMenuItemImage(categorySlug: string, item: MenuItem) {
  const name = item.name.toLowerCase();
  const tag = item.tag.toLowerCase();
  const ingredients = item.ingredients.toLowerCase();
  const searchable = `${name} ${tag} ${ingredients}`;

  if (categorySlug === "doner") {
    if (name.includes("wrap") || name.includes("sandwich")) {
      return "/featured-generated/doner-wrap.webp";
    }

    if (name.includes("tallrik")) {
      return "/featured-generated/doner-plate.webp";
    }

    if (name.includes("sallad")) {
      return "/featured-generated/vegetarian-plate.webp";
    }

    return "/menu-generated/menu-doner.webp";
  }

  if (categorySlug === "vegetariskt") {
    if (name.includes("tallrik") || name.includes("sallad")) {
      return "/featured-generated/vegetarian-plate.webp";
    }

    return "/menu-generated/menu-vegetarian.webp";
  }

  if (categorySlug === "pizzor") {
    if (name.includes("funghi") || name.includes("capricciosa")) {
      return "/featured-generated/pizza-funghi.webp";
    }

    if (
      searchable.includes("hawaii") ||
      searchable.includes("ananas") ||
      searchable.includes("banan")
    ) {
      return "/featured-generated/pizza-hawaii.webp";
    }

    return "/menu-generated/menu-pizza.webp";
  }

  if (categorySlug === "burgare") {
    if (searchable.includes("chicken") || searchable.includes("crispy")) {
      return "/featured-generated/chicken-burger.webp";
    }

    return "/menu-generated/menu-burger.webp";
  }

  if (categorySlug === "gott") {
    return "/menu-generated/menu-dessert.webp";
  }

  if (categorySlug === "lagg-till") {
    return "/menu-generated/menu-sides.webp";
  }

  return categoryImages[categorySlug] ?? "/menu-generated/menu-doner.webp";
}
