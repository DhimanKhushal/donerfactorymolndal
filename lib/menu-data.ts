export type MenuItem = {
  name: string;
  price: string;
  tag: string;
  ingredients: string;
  note?: string;
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
        price: "135:-",
        tag: "Döner",
        ingredients:
          "Isbergssallad, lök, tomat, picklad rödkål, saltgurka, peperoni och sås.",
        note: "Välj mellan högrev döner, kyckling döner eller nötkebab.",
      },
      {
        name: "Sandwich",
        price: "135:-",
        tag: "Döner",
        ingredients:
          "Isbergssallad, lök, tomat, picklad rödkål, saltgurka, peperoni och sås.",
        note: "Välj mellan högrev döner, kyckling döner eller nötkebab.",
      },
      {
        name: "XL Wrap",
        price: "145:-",
        tag: "Döner",
        ingredients:
          "Nybakat bröd, isbergssallad, lök, tomat, picklad rödkål, saltgurka, peperoni och sås.",
        note: "Välj mellan högrev döner, kyckling döner eller nötkebab.",
      },
      {
        name: "Tallrik",
        price: "155:-",
        tag: "Döner",
        ingredients:
          "Pommes eller ris, isbergssallad, lök, tomat, picklad rödkål, saltgurka, peperoni, hummus och sås.",
        note: "Välj mellan högrev döner, kyckling döner eller nötkebab.",
      },
      {
        name: "Sallad",
        price: "155:-",
        tag: "Döner",
        ingredients:
          "Tzatziki, hummus, dolma, isbergssallad, lök, tomat och picklad rödkål.",
        note: "Välj mellan högrev döner, kyckling döner eller nötkebab.",
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
        price: "135:-",
        tag: "Vegetariskt",
        ingredients:
          "Isbergssallad, lök, tomat, picklad rödkål, hummus och sås.",
        note: "Välj mellan falafel och halloumi.",
      },
      {
        name: "XL Wrap",
        price: "145:-",
        tag: "Vegetariskt",
        ingredients:
          "Nybakat bröd, isbergssallad, lök, tomat, picklad rödkål, hummus och sås.",
        note: "Välj mellan falafel och halloumi.",
      },
      {
        name: "Tallrik",
        price: "155:-",
        tag: "Vegetariskt",
        ingredients:
          "Pommes eller ris, isbergssallad, lök, tomat, picklad rödkål, saltgurka, peperoni, hummus och sås.",
        note: "Välj mellan falafel och halloumi.",
      },
      {
        name: "Sallad",
        price: "155:-",
        tag: "Vegetariskt",
        ingredients:
          "Tzatziki, hummus, dolma, isbergssallad, lök, tomat, picklad rödkål, saltgurka, peperoni och sås.",
        note: "Välj mellan falafel och halloumi.",
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
        price: "135:-",
        tag: "Original",
        ingredients: "Tomatsås, ost.",
      },
      {
        name: "2. Funghi",
        price: "145:-",
        tag: "Original",
        ingredients: "Tomatsås, ost, champinjoner.",
      },
      {
        name: "3. Vesuvio",
        price: "145:-",
        tag: "Original",
        ingredients: "Tomatsås, ost, skinka.",
      },
      {
        name: "4. Hawaii",
        price: "145:-",
        tag: "Original",
        ingredients: "Tomatsås, ost, skinka, ananas.",
      },
      {
        name: "5. Capricciosa",
        price: "150:-",
        tag: "Original",
        ingredients: "Tomatsås, ost, skinka, champinjoner.",
      },
      {
        name: "6. Venezia",
        price: "150:-",
        tag: "Original",
        ingredients: "Tomatsås, ost, skinka, tonfisk.",
      },
      {
        name: "7. Calzone",
        price: "150:-",
        tag: "Original",
        ingredients: "Tomatsås, ost, skinka.",
      },
      {
        name: "8. Salami",
        price: "155:-",
        tag: "Original",
        ingredients: "Tomatsås, ost, salami, oliver, champinjoner, lök, peperoni.",
      },
      {
        name: "9. Acapulco",
        price: "160:-",
        tag: "Oxfilé",
        ingredients:
          "Tomatsås, ost, champinjoner, oxfilé, paprika, jalapeños, bearnaisesås.",
      },
      {
        name: "10. Huset",
        price: "160:-",
        tag: "Oxfilé",
        ingredients:
          "Tomatsås, ost, champinjoner, oxfilé, köttfärs, lök, färsk vitlök, bearnaisesås.",
      },
      {
        name: "11. Africana",
        price: "160:-",
        tag: "Oxfilé",
        ingredients:
          "Tomatsås, ost, oxfilé, banan, ananas, jordnötter, curry.",
      },
      {
        name: "12. Oxfilé Gorgonzola",
        price: "160:-",
        tag: "Oxfilé",
        ingredients:
          "Tomatsås, ost, champinjoner, oxfilé, lök, gorgonzola.",
      },
      {
        name: "13. Jägare",
        price: "170:-",
        tag: "Oxfilé",
        ingredients:
          "Tomatsås, ost, skinka, oxfilé, köttfärs, peperoni, bearnaisesås.",
      },
      {
        name: "14. Kebabpizza",
        price: "150:-",
        tag: "Kebab",
        ingredients:
          "Tomatsås, ost, champinjoner, kebabkött, peperoni, valfri sås.",
      },
      {
        name: "15. Batman",
        price: "155:-",
        tag: "Kebab",
        ingredients:
          "Tomatsås, ost, skinka, lök, kebabkött, peperoni, valfri sås.",
      },
      {
        name: "16. Chipspizza",
        price: "155:-",
        tag: "Kebab",
        ingredients:
          "Tomatsås, ost, kebabkött, pommes, peperoni, valfri sås.",
      },
      {
        name: "17. Kebabspecial",
        price: "160:-",
        tag: "Kebab",
        ingredients:
          "Tomatsås, ost, kebabkött, isbergssallad, färska tomater, gurka, lök, peperoni, valfri sås.",
      },
      {
        name: "18. Mölndal",
        price: "165:-",
        tag: "Kebab",
        ingredients:
          "Tomatsås, ost, högrev döner, hackad persilja, rödlök, färska tomater, saltgurka, valfri sås.",
      },
      {
        name: "19. Orientale",
        price: "145:-",
        tag: "Kyckling",
        ingredients:
          "Tomatsås, ost, champinjoner, lök, kyckling, curry.",
      },
      {
        name: "20. Kycklingpizza",
        price: "145:-",
        tag: "Kyckling",
        ingredients:
          "Tomatsås, ost, champinjoner, banan, ananas, kyckling, curry.",
      },
      {
        name: "21. Kyckling Dönerspecial",
        price: "155:-",
        tag: "Kyckling",
        ingredients:
          "Tomatsås, ost, kyckling döner, isbergssallad, färska tomater, gurka, lök, peperoni, valfri sås.",
      },
      {
        name: "22. Chipskyckling",
        price: "155:-",
        tag: "Kyckling",
        ingredients:
          "Tomatsås, ost, kyckling, pommes, peperoni, valfri sås.",
      },
      {
        name: "23. Kycklingthai",
        price: "150:-",
        tag: "Kyckling",
        ingredients:
          "Tomatsås, ost, kyckling, ananas, cashewnötter, purjolök, jalapeños, toppas med söt chilisås.",
      },
      {
        name: "24. Mexicana",
        price: "155:-",
        tag: "Köttfärs",
        ingredients:
          "Tomatsås, ost, champinjoner, köttfärs, paprika, jalapeños, lök.",
      },
      {
        name: "25. Pizzaspecial",
        price: "150:-",
        tag: "Köttfärs",
        ingredients:
          "Tomatsås, ost, champinjoner, skinka, köttfärs, lök, tabasco.",
      },
      {
        name: "26. Romana",
        price: "150:-",
        tag: "Köttfärs",
        ingredients: "Tomatsås, ost, skinka, köttfärs, lök.",
      },
      {
        name: "27. Curiosa",
        price: "150:-",
        tag: "Köttfärs",
        ingredients:
          "Tomatsås, ost, köttfärs, färska tomater, peperoni, vitost, valfri sås.",
      },
      {
        name: "28. Havet",
        price: "165:-",
        tag: "Havets",
        ingredients: "Tomatsås, ost, tonfisk, räkor, musslor, krabba.",
      },
      {
        name: "29. Quattro",
        price: "165:-",
        tag: "Havets",
        ingredients: "Tomatsås, ost, skinka, champinjoner, räkor, musslor.",
      },
      {
        name: "30. Vegetale",
        price: "140:-",
        tag: "Vegetariska",
        ingredients:
          "Tomatsås, ost, champinjoner, paprika, lök, oliver, kronärtskocka.",
      },
      {
        name: "31. Aten",
        price: "135:-",
        tag: "Vegetariska",
        ingredients:
          "Tomatsås, ost, champinjoner, vitost, oliver, purjolök.",
      },
      {
        name: "32. Rhodos",
        price: "135:-",
        tag: "Vegetariska",
        ingredients:
          "Tomatsås, ost, oliver, lök, vitost, färska tomater, tzatziki.",
      },
      {
        name: "33. Falafelpizza",
        price: "145:-",
        tag: "Vegetariska",
        ingredients:
          "Tomatsås, ost, champinjoner, paprika, lök, falafel, valfri sås.",
      },
      {
        name: "34. Tutti Frutti",
        price: "145:-",
        tag: "Vegetariska",
        ingredients: "Tomatsås, ost, banan, ananas, jordnötter, curry.",
      },
    ],
  },
  {
    slug: "burgare",
    name: "Burgare",
    description:
      "Alla burgare serveras med pommes och dip. Dipp 20 kr. Sötpotatis +30 kr. Megaburger: 59:- extra med extra dönerkebab.",
    items: [
      {
        name: "Hot Gringo 160g",
        price: "150:- / Kombo 119:-",
        tag: "Burgare",
        ingredients:
          "Sallad, picklad rödlök, dubbelcheddarost, bacon, stark BBQ-sås, chipotlemajo.",
      },
      {
        name: "Charlie 160g",
        price: "150:- / Kombo 119:-",
        tag: "Burgare",
        ingredients:
          "Chilimajo, sallad, rödlök, färsk jalapeños, karamelliserad lök, dubbel pepperjack.",
      },
      {
        name: "Paris 160g",
        price: "150:- / Kombo 119:-",
        tag: "Burgare",
        ingredients:
          "Sallad, rödlök, majonnäs, senap, honung, BBQ-sås, pepperjackost, lökringar.",
      },
      {
        name: "East Burger 160g",
        price: "150:- / Kombo 119:-",
        tag: "Burgare",
        ingredients:
          "Sallad, picklad rödlök, dubbel cheddarost, bacon, karamelliserad lök, tryffelmajo.",
      },
      {
        name: "Dubbel Cheeseburger 160g",
        price: "150:- / Kombo 119:-",
        tag: "Burgare",
        ingredients: "Dubbel-dubbel cheddarost, ketchup, pickles.",
      },
      {
        name: "Halloumi Burger",
        price: "150:- / Kombo 119:-",
        tag: "Burgare",
        ingredients:
          "Sallad, picklad rödlök, färska jalapeños, rödlök, tomat, tryffelmajo.",
      },
      {
        name: "Enkel Cheeseburger 80g",
        price: "140:- / Kombo 119:-",
        tag: "Burgare",
        ingredients: "Dubbel cheddarost, ketchup, pickels.",
      },
      {
        name: "Chicken Burger",
        price: "140:- / Kombo 119:-",
        tag: "Burgare",
        ingredients: "Sallad, tomat, senap, majonnäs, ketchup.",
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
      "Tillval, snacks och såser enligt menyn. Såser: mild kebabsås, vitlök kebabsås, stark kebabsås, harisa chili, bearnaisesås.",
    items: [
      {
        name: "Pommes",
        price: "49:-",
        tag: "Lägg till",
        ingredients: "Klassiska pommes.",
      },
      {
        name: "Sötpommes",
        price: "59:-",
        tag: "Lägg till",
        ingredients: "Sötpotatispommes.",
      },
      {
        name: "Cheddarfries",
        price: "59:-",
        tag: "Lägg till",
        ingredients:
          "Pommes, cheddarost, jalapeño, rödlök, starksås.",
      },
      {
        name: "Mixfries + dippsås",
        price: "69:-",
        tag: "Lägg till",
        ingredients: "Blandade fries serverade med dippsås.",
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
