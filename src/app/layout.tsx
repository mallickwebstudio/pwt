import type { Metadata, Viewport } from "next";
import { Geist_Mono, Lemon, Merienda, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { jsonLd, siteConfig } from "@/lib/metadata";
import Contact from "@/components/section/contact";
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import OverscreenWhatsappButton from "@/components/other/overscreen-whatsapp-button";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from "@next/third-parties/google";
import { JsonLd } from "@/components/other/json-ld";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const lemon = Lemon({
  variable: "--font-lemon",
  subsets: ["latin"],
  weight: "400"
});

const merienda = Merienda({
  variable: "--font-merienda",
  subsets: ["latin"],
});


// export const metadata: Metadata = {
//   title: siteConfig.title,
//   description: siteConfig.description,
// };


export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),

  title: {
    default: "Patel World Tour | Tours, Travels, Visa & Holiday Packages",
    template: "%s | Patel World Tour",
  },
  description: "Discover domestic and international tour packages with Patel World Tour. Book customized holidays, visa assistance, air tickets, passport services, and unforgettable travel experiences.",
  applicationName: siteConfig.name,
  keywords: [
    siteConfig.name,
    "Travel Agency",
    "Tour Packages",
    "International Tours",
    "Domestic Tours",
    "Holiday Packages",
    "Visa Assistance",
    "Passport Services",
    "Air Ticket Booking",
    "Customized Tour Packages",
    "Travel Agency Gujarat",
    "Ahmedabad Tours",
    "Dubai Tour",
    "Singapore Tour",
    "Thailand Tour",
  ],
  category: "Tours and Travels",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    title: "Patel World Tour | Tours, Travels & Holiday Packages",
    description: "Explore the world with Patel World Tour. International & domestic tour packages, visa services, passport assistance, flight bookings, and customized holidays.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: "Book international & domestic holiday packages with expert travel assistance.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon.ico",
  },
  manifest: "/favicon/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.name,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: "origin-when-cross-origin",
};

export const viewport: Viewport = {
  themeColor: "#fef3c6",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", lemon.variable, merienda.variable, geistMono.variable, poppins.variable, "font-sans")}
    >
      <body className="relative min-h-full flex flex-col">
      <JsonLd data={jsonLd.root} />
        <OverscreenWhatsappButton />
        <Navbar />
        <NuqsAdapter>
          <main className="flex-1">
            {children}
          </main>
        </NuqsAdapter>
        <Contact />
        <Footer />
        <Toaster />
        <GoogleAnalytics gaId="G-5QRY78BGTR" />
      </body>
    </html>
  );
}
