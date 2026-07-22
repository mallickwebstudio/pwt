import Hero from "@/components/section/hero";
import WhyUs from "@/components/section/why-pwt";
import BookingSteps from "@/components/section/booking-steps";
import FaqThree from "@/components/section/faq";
import FilterSection from "./filter-section";
import { Suspense } from "react";
import FeaturedPackages from '@/components/section/featured-packages'
import { Metadata } from "next";
import { JsonLd } from "@/components/other/json-ld";
import { jsonLd } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Tour Packages",
  description:
    "Browse our collection of domestic and international holiday packages, family tours, honeymoon trips, group tours, and customized vacations.",

  alternates: {
    canonical: "/packages",
  },

  openGraph: {
    title: "Tour Packages | Patel World Tour",
    description:
      "Find your perfect holiday package at the best prices.",
    url: "/packages",
    images: ["/og.png"],
  },
};

export default function page() {
  return (
    <>
      <JsonLd
        data={jsonLd.packages}
        breadcrumb={[
          {
            name: "Home",
            href: "/",
          },
          {
            name: "Packages",
            href: "/packages",
          },
        ]}
      />
      <Hero
        h1="Explore Tour Packages"
        p="Discover carefully curated domestic and international tour packages designed for every type of traveler. Whether you're planning a family vacation, honeymoon, group tour, or adventure getaway, use the filters below to find the perfect trip based on your destination, duration, budget, and travel preferences."
      />
      <Suspense fallback={<>Loading</>}>
        <FilterSection />
      </Suspense>
      <FeaturedPackages />
      {/* <Category /> */}
      <WhyUs />
      <BookingSteps />
      <FaqThree />
    </>
  )
}
