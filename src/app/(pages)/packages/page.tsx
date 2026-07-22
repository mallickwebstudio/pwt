import Hero from "@/components/section/hero";
import WhyUs from "@/components/section/why-pwt";
import Category from "../(home)/category";
import BookingSteps from "../../../components/section/booking-steps";
import FaqThree from "../../../components/section/faq";
import FilterSection from "./filter-section";
import { Suspense } from "react";
import FeaturedPackages from '@/components/section/featured-packages'

export default function page() {
  return (
    <>
      <Hero
        h1="Packages"
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
