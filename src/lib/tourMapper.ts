// lib/db/tourMapper.ts
import {
    BasePackage,
    HighlightsData,
    HotelStay,
    InclusionsExclusions,
    ItineraryDay,
    MediaItem,
    SeoData,
    PackageRouteMeta,
    TourSlug,
    PackagePricing,
} from "@/types"; // Adjust path to your file
import { packagesData } from "./db/packages";
import { highlightsData } from "./db/highlights";
import { hotelsData } from "./db/hotels";
import { inclusionsExclusionsData } from "./db/inclusionsExclusions";
import { itinerariesData } from "./db/itineraries";
import { mediaData } from "./db/media";
import { seoData } from "./db/seo";
import { tourDatesData } from "./db/tour-dates";
import { pricingData } from "./db/pricing";

export interface EnrichedTourPackage extends BasePackage {
    pricing?: PackagePricing;
    highlights?: HighlightsData;
    hotels?: HotelStay[];
    inclusionsExclusions?: InclusionsExclusions;
    itinerary?: ItineraryDay[];
    media?: MediaItem[];
    seo?: SeoData;
    routeMeta?: PackageRouteMeta;
}

export function getEnrichedTourPackages(): EnrichedTourPackage[] {
    return packagesData.map((pkg) => ({
        ...pkg,
        pricing: (pricingData as Partial<Record<TourSlug, PackagePricing>>)?.[pkg.slug],
        highlights: highlightsData[pkg.slug],
        hotels: hotelsData[pkg.slug],
        inclusionsExclusions: inclusionsExclusionsData[pkg.slug],
        itinerary: itinerariesData[pkg.slug],
        media: mediaData[pkg.slug],
        seo: seoData[pkg.slug],
        routeMeta: tourDatesData[pkg.slug],
    }));
}