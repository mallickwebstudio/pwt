import { packagesData } from "./packages";

const offerSlugs = new Set([
  "dubai-abu-dhabi-yas-island",
  "singapore-malaysia-7d",
]);

export const offersData = packagesData.filter((item) =>
  offerSlugs.has(item.slug)
);