import { BasePackage, PackagePricing, TourSlug } from "@/types";

/**
 * ------------------------------------------------------------
 * Filter state shape (mirrors the nuqs parsers in the component)
 * ------------------------------------------------------------
 */
export interface TourFilters {
  q: string;
  category: string[];
  destination: string;
  duration: string;
  minPrice: number | null;
  maxPrice: number | null;
  featured: boolean;
  sort: string;
}

/**
 * ------------------------------------------------------------
 * Static option lists
 * ------------------------------------------------------------
 */
export const sortOptions = [
  { label: "Featured First", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Duration", value: "duration" },
];

export const durationBuckets = [
  { label: "1–5 Days", value: "1-5" },
  { label: "6–10 Days", value: "6-10" },
  { label: "10+ Days", value: "10+" },
];

/**
 * ------------------------------------------------------------
 * Helpers
 * ------------------------------------------------------------
 */
function matchesDurationBucket(days: number, bucket: string): boolean {
  switch (bucket) {
    case "1-5":
      return days >= 1 && days <= 5;
    case "6-10":
      return days >= 6 && days <= 10;
    case "10+":
      return days > 10;
    default:
      return true;
  }
}

function sortPackages(
  packages: BasePackage[],
  pricing: Partial<Record<TourSlug, PackagePricing>>,
  sort: string
): BasePackage[] {
  const sorted = [...packages];
  const priceOf = (pkg: BasePackage) =>
    pricing[pkg.slug as TourSlug]?.startingPrice ?? 0;

  switch (sort) {
    case "price-asc":
      sorted.sort((a, b) => priceOf(a) - priceOf(b));
      break;
    case "price-desc":
      sorted.sort((a, b) => priceOf(b) - priceOf(a));
      break;
    case "duration":
      sorted.sort((a, b) => a.duration.days - b.duration.days);
      break;
    case "featured":
    default:
      sorted.sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured));
      break;
  }
  return sorted;
}

/**
 * ------------------------------------------------------------
 * Main filter entrypoint
 * ------------------------------------------------------------
 */
export function filterPackages(
  packages: BasePackage[],
  pricing: Partial<Record<TourSlug, PackagePricing>>,
  filters: TourFilters
): BasePackage[] {
  let result = packages.filter((pkg) => pkg.status === "PUBLISHED");

  // Search: title, description, destinations
  if (filters.q.trim()) {
    const q = filters.q.trim().toLowerCase();
    result = result.filter(
      (pkg) =>
        pkg.title.toLowerCase().includes(q) ||
        pkg.description.toLowerCase().includes(q) ||
        pkg.destinations.some((d) => d.toLowerCase().includes(q))
    );
  }

  // Category (checkbox, multi-select)
  if (filters.category.length > 0) {
    result = result.filter((pkg) => filters.category.includes(pkg.category));
  }

  // Destination (radio, single-select)
  if (filters.destination) {
    result = result.filter((pkg) =>
      pkg.destinations.includes(filters.destination)
    );
  }

  // Duration (radio bucket)
  if (filters.duration) {
    result = result.filter((pkg) =>
      matchesDurationBucket(pkg.duration.days, filters.duration)
    );
  }

  // Starting price (range)
  if (filters.minPrice != null || filters.maxPrice != null) {
    result = result.filter((pkg) => {
      const price = pricing[pkg.slug as TourSlug]?.startingPrice;
      if (price == null) return false;
      if (filters.minPrice != null && price < filters.minPrice) return false;
      if (filters.maxPrice != null && price > filters.maxPrice) return false;
      return true;
    });
  }

  // Featured (toggle)
  if (filters.featured) {
    result = result.filter((pkg) => pkg.isFeatured);
  }

  return sortPackages(result, pricing, filters.sort);
}

/**
 * ------------------------------------------------------------
 * Derived option builders (call once, memoize in the component)
 * ------------------------------------------------------------
 */
export function getDestinationOptions(packages: BasePackage[]): string[] {
  const set = new Set<string>();
  packages.forEach((pkg) => pkg.destinations.forEach((d) => set.add(d)));
  return Array.from(set).sort();
}

export function getPriceBounds(
  pricing: Partial<Record<TourSlug, PackagePricing>>
): { min: number; max: number } {
  const prices = Object.values(pricing)
    .map((p) => p?.startingPrice)
    .filter((p): p is number => typeof p === "number");

  if (prices.length === 0) return { min: 0, max: 0 };
  return { min: Math.min(...prices), max: Math.max(...prices) };
}