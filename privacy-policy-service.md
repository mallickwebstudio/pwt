I'm building website for tours and travels I need a privacy policy and terms of service page, with below information generate me a professional pages, just give me content in proper html tag wrapperd, I will use tailwind/typography prose class to apply beautiful designs.

few details before I start.
the business located in india Gujarat, vadodara.
I'm building this with nextjs,shadcnui, deployed in vercel.


1. Privacy Policy
Explains:
What data you collect (name, phone, email, inquiry)
How it's used
Cookies
Third-party services (Google Analytics, Meta Pixel, WhatsApp, etc.)
User rights
Contact information
-> I'm using google analytics, search console, pixel, whatsapp button (so user can directly go to our home page), to monitor user activities and for marketing, 
contact information is in my "@/lib/metadata.ts" in siteConfig export file.

export const siteConfig = {
    name: "Patel World Tour",
    legalName: "Patel World Tour",
    tradeName: "Patel Tours",
    title: "Patel World Tour - Explore the world with Patel World Tour",
    description: "Patel World Tour - Explore the world with Patel World Tour",
    baseUrl: "https://patelworldtours.com",
    ogImage: "https://patelworldtours.com/og.png",
    links: {
        instagram: "https://www.instagram.com/mallickwebstudio_/",
        phone: "tel:+917201919911",
        phoneSecondary: "tel:+918320646940",
        phoneTertiary: "tel:+917984172824",
        whatsapp: "https://wa.me/+917201919911",
        email: "mailto:patelworldtour.in@gmail.com",
    },
    headoffice: {
        address: "604, Veer Enclave, Opp. Fortune Platinum, Near Tulsidham Char Rasta",
        area: "Manjalpur",
        city: "Vadodara",
        state: "Gujarat",
        pincode: "390011"
    },
    serviceVerticles: [
        "International Tour Curation",
        "Domestic Tour Curation",
        "Premium Hotel Bookings",
        "Global Flight Ticketing",
        "End-to-End Passport Service Assistance"
    ]
}


2. Terms & Conditions
Covers:
Website usage
Booking process
Pricing disclaimer
Package availability
User responsibilities
Intellectual property
Limitation of liability

-> Website is fro direct listing our packages and display datas, user can book directly by contacting to us by any means (whatsapp, website form submission, email, phone call), the prossess is like (they select package, contact us [customize if needed], give their details booking is done]. Pricing will be same as the site is showing, and if they custimize the package the pricing may change depend on it. package availibility is mentioned in website and they can customize it.
user responsibility will be as expected of them(make it yourself),


3. Refund & Cancellation Policy
Very important for travel businesses.
Include:
Cancellation by customer
Cancellation by airline/hotel/operator
Refund timelines
Non-refundable bookings
Visa rejection cases
Force majeure (natural disasters, pandemics, etc.)

-> They are able to cancel their tour but there will be minimum charge cutoff due to ticket booking, for their works.
and the timeline must be before 2 week. refund will process once their cancellation is process from our site.
-> keep [Visa rejection cases] [Force majeure (natural disasters, pandemics, etc.)] empty with placeholder

4. Cookie Policy
Explains:
Essential cookies
Analytics cookies
Marketing cookies
Cookie preferences (if applicable)
Strongly Recommended

-> make it yourself


5. Booking Policy
Explain:
Advance payment
Full payment deadline
Booking confirmation
Required documents
Pricing validity

-> Payment can be done with any method (cash, debit, online upi), full payment before 2 week of departure,
-> Keep [Required documents] a placeholder

6. Visa Disclaimer
State that:
Visa approval is at the discretion of the embassy/consulate.
Submission of documents does not guarantee visa approval.
Fees may be non-refundable depending on the case.

-> Make it yourself


7. Travel Disclaimer
Clarify:
Itineraries may change due to weather, local conditions, government regulations, airline schedules, or operational requirements.
Photos are for illustration.
Hotels may be substituted with equivalent properties if necessary.
-> Make it yourself


8. Payment Policy
Include:
Accepted payment methods
Payment schedules
GST
TCS (for international tours)
Invoice information

-> Make it yourself (according to indian law)

with these data give me privacy-policy page and terms-of-service page in a format I've mentioned above.