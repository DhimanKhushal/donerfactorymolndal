import type { MenuItem } from "@/lib/menu-data";

export const categoryImages: Record<string, string> = {
  doner: "/assets/menu/generated/doner-category.webp",
  vegetariskt: "/assets/menu/generated/vegetarian-category.webp",
  pizzor: "/assets/menu/generated/pizza-category.webp",
  burgare: "/assets/menu/generated/burger-category.webp",
  gott: "/assets/menu/generated/dessert-category.webp",
  "lagg-till": "/assets/menu/generated/sides-category.webp",
};

export function getMenuItemImage(categorySlug: string, item: MenuItem) {
  const name = item.name.toLowerCase();
  const tag = item.tag.toLowerCase();
  const ingredients = item.ingredients.toLowerCase();
  const searchable = `${name} ${tag} ${ingredients}`;

  if (categorySlug === "doner") {
    if (name.includes("wrap") || name.includes("sandwich")) {
      return "/assets/menu/generated/doner-wrap-detail.webp";
    }

    if (name.includes("tallrik")) {
      return "/assets/menu/generated/doner-plate-detail.webp";
    }

    if (name.includes("sallad")) {
      return "/assets/menu/generated/vegetarian-plate-detail.webp";
    }

    return "/assets/menu/generated/doner-category.webp";
  }

  if (categorySlug === "vegetariskt") {
    if (name.includes("tallrik") || name.includes("sallad")) {
      return "/assets/menu/generated/vegetarian-plate-detail.webp";
    }

    return "/assets/menu/generated/vegetarian-category.webp";
  }

  if (categorySlug === "pizzor") {
    if (name.includes("funghi") || name.includes("capricciosa")) {
      return "/assets/menu/generated/pizza-funghi-detail.webp";
    }

    if (
      searchable.includes("hawaii") ||
      searchable.includes("ananas") ||
      searchable.includes("banan")
    ) {
      return "/assets/menu/generated/pizza-hawaii-detail.webp";
    }

    return "/assets/menu/generated/pizza-category.webp";
  }

  if (categorySlug === "burgare") {
    if (searchable.includes("chicken") || searchable.includes("crispy")) {
      return "/assets/menu/generated/chicken-burger-detail.webp";
    }

    return "/assets/menu/generated/burger-category.webp";
  }

  if (categorySlug === "gott") {
    return "/assets/menu/generated/dessert-category.webp";
  }

  if (categorySlug === "lagg-till") {
    return "/assets/menu/generated/sides-category.webp";
  }

  return categoryImages[categorySlug] ?? "/assets/menu/generated/doner-category.webp";
}
