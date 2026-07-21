import { InclusionsExclusions, TourSlug } from "@/types";

export const inclusionsExclusionsData: Partial<Record<TourSlug, InclusionsExclusions>> = {
  "dubai-abu-dhabi-yas-island": {
    inclusions: [
      "Return Flight from Ahmedabad / Abu Dhabi with confirmed PNR",
      "30-Day Single Entry UAE Visa",
      "5 Nights Stay at Premium Hotel & Yas Island Hotel",
      "1 Lunch, 6 Dinners, 6 Breakfasts (Jain/Swaminarayan available)",
      "Dubai City Tour, Monorail, Dubai Mall & Fountain Show",
      "Tourism Dirham Tax & 5% Dubai VAT"
    ],
    exclusions: [
      "5% GST & 2% TCS",
      "Travel Insurance & personal expenses",
      "Quad biking in Desert Safari"
    ]
  },
  "singapore-malaysia-7d": {
    inclusions: [
      "Return Flight from AMD/Surat/Mumbai with Confirm PNR",
      "Singapore Visa",
      "6 Nights Stay at Premium Hotels",
      "6 Dinners & 7 Breakfasts (Jain food available)",
      "Gardens by the Bay (Flower Dome + Cloud Forest)",
      "Universal Studios Singapore Full Day",
      "Sentosa Island (Cable Car + Madame Tussauds 4-in-1 + Wings of Time)",
      "Genting Highlands Cable Car & Batu Caves",
      "Guided Singapore & Kuala Lumpur City Tours"
    ],
    exclusions: [
      "5% GST & 2% TCS",
      "Travel Insurance & personal accident expenses"
    ]
  },
  "singapore-malaysia-thailand-11d": {
    inclusions: [
      "Return Flights (AMD-SIN, BKK-DEL-AMD)",
      "Singapore Visa",
      "10 Nights Stay at Premium Hotels",
      "2 Lunches, 10 Dinners, 11 Breakfasts",
      "Gardens by the Bay, Universal Studios, Sentosa Island",
      "Genting Highlands Cable Car & Batu Caves",
      "Coral Island Tour by Speed Boat with Lunch",
      "Pattaya City Tour & Floating Market",
      "Safari World & Marine Park with Lunch (Bangkok)",
      "Chao Phraya River Cruise with Dinner"
    ],
    exclusions: [
      "5% GST & 2% TCS",
      "Personal expenses & optional activities"
    ]
  },
  "singapore-malaysia-cruise-9d": {
    inclusions: [
      "Return Flights (AMD-SIN, KUL-BLR-AMD)",
      "Singapore Visa",
      "2 Nights Cruise Stay + 6 Nights Hotel Stay",
      "2 Lunches, 8 Dinners, 8 Breakfasts",
      "Onboard Cruise Entertainment, Pools & Live Shows",
      "Universal Studios Singapore",
      "Sentosa Island, Madame Tussauds, Gardens by the Bay",
      "Sunway Lagoon Theme Park (6 Parks)",
      "Genting Highlands Cable Car & Batu Caves"
    ],
    exclusions: [
      "5% GST & 5% TCS",
      "Cruise Gratuity: 40 USD per person (Payable on cruise)",
      "Fuel Surcharge: 30 SGD per person (Payable on cruise)"
    ]
  },
  "singapore-malaysia-thailand-cruise-13d": {
    inclusions: [
      "Return Flights (VietJet / Air India / Singapore Airlines)",
      "Singapore Visa",
      "12 Nights Stay (2N Cruise + 10N Hotels)",
      "3 Lunches, 12 Dinners, 13 Breakfasts",
      "Gardens by the Bay, Universal Studios, Sentosa Cable Car",
      "Genting Highlands, Sunway Lagoon, Batu Caves",
      "Coral Island Speedboat Tour, Pattaya Floating Market",
      "Safari World & Marine Park Bangkok"
    ],
    exclusions: [
      "5% GST & 2% TCS",
      "Cruise Gratuity: 40 USD / person",
      "Fuel Surcharge: 30 SGD / person"
    ]
  },
  "vietnam-signature-9d": {
    inclusions: [
      "Economy class return airfare ex-Ahmedabad (VietJet)",
      "Vietnam E-Visa charges",
      "1 Night Luxury Halong Bay Cruise Stay",
      "8 Breakfasts, 1 Local Veg Dinner on Cruise, 7 Pure Veg/Jain Dinners",
      "Ba Na Hills & Cable Car + Golden Bridge",
      "VinWonders Amusement Park & Vinpearl Safari",
      "4-Island Tour in Phu Quoc with Cable Car & Speedboat",
      "Hanoi City Tour & Famous Train Street Experience",
      "Basket Boat Ride in Hoi An Coconut Forest"
    ],
    exclusions: [
      "5% GST & 5% TCS",
      "Personal expenses, shopping & laundry",
      "Travel Insurance (Strongly recommended)"
    ]
  }
};