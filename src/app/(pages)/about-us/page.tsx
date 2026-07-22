import Cta from "@/components/section/cta";
import Faq from "@/components/section/faq";
import FeaturedDestinations from "@/components/section/featured-destinations";
import Hero from "@/components/section/hero";
import Team from "@/components/section/team";
import WhyPwt from "@/components/section/why-pwt";
import MissionVision from "./mission-vision";
import FeaturedPackages from "@/components/section/featured-packages";
import { Metadata } from "next";
import { JsonLd } from "@/components/other/json-ld";
import { jsonLd } from "@/lib/metadata";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Patel World Tour, our mission, experienced travel consultants, and commitment to creating unforgettable domestic and international travel experiences.",

    alternates: {
        canonical: "/about-us",
    },

    openGraph: {
        title: "About Patel World Tour",
        description: "Discover who we are, what we do, and why thousands of travelers trust Patel World Tour.",
        url: "/about-us",
        images: ["/og.png"],
    },
};

export default function page() {
    return (
        <>
            <JsonLd
                data={jsonLd.about}
                breadcrumb={[
                    {
                        name: "Home",
                        href: "/",
                    },
                    {
                        name: "About Us",
                        href: "/about-us",
                    },
                ]}
            />
            <Hero
                h1="Your Trusted Travel Partner for Every Journey"
                p="At Patel World Tour, we believe travel is more than visiting new places—it's about creating unforgettable experiences. We provide complete travel solutions including domestic and international tour packages, visa assistance, flight ticket bookings, passport services, land packages, and customized travel planning. With a customer-first approach and attention to every detail, our team is committed to making every journey smooth, comfortable, and memorable."
            />
            {/* Company Introduction */}
            {/* Our Journey */}
            <MissionVision />
            {/* Values */}
            <WhyPwt />
            {/* Numbers */}
            <Team />
            <FeaturedPackages />
            {/* Services */}
            {/* Testimonials */}
            {/* Partners */}
            {/* Gallery */}
            <Faq />
            <FeaturedDestinations />
            <Cta />
        </>
    )
}



// ### layout type
// 1. Hero

// Layout: Horizontal split

// About Patel World Tour
// Short brand introduction
// CTA: Plan Your Trip
// 2. Company Introduction

// Layout: 2-column (Image + Text)

// Who PWT is
// What you specialize in
// Domestic & International tours
// Group and customized tours
// 3. Our Journey

// Layout: Vertical timeline

// Example:

// Founded

// ↓

// 100+ Tours Organized

// ↓

// 1000+ Happy Travelers

// ↓

// Expanded International Tours

// ↓

// Today
// 4. Mission & Vision

// Layout: Two cards

// Mission
// Vision
// 5. Our Values

// Layout: 3×2 icon grid

// Examples:

// Customer First
// Transparency
// Safety
// Affordable Pricing
// Quality Service
// Memorable Experiences
// 6. Why Choose Patel World Tour

// Layout: Feature cards

// Examples:

// Experienced Tour Managers
// Flight + Hotel + Visa
// Jain Food Available
// 24×7 Support
// Trusted Travel Partners
// Best Price Guarantee
// 7. Numbers That Matter

// Layout: Counter cards

// Example:

// 10+ Years

// 5000+ Travelers

// 100+ Destinations

// 98% Satisfaction

// (Use real numbers.)

// 8. Meet Our Team

// Layout: Team cards

// Founder
// Tour Managers
// Customer Support
// 9. Our Services

// Layout: Icon grid

// International Tours
// Domestic Tours
// Group Tours
// Honeymoon Packages
// Flight Booking
// Hotel Booking
// Visa Assistance
// Travel Insurance
// 10. Popular Destinations

// Layout: Image grid

// Countries and states you frequently operate.

// 11. Customer Testimonials

// Layout: Carousel

// Google reviews or client experiences.

// 12. Certifications & Partners

// Layout: Logo grid

// IATA (if applicable)
// Tourism associations
// Airline partners
// Hotel partners
// Payment partners

// Only include genuine affiliations.

// 13. Gallery

// Layout: Masonry

// Real traveler photos.

// 14. FAQs

// Layout: Accordion

// Questions about PWT itself.

// 15. Contact / Visit Us

// Layout: Two columns

// Office information
// Google Map
// Phone
// WhatsApp
// 16. Final CTA

// Layout: Full-width banner

// Ready for Your Next Adventure?

// Let's Plan It Together.

// [Get Free Quote]
