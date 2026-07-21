import Hero from "@/components/section/hero";
import WhyUs from "../(home)/why-us";
import Category from "../(home)/category";
import Package from "../(home)/package";
import BookingSteps from "../(home)/booking-steps";
import FaqThree from "../(home)/faq";
import FilterSection from "./filter-section";
import { Suspense } from "react";

export default function page() {
  return (
    <>
      <Hero
        h1="Packages"
      />
      <Suspense fallback={<>Loading</>}>
        <FilterSection />
      </Suspense>
      <Package />
      <Category />
      <WhyUs />
      <BookingSteps />
      <FaqThree />
    </>
  )
}
