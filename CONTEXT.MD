
# Site Outline

## File outline
travel-agency-web/
├── public/                     # Strictly optimized WebP images only
│   ├── hero/
│   └── packages/
├── src/
│   ├── app/                    # App Router core
│   │   ├── (marketing)/        # Route group for clean URLs
│   │   │   ├── packages/
│   │   │   │   ├── [slug]/     # Dynamic route for specific tour (e.g., /packages/bali-6-days)
│   │   │   │   │   └── page.tsx
│   │   │   │   └── page.tsx    # The curated package grid
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   └── contact/
│   │   │       └── page.tsx
│   │   ├── api/                
│   │   │   └── leads/
│   │   │       └── route.ts    # POST endpoint for your lead capture forms
│   │   ├── globals.css         # Tailwind directives
│   │   ├── layout.tsx          # Global layout (Sticky Nav & Footer inject here)
│   │   └── page.tsx            # Landing Page (Hero, Trust Bar, Top Packages)
│   ├── components/             
│   │   ├── ui/                 # Dump your raw shadcn components here (button, card, dialog)
│   │   ├── layout/             
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── shared/             # Custom components you actually build
│   │       ├── WhatsAppCTA.tsx
│   │       ├── PackageCard.tsx
│   │       └── LeadCaptureModal.tsx
│   ├── lib/                    
│   │   ├── db.ts               # MongoDB connection logic
│   │   └── utils.ts            # Tailwind merge/clsx utilities
│   └── models/                 # Mongoose schemas 
│       ├── TourPackage.ts
│       └── ItineraryDay.ts
├── .env.local                  # Mongo URI, WhatsApp API keys
├── next.config.mjs             # Enforce image optimization domains here
├── tailwind.config.ts          
└── tsconfig.json



## website
1. Home Page (The Conversion Funnel)
   ├── Global Sticky Header (Logo, Nav, WhatsApp CTA)
   ├── Hero Section (High-res WebP, Specific H1, "Get Quote" CTA)
   ├── Trust Bar (Office location, 24/7 support, Custom itineraries)
   ├── Featured Packages Grid (Top 3-6 high-margin tours only)
   ├── How It Works (3-step process: Vision -> Plan -> Travel)
   ├── The "Anti-Aggregator" Pitch (Why humans beat algorithms)
   ├── Lead Magnet Section (Downloadable PDF guide for email/phone)
   └── Global Footer (Address, Contact info, Legal links)

2. Packages (The Bait Catalog)
   ├── Header (Filters: e.g., "Family", "Honeymoon", "Budget")
   ├── Package Grid (Thumbnail, Title, Duration, Starting Price)
   └── Bottom CTA ("Don't see what you want? Get a custom quote.")

3. Package Detail Page (The Pitch - Dynamic Route)
   ├── Hero Image (Destination specific)
   ├── Sticky Lead Capture Sidebar/Bottom Bar (WhatsApp / Quick Form)
   ├── Quick Specs (Duration, Difficulty, Best Time to Visit)
   ├── Day-by-Day Itinerary (Accordion style to save vertical space)
   ├── Inclusions & Exclusions (Bulleted, brutally clear)
   └── Similar Packages (Keep them on the site if this isn't the one)

4. About Us (The Trust Builder)
   ├── Our Story (Why we started, face of the founders)
   ├── Our Physical Office (Photo of the Vadodara office/building)
   └── Core Values (Transparency, No hidden fees, Curation)

5. Contact Us
   ├── Direct WhatsApp Link
   ├── Lead Capture Form (Name, Phone, Destination, Dates)
   ├── Embedded Google Map (Physical proof of existence)
   └── Direct Phone & Email

6. Legal (Mandatory for Payment Gateways)
   ├── Terms & Conditions
   ├── Privacy Policy
   └── Cancellation & Refund Policy



# Packages
  * International
  -> Dubai
  -> Singapore-Malaysia
  -> Singapore-Malaysia-thailand
  -> Singapore-Malaysia-cruise
  -> Singapore-Malaysia-thailand-cruise
  -> bali
  -> vietnam
  -> phuket

  * Domestic
  -> Goa
  -> Kerela
  -> Shimla & Mandi
  -> Vdaipur Customize
  -> Kashmir
  -> Sikkim

  * Featured
  -> Dubai
  -> Singapore-Malaysia
  -> Singapore-Malaysia-cruise
  -> bali
  -> Goa
  -> Kerela
  -> Kashmir



# Page Design

## Home Page
Hero
──────────────────────

Floating Search

Trust Stats (horizontal)

Destination Grid (3 columns)

Package Carousel

Why Choose Us (2-column)

Category Icons (grid)

Offer Banner

Booking Steps (horizontal)

Testimonials (carousel)

Gallery (masonry)

Activities (horizontal scroll)

Map + Destination List

Upcoming Tours (3 cards)

Team (4 cards)

Blog (3 cards)

FAQ (accordion)

Newsletter (center)

Partner Logos (slider)

Instagram Strip

Big CTA Banner

Contact (2-column)

Footer



#

#

#