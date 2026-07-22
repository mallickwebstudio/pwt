import Hero from "@/components/section/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Patel World Tour for tour bookings, visa assistance, passport services, or customized travel packages. We're here to help.",

  alternates: {
    canonical: "/contact-us",
  },

  openGraph: {
    title: "Contact Patel World Tour",
    description:
      "Get in touch with our travel experts for personalized assistance.",
    url: "/contact-us",
    images: ["/og.png"],
  },
};

export default function page() {
  return (
    <Hero
      headerCenter
      h1="Contact Us"
    />
  )
}
