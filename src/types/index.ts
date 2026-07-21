export const TOUR_SLUGS = [
  // International
  "dubai-abu-dhabi-yas-island",
  "singapore-malaysia-7d",
  "singapore-malaysia-thailand-11d",
  "singapore-malaysia-cruise-9d",
  "singapore-malaysia-thailand-cruise-13d",
  "vietnam-signature-9d",
  "bali-exotic-escape",
  "phuket-krabi-escape",
  
  // Domestic
  "goa-beach-bliss",
  "kerala-backwaters-munnar",
  "shimla-mandi-manali",
  "royal-udaipur-customize",
  "kashmir-paradise-on-earth",
  "sikkim-gangtok-darjeeling"
] as const;

// This generates a strict union type of your exact slug strings
export type TourSlug = typeof TOUR_SLUGS[number];

export interface BasePackage {
  id: string;
  slug: TourSlug;
  title: string;
  description: string;
  status: "PUBLISHED" | "DRAFT";
  category: "International" | "Domestic";
  isFeatured: boolean;
  flyerHref?: string;
  duration: { nights: number; days: number };
  destinations: string[];
}

export interface MediaItem {
  url: string;
  altText: string;
  isHero: boolean;
}

export interface PackagePricing {
  startingPrice: number;
  currency: string;
  adultRate?: number;
  childNoBed5to12?: number;
  childNoBed2to5?: number;
  childNoBed?: number;
  infantRate?: number;
  taxes?: string;
  note?: string;
}

export interface ActivityItem {
  label: string;
  imageSrc: string;
}

export interface HighlightsData {
  highlights: string[];
  activities: ActivityItem[];
}

export interface HotelStay {
  city: string;
  nights: number;
  name: string;
}

export interface InclusionsExclusions {
  inclusions: string[];
  exclusions: string[];
}

export interface ItineraryDay {
  day: number;
  title: string;
}

export interface SeoData {
  metaTitle: string;
  metaDescription: string;
}

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

export type Destination = {
    name: string;
    image: string;
    href: string;
    packageCount: number;
    startingPrice: number;
};

export type PackageCategory = {
    name: string;
    count: number;
    image: string;
};