import { 
  BasePackage, 
  PackageRouteMeta, 
  MediaItem, 
  PackagePricing 
} from "@/types";
import { packagesData } from "./packages";
import { tourDatesData } from "./tour-dates";
import { mediaData } from "./media";
import { pricingData } from "./pricing";

export interface UpcomingTourPackage {
  package: BasePackage;
  routeMeta: PackageRouteMeta;
  heroMedia?: MediaItem;
  pricing?: PackagePricing;
}

export const upcomingToursData: UpcomingTourPackage[] = packagesData
  .map((pkg): UpcomingTourPackage | null => {
    const routeMeta = tourDatesData[pkg.slug];
    if (!routeMeta) return null;

    const hasUpcomingDates = routeMeta.dates.some(
      (d) => new Date(d.departureDate) >= new Date() && d.status !== "SOLD_OUT"
    );

    if (!hasUpcomingDates) return null;

    const heroMedia = mediaData[pkg.slug]?.find((m) => m.isHero);
    const pricing = pricingData?.[pkg.slug];

    return {
      package: pkg,
      routeMeta,
      heroMedia,
      pricing,
    };
  })
  .filter((item): item is UpcomingTourPackage => item !== null);