import { TourSlug } from "@/types";
import { HighlightsData } from "@/types";

export const highlightsData: Record<TourSlug, HighlightsData> = {
  "dubai-abu-dhabi-yas-island": {
    highlights: [
      "Burj Khalifa 124th & 125th Floor tickets",
      "2 Hours White Glass Yacht Ride with Indian Dinner",
      "VIP Desert Safari in 4x4 Land Cruiser with live shows",
      "Luxury Limousine Ride with Bollywood Music",
      "Yas Island Hotel stay with Theme Park access",
      "Abu Dhabi City Tour & BAPS Hindu Temple visit"
    ],
    activities: [
      { label: "Burj Khalifa Observation Deck", imageSrc: "/images/activities/burj-khalifa.webp" },
      { label: "Marina Yacht Dinner Cruise", imageSrc: "/images/activities/dubai-yacht.webp" },
      { label: "4x4 Desert Safari & Live Shows", imageSrc: "/images/activities/desert-safari.webp" },
      { label: "Luxury Limousine Ride", imageSrc: "/images/activities/dubai-limo.webp" },
      { label: "Yas Island Theme Parks", imageSrc: "/images/activities/yas-island.webp" },
      { label: "BAPS Hindu Temple Visit", imageSrc: "/images/activities/baps-temple.webp" }
    ]
  },
  "singapore-malaysia-7d": {
    highlights: [
      "Universal Studios Singapore Full Day",
      "Gardens by the Bay (Flower Dome + Cloud Forest)",
      "Sentosa Island Cable Car & Madame Tussauds",
      "Genting Highlands Cable Car Ride",
      "Batu Caves Visit"
    ],
    activities: [
      { label: "Universal Studios Full Day Tour", imageSrc: "/images/activities/universal-studios.webp" },
      { label: "Gardens by the Bay Exploration", imageSrc: "/images/activities/gardens-by-the-bay.webp" },
      { label: "Sentosa Cable Car & Madame Tussauds", imageSrc: "/images/activities/sentosa.webp" },
      { label: "Genting Highlands Cable Car Ride", imageSrc: "/images/activities/genting-cableway.webp" },
      { label: "Batu Caves Historical Excursion", imageSrc: "/images/activities/batu-caves.webp" }
    ]
  },
  "singapore-malaysia-thailand-11d": {
    highlights: [
      "Universal Studios & Night Safari",
      "Chao Phraya River Cruise",
      "Coral Island Speedboat Tour",
      "Safari World & Marine Park"
    ],
    activities: [
      { label: "Universal Studios & Night Safari", imageSrc: "/images/activities/universal-studios.webp" },
      { label: "Chao Phraya River Cruise Dinner", imageSrc: "/images/activities/chao-phraya-cruise.webp" },
      { label: "Coral Island Speedboat Tour", imageSrc: "/images/activities/coral-island.webp" },
      { label: "Safari World & Marine Park Full Day", imageSrc: "/images/activities/safari-world.webp" }
    ]
  },
  "singapore-malaysia-cruise-9d": {
    highlights: [
      "2 Nights Resort World Cruise Stay",
      "Universal Studios Singapore",
      "Sunway Lagoon Theme Park (6 Parks)",
      "Genting Highlands Cable Car"
    ],
    activities: [
      { label: "Resort World Cruise Entertainment", imageSrc: "/images/activities/resort-world-cruise.webp" },
      { label: "Universal Studios Singapore Day Trip", imageSrc: "/images/activities/universal-studios.webp" },
      { label: "Sunway Lagoon Theme Park Exploration", imageSrc: "/images/activities/sunway-lagoon.webp" },
      { label: "Genting Highlands Cable Car Journey", imageSrc: "/images/activities/genting-cableway.webp" }
    ]
  },
  "singapore-malaysia-thailand-cruise-13d": {
    highlights: [
      "2 Night Resort World Cruise",
      "Universal Studios Singapore",
      "Sunway Lagoon Theme Park",
      "Coral Island Speedboat Tour",
      "Safari World & Marine Park"
    ],
    activities: [
      { label: "Resort World Cruise Voyage", imageSrc: "/images/activities/resort-world-cruise.webp" },
      { label: "Universal Studios Singapore Outing", imageSrc: "/images/activities/universal-studios.webp" },
      { label: "Sunway Lagoon 6-Park Adventure", imageSrc: "/images/activities/sunway-lagoon.webp" },
      { label: "Coral Island Speedboat Tour", imageSrc: "/images/activities/coral-island.webp" },
      { label: "Safari World & Marine Park Excursion", imageSrc: "/images/activities/safari-world.webp" }
    ]
  },
  "vietnam-signature-9d": {
    highlights: [
      "Overnight Halong Bay Luxury Cruise",
      "Ba Na Hills Golden Bridge",
      "Vinpearl Safari & VinWonders Phu Quoc",
      "Hanoi Train Street Cafe",
      "Hoi An Coconut Forest Basket Boat Ride"
    ],
    activities: [
      { label: "Overnight Halong Bay Luxury Cruise", imageSrc: "/images/activities/halong-bay-cruise.webp" },
      { label: "Ba Na Hills & Golden Bridge", imageSrc: "/images/activities/golden-bridge.webp" },
      { label: "Vinpearl Safari & VinWonders Exploration", imageSrc: "/images/activities/vinpearl-safari.webp" },
      { label: "Hanoi Train Street Experience", imageSrc: "/images/activities/train-street.webp" },
      { label: "Hoi An Coconut Forest Basket Boat Ride", imageSrc: "/images/activities/basket-boat.webp" }
    ]
  },
  "bali-exotic-escape": {
    highlights: ["Private Pool Villa", "Nusa Penida Island Tour", "Ubud Bali Swing & Rice Terraces", "Tanah Lot Temple Sunset"],
    activities: [
      { label: "Nusa Penida Island Tour", imageSrc: "/images/activities/nusa-penida.webp" },
      { label: "Ubud Bali Swing & Rice Terraces", imageSrc: "/images/activities/bali-swing.webp" },
      { label: "Tanah Lot Temple Sunset Excursion", imageSrc: "/images/activities/tanah-lot.webp" }
    ]
  },
  "phuket-krabi-escape": {
    highlights: ["Phi Phi Island Speedboat Tour", "James Bond Island", "Phuket Fantasea Show", "Four Island Tour Krabi"],
    activities: [
      { label: "Phi Phi Island Speedboat Cruise", imageSrc: "/images/activities/phi-phi.webp" },
      { label: "James Bond Island Sightseeing", imageSrc: "/images/activities/james-bond.webp" },
      { label: "Phuket Fantasea Cultural Show", imageSrc: "/images/activities/fantasea.webp" },
      { label: "Four Island Tour Krabi", imageSrc: "/images/activities/krabi-islands.webp" }
    ]
  },
  "goa-beach-bliss": {
    highlights: ["Mandovi River Cruise", "Water Sports at Calangute", "Heritage Churches of Old Goa", "Anjuna & Baga Beach Nights"],
    activities: [
      { label: "Mandovi River Cruise", imageSrc: "/images/activities/mandovi-cruise.webp" },
      { label: "Water Sports at Calangute Beach", imageSrc: "/images/activities/goa-watersports.webp" },
      { label: "Old Goa Heritage Church Tour", imageSrc: "/images/activities/goa-churches.webp" }
    ]
  },
  "kerala-backwaters-munnar": {
    highlights: ["Overnight Luxury Houseboat Cruise", "Tea Gardens of Munnar", "Periyar Wildlife Sanctuary", "Kochi Fort Sightseeing"],
    activities: [
      { label: "Overnight Alleppey Houseboat Stay", imageSrc: "/images/activities/kerala-houseboat.webp" },
      { label: "Munnar Tea Estate Walk", imageSrc: "/images/activities/tea-gardens.webp" },
      { label: "Periyar Wildlife Sanctuary Safari", imageSrc: "/images/activities/periyar-safari.webp" },
      { label: "Fort Kochi Sightseeing Tour", imageSrc: "/images/activities/kochi-fort.webp" }
    ]
  },
  "shimla-mandi-manali": {
    highlights: ["Solang Valley Adventure Sports", "Mall Road Shimla Walk", "Mandi Rewalsar Lake", "Atal Tunnel Tour"],
    activities: [
      { label: "Solang Valley Adventure Sports", imageSrc: "/images/activities/solang-adventure.webp" },
      { label: "Mall Road Stroll & Shopping", imageSrc: "/images/activities/shimla-mallroad.webp" },
      { label: "Atal Tunnel Excursion", imageSrc: "/images/activities/atal-tunnel.webp" }
    ]
  },
  "royal-udaipur-customize": {
    highlights: ["Lake Pichola Boat Ride", "City Palace Udaipur", "Dilwara Jain Temples", "Sunset Point Mount Abu"],
    activities: [
      { label: "Lake Pichola Scenic Boat Ride", imageSrc: "/images/activities/pichola-boat.webp" },
      { label: "City Palace Heritage Tour", imageSrc: "/images/activities/udaipur-palace.webp" },
      { label: "Dilwara Jain Temples Exploration", imageSrc: "/images/activities/dilwara-temples.webp" }
    ]
  },
  "kashmir-paradise-on-earth": {
    highlights: ["Shikara Ride on Dal Lake", "Gondola Cable Car in Gulmarg", "Betaab Valley Exploration", "Stay in Deluxe Houseboat"],
    activities: [
      { label: "Dal Lake Shikara Cruise", imageSrc: "/images/activities/kashmir-shikara.webp" },
      { label: "Gulmarg Gondola Cable Car Ride", imageSrc: "/images/activities/gulmarg-gondola.webp" },
      { label: "Betaab Valley Nature Exploration", imageSrc: "/images/activities/betaab-valley.webp" }
    ]
  },
  "sikkim-gangtok-darjeeling": {
    highlights: ["Tsomgo Lake & Baba Mandir", "Tiger Hill Sunrise in Darjeeling", "Nathula Pass Tour", "Rumtek Monastery"],
    activities: [
      { label: "Tsomgo Lake & Baba Mandir Excursion", imageSrc: "/images/activities/tsomgo-lake.webp" },
      { label: "Tiger Hill Alpine Sunrise View", imageSrc: "/images/activities/tiger-hill.webp" },
      { label: "Rumtek Monastery Heritage Tour", imageSrc: "/images/activities/rumtek-monastery.webp" }
    ]
  }
};