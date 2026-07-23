import { HotelStay, TourSlug } from "@/types";

export const hotelsData: Partial<Record<TourSlug, HotelStay[]>> = {
  "singapore-malaysia-7d": [
    { city: "Singapore", nights: 3, name: "Hotel Ibis Novena / Boss" },
    { city: "Kuala Lumpur", nights: 3, name: "Grand Continental / Ancasa" }
  ],
  "singapore-malaysia-thailand-11d": [
    { city: "Singapore", nights: 3, name: "Ibis Novena / Boss" },
    { city: "Kuala Lumpur", nights: 3, name: "Grand Continental / Ancasa" },
    { city: "Pattaya", nights: 2, name: "Aiyara Grand / Glow Inn" },
    { city: "Bangkok", nights: 2, name: "Bangkok Palace / A One Hotel" }
  ],
  "singapore-malaysia-cruise-9d": [
    { city: "Singapore", nights: 3, name: "Ibis Novena / Boss" },
    { city: "Cruise", nights: 2, name: "Resort World Cruise (Inside Cabin)" },
    { city: "Kuala Lumpur", nights: 3, name: "Ancasa / Ideas" }
  ],
  "singapore-malaysia-thailand-cruise-13d": [
    { city: "Singapore", nights: 3, name: "Ibis Novena / Boss" },
    { city: "Cruise", nights: 2, name: "Resort World Cruise (Inside Cabin)" },
    { city: "Kuala Lumpur", nights: 3, name: "Ancasa / Ideas" },
    { city: "Pattaya", nights: 2, name: "Aiyara Grand / Glow Inn" },
    { city: "Bangkok", nights: 2, name: "Bangkok Palace / A-One Boutique" }
  ],
  "vietnam-signature-9d": [
    { city: "Halong Bay", nights: 1, name: "Amanda Cruise / Mila Grand" },
    { city: "Hanoi", nights: 1, name: "Fortuna / Nesta Hotel" },
    { city: "Phu Quoc", nights: 3, name: "Vin Fiesta / Wyndham Garden" },
    { city: "Da Nang", nights: 3, name: "Sandy Beach Resort / Golden Lotus" }
  ]
};