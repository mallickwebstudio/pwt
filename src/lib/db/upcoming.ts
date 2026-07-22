import { BasePackage, PackageRouteMeta, MediaItem, PackagePricing } from "@/types";
import { packagesData } from "./packages";
import { tourDatesData } from "./tour-dates";
import { mediaData } from "./media";
import { pricingData } from "./pricing";

export interface UpcomingTourPackage {
  package: BasePackage;
  routeMeta: PackageRouteMeta;
  heroMedia?: MediaItem;
  pricing?: PackagePricing;
  nextDepartureDate: string;
}

// Format today's date as YYYY-MM-DD for fast string comparison
const TODAY = new Date().toISOString().slice(0, 10);

export const upcomingToursData: UpcomingTourPackage[] = packagesData
  .map((pkg): UpcomingTourPackage | null => {
    const routeMeta = tourDatesData[pkg.slug];
    if (!routeMeta) return null;

    // Filter valid upcoming dates & sort them chronologically
    const validDates = routeMeta.dates
      .filter((d) => d.departureDate >= TODAY && d.status !== "SOLD_OUT")
      .sort((a, b) => a.departureDate.localeCompare(b.departureDate));

    if (validDates.length === 0) return null;

    const heroMedia = mediaData[pkg.slug]?.find((m) => m.isHero);
    const pricing = pricingData?.[pkg.slug];

    return {
      package: pkg,
      routeMeta: {
        ...routeMeta,
        dates: validDates, // Sanitized & chronologically sorted
      },
      heroMedia,
      pricing,
      nextDepartureDate: validDates[0].departureDate,
    };
  })
  .filter((item): item is UpcomingTourPackage => item !== null)
  // Sort packages by their earliest departure date
  .sort((a, b) => a.nextDepartureDate.localeCompare(b.nextDepartureDate));