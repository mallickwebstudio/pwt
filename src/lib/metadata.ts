import { BasePackage } from "@/types"
import { mediaData } from "../db/media"
import { packagesData } from "../db/packages"
import { servicesData } from "../db/services"
import { itinerariesData } from "../db/itineraries"
import { pricingData } from "../db/pricing"

export const siteConfig = {
    name: "Patel World Tour",
    legalName: "Patel World Tour",
    tradeName: "Patel Tours",
    title: "Patel World Tour - Explore the world with Patel World Tour",
    description: "Patel World Tour - Explore the world with Patel World Tour",
    baseUrl: "https://patelworldtours.com",
    ogImage: "https://patelworldtours.com/og.png",
    links: {
        instagram: "https://www.instagram.com/patel_world_tour/",
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
    operatingHours: {
        timezone: "Asia/Kolkata",
        schedule: {
            monday: {
                open: "10:00",
                close: "20:00",
            },
            tuesday: {
                open: "10:00",
                close: "20:00",
            },
            wednesday: {
                open: "10:00",
                close: "20:00",
            },
            thursday: {
                open: "10:00",
                close: "20:00",
            },
            friday: {
                open: "10:00",
                close: "20:00",
            },
            saturday: {
                open: "10:00",
                close: "20:00",
            },
            sunday: {
                closed: true,
            },
        },
    },
    serviceVerticles: [
        "International Tour Curation",
        "Domestic Tour Curation",
        "Premium Hotel Bookings",
        "Global Flight Ticketing",
        "End-to-End Passport Service Assistance"
    ]
}

export const jsonLd = {
    root: {
        "@type": "TravelAgency",
        "@id": `${siteConfig.baseUrl}/#organization`,

        name: siteConfig.name,
        legalName: siteConfig.legalName,
        alternateName: siteConfig.tradeName,

        url: siteConfig.baseUrl,
        image: siteConfig.ogImage,
        logo: `${siteConfig.baseUrl}/logo.png`,

        telephone: [
            siteConfig.links.phone.replace("tel:", ""),
            siteConfig.links.phoneSecondary.replace("tel:", ""),
            siteConfig.links.phoneTertiary.replace("tel:", ""),
        ],

        email: siteConfig.links.email.replace("mailto:", ""),

        address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.headoffice.address,
            addressLocality: siteConfig.headoffice.city,
            addressRegion: siteConfig.headoffice.state,
            postalCode: siteConfig.headoffice.pincode,
            addressCountry: "IN",
        },

        areaServed: "India",

        sameAs: [siteConfig.links.instagram,],

        knowsAbout: siteConfig.serviceVerticles,

        contactPoint: {
            "@type": "ContactPoint",
            telephone: siteConfig.links.phone.replace("tel:", ""),
            contactType: "customer support",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi", "Gujarati"],
        },
    },

    about: {
        "@type": "AboutPage",
        name: "About Patel World Tour",
        description: "Learn more about Patel World Tour and our travel expertise.",
        url: `${siteConfig.baseUrl}/about-us`,
        isPartOf: {
            "@id": `${siteConfig.baseUrl}/#organization`,
        },
    },

    services: {
        "@graph": servicesData.map((service) => ({
            "@type": "Service",
            name: service.title,
            description: service.subTitle,
            provider: {
                "@id": `${siteConfig.baseUrl}/#organization`,
            },
            areaServed: "India",
        })),
    },

    contact: {
        "@type": "ContactPage",
        name: "Contact Patel World Tour",
        url: `${siteConfig.baseUrl}/contact-us`,
        mainEntity: {
            "@id": `${siteConfig.baseUrl}/#organization`,
        },
    },

    packages: {
        "@type": "CollectionPage",
        name: "Tour Packages",
        url: `${siteConfig.baseUrl}/packages`,
        mainEntity: {
            "@type": "ItemList",
            itemListElement: packagesData.map((tour, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: tour.title,
                url: `${siteConfig.baseUrl}/packages/${tour.slug}`,
            })),
        },
    },

    packageDetails: (data: BasePackage) => ({
        "@type": "TouristTrip",
        name: data.title,
        description: data.description,
        image: `${siteConfig.baseUrl}${mediaData[data.slug].find((m) => m.isHero)?.url ?? ""}`,
        touristType: data.category,
        itinerary: itinerariesData[data.slug]?.map((day) => ({
            "@type": "TouristAttraction",
            name: day.title,
        })),
        offers: {
            "@type": "Offer",
            url: `${siteConfig.baseUrl}/packages/${data.slug}`,
            price: pricingData[data.slug].startingPrice,
            priceCurrency: pricingData[data.slug].currency,
            availability: "https://schema.org/InStock",
        },
        provider: {
            "@id": `${siteConfig.baseUrl}/#organization`,
        },
    }),

    privacy: {
        "@type": "WebPage",
        name: "Privacy Policy",
        url: `${siteConfig.baseUrl}/privacy-policy`,
    },

    terms: {
        "@type": "WebPage",
        name: "Terms of Service",
        url: `${siteConfig.baseUrl}/terms-of-service`,
    },

    breadcrumb: (
        items: {
            name: string;
            href: string;
        }[]
    ) => ({
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${siteConfig.baseUrl}${item.href}`,
        })),
    }),
};