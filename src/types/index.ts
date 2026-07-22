export const TOUR_SLUGS = [
  // International
  "dubai-classic-6d",
  "dubai-abu-dhabi-yas-island",
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
  slug: TourSlug;
  title: string;
  description: string;
  status: "PUBLISHED" | "DRAFT";
  category: "International" | "Domestic" | "Family" | "Couple";
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

// 

export type DepartureStatus = "AVAILABLE" | "FILLING_FAST" | "SOLD_OUT";
type Year = `${number}${number}${number}${number}`;
type Month = "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12";
type Day = "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15"
  | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31";

export type ISODateString = `${Year}-${Month}-${Day}`;

export interface TourDateInstance {
  id: string;
  departureDate: ISODateString;
  returnDate: ISODateString;
  availableSeats: number;
  status: DepartureStatus;
}

export interface PackageRouteMeta {
  departureCity: string;
  returnCity: string;
  defaultTotalSeats: number;
  dates: TourDateInstance[];
}


////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

export type Destination = {
  name: string;
  image: string;
  imageAlt: string;
  href: string;
  packageCount: number;
  startingPrice: number;
};

export type PackageCategory = {
  name: string;
  count: number;
  image: string;
};