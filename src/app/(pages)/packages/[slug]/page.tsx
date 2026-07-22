import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { packagesData } from "@/lib/db/packages";
import { mediaData } from "@/lib/db/media";
import { pricingData } from "@/lib/db/pricing";
import { highlightsData } from "@/lib/db/highlights";
import { hotelsData } from "@/lib/db/hotels";
import { itinerariesData } from "@/lib/db/itineraries";
import { seoData } from "@/lib/db/seo"; // adjust path if your SEO export lives elsewhere
import { TOUR_SLUGS, TourSlug } from "@/types";
import PackageHero from "./package-hero";
import {
  PackageGallery,
  PackageItinerary,
  PackageHotels,
  PackagePricing,
  PackageInclusionsExclusions,
  PackageHighlights,
} from "./package-section";
import { inclusionsExclusionsData } from "@/lib/db/inclusionsExclusions";
import Faq from "@/components/section/faq";
import Cta from "@/components/section/cta";
import WhyPwt from "@/components/section/why-pwt";


interface PageProps {
  params: Promise<{ slug: string }>;
}

// Pre-render every known slug at build time
export function generateStaticParams() {
  return TOUR_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = packagesData.find((p) => p.slug === slug);
  if (!data) return {};

  const seo = seoData[slug as TourSlug];

  return {
    title: seo?.metaTitle ?? data.title,
    description: seo?.metaDescription ?? data.description,
  };
}

export default async function PackageDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  const data = packagesData.find((p) => p.slug === slug);
  if (!data || data.status !== "PUBLISHED") notFound();

  const tourSlug = slug as TourSlug;

  const media = mediaData[tourSlug] ?? [];
  const pricing = pricingData[tourSlug];
  const highlights = highlightsData[tourSlug];
  const hotels = hotelsData[tourSlug];
  const inclusionsExclusions = inclusionsExclusionsData[tourSlug];
  const itinerary = itinerariesData[tourSlug];

  // const heroImage = media.find((m) => m.isHero) ?? media[0];

  const imageData = mediaData[data.slug][0]
  const heroImage = imageData.url;
  // const heroImageAlt = imageData.altText;

  return (
    <>
      <PackageHero data={data} heroImage={heroImage} pricing={pricing} />

      {highlights && <PackageHighlights data={highlights} />}

      {media.length > 0 && <PackageGallery media={media} title={data.title} />}

      {itinerary && itinerary.length > 0 && <PackageItinerary days={itinerary} />}

      {hotels && hotels.length > 0 && <PackageHotels hotels={hotels} />}

      {pricing && <PackagePricing pricing={pricing} />}

      {inclusionsExclusions && (
        <PackageInclusionsExclusions data={inclusionsExclusions} />
      )}

      <WhyPwt />
      {/* Reviews / Testimonials <br /> */}
      {/* Important Notes <br /> */}
      <Faq />
      {/* Related Packages <br /> */}
      <Cta />
      {/* <PackageEnquiry data={data} /> */}
    </>
  );
}