export type MenuItem = {
  name: string;
  price: string;
  tag: string;
  ingredients: string;
  note?: string;
  image?: string;
};

export type MenuCategory = {
  slug: string;
  name: string;
  description: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    slug: "doner",
    name: "Döner",
    description:
      "Välj mellan högrev döner, kyckling döner eller nötkebab i våra klassiska serveringar.",
    items: [
      {
        name: "Pita",
        price: "120:-",
        tag: "Döner",
        ingredients:
          "Isbergssallad, lök, tomat, picklad rödkål, saltgurka, peperoni och sås.",
        note: "Välj mellan högrev döner, kyckling döner eller nötkebab.",
        image: "/assets/menu/featured/doner-feature.webp",
      },
      {
        name: "Sandwich",
        price: "120:-",
        tag: "Döner",
        ingredients:
          "Isbergssallad, lök, tomat, picklad rödkål, saltgurka, peperoni och sås.",
        note: "Välj mellan högrev döner, kyckling döner eller nötkebab.",
        image: "/assets/menu/featured/doner-feature.webp",
      },
      {
        name: "XL Wrap",
        price: "130:-",
        tag: "Döner",
        ingredients:
          "Nybakat bröd, isbergssallad, lök, tomat, picklad rödkål, saltgurka, peperoni och sås.",
        note: "Välj mellan högrev döner, kyckling döner eller nötkebab.",
        image: "/assets/menu/icons/xl-wrap.webp",
      },
      {
        name: "Tallrik",
        price: "140:-",
        tag: "Döner",
        ingredients:
          "Pommes eller ris, isbergssallad, lök, tomat, picklad rödkål, saltgurka, peperoni, hummus och sås.",
        note: "Välj mellan högrev döner, kyckling döner eller nötkebab.",
        image: "/assets/menu/featured/doner-feature.webp",
      },
      {
        name: "Sallad",
        price: "140:-",
        tag: "Döner",
        ingredients:
          "Tzatziki, hummus, dolma, isbergssallad, lök, tomat och picklad rödkål.",
        note: "Välj mellan högrev döner, kyckling döner eller nötkebab.",
        image: "/assets/menu/featured/doner-feature.webp",
      },
    ],
  },
  {
    slug: "vegetariskt",
    name: "Vegetariskt",
    description:
      "Vegetariska favoriter där du väljer mellan falafel och halloumi.",
    items: [
      {
        name: "Pita",
        price: "110:-",
        tag: "Vegetariskt",
        ingredients:
          "Isbergssallad, lök, tomat, picklad rödkål, hummus och sås.",
        note: "Välj mellan falafel och halloumi.",
        image: "/assets/menu/featured/vegetarian-feature.webp",
      },
      {
        name: "XL Wrap",
        price: "120:-",
        tag: "Vegetariskt",
        ingredients:
          "Nybakat bröd, isbergssallad, lök, tomat, picklad rödkål, hummus och sås.",
        note: "Välj mellan falafel och halloumi.",
        image: "/assets/menu/icons/xl-wrap.webp",
      },
      {
        name: "Tallrik",
        price: "130:-",
        tag: "Vegetariskt",
        ingredients:
          "Pommes eller ris, isbergssallad, lök, tomat, picklad rödkål, saltgurka, peperoni, hummus och sås.",
        note: "Välj mellan falafel och halloumi.",
        image: "/assets/menu/featured/vegetarian-feature.webp",
      },
      {
        name: "Sallad",
        price: "130:-",
        tag: "Vegetariskt",
        ingredients:
          "Tzatziki, hummus, dolma, isbergssallad, lök, tomat, picklad rödkål, saltgurka, peperoni och sås.",
        note: "Välj mellan falafel och halloumi.",
        image: "/assets/menu/featured/vegetarian-feature.webp",
      },
    ],
  },
  {
    slug: "pizzor",
    name: "Pizzor",
    description:
      "Original, oxfilé, kebab, kyckling, köttfärs, havets och vegetariska pizzor enligt er meny. Glutenfri botten +20 kr.",
    items: [
      {
        name: "1. Margarita",
        price: "120:-",
        tag: "Original",
        ingredients: "Tomatsås, ost.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "2. Funghi",
        price: "130:-",
        tag: "Original",
        ingredients: "Tomatsås, ost, champinjoner.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "3. Vesuvio",
        price: "130:-",
        tag: "Original",
        ingredients: "Tomatsås, ost, skinka.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "4. Hawaii",
        price: "130:-",
        tag: "Original",
        ingredients: "Tomatsås, ost, skinka, ananas.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "5. Capricciosa",
        price: "135:-",
        tag: "Original",
        ingredients: "Tomatsås, ost, skinka, champinjoner.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "6. Venezia",
        price: "135:-",
        tag: "Original",
        ingredients: "Tomatsås, ost, skinka, tonfisk.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "7. Calzone",
        price: "135:-",
        tag: "Original",
        ingredients: "Tomatsås, ost, skinka.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "8. Salami",
        price: "140:-",
        tag: "Original",
        ingredients: "Tomatsås, ost, salami, oliver, champinjoner, lök, peperoni.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "9. Acapulco",
        price: "145:-",
        tag: "Oxfilé",
        ingredients:
          "Tomatsås, ost, champinjoner, oxfilé, paprika, jalapeños, bearnaisesås.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "10. Huset",
        price: "145:-",
        tag: "Oxfilé",
        ingredients:
          "Tomatsås, ost, champinjoner, oxfilé, köttfärs, lök, färsk vitlök, bearnaisesås.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "11. Africana",
        price: "145:-",
        tag: "Oxfilé",
        ingredients:
          "Tomatsås, ost, oxfilé, banan, ananas, jordnötter, curry.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "12. Oxfilé Gorgonzola",
        price: "145:-",
        tag: "Oxfilé",
        ingredients:
          "Tomatsås, ost, champinjoner, oxfilé, lök, gorgonzola.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "13. Jägare",
        price: "155:-",
        tag: "Oxfilé",
        ingredients:
          "Tomatsås, ost, skinka, oxfilé, köttfärs, peperoni, bearnaisesås.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "14. Kebabpizza",
        price: "135:-",
        tag: "Kebab",
        ingredients:
          "Tomatsås, ost, champinjoner, kebabkött, peperoni, valfri sås.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "15. Batman",
        price: "140:-",
        tag: "Kebab",
        ingredients:
          "Tomatsås, ost, skinka, lök, kebabkött, peperoni, valfri sås.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "16. Chipspizza",
        price: "140:-",
        tag: "Kebab",
        ingredients:
          "Tomatsås, ost, kebabkött, pommes, peperoni, valfri sås.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "17. Kebabspecial",
        price: "145:-",
        tag: "Kebab",
        ingredients:
          "Tomatsås, ost, kebabkött, isbergssallad, färska tomater, gurka, lök, peperoni, valfri sås.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "18. Mölndal",
        price: "150:-",
        tag: "Kebab",
        ingredients:
          "Tomatsås, ost, högrev döner, hackad persilja, rödlök, färska tomater, saltgurka, valfri sås.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "19. Orientale",
        price: "130:-",
        tag: "Kyckling",
        ingredients:
          "Tomatsås, ost, champinjoner, lök, kyckling, curry.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "20. Kycklingpizza",
        price: "130:-",
        tag: "Kyckling",
        ingredients:
          "Tomatsås, ost, champinjoner, banan, ananas, kyckling, curry.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "21. Kyckling Dönerspecial",
        price: "140:-",
        tag: "Kyckling",
        ingredients:
          "Tomatsås, ost, kyckling döner, isbergssallad, färska tomater, gurka, lök, peperoni, valfri sås.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "22. Chipskyckling",
        price: "140:-",
        tag: "Kyckling",
        ingredients:
          "Tomatsås, ost, kyckling, pommes, peperoni, valfri sås.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "23. Kycklingthai",
        price: "135:-",
        tag: "Kyckling",
        ingredients:
          "Tomatsås, ost, kyckling, ananas, cashewnötter, purjolök, jalapeños, toppas med söt chilisås.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "24. Mexicana",
        price: "140:-",
        tag: "Köttfärs",
        ingredients:
          "Tomatsås, ost, champinjoner, köttfärs, paprika, jalapeños, lök.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "25. Pizzaspecial",
        price: "135:-",
        tag: "Köttfärs",
        ingredients:
          "Tomatsås, ost, champinjoner, skinka, köttfärs, lök, tabasco.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "26. Romana",
        price: "135:-",
        tag: "Köttfärs",
        ingredients: "Tomatsås, ost, skinka, köttfärs, lök.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "27. Curiosa",
        price: "135:-",
        tag: "Köttfärs",
        ingredients:
          "Tomatsås, ost, köttfärs, färska tomater, peperoni, vitost, valfri sås.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "28. Havet",
        price: "150:-",
        tag: "Havets",
        ingredients: "Tomatsås, ost, tonfisk, räkor, musslor, krabba.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "29. Quattro",
        price: "150:-",
        tag: "Havets",
        ingredients: "Tomatsås, ost, skinka, champinjoner, räkor, musslor.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "30. Vegetale",
        price: "125:-",
        tag: "Vegetariska",
        ingredients:
          "Tomatsås, ost, champinjoner, paprika, lök, oliver, kronärtskocka.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "31. Aten",
        price: "120:-",
        tag: "Vegetariska",
        ingredients:
          "Tomatsås, ost, champinjoner, vitost, oliver, purjolök.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "32. Rhodos",
        price: "120:-",
        tag: "Vegetariska",
        ingredients:
          "Tomatsås, ost, oliver, lök, vitost, färska tomater, tzatziki.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "33. Falafelpizza",
        price: "130:-",
        tag: "Vegetariska",
        ingredients:
          "Tomatsås, ost, champinjoner, paprika, lök, falafel, valfri sås.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
      {
        name: "34. Tutti Frutti",
        price: "130:-",
        tag: "Vegetariska",
        ingredients: "Tomatsås, ost, banan, ananas, jordnötter, curry.",
        image: "/assets/menu/featured/pizza-feature.webp",
      },
    ],
  },
  {
    slug: "burgare",
    name: "Burgare",
    description:
      "Single Burger (90g): 109 SEK. Double Burger (180g): 139 SEK.",
    items: [
      {
        name: "THE O.G.",
        price: "109 SEK / 139 SEK",
        tag: "Burgare",
        ingredients:
          "Pickles, Onion, Mayonnaise, Ketchup, Mustard, Cheddar cheese",
        image: "/assets/menu/featured/burger-feature.webp",
      },
      {
        name: "THE DAREDEVIL",
        price: "109 SEK / 139 SEK",
        tag: "Burgare",
        ingredients:
          "Lettuce, Pickled jalapeno, Roasted onion, Cheddar cheese, Garlic mayo, BBQ sauce",
        image: "/assets/menu/featured/burger-feature.webp",
      },
      {
        name: "THE TANGY TORNADO",
        price: "109 SEK / 139 SEK",
        tag: "Burgare",
        ingredients:
          "Lettuce, Pickled red onion, Bacon, Tomato, Cheddar cheese, Mayonnaise, BBQ sauce, Coleslaw",
        note: "Available in Halloumi / Chicken",
        image: "/assets/menu/featured/burger-feature.webp",
      },
      {
        name: "THE GODFATHER",
        price: "109 SEK / 139 SEK",
        tag: "Burgare",
        ingredients:
          "Lettuce, Tomato, Pickles, Red onion, Caramelized onion, Cheddar cheese, House dressing",
        image: "/assets/menu/featured/burger-feature.webp",
      },
      {
        name: "THE LUXURY TRYFFEL",
        price: "109 SEK / 139 SEK",
        tag: "Burgare",
        ingredients:
          "Lettuce, Tomato, Bacon, Red onion, Cheddar cheese, Truffle mayo, House dressing",
        image: "/assets/menu/featured/burger-feature.webp",
      },
    ],
  },
  {
    slug: "gott",
    name: "Gott!",
    description: "Söta avslut och milkshakes från er dessertmeny.",
    items: [
      {
        name: "Churros med Nutella",
        price: "69:-",
        tag: "Dessert",
        ingredients: "Churros serverade med Nutella.",
      },
      {
        name: "Milkshake - Nutella",
        price: "69:-",
        tag: "Milkshake",
        ingredients: "Milkshake med Nutella.",
      },
      {
        name: "Milkshake - Choklad",
        price: "69:-",
        tag: "Milkshake",
        ingredients: "Milkshake med choklad.",
      },
      {
        name: "Milkshake - Jordgubbar",
        price: "69:-",
        tag: "Milkshake",
        ingredients: "Milkshake med jordgubbar.",
      },
      {
        name: "Milkshake - Bounty",
        price: "69:-",
        tag: "Milkshake",
        ingredients: "Milkshake med Bounty.",
      },
      {
        name: "Milkshake - Pistage",
        price: "69:-",
        tag: "Milkshake",
        ingredients: "Milkshake med pistage.",
      },
    ],
  },
  {
    slug: "lagg-till",
    name: "Lägg till",
    description:
      "Fries, loaded fries, dip sauces and other add-ons.",
    items: [
      {
        name: "Regular Fries",
        price: "49 SEK",
        tag: "Lägg till",
        ingredients: "Fries",
      },
      {
        name: "Sweet Potato Fries",
        price: "59 SEK",
        tag: "Lägg till",
        ingredients: "Sweet potato fries",
      },
      {
        name: "Loaded Fries",
        price: "49 SEK",
        tag: "Lägg till",
        ingredients:
          "Garlic mayo, BBQ sauce, Roasted onion, Pickled jalapeno",
      },
      {
        name: "Dip Sauces",
        price: "20 SEK each",
        tag: "Lägg till",
        ingredients:
          "Truffle mayo, Chili mayo, House dressing, Aioli, BBQ sauce",
      },
      {
        name: "Kött 90g",
        price: "69:-",
        tag: "Lägg till",
        ingredients: "Extra kött 90g.",
      },
      {
        name: "Mozzarellasticks 6 st",
        price: "69:-",
        tag: "Lägg till",
        ingredients: "Sex mozzarellasticks.",
      },
      {
        name: "Chilicheese 6 st",
        price: "69:-",
        tag: "Lägg till",
        ingredients: "Sex chilicheese.",
      },
      {
        name: "Lökringar 6 st",
        price: "69:-",
        tag: "Lägg till",
        ingredients: "Sex lökringar.",
      },
      {
        name: "Chicken Nuggets 6 st",
        price: "69:-",
        tag: "Lägg till",
        ingredients: "Sex chicken nuggets.",
      },
      {
        name: "Hummus",
        price: "59:-",
        tag: "Lägg till",
        ingredients: "Krämig hummus.",
      },
      {
        name: "Tzatziki",
        price: "59:-",
        tag: "Lägg till",
        ingredients: "Tzatziki.",
      },
      {
        name: "Dolma 6 st",
        price: "59:-",
        tag: "Lägg till",
        ingredients: "Sex dolma.",
      },
      {
        name: "Extra dip",
        price: "20:-",
        tag: "Lägg till",
        ingredients:
          "Välj mellan mild kebabsås, vitlök kebabsås, stark kebabsås, harisa chili eller bearnaisesås.",
      },
    ],
  },
];
