import { ItineraryDay, TourSlug } from "@/types";

export const itinerariesData: Partial<Record<TourSlug, ItineraryDay[]>> = {
  "dubai-abu-dhabi-yas-island": [
    { day: 1, title: "Arrival in UAE + 2-Hour Yacht Dinner" },
    { day: 2, title: "Dubai City Tour + Monorail + Burj Khalifa 124/125th Floor" },
    { day: 3, title: "VIP Desert Safari in 4x4 Land Cruiser + Live Shows & Garba" },
    { day: 4, title: "Limousine Ride + Shopping at Meena Bazaar & Gold Souk" },
    { day: 5, title: "Transfer to Yas Island + Theme Parks Access" },
    { day: 6, title: "Abu Dhabi City Tour + BAPS Temple + Departure" }
  ],
  "singapore-malaysia-7d": [
    { day: 1, title: "Arrival in Singapore + Gardens by the Bay" },
    { day: 2, title: "Universal Studios Singapore Full Day" },
    { day: 3, title: "Singapore City Tour + Sentosa Island Madame Tussauds" },
    { day: 4, title: "Transfer to Kuala Lumpur by Coach + Leisure" },
    { day: 5, title: "Kuala Lumpur City Tour (Petronas Towers, KL Tower, King Palace)" },
    { day: 6, title: "Genting Highlands Day Trip via Cable Car + Batu Caves" },
    { day: 7, title: "Checkout & Airport Transfer for Departure" }
  ],
  "singapore-malaysia-thailand-11d": [
    { day: 1, title: "Arrival in Singapore + Gardens by the Bay & Marina Bay Sands" },
    { day: 2, title: "Universal Studios Singapore + Night Safari" },
    { day: 3, title: "Sentosa Island Cable Car + Wings of Time + Shopping" },
    { day: 4, title: "Transfer to Kuala Lumpur en route Batu Caves" },
    { day: 5, title: "Kuala Lumpur City Tour + Pavilion Mall Shopping" },
    { day: 6, title: "Genting SkyWorlds Theme Park & Highlands" },
    { day: 7, title: "Transfer to Bangkok + Chao Phraya River Cruise Dinner" },
    { day: 8, title: "Safari World & Marine Park Full Day" },
    { day: 9, title: "Transfer to Pattaya + Coral Island & Alcazar Show" },
    { day: 10, title: "Pattaya Floating Market & City Tour" },
    { day: 11, title: "Bangkok Airport Transfer for Return Flight" }
  ],
  "singapore-malaysia-cruise-9d": [
    { day: 1, title: "Arrival in Singapore + Check-in to Cruise" },
    { day: 2, title: "Full Day Cruise Activities & Dining Onboard" },
    { day: 3, title: "Disembark Cruise + Singapore City Tour & Gardens by the Bay" },
    { day: 4, title: "Sentosa Island Cable Car + Wings of Time Show" },
    { day: 5, title: "Universal Studios Singapore Full Day" },
    { day: 6, title: "Coach Transfer to Kuala Lumpur + KL City Tour" },
    { day: 7, title: "Genting Highlands Day Trip + Batu Caves" },
    { day: 8, title: "Sunway Lagoon Theme Park (6 Theme Parks)" },
    { day: 9, title: "Checkout & Transfer to Airport for Return Flight" }
  ],
  "singapore-malaysia-thailand-cruise-13d": [
    { day: 1, title: "Arrival in Singapore + Gardens by the Bay" },
    { day: 2, title: "Universal Studios Singapore" },
    { day: 3, title: "Singapore City Tour + Sentosa Island" },
    { day: 4, title: "Check-in to Luxury Cruise + Onboard Activities" },
    { day: 5, title: "Full Day Cruise Experience" },
    { day: 6, title: "Disembark & Coach Transfer to Kuala Lumpur" },
    { day: 7, title: "Genting Highlands Day Trip + Batu Caves" },
    { day: 8, title: "Sunway Lagoon Theme Park" },
    { day: 9, title: "Flight to Thailand + Pattaya Check-in" },
    { day: 10, title: "Coral Island Speedboat Tour + Alcazar Show" },
    { day: 11, title: "Transfer to Bangkok + City Tour & Gems Gallery" },
    { day: 12, title: "Safari World & Marine Park" },
    { day: 13, title: "Shopping & Return Flight to India" }
  ],
  "vietnam-signature-9d": [
    { day: 1, title: "Arrival in Da Nang + Beach Leisure & Indian Dinner" },
    { day: 2, title: "Ba Na Hills Cable Car + Golden Bridge Exploration" },
    { day: 3, title: "Da Nang City Tour + Hoi An Ancient Town & Coconut Forest" },
    { day: 4, title: "Flight to Phu Quoc Island + Grand World Visit" },
    { day: 5, title: "Vinpearl Safari + VinWonders Amusement Park" },
    { day: 6, title: "4-Island Speedboat Tour + Cable Car & Aquatopia Theme Park" },
    { day: 7, title: "Flight to Hanoi + City Tour & Train Street Cafe" },
    { day: 8, title: "Transfer to Halong Bay + Overnight Luxury Cruise Stay" },
    { day: 9, title: "Morning Brunch on Cruise + Transfer to Hanoi Airport for India Flight" }
  ]
};