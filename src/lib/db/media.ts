import { MediaItem, TourSlug } from "@/types";

export const mediaData: Record<TourSlug, MediaItem[]> = {
  "dubai-abu-dhabi-yas-island": [
    { url: "/images/packages/dubai-hero.webp", altText: "Dubai Skyline & Burj Khalifa", isHero: true },
    { url: "/images/packages/dubai-yacht.webp", altText: "Dubai Marina Yacht", isHero: false }
  ],
  "singapore-malaysia-7d": [
    { url: "/images/packages/singapore-merlion.webp", altText: "Merlion Park Singapore", isHero: true },
    { url: "/images/packages/kl-petronas.webp", altText: "Petronas Twin Towers Kuala Lumpur", isHero: false }
  ],
  "singapore-malaysia-thailand-11d": [
    { url: "/images/packages/smt-hero.webp", altText: "Gardens by the Bay & Bangkok Temple", isHero: true }
  ],
  "singapore-malaysia-cruise-9d": [
    { url: "/images/packages/resort-world-cruise.webp", altText: "Resort World Cruise at Night", isHero: true }
  ],
  "singapore-malaysia-thailand-cruise-13d": [
    { url: "/images/packages/smtc-hero.webp", altText: "Cruise and South East Asia Cities", isHero: true }
  ],
  "vietnam-signature-9d": [
    { url: "/images/packages/vietnam-halong.webp", altText: "Halong Bay Cruise", isHero: true },
    { url: "/images/packages/vietnam-golden-bridge.webp", altText: "Golden Bridge Ba Na Hills", isHero: false }
  ],
  "bali-exotic-escape": [
    { url: "/images/packages/bali-hero.webp", altText: "Bali Beach & Temple", isHero: true }
  ],
  "phuket-krabi-escape": [
    { url: "/images/packages/phuket-hero.webp", altText: "Phi Phi Island Speedboat", isHero: true }
  ],
  "goa-beach-bliss": [
    { url: "/images/packages/goa-beach.webp", altText: "Goa Beach Sunset", isHero: true }
  ],
  "kerala-backwaters-munnar": [
    { url: "/images/packages/kerala-houseboat.webp", altText: "Alleppey Houseboat", isHero: true }
  ],
  "shimla-mandi-manali": [
    { url: "/images/packages/himachal-mountains.webp", altText: "Himachal Valley", isHero: true }
  ],
  "royal-udaipur-customize": [
    { url: "/images/packages/udaipur-palace.webp", altText: "Udaipur City Palace", isHero: true }
  ],
  "kashmir-paradise-on-earth": [
    { url: "/images/packages/kashmir-shikara.webp", altText: "Dal Lake Shikara Ride", isHero: true }
  ],
  "sikkim-gangtok-darjeeling": [
    { url: "/images/packages/sikkim-lake.webp", altText: "Tsomgo Lake Sikkim", isHero: true }
  ]
};