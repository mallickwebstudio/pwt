import { PackagePricing, TourSlug } from "@/types";

export const pricingData: Record<TourSlug, PackagePricing> = {
    "dubai-classic-6d": {
    startingPrice: 69700,
    currency: "INR",
    adultRate: 69700,
    childNoBed5to12: 64700,
    childNoBed2to5: 52700,
    infantRate: 15700,
    taxes: "5% GST & 2% TCS Extra",
    note: "Prices starting per person on twin-sharing basis."
  },
  "dubai-abu-dhabi-yas-island": {
    startingPrice: 84700,
    currency: "INR",
    adultRate: 84700,
    childNoBed5to12: 79700,
    childNoBed2to5: 62700,
    infantRate: 15700,
    taxes: "5% GST & 2% TCS Extra",
    note: "Includes 1-Night luxury stay on Yas Island with theme park access."
  },
    // "dubai-abu-dhabi-yas-island": {
    //     startingPrice: 84700,
    //     currency: "INR",
    //     adultRate: 84700,
    //     childNoBed5to12: 79700,
    //     childNoBed2to5: 62700,
    //     infantRate: 15700,
    //     taxes: "5% GST & 2% TCS extra"
    // },
    "singapore-malaysia-7d": {
        startingPrice: 107000,
        currency: "INR",
        adultRate: 107000,
        childNoBed: 97000,
        infantRate: 19000,
        taxes: "5% GST & 2% TCS extra"
    },
    "singapore-malaysia-thailand-11d": {
        startingPrice: 137000,
        currency: "INR",
        adultRate: 137000,
        childNoBed: 127000,
        infantRate: 24000,
        taxes: "5% GST & 2% TCS extra"
    },
    "singapore-malaysia-cruise-9d": {
        startingPrice: 137000,
        currency: "INR",
        adultRate: 137000,
        childNoBed: 127000,
        infantRate: 34000,
        taxes: "5% GST & 5% TCS extra"
    },
    "singapore-malaysia-thailand-cruise-13d": {
        startingPrice: 167000,
        currency: "INR",
        adultRate: 167000,
        childNoBed: 157000,
        infantRate: 34000,
        taxes: "5% GST & 2% TCS extra"
    },
    "vietnam-signature-9d": {
        startingPrice: 135700,
        currency: "INR",
        adultRate: 135700,
        childNoBed: 125000,
        infantRate: 24000,
        taxes: "5% GST & 5% TCS extra"
    },
    "bali-exotic-escape": { startingPrice: 65000, currency: "INR", note: "Contact for custom quote" },
    "phuket-krabi-escape": { startingPrice: 65000, currency: "INR", note: "Contact for custom quote" },
    "goa-beach-bliss": { startingPrice: 18500, currency: "INR", note: "Customizable based on hotel choice" },
    "kerala-backwaters-munnar": { startingPrice: 28500, currency: "INR", note: "Customizable" },
    "shimla-mandi-manali": { startingPrice: 21700, currency: "INR", note: "Customizable" },
    "royal-udaipur-customize": { startingPrice: 19500, currency: "INR", note: "Tailor-made for families & couples" },
    "kashmir-paradise-on-earth": { startingPrice: 32000, currency: "INR", note: "Customizable" },
    "sikkim-gangtok-darjeeling": { startingPrice: 29500, currency: "INR", note: "Customizable" }
};