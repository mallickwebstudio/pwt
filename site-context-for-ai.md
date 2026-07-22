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
  href: string;
  packageCount: number;
  startingPrice: number;
};

export type PackageCategory = {
  name: string;
  count: number;
  image: string;
};


below are general overview of my datas located at "@/lib/db/..."

export const highlightsData: Record<TourSlug, HighlightsData> = {
  "dubai-abu-dhabi-yas-island": {
    highlights: [
      "Burj Khalifa 124th & 125th Floor tickets",
      "2 Hours White Glass Yacht Ride with Indian Dinner",
      "VIP Desert Safari in 4x4 Land Cruiser with live shows",
      "Luxury Limousine Ride with Bollywood Music",
      "Yas Island Hotel stay with Theme Park access",
      "Abu Dhabi City Tour & BAPS Hindu Temple visit"
    ],
    activities: [
      { label: "Burj Khalifa Observation Deck", imageSrc: "/images/activities/burj-khalifa.webp" },
      { label: "Marina Yacht Dinner Cruise", imageSrc: "/images/activities/dubai-yacht.webp" },
      { label: "4x4 Desert Safari & Live Shows", imageSrc: "/images/activities/desert-safari.webp" },
      { label: "Luxury Limousine Ride", imageSrc: "/images/activities/dubai-limo.webp" },
      { label: "Yas Island Theme Parks", imageSrc: "/images/activities/yas-island.webp" },
      { label: "BAPS Hindu Temple Visit", imageSrc: "/images/activities/baps-temple.webp" }
    ]
  },...

  
export const hotelsData: Partial<Record<TourSlug, HotelStay[]>> = {
  "singapore-malaysia-7d": [
    { city: "Singapore", nights: 3, name: "Hotel Ibis Novena / Boss" },
    { city: "Kuala Lumpur", nights: 3, name: "Grand Continental / Ancasa" }
  ],...

  
export const inclusionsExclusionsData: Partial<Record<TourSlug, InclusionsExclusions>> = {
  "dubai-abu-dhabi-yas-island": {
    inclusions: [
      "Return Flight from Ahmedabad / Abu Dhabi with confirmed PNR",
      "30-Day Single Entry UAE Visa",
      "5 Nights Stay at Premium Hotel & Yas Island Hotel",
      "1 Lunch, 6 Dinners, 6 Breakfasts (Jain/Swaminarayan available)",
      "Dubai City Tour, Monorail, Dubai Mall & Fountain Show",
      "Tourism Dirham Tax & 5% Dubai VAT"
    ],
    exclusions: [
      "5% GST & 2% TCS",
      "Travel Insurance & personal expenses",
      "Quad biking in Desert Safari"
    ]
  },...

  
export const itinerariesData: Partial<Record<TourSlug, ItineraryDay[]>> = {
  "dubai-abu-dhabi-yas-island": [
    { day: 1, title: "Arrival in UAE + 2-Hour Yacht Dinner" },
    { day: 2, title: "Dubai City Tour + Monorail + Burj Khalifa 124/125th Floor" },
    { day: 3, title: "VIP Desert Safari in 4x4 Land Cruiser + Live Shows & Garba" },
    { day: 4, title: "Limousine Ride + Shopping at Meena Bazaar & Gold Souk" },
    { day: 5, title: "Transfer to Yas Island + Theme Parks Access" },
    { day: 6, title: "Abu Dhabi City Tour + BAPS Temple + Departure" }
  ],

  
export const mediaData: Record<TourSlug, MediaItem[]> = {
  "dubai-abu-dhabi-yas-island": [
    { url: "/images/packages/dubai-hero.webp", altText: "Dubai Skyline & Burj Khalifa", isHero: true },
    { url: "/images/packages/dubai-yacht.webp", altText: "Dubai Marina Yacht", isHero: false }
  ],

  
const offerSlugs = new Set([
  "dubai-abu-dhabi-yas-island",
  "singapore-malaysia-7d",
]);

export const offersData = packagesData.filter((item) =>
  offerSlugs.has(item.slug)
);


export const packagesData: BasePackage[] = [
  {
    slug: "dubai-abu-dhabi-yas-island",
    title: "Dubai & Abu Dhabi Yas Island Experience",
    description: "Experience the luxury of Dubai and Abu Dhabi featuring 124th-floor Burj Khalifa access, a private yacht dinner, VIP desert safari, and Theme Park adventures at Yas Island.",
    status: "PUBLISHED",
    category: "International",
    isFeatured: true,
    flyerHref: "/flyers/dubai-yas-island.pdf",
    duration: { nights: 5, days: 6 },
    destinations: ["Dubai", "Abu Dhabi", "Yas Island"]
  },...

  
export const seoData: Record<TourSlug, SeoData> = {
  "dubai-abu-dhabi-yas-island": {
    metaTitle: "Dubai & Yas Island Tour Package | Patel World Tour",
    metaDescription: "Book 6 Days Dubai & Abu Dhabi tour package with Burj Khalifa, Desert Safari, Yacht Dinner and Yas Island Theme Parks."
  },...


// Keyed dictionary for zero-redundancy O(1) slug lookup
export const tourDatesData: Partial<Record<TourSlug, PackageRouteMeta>> = {
    "singapore-malaysia-7d": {
        departureCity: "Ahmedabad",
        returnCity: "Ahmedabad",
        defaultTotalSeats: 30,
        dates: [
            { id: "sm-2026-06-17", departureDate: "2026-06-17", returnDate: "2026-06-23", availableSeats: 0, status: "SOLD_OUT" },
            { id: "sm-2026-07-15", departureDate: "2026-07-15", returnDate: "2026-07-21", availableSeats: 4, status: "FILLING_FAST" },
            { id: "sm-2026-08-14", departureDate: "2026-08-14", returnDate: "2026-08-20", availableSeats: 12, status: "AVAILABLE" },
            { id: "sm-2026-09-16", departureDate: "2026-09-16", returnDate: "2026-09-22", availableSeats: 22, status: "AVAILABLE" }
        ]
    },

Keep this data in mind,
For now 