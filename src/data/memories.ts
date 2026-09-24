import type { Memory } from "@/types";

// Sample Memory Wall entries — replace with real customer submissions once
// the site is live. A few deliberately omit a photo to exercise the
// conditional rendering in MemoryWallGrid.
export const memories: Memory[] = [
  {
    id: "m1",
    name: "Ananya R.",
    memoryText:
      "I haven't seen Melody since I was 10! My mom used to buy me one every Friday after school.",
  },
  {
    id: "m2",
    name: "Karthik S.",
    memoryText:
      "Mango Bite was my entire summer holiday. Completely forgot this existed until now.",
    photo: "/placeholders/candy-swirl.svg",
  },
  {
    id: "m3",
    name: "Priya M.",
    memoryText:
      "My dad used to bring home a whole steel tin of Kismi from my grandparents' house. This took me right back.",
  },
  {
    id: "m4",
    name: "Rohan D.",
    memoryText:
      "These were my school-break favourites. Splitting a Rangeen Toffee with my best friend somehow made it taste better.",
    photo: "/placeholders/toffee-wrap.svg",
  },
  {
    id: "m5",
    name: "Sneha K.",
    memoryText:
      "Living abroad now, and this is the first time in years I've seen something that actually tastes like home.",
  },
  {
    id: "m6",
    name: "Vikram T.",
    memoryText:
      "Collected so many of those little bubblegum comics as a kid. Didn't expect to feel this nostalgic over candy wrappers.",
    photo: "/placeholders/gum-pack.svg",
  },
];
