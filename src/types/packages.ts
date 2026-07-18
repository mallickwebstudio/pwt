// types/tour.ts

export type TourCategory = 'International' | 'Domestic';

export type CurrencyCode = 'INR' | 'USD' | 'EUR';

export interface Duration {
    nights: number;
    days: number;
}

export interface Pricing {
    startingPrice: number;
    currency: CurrencyCode;
    adultRate?: number;
    childNoBed?: number;
    childNoBed5to12?: number;
    childNoBed2to5?: number;
    infantRate?: number;
    taxes?: string;
    note?: string; // e.g., "Contact for custom quote"
}

export interface HotelStay {
    city: string;
    nights: number;
    name: string;
}

export interface Media {
    url: string;
    altText: string;
    isHero: boolean;
}

export interface Seo {
    metaTitle: string;
    metaDescription: string;
}

export interface ItineraryDay {
    day: number;
    title: string;
    description?: string;
}

export interface TourPackage {
    id: string;
    slug: string;
    title: string;
    description: string;
    status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
    category: TourCategory;
    isFeatured: boolean;
    flyerHref?: string;
    duration: Duration;
    pricing: Pricing;
    media: Media[];
    destinations: string[];
    hotels?: HotelStay[];
    highlights?: string[];
    inclusions?: string[];
    exclusions?: string[];
    itineraryOverview?: ItineraryDay[];
    seo: Seo;
}