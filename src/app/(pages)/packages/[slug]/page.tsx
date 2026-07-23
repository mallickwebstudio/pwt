import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { packagesData } from "@/db/packages";
import { mediaData } from "@/db/media";
import { pricingData } from "@/db/pricing";
import { highlightsData } from "@/db/highlights";
import { hotelsData } from "@/db/hotels";
import { itinerariesData } from "@/db/itineraries";
import { seoData } from "@/db/seo"; // adjust path if your SEO export lives elsewhere
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
import { inclusionsExclusionsData } from "@/db/inclusionsExclusions";
import Faq from "@/components/section/faq";
import Cta from "@/components/section/cta";
import WhyPwt from "@/components/section/why-pwt";
import { JsonLd } from "@/components/other/json-ld";
import { jsonLd } from "@/lib/metadata";


interface PageProps {
  params: Promise<{ slug: string }>;
}

// Pre-render every known slug at build time
export function generateStaticParams() {
  return TOUR_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const tour = packagesData.find((p) => p.slug === slug);

  if (!tour) {
    return {
      title: "Package Not Found",
    };
  }

  const heroImage = mediaData[tour.slug].find((img) => img.isHero);

  return {
    title: seoData[tour.slug].metaTitle,
    description: seoData[tour.slug].metaDescription,

    alternates: {
      canonical: `/packages/${tour.slug}`,
    },

    openGraph: {
      title: seoData[tour.slug].metaTitle,
      description: seoData[tour.slug].metaDescription,
      url: `/packages/${tour.slug}`,
      images: heroImage
        ? [
          {
            url: heroImage.url,
            alt: heroImage.altText,
          },
        ]
        : ["/og.png"],
    },
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
      <JsonLd
        data={jsonLd.packageDetails(data)}
        breadcrumb={[
          {
            name: "Home",
            href: "/",
          },
          {
            name: "Packages",
            href: "/packages",
          },
          {
            name: data.title,
            href: `/packages/${data.slug}`,
          },
        ]}
      />
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