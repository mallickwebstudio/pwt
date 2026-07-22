import WhyPwt from "@/components/section/why-pwt";
import Faq from "@/components/section/faq";
import Cta from "@/components/section/cta";
import BookingSteps from "@/components/section/booking-steps";
import { ServiceOverview } from "./service-overview";
import Hero from "@/components/section/hero";

export default function page() {
    return (
        <>
            <Hero
                headerCenter
                h1="Services"
                p="Besides tours and travels we provide below custom services"
            />
            <ServiceOverview />
            {/* Tour Packages

            Visa Assistance

            Flight Ticket Booking

            Land Packages

            Customized Land Packages

            Passport Services

            Expert Travel Support */}
            <WhyPwt />
            <Faq />
            <BookingSteps />
            <Cta />
        </>
    )
}


// Services Page Structure
// 1. Hero

// Layout: Horizontal split

// Title: Travel Services Under One Roof
// Short introduction
// CTA: Talk to an Expert
// 2. Services Overview

// Layout: 2×3 or 3×2 card grid

// Cards:

// 🌍 Tour Packages
// 🛂 Visa Assistance
// ✈️ Air Ticket Booking
// 🏨 Land Packages
// 🎯 Customized Packages
// 📘 Passport Services

// Clicking a card scrolls to its section.

// 3. Tour Packages

// Layout: 2-column

// Explain:

// Domestic Tours
// International Tours
// Group Tours
// Family Tours
// Honeymoon Tours

// CTA:
// Explore Packages

// 4. Visa Assistance

// Layout: Left content + Right checklist

// Include:

// Tourist Visa
// Business Visa
// Documentation
// Appointment Guidance
// Application Support

// (Optional) Popular destinations:

// UAE
// Singapore
// Thailand
// Malaysia
// Europe

// CTA:
// Apply for Visa

// 5. Flight Ticket Booking

// Layout: Two-column

// Explain:

// Domestic Flights
// International Flights
// One-way
// Round Trip
// Multi-city
// Group Booking

// CTA:
// Book Tickets

// 6. Land Packages

// Layout: Feature cards

// Explain:

// Hotels
// Transfers
// Sightseeing
// Meals
// Local Transport
// Tour Guide

// Perfect for travelers who already have flights.

// 7. Customized Packages

// Layout: Interactive process/timeline

// Tell Us Your Plan

// ↓

// We Design Itinerary

// ↓

// Approve Quote

// ↓

// Book Trip

// Mention:

// Budget-based planning
// Family trips
// Honeymoon
// Corporate
// Group Tours

// CTA:
// Customize My Trip

// 8. Passport Services

// Layout: Two cards

// New Passport
// Documentation
// Appointment
// Guidance
// Passport Renewal
// Renewal
// Reissue
// Corrections

// CTA:
// Get Passport Assistance

// 9. Expert Travel Support

// Layout: Feature grid

// Examples:

// Tour Planning
// Visa Guidance
// Hotel Suggestions
// Travel Consultation
// 24×7 Support
// Emergency Assistance
// 10. Our Process

// Layout: Horizontal Stepper

// Consultation

// ↓

// Choose Service

// ↓

// Documentation

// ↓

// Booking

// ↓

// Travel
// 11. Why Choose Patel World Tour

// Layout: Icon cards

// Trusted Experts
// Transparent Pricing
// End-to-End Service
// Fast Response
// Personalized Planning
// Dedicated Support
// 12. FAQs

// Layout: Accordion

// Examples:

// Can I book only flights?
// Do you provide only visa services?
// Can I customize a package?
// Do you arrange hotels?
// How long does passport renewal take?
// 13. Contact Experts

// Layout: Two-column

// Short inquiry form:

// Name
// Phone
// Required Service

// Buttons:

// WhatsApp
// Call Now
// 14. Final CTA

// Layout: Full-width banner

// Need Help Planning Your Journey?

// Our travel experts are ready to assist you.

// [Get Free Consultation]