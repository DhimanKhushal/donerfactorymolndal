import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { menuCategories } from "../lib/menu-data.ts";

const photoPrices = JSON.parse(readFileSync(new URL("./fixtures/menu-prices.json", import.meta.url)));

test("existing dishes retain the prices from the supplied menu photos", () => {
  for (const { category, name, price } of photoPrices) {
    const item = menuCategories.find((entry) => entry.slug === category)?.items.find((entry) => entry.name === name);
    assert.ok(item, `Missing photographed dish: ${category}/${name}`);
    assert.deepEqual(item.price.match(/\d+/g)?.map(Number), [price], `Incorrect price: ${category}/${name}`);
  }
});

test("menu categories and dish names are unique and every dish has a price", () => {
  assert.equal(new Set(menuCategories.map((category) => category.slug)).size, menuCategories.length);
  for (const category of menuCategories) {
    assert.equal(new Set(category.items.map((item) => item.name)).size, category.items.length);
    for (const item of category.items) {
      assert.ok(item.name.trim() && item.ingredients.trim());
      assert.ok(item.price.match(/\d+/g)?.every((value) => Number(value) > 0));
    }
  }
});
