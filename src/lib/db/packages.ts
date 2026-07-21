import { BasePackage } from "@/types";

export const packagesData: BasePackage[] = [
  {
    slug: "dubai-abu-dhabi-yas-island",
    title: "Dubai & Abu Dhabi Yas Island Experience",
    description: "Experience the luxury of Dubai and Abu Dhabi featuring 124th-floor Burj Khalifa access, a private yacht dinner, VIP desert safari, and Theme Park adventures at Yas Island.",
    status: "PUBLISHED",
    category: "International",
    isFeatured: true,
    flyerHref: "/flyers/dubai-yas-island.pdf",
    duration: { nights: 5, days: 6 },
    destinations: ["Dubai", "Abu Dhabi", "Yas Island"]
  },
  {
    slug: "singapore-malaysia-7d",
    title: "Singapore & Malaysia Highlights",
    description: "Explore the best of Singapore and Malaysia with visits to Universal Studios, Gardens by the Bay, Sentosa Island, Genting Highlands, and Kuala Lumpur city attractions.",
    status: "PUBLISHED",
    category: "International",
    isFeatured: true,
    flyerHref: "/flyers/SINGAPORE MALAYSIA 01.pdf",
    duration: { nights: 6, days: 7 },
    destinations: ["Singapore", "Kuala Lumpur", "Genting Highlands"]
  },
  {
    slug: "singapore-malaysia-thailand-11d",
    title: "Singapore, Malaysia & Thailand Trio",
    description: "An extensive 11-day multi-country tour covering Singapore, Malaysia, Bangkok, and Pattaya with theme parks, island tours, and cultural highlights.",
    status: "PUBLISHED",
    category: "International",
    isFeatured: false,
    flyerHref: "/flyers/SMT 02.pdf",
    duration: { nights: 10, days: 11 },
    destinations: ["Singapore", "Kuala Lumpur", "Genting Highlands", "Bangkok", "Pattaya"]
  },
  {
    slug: "singapore-malaysia-cruise-9d",
    title: "Singapore & Malaysia with Resort World Cruise",
    description: "Enjoy a 9-day luxury vacation incorporating 2 nights on the Resort World Cruise alongside stays in Singapore and Kuala Lumpur.",
    status: "PUBLISHED",
    category: "International",
    isFeatured: true,
    flyerHref: "/flyers/SMC.pdf",
    duration: { nights: 8, days: 9 },
    destinations: ["Singapore", "Resort World Cruise", "Kuala Lumpur", "Genting Highlands"]
  },
  {
    slug: "singapore-malaysia-thailand-cruise-13d",
    title: "Ultimate Southeast Asia: Singapore, Malaysia, Thailand & Cruise",
    description: "The complete 13-day Southeast Asian trip featuring Singapore, a 2-night cruise, Kuala Lumpur, Pattaya, and Bangkok.",
    status: "PUBLISHED",
    category: "International",
    isFeatured: false,
    flyerHref: "/flyers/SMTC.pdf",
    duration: { nights: 12, days: 13 },
    destinations: ["Singapore", "Resort World Cruise", "Kuala Lumpur", "Bangkok", "Pattaya"]
  },
  {
    slug: "vietnam-signature-9d",
    title: "Signature Vietnam: Hanoi, Halong Bay, Da Nang & Phu Quoc",
    description: "An incredible 9-day journey across Vietnam featuring an overnight Halong Bay luxury cruise, Ba Na Hills Golden Bridge, and Phu Quoc Island.",
    status: "PUBLISHED",
    category: "International",
    isFeatured: false,
    flyerHref: "/flyers/VIETNAM NEW 01.pdf",
    duration: { nights: 8, days: 9 },
    destinations: ["Hanoi", "Halong Bay", "Da Nang", "Phu Quoc Island"]
  },
  // {
  //   slug: "bali-exotic-escape",
  //   title: "Exotic Bali Honeymoon & Beach Getaway",
  //   description: "Discover paradise in Bali with private pool villa stays, Nusa Penida island speedboat tours, and cultural Ubud swings.",
  //   status: "PUBLISHED",
  //   category: "International",
  //   isFeatured: true,
  //   duration: { nights: 5, days: 6 },
  //   destinations: ["Ubud", "Kuta", "Nusa Penida"]
  // },
  {
    slug: "phuket-krabi-escape",
    title: "Phuket & Krabi Island Hopping",
    description: "Relax on pristine Thai beaches with speedboat tours to Phi Phi Islands and James Bond Island.",
    status: "PUBLISHED",
    category: "International",
    isFeatured: false,
    duration: { nights: 5, days: 6 },
    destinations: ["Phuket", "Krabi", "Phi Phi Islands"]
  },
  {
    slug: "goa-beach-bliss",
    title: "Vibrant Goa Beach & Nightlife Tour",
    description: "Unwind on the sandy shores of Goa with river cruises, water sports, and heritage church visits.",
    status: "PUBLISHED",
    category: "Domestic",
    isFeatured: true,
    duration: { nights: 3, days: 4 },
    destinations: ["North Goa", "South Goa"]
  },
  {
    slug: "kerala-backwaters-munnar",
    title: "Enchanting Kerala Houseboat & Hill Station",
    description: "Immerse yourself in God's Own Country with tea gardens in Munnar and an overnight backwater houseboat cruise in Alleppey.",
    status: "PUBLISHED",
    category: "Domestic",
    isFeatured: true,
    duration: { nights: 5, days: 6 },
    destinations: ["Munnar", "Thekkady", "Alleppey Houseboat", "Kochi"]
  },
  {
    slug: "shimla-mandi-manali",
    title: "Scenic Himachal: Shimla, Mandi & Manali",
    description: "Travel through snow-capped mountains, Solang Valley adventure parks, and pine valleys in Himachal Pradesh.",
    status: "PUBLISHED",
    category: "Domestic",
    isFeatured: false,
    duration: { nights: 6, days: 7 },
    destinations: ["Shimla", "Mandi", "Manali", "Kullu"]
  },
  {
    slug: "royal-udaipur-customize",
    title: "Royal Udaipur & Mount Abu Custom Tour",
    description: "Experience royal Rajasthani heritage with Lake Pichola boat rides, majestic palaces, and hill station scenery in Mount Abu.",
    status: "PUBLISHED",
    category: "Domestic",
    isFeatured: false,
    duration: { nights: 3, days: 4 },
    destinations: ["Udaipur", "Mount Abu"]
  },
  // {
  //   slug: "kashmir-paradise-on-earth",
  //   title: "Kashmir Paradise: Srinagar, Gulmarg & Pahalgam",
  //   description: "Discover the breathtaking beauty of Kashmir with Shikara rides on Dal Lake, Gulmarg Gondola rides, and Pahalgam valley tours.",
  //   status: "PUBLISHED",
  //   category: "Domestic",
  //   isFeatured: true,
  //   duration: { nights: 5, days: 6 },
  //   destinations: ["Srinagar", "Gulmarg", "Pahalgam", "Sonmarg"]
  // },
  {
    slug: "sikkim-gangtok-darjeeling",
    title: "Sikkim & Darjeeling Himalayan Magic",
    description: "Journey through the Eastern Himalayas visiting Gangtok monasteries, Tsomgo Lake, and Tiger Hill sunrise point in Darjeeling.",
    status: "PUBLISHED",
    category: "Domestic",
    isFeatured: false,
    duration: { nights: 5, days: 6 },
    destinations: ["Gangtok", "Tsomgo Lake", "Darjeeling"]
  }
];