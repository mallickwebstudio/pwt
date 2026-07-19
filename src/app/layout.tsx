import type { Metadata } from "next";
import { Geist_Mono, Lemon, Merienda, Mrs_Sheppards, Permanent_Marker, Poppins, Tangerine } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { siteConfig } from "@/lib/metadata";
import Contact from "@/components/section/contact";


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

// const tangerine = Tangerine({
//   variable: "--font-tangerine",
//   subsets: ["latin"],
//   weight: ["400", "700"]
// });

const tangerine = Merienda({
  variable: "--font-tangerine",
  subsets: ["latin"],
  // weight: ["400",""]
});


export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", lemon.variable, tangerine.variable, geistMono.variable, poppins.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
