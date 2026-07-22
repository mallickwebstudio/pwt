import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/metadata";
import { formatWebsiteHref } from "@/lib/format";

const linkList = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Packages", href: "/packages" },
      { label: "Why Choose Us", href: "/#why-pwt" },
      { label: "Services", href: "/services" },
      { label: "Contact-us", href: "/contact-us" },
    ],
  },
  {
    title: "Popular Tours",
    links: [
      { label: "International", href: "/packages?category=International" },
      { label: "Domestic", href: "/packages?category=Domestic" },
      { label: "Dubai", href: "/packages?destination=Dubai" },
      { label: "Singapore", href: "/packages?destination=Singapore" },
      { label: "View More", href: "/packages#packages" },
    ],
  },
  {
    title: "Destinations",
    links: [
      { label: "Dubai", href: "/packages?destination=Dubai" },
      { label: "Singapore", href: "/packages?destination=Singapore" },
      { label: "Thailand", href: "/packages?destination=Thailand" },
      { label: "Bangkok", href: "/packages?destination=Bangkok" },
      { label: "View More", href: "/packages#packages" },
    ],
  },
];

const socialLinks = [
  {
    icon: (
      <div className="p-1.5 bg-blue-700 text-white rounded-md">
        <Phone className="size-3.5" />
      </div>
    ),
    label: "Call Us Directly", href: siteConfig.links.phone
  },
  {
    icon: (
      <div className="p-1.5 bg-green-600 text-white rounded-md">
        <MessageCircle className="size-3.5" />
      </div>
    ),
    label: "Whatsapp Us", href: siteConfig.links.whatsapp
  },
  {
    icon: (
      <div className="p-1.5 bg-conic from-violet-700 via-pink-700 to-violet-700 text-white rounded-md">
        <Box className="size-3.5" />
      </div>
    ),
    label: "Our Instagram Page", href: siteConfig.links.instagram
  },
];

export default function Footer() {
  return (
    <footer
      className="relative bg-linear-to-t bg-grad-mix-light"
      aria-labelledby="footer-heading"
      role="region"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto container px-6 py-12 md:p-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8">
          {/* Newsletter section */}
          <section className="xl:col-span-2">
            <Link className="block h-12 w-fit" href="/" aria-label="Homepage">
              <Image
                className="h-full w-fit select-none pointer-events-none"
                src="/images/logo/logo-title.png"
                width={32}
                height={32}
                alt="Your Company Logo"
                unoptimized
              />
              <span className="sr-only">{siteConfig.name}</span>
            </Link>

            <div className="mt-4 flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <h4 className="font-medium">Office Address</h4>
                <p className="mt-1 text-sm">
                  {siteConfig.headoffice.address},
                  <br />
                  {siteConfig.headoffice.area},
                  <br />
                  {siteConfig.headoffice.city}, {siteConfig.headoffice.state}{" "}
                  {siteConfig.headoffice.pincode}
                </p>
              </div>
            </div>
          </section>

          {/* Navigation links */}
          {/* <nav className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start" aria-label="Footer navigation"> */}
          {linkList.map((item) => (
            <section
              key={item.title + "FooterOne"}
              aria-labelledby={`${item.title.toLowerCase()}-heading`}
            >
              <h3 className="font-heading">
                {item.title}
              </h3>
              <ul className="mt-4 space-y-1">
                {item.links.map((link) => (
                  <li key={link.label + "FooterOne"}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-primary hover:underline underline-offset-4"
                      aria-label={`${item.title} - ${link.label}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          {/* Social media links */}
          <section aria-labelledby="social-links-heading">
            <h3 id="social-links-heading" className="font-heading">Follow Us</h3>
            {/* <Icon className="size-5 mr-2" aria-hidden="true" /> */}
            <ul className="mt-4 space-y-3">
              {socialLinks.map(({ icon, label, href }) => (
                <li key={label + "FooterOne"}>
                  <Link
                    href={href}
                    className="text-sm flex items-start gap-2 hover:underline hover:text-primary underline-offset-4"
                    aria-label={`Follow us on ${label}`}
                  >
                    {icon}
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          {/* </nav> */}
        </div>

        {/* Footer bottom bar */}
        <div className="pt-6 mt-6 flex gap-4 flex-col md:flex-row md:justify-between md:items-center text-sm border-t border-neutral-500">
          <p>
            © {new Date().getFullYear()} <Link
              className="hover:underline"
              href={siteConfig.baseUrl}
              target="_blank"
            >
              {formatWebsiteHref(siteConfig.baseUrl)}
            </Link>
            . All rights reserved{" "}|{" "}
            <Link className="underline-offset-4 hover:underline hover:text-primary" href="/privacy-policy">
              Privacy & Policy
            </Link>{" "}|{" "}
            <Link className="underline-offset-4 hover:underline hover:text-primary" href="/terms-of-service">
              Terms of Service
            </Link>
          </p>
          <div className="flex flex-col md:flex-row-reverse md:items-center gap-4">
            <Link
              className="underline-offset-4 hover:underline hover:text-primary text-xs text-center"
              href="https://mallickwebstudio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ❤️ This website is Designed & <br />
              Developed by <i className="italic">Mallick Web Studio</i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
