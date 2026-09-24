import type { Product } from "@/types";

// Placeholder catalog — swap in real product photography and copy when
// available. Food-info fields (ingredients/allergens/etc.) are only present
// on a few items deliberately, to prove FoodInfoTable renders nothing for
// products where that data hasn't been supplied yet — never fabricate it.
export const products: Product[] = [
  {
    id: "melody",
    name: "Melody",
    slug: "melody",
    image: "/products/melody.jpg",
    shortDescription: "The soft caramel-toffee everyone tried to make last.",
    longDescription:
      "A nostalgic classic that takes you straight back to school bags, pocket money and neighbourhood candy shops.",
    category: "chocolates",
    era: "90s",
    memoryCategory: "school-days",
    badge: "CHILDHOOD_CLASSIC",
    whyYoullRememberIt:
      "That soft, chewy centre wrapped in a crinkly gold-and-brown wrapper — the treat you always saved for last recess.",
    perfectFor: ["Childhood nostalgia", "Gifts", "Memory boxes", "Retro-themed celebrations"],
    ingredients: "Sugar, cocoa solids, milk solids, caramel, edible vegetable fat, emulsifiers.",
    allergens: "Contains milk. May contain traces of nuts.",
    netQuantity: "13.2 g (single piece)",
    manufacturer: "Placeholder Confectioners Pvt. Ltd., India",
    storage: "Store in a cool, dry place away from direct sunlight.",
    origin: "Made in India",
    availability: "Available",
  },
  {
    id: "kismi",
    name: "Kismi",
    slug: "kismi",
    image: "/products/kismi.jpg",
    shortDescription:
      "Elaichi flavoured bar — cardamom and caramel, the classic Parle chew.",
    longDescription:
      "Parle Kismi is an iconic chewy candy from Parle Products, famous for its distinct blend of cardamom (elaichi) and caramel.",
    category: "toffees",
    era: "classics",
    memoryCategory: "kirana-classics",
    manufacturer: "Parle Products",
  },
  {
    id: "jelly-cups",
    name: "Jelly Cups",
    slug: "jelly-cups",
    image: "/products/jelly-cups.jpg",
    shortDescription: "Assorted jelly cups — a fruity burst in every mini cup.",
    longDescription:
      "Indulge in a vibrant burst of sweetness with our Assorted Jelly Cups. Each mini cup delivers a fruity experience in beloved flavours.",
    category: "candies",
    era: "classics",
    memoryCategory: "pocket-money-picks",
  },
  {
    id: "polo",
    name: "Polo",
    slug: "polo",
    image: "/products/polo.jpg",
    shortDescription: "The mint with the hole.",
    longDescription:
      "An iconic brand of ring-shaped peppermint breath mint, known famously as \"The Mint with the Hole\".",
    category: "candies",
    era: "classics",
    memoryCategory: "kirana-classics",
  },
  {
    id: "burst",
    name: "Burst",
    slug: "burst",
    image: "/products/burst.jpg",
    shortDescription: "A bite-sized, crunchy wafer snack with a creamy centre.",
    longDescription:
      "Burst is a bite-sized, crunchy wafer snack filled with smooth flavoured cream.",
    category: "classic-treats",
    era: "classics",
    memoryCategory: "kirana-classics",
    manufacturer: "Bisk Farm",
  },
  {
    id: "coffy-bite",
    name: "Coffy Bite",
    slug: "coffy-bite",
    image: "/products/coffy-bite.jpg",
    shortDescription: "The iconic chewy coffee-caramel toffee.",
    longDescription: "An iconic chewy coffee-caramel toffee.",
    category: "toffees",
    era: "classics",
    memoryCategory: "kirana-classics",
  },
  {
    id: "mentos-rainbow",
    name: "Mentos Rainbow",
    slug: "mentos-rainbow",
    image: "/products/mentos-rainbow.jpg",
    shortDescription: "A colourful mix of seven fruity flavours in the classic Mentos roll.",
    longDescription:
      "Experience a vibrant burst of fruity flavours with Mentos Rainbow! This iconic roll brings you a colourful mix of seven delicious fruit flavours, all packed into the classic, pocket-friendly Mentos format.",
    category: "candies",
    era: "classics",
    memoryCategory: "pocket-money-picks",
  },
  {
    id: "pala-kova",
    name: "Pala Kova (Milk Kova)",
    slug: "pala-kova",
    image: "/products/pala-kova.jpg",
    shortDescription: "A rich, traditional Indian milk sweet with a fudge-like bite.",
    longDescription:
      "A classic, rich traditional Indian milk-based sweet made by slow-cooking milk and sugar until it thickens into a dense, fudge-like consistency.",
    category: "classic-treats",
    era: "classics",
    memoryCategory: "birthday-memories",
  },
  {
    id: "jbs-sweet-bun",
    name: "JBS Sweet Bun",
    slug: "jbs-sweet-bun",
    image: "/products/jbs-sweet-bun.jpg",
    shortDescription: "Soft, fluffy sweet buns — the ultimate ready-to-eat snack.",
    longDescription:
      "Indulge in the perfect everyday treat with JBS Sweet Buns! Soft, fluffy, and baked to perfection, these sweet buns offer a delightful touch of sweetness in every bite. They are the ultimate ready-to-eat snack for your busy routine.",
    category: "classic-treats",
    era: "classics",
    memoryCategory: "school-days",
  },
  {
    id: "choki-choki",
    name: "Choki Choki",
    slug: "choki-choki",
    image: "/products/choki-choki.jpg",
    shortDescription: "Real chocolate paste and milk in a fun, easy-to-squeeze stick.",
    longDescription:
      "Enjoy the rich, creamy taste of real chocolate paste mixed with smooth milk in a fun, easy-to-squeeze stick. It is the perfect mess-free snack for kids and adults alike!",
    category: "chocolates",
    era: "classics",
    memoryCategory: "school-days",
  },
  {
    id: "boomer-jelly",
    name: "Boomer Jelly",
    slug: "boomer-jelly",
    image: "/products/boomer-jelly.jpg",
    shortDescription: "Chewing gum on the outside, juicy jelly centre on the inside.",
    longDescription:
      "A fun, nostalgic bubble gum featuring a soft chewing gum exterior paired with a juicy, flavoured jelly centre.",
    category: "gum",
    era: "classics",
    memoryCategory: "tv-time-treats",
  },
  {
    id: "little-hearts",
    name: "Little Hearts",
    slug: "little-hearts",
    image: "/products/little-hearts.jpg",
    shortDescription: "Heart-shaped crunch with a sugar-glaze coating.",
    longDescription: "Sweet with a sugar-glaze coating that melts in your mouth.",
    category: "classic-treats",
    era: "classics",
    memoryCategory: "tv-time-treats",
    manufacturer: "Britannia",
  },
  {
    id: "hajmola",
    name: "Hajmola",
    slug: "hajmola",
    image: "/products/hajmola.jpg",
    shortDescription: "The chatpata tablet that's been a household favourite for decades.",
    longDescription:
      "A household favourite across India for decades, loved for its distinct chatpata (tangy and spicy) taste.",
    category: "classic-treats",
    era: "classics",
    memoryCategory: "kirana-classics",
  },
  {
    id: "alpenliebe-eclairs",
    name: "Alpenliebe Eclairs",
    slug: "alpenliebe-eclairs",
    image: "/products/alpenliebe-eclairs.jpg",
    shortDescription: "Chewy caramel toffee with a rich, molten chocolate centre.",
    longDescription:
      "Alpenliebe Eclairs are popular chewy toffees featuring a smooth, non-sticky caramel exterior filled with a rich, molten chocolate centre.",
    category: "toffees",
    era: "classics",
    memoryCategory: "kirana-classics",
  },
  {
    id: "green-apple-candy",
    name: "Green Apple",
    slug: "green-apple-candy",
    image: "/products/green-apple-candy.jpg",
    shortDescription: "Sweet and tangy green apple boiled candy.",
    longDescription:
      "A vintage-style, oval-shaped boiled sugar confectionery featuring a nostalgic 90s-style sweet and tangy green apple flavour.",
    category: "candies",
    era: "classics",
    memoryCategory: "pocket-money-picks",
  },
  {
    id: "chikki-bites",
    name: "Chikki Bites",
    slug: "chikki-bites",
    image: "/products/chikki-bites.jpg",
    shortDescription: "Bite-sized jaggery-peanut chikki, birthday-tin approved.",
    longDescription:
      "The crunchy jaggery-peanut squares that somehow always turned up in birthday return-gift boxes.",
    category: "classic-treats",
    era: "classics",
    memoryCategory: "birthday-memories",
    badge: "NEW",
    whyYoullRememberIt:
      "Digging through a birthday return-gift bag hoping there'd be a chikki square left inside.",
    perfectFor: ["Gifts", "Events", "Memory boxes", "Retro-themed celebrations"],
    availability: "Available",
  },
  {
    id: "nostalgia-memory-box",
    name: "Nostalgia Memory Box",
    slug: "nostalgia-memory-box",
    image: "/placeholders/memory-box.svg",
    shortDescription: "A curated box of old-school favourites, ready to gift.",
    longDescription:
      "A hand-picked assortment of RETROMELT classics, boxed up for someone who needs their childhood back — even just for an afternoon.",
    category: "classic-treats",
    era: "classics",
    memoryCategory: "memory-boxes",
    badge: "NEW",
    whyYoullRememberIt:
      "Because sometimes the best gift is a whole box of \"I remember this!\" moments in one go.",
    perfectFor: ["Gifts", "Events", "Corporate gifting", "Retro-themed celebrations"],
    availability: "Available",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
