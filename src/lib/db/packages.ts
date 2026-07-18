import { TourPackage } from "@/types/packages";

// Add Activities related to the place mentioned in array
// type Activities = {
//   label: string;
//   imageSrc: string;
// }

export const packagesData: TourPackage[] = [
  // ==========================================
  // INTERNATIONAL PACKAGES
  // ==========================================
  {
    id: "pkg-dubai-premium",
    slug: "dubai-abu-dhabi-yas-island",
    title: "Dubai & Abu Dhabi Yas Island Experience",
    description: "Experience the luxury of Dubai and Abu Dhabi featuring 124th-floor Burj Khalifa access, a private yacht dinner, VIP desert safari, and Theme Park adventures at Yas Island.",
    status: "PUBLISHED",
    category: "International",
    isFeatured: true,
    flyerHref: "/flyers/dubai-yas-island.pdf",
    duration: { nights: 5, days: 6 },
    pricing: {
      startingPrice: 84700,
      currency: "INR",
      adultRate: 84700,
      childNoBed5to12: 79700,
      childNoBed2to5: 62700,
      infantRate: 15700,
      taxes: "5% GST & 2% TCS extra"
    },
    media: [
      { url: "/images/packages/dubai-hero.webp", altText: "Dubai Skyline & Burj Khalifa", isHero: true },
      { url: "/images/packages/dubai-yacht.webp", altText: "Dubai Marina Yacht", isHero: false }
    ],
    destinations: ["Dubai", "Abu Dhabi", "Yas Island"],
    highlights: [
      "Burj Khalifa 124th & 125th Floor tickets",
      "2 Hours White Glass Yacht Ride with Indian Dinner",
      "VIP Desert Safari in 4x4 Land Cruiser with live shows",
      "Luxury Limousine Ride with Bollywood Music",
      "Yas Island Hotel stay with Theme Park access",
      "Abu Dhabi City Tour & BAPS Hindu Temple visit"
    ],
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
    ],
    itineraryOverview: [
      { day: 1, title: "Arrival in UAE + 2-Hour Yacht Dinner" },
      { day: 2, title: "Dubai City Tour + Monorail + Burj Khalifa 124/125th Floor" },
      { day: 3, title: "VIP Desert Safari in 4x4 Land Cruiser + Live Shows & Garba" },
      { day: 4, title: "Limousine Ride + Shopping at Meena Bazaar & Gold Souk" },
      { day: 5, title: "Transfer to Yas Island + Theme Parks Access" },
      { day: 6, title: "Abu Dhabi City Tour + BAPS Temple + Departure" }
    ],
    seo: {
      metaTitle: "Dubai & Yas Island Tour Package | Patel World Tour",
      metaDescription: "Book 6 Days Dubai & Abu Dhabi tour package with Burj Khalifa, Desert Safari, Yacht Dinner and Yas Island Theme Parks."
    }
  },
  {
    id: "pkg-singapore-malaysia",
    slug: "singapore-malaysia-7d",
    title: "Singapore & Malaysia Highlights",
    description: "Explore the best of Singapore and Malaysia with visits to Universal Studios, Gardens by the Bay, Sentosa Island, Genting Highlands, and Kuala Lumpur city attractions.",
    status: "PUBLISHED",
    category: "International",
    isFeatured: true,
    flyerHref: "/flyers/SINGAPORE MALAYSIA 01.pdf",
    duration: { nights: 6, days: 7 },
    pricing: {
      startingPrice: 107000,
      currency: "INR",
      adultRate: 107000,
      childNoBed: 97000,
      infantRate: 19000,
      taxes: "5% GST & 2% TCS extra"
    },
    media: [
      { url: "/images/packages/singapore-merlion.webp", altText: "Merlion Park Singapore", isHero: true },
      { url: "/images/packages/kl-petronas.webp", altText: "Petronas Twin Towers Kuala Lumpur", isHero: false }
    ],
    destinations: ["Singapore", "Kuala Lumpur", "Genting Highlands"],
    hotels: [
      { city: "Singapore", nights: 3, name: "Hotel Ibis Novena / Boss" },
      { city: "Kuala Lumpur", nights: 3, name: "Grand Continental / Ancasa" }
    ],
    highlights: [
      "Universal Studios Singapore Full Day",
      "Gardens by the Bay (Flower Dome + Cloud Forest)",
      "Sentosa Island Cable Car & Madame Tussauds",
      "Genting Highlands Cable Car Ride",
      "Batu Caves Visit"
    ],
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
    ],
    itineraryOverview: [
      { day: 1, title: "Arrival in Singapore + Gardens by the Bay" },
      { day: 2, title: "Universal Studios Singapore Full Day" },
      { day: 3, title: "Singapore City Tour + Sentosa Island Madame Tussauds" },
      { day: 4, title: "Transfer to Kuala Lumpur by Coach + Leisure" },
      { day: 5, title: "Kuala Lumpur City Tour (Petronas Towers, KL Tower, King Palace)" },
      { day: 6, title: "Genting Highlands Day Trip via Cable Car + Batu Caves" },
      { day: 7, title: "Checkout & Airport Transfer for Departure" }
    ],
    seo: {
      metaTitle: "Singapore & Malaysia 7 Days Tour Package",
      metaDescription: "All-inclusive 7 days Singapore and Malaysia package with Universal Studios, Genting Highlands, and flights from India."
    }
  },
  {
    id: "pkg-singapore-malaysia-thailand",
    slug: "singapore-malaysia-thailand-11d",
    title: "Singapore, Malaysia & Thailand Trio",
    description: "An extensive 11-day multi-country tour covering Singapore, Malaysia, Bangkok, and Pattaya with theme parks, island tours, and cultural highlights.",
    status: "PUBLISHED",
    category: "International",
    isFeatured: false,
    flyerHref: "/flyers/SMT 02.pdf",
    duration: { nights: 10, days: 11 },
    pricing: {
      startingPrice: 137000,
      currency: "INR",
      adultRate: 137000,
      childNoBed: 127000,
      infantRate: 24000,
      taxes: "5% GST & 2% TCS extra"
    },
    media: [
      { url: "/images/packages/smt-hero.webp", altText: "Gardens by the Bay & Bangkok Temple", isHero: true }
    ],
    destinations: ["Singapore", "Kuala Lumpur", "Genting Highlands", "Bangkok", "Pattaya"],
    hotels: [
      { city: "Singapore", nights: 3, name: "Ibis Novena / Boss" },
      { city: "Kuala Lumpur", nights: 3, name: "Grand Continental / Ancasa" },
      { city: "Pattaya", nights: 2, name: "Aiyara Grand / Glow Inn" },
      { city: "Bangkok", nights: 2, name: "Bangkok Palace / A One Hotel" }
    ],
    highlights: [
      "Universal Studios & Night Safari",
      "Chao Phraya River Cruise",
      "Coral Island Speedboat Tour",
      "Safari World & Marine Park"
    ],
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
    ],
    itineraryOverview: [
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
    seo: {
      metaTitle: "Singapore, Malaysia & Thailand 11 Days Tour",
      metaDescription: "Grand 11 days South East Asia tour covering Singapore, Malaysia, Pattaya and Bangkok with flights included."
    }
  },
  {
    id: "pkg-singapore-malaysia-cruise",
    slug: "singapore-malaysia-cruise-9d",
    title: "Singapore & Malaysia with Resort World Cruise",
    description: "Enjoy a 9-day luxury vacation incorporating 2 nights on the Resort World Cruise alongside stays in Singapore and Kuala Lumpur.",
    status: "PUBLISHED",
    category: "International",
    isFeatured: true,
    flyerHref: "/flyers/SMC.pdf",
    duration: { nights: 8, days: 9 },
    pricing: {
      startingPrice: 137000,
      currency: "INR",
      adultRate: 137000,
      childNoBed: 127000,
      infantRate: 34000,
      taxes: "5% GST & 5% TCS extra"
    },
    media: [
      { url: "/images/packages/resort-world-cruise.webp", altText: "Resort World Cruise at Night", isHero: true }
    ],
    destinations: ["Singapore", "Resort World Cruise", "Kuala Lumpur", "Genting Highlands"],
    hotels: [
      { city: "Singapore", nights: 3, name: "Ibis Novena / Boss" },
      { city: "Cruise", nights: 2, name: "Resort World Cruise (Inside Cabin)" },
      { city: "Kuala Lumpur", nights: 3, name: "Ancasa / Ideas" }
    ],
    highlights: [
      "2 Nights Resort World Cruise Stay",
      "Universal Studios Singapore",
      "Sunway Lagoon Theme Park (6 Parks)",
      "Genting Highlands Cable Car"
    ],
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
    ],
    itineraryOverview: [
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
    seo: {
      metaTitle: "Singapore & Malaysia Cruise Holiday Package",
      metaDescription: "Experience 9 Days Singapore and Malaysia tour with 2 nights on Resort World Cruise. Full inclusions, hotels and flights."
    }
  },
  {
    id: "pkg-singapore-malaysia-thailand-cruise",
    slug: "singapore-malaysia-thailand-cruise-13d",
    title: "Ultimate Southeast Asia: Singapore, Malaysia, Thailand & Cruise",
    description: "The complete 13-day Southeast Asian trip featuring Singapore, a 2-night cruise, Kuala Lumpur, Pattaya, and Bangkok.",
    status: "PUBLISHED",
    category: "International",
    isFeatured: false,
    flyerHref: "/flyers/SMTC.pdf",
    duration: { nights: 12, days: 13 },
    pricing: {
      startingPrice: 167000,
      currency: "INR",
      adultRate: 167000,
      childNoBed: 157000,
      infantRate: 34000,
      taxes: "5% GST & 2% TCS extra"
    },
    media: [
      { url: "/images/packages/smtc-hero.webp", altText: "Cruise and South East Asia Cities", isHero: true }
    ],
    destinations: ["Singapore", "Resort World Cruise", "Kuala Lumpur", "Bangkok", "Pattaya"],
    hotels: [
      { city: "Singapore", nights: 3, name: "Ibis Novena / Boss" },
      { city: "Cruise", nights: 2, name: "Resort World Cruise (Inside Cabin)" },
      { city: "Kuala Lumpur", nights: 3, name: "Ancasa / Ideas" },
      { city: "Pattaya", nights: 2, name: "Aiyara Grand / Glow Inn" },
      { city: "Bangkok", nights: 2, name: "Bangkok Palace / A-One Boutique" }
    ],
    highlights: [
      "2 Night Resort World Cruise",
      "Universal Studios Singapore",
      "Sunway Lagoon Theme Park",
      "Coral Island Speedboat Tour",
      "Safari World & Marine Park"
    ],
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
    ],
    itineraryOverview: [
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
    seo: {
      metaTitle: "13 Days Singapore, Malaysia, Thailand & Cruise Tour",
      metaDescription: "All-in-one 13 Days Southeast Asia mega tour package with Resort World Cruise, Universal Studios and Pattaya beach."
    }
  },
  {
    id: "pkg-vietnam-signature",
    slug: "vietnam-signature-9d",
    title: "Signature Vietnam: Hanoi, Halong Bay, Da Nang & Phu Quoc",
    description: "An incredible 9-day journey across Vietnam featuring an overnight Halong Bay luxury cruise, Ba Na Hills Golden Bridge, and Phu Quoc Island.",
    status: "PUBLISHED",
    category: "International",
    isFeatured: false,
    flyerHref: "/flyers/VIETNAM NEW 01.pdf",
    duration: { nights: 8, days: 9 },
    pricing: {
      startingPrice: 135700,
      currency: "INR",
      adultRate: 135700,
      childNoBed: 125000,
      infantRate: 24000,
      taxes: "5% GST & 5% TCS extra"
    },
    media: [
      { url: "/images/packages/vietnam-halong.webp", altText: "Halong Bay Cruise", isHero: true },
      { url: "/images/packages/vietnam-golden-bridge.webp", altText: "Golden Bridge Ba Na Hills", isHero: false }
    ],
    destinations: ["Hanoi", "Halong Bay", "Da Nang", "Phu Quoc Island"],
    hotels: [
      { city: "Halong Bay", nights: 1, name: "Amanda Cruise / Mila Grand" },
      { city: "Hanoi", nights: 1, name: "Fortuna / Nesta Hotel" },
      { city: "Phu Quoc", nights: 3, name: "Vin Fiesta / Wyndham Garden" },
      { city: "Da Nang", nights: 3, name: "Sandy Beach Resort / Golden Lotus" }
    ],
    highlights: [
      "Overnight Halong Bay Luxury Cruise",
      "Ba Na Hills Golden Bridge",
      "Vinpearl Safari & VinWonders Phu Quoc",
      "Hanoi Train Street Cafe",
      "Hoi An Coconut Forest Basket Boat Ride"
    ],
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
    ],
    itineraryOverview: [
      { day: 1, title: "Arrival in Da Nang + Beach Leisure & Indian Dinner" },
      { day: 2, title: "Ba Na Hills Cable Car + Golden Bridge Exploration" },
      { day: 3, title: "Da Nang City Tour + Hoi An Ancient Town & Coconut Forest" },
      { day: 4, title: "Flight to Phu Quoc Island + Grand World Visit" },
      { day: 5, title: "Vinpearl Safari + VinWonders Amusement Park" },
      { day: 6, title: "4-Island Speedboat Tour + Cable Car & Aquatopia Theme Park" },
      { day: 7, title: "Flight to Hanoi + City Tour & Train Street Cafe" },
      { day: 8, title: "Transfer to Halong Bay + Overnight Luxury Cruise Stay" },
      { day: 9, title: "Morning Brunch on Cruise + Transfer to Hanoi Airport for India Flight" }
    ],
    seo: {
      metaTitle: "9 Days Signature Vietnam Tour Package | Patel World Tour",
      metaDescription: "Book 9 Days Vietnam tour covering Hanoi, Halong Bay luxury cruise, Ba Na Hills Golden Bridge, and Phu Quoc island."
    }
  },
  {
    id: "pkg-bali-custom",
    slug: "bali-exotic-escape",
    title: "Exotic Bali Honeymoon & Beach Getaway",
    description: "Discover paradise in Bali with private pool villa stays, Nusa Penida island speedboat tours, and cultural Ubud swings.",
    status: "PUBLISHED",
    category: "International",
    isFeatured: true,
    duration: { nights: 5, days: 6 },
    pricing: { startingPrice: 65000, currency: "INR", note: "Contact for custom quote" },
    media: [
      { url: "/images/packages/bali-hero.webp", altText: "Bali Beach & Temple", isHero: true }
    ],
    destinations: ["Ubud", "Kuta", "Nusa Penida"],
    highlights: ["Private Pool Villa", "Nusa Penida Island Tour", "Ubud Bali Swing & Rice Terraces", "Tanah Lot Temple Sunset"],
    seo: {
      metaTitle: "Custom Bali Tour Package for Couples & Families",
      metaDescription: "Tailor-made Bali packages with private villas, Nusa Penida island trips, and flight assistance."
    }
  },
  {
    id: "pkg-phuket-custom",
    slug: "phuket-krabi-escape",
    title: "Phuket & Krabi Island Hopping",
    description: "Relax on pristine Thai beaches with speedboat tours to Phi Phi Islands and James Bond Island.",
    status: "PUBLISHED",
    category: "International",
    isFeatured: false,
    duration: { nights: 5, days: 6 },
    pricing: { startingPrice: 58000, currency: "INR", note: "Contact for custom quote" },
    media: [
      { url: "/images/packages/phuket-hero.webp", altText: "Phi Phi Island Speedboat", isHero: true }
    ],
    destinations: ["Phuket", "Krabi", "Phi Phi Islands"],
    highlights: ["Phi Phi Island Speedboat Tour", "James Bond Island", "Phuket Fantasea Show", "Four Island Tour Krabi"],
    seo: {
      metaTitle: "Phuket & Krabi Tour Package",
      metaDescription: "Customizable 6 days island hopping tour to Phuket, Krabi and Phi Phi islands."
    }
  },

  // ==========================================
  // DOMESTIC PACKAGES
  // ==========================================
  {
    id: "pkg-goa-beach",
    slug: "goa-beach-bliss",
    title: "Vibrant Goa Beach & Nightlife Tour",
    description: "Unwind on the sandy shores of Goa with river cruises, water sports, and heritage church visits.",
    status: "PUBLISHED",
    category: "Domestic",
    isFeatured: true,
    duration: { nights: 3, days: 4 },
    pricing: { startingPrice: 18500, currency: "INR", note: "Customizable based on hotel choice" },
    media: [
      { url: "/images/packages/goa-beach.webp", altText: "Goa Beach Sunset", isHero: true }
    ],
    destinations: ["North Goa", "South Goa"],
    highlights: ["Mandovi River Cruise", "Water Sports at Calangute", "Heritage Churches of Old Goa", "Anjuna & Baga Beach Nights"],
    seo: {
      metaTitle: "Goa Holiday Package | Patel World Tour",
      metaDescription: "Book 4 Days Goa holiday package with beach resort stays, water sports, and Mandovi river cruise."
    }
  },
  {
    id: "pkg-kerala-backwaters",
    slug: "kerala-backwaters-munnar",
    title: "Enchanting Kerala Houseboat & Hill Station",
    description: "Immerse yourself in God's Own Country with tea gardens in Munnar and an overnight backwater houseboat cruise in Alleppey.",
    status: "PUBLISHED",
    category: "Domestic",
    isFeatured: true,
    duration: { nights: 5, days: 6 },
    pricing: { startingPrice: 28500, currency: "INR", note: "Customizable" },
    media: [
      { url: "/images/packages/kerala-houseboat.webp", altText: "Alleppey Houseboat", isHero: true }
    ],
    destinations: ["Munnar", "Thekkady", "Alleppey Houseboat", "Kochi"],
    highlights: ["Overnight Luxury Houseboat Cruise", "Tea Gardens of Munnar", "Periyar Wildlife Sanctuary", "Kochi Fort Sightseeing"],
    seo: {
      metaTitle: "Kerala Houseboat & Munnar Tour Package",
      metaDescription: "6 Days Kerala tour covering Munnar hill station, Thekkady wildlife, and Alleppey houseboat stay."
    }
  },
  {
    id: "pkg-shimla-mandi",
    slug: "shimla-mandi-manali",
    title: "Scenic Himachal: Shimla, Mandi & Manali",
    description: "Travel through snow-capped mountains, Solang Valley adventure parks, and pine valleys in Himachal Pradesh.",
    status: "PUBLISHED",
    category: "Domestic",
    isFeatured: false,
    duration: { nights: 6, days: 7 },
    pricing: { startingPrice: 24500, currency: "INR", note: "Customizable" },
    media: [
      { url: "/images/packages/himachal-mountains.webp", altText: "Himachal Valley", isHero: true }
    ],
    destinations: ["Shimla", "Mandi", "Manali", "Kullu"],
    highlights: ["Solang Valley Adventure Sports", "Mall Road Shimla Walk", "Mandi Rewalsar Lake", "Atal Tunnel Tour"],
    seo: {
      metaTitle: "Shimla, Mandi & Manali Tour Package",
      metaDescription: "7 Days Himachal tour package covering Shimla, Mandi, and Manali with Atal Tunnel excursion."
    }
  },
  {
    id: "pkg-udaipur-custom",
    slug: "royal-udaipur-customize",
    title: "Royal Udaipur & Mount Abu Custom Tour",
    description: "Experience royal Rajasthani heritage with Lake Pichola boat rides, majestic palaces, and hill station scenery in Mount Abu.",
    status: "PUBLISHED",
    category: "Domestic",
    isFeatured: false,
    duration: { nights: 3, days: 4 },
    pricing: { startingPrice: 19500, currency: "INR", note: "Tailor-made for families & couples" },
    media: [
      { url: "/images/packages/udaipur-palace.webp", altText: "Udaipur City Palace", isHero: true }
    ],
    destinations: ["Udaipur", "Mount Abu"],
    highlights: ["Lake Pichola Boat Ride", "City Palace Udaipur", "Dilwara Jain Temples", "Sunset Point Mount Abu"],
    seo: {
      metaTitle: "Royal Udaipur & Mount Abu Tour Package",
      metaDescription: "Book 4 Days customized Udaipur and Mount Abu tour package for couples and families."
    }
  },
  {
    id: "pkg-kashmir-paradise",
    slug: "kashmir-paradise-on-earth",
    title: "Kashmir Paradise: Srinagar, Gulmarg & Pahalgam",
    description: "Discover the breathtaking beauty of Kashmir with Shikara rides on Dal Lake, Gulmarg Gondola rides, and Pahalgam valley tours.",
    status: "PUBLISHED",
    category: "Domestic",
    isFeatured: true,
    duration: { nights: 5, days: 6 },
    pricing: { startingPrice: 32000, currency: "INR", note: "Customizable" },
    media: [
      { url: "/images/packages/kashmir-shikara.webp", altText: "Dal Lake Shikara Ride", isHero: true }
    ],
    destinations: ["Srinagar", "Gulmarg", "Pahalgam", "Sonmarg"],
    highlights: ["Shikara Ride on Dal Lake", "Gondola Cable Car in Gulmarg", "Betaab Valley Exploration", "Stay in Deluxe Houseboat"],
    seo: {
      metaTitle: "Kashmir Tour Package | Srinagar, Gulmarg, Pahalgam",
      metaDescription: "6 Days Kashmir package featuring Dal Lake houseboat stay, Gulmarg Gondola ride, and Pahalgam sightseeing."
    }
  },
  {
    id: "pkg-sikkim-gangtok",
    slug: "sikkim-gangtok-darjeeling",
    title: "Sikkim & Darjeeling Himalayan Magic",
    description: "Journey through the Eastern Himalayas visiting Gangtok monasteries, Tsomgo Lake, and Tiger Hill sunrise point in Darjeeling.",
    status: "PUBLISHED",
    category: "Domestic",
    isFeatured: false,
    duration: { nights: 5, days: 6 },
    pricing: { startingPrice: 29500, currency: "INR", note: "Customizable" },
    media: [
      { url: "/images/packages/sikkim-lake.webp", altText: "Tsomgo Lake Sikkim", isHero: true }
    ],
    destinations: ["Gangtok", "Tsomgo Lake", "Darjeeling"],
    highlights: ["Tsomgo Lake & Baba Mandir", "Tiger Hill Sunrise in Darjeeling", "Nathula Pass Tour", "Rumtek Monastery"],
    seo: {
      metaTitle: "Sikkim & Darjeeling Holiday Package",
      metaDescription: "6 Days Sikkim and Darjeeling tour covering Gangtok, Tsomgo Lake, and Tiger Hill views."
    }
  }
];