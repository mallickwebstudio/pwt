import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Box } from "lucide-react";

const linkList = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "API", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Box, label: "Twitter", href: "#" },
  { icon: Box, label: "Facebook", href: "#" },
  { icon: Box, label: "Instagram", href: "#" },
  { icon: Box, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="relative bg-background"
      aria-labelledby="footer-heading"
      role="region"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto container px-6 py-12 md:p-16 lg:py-20">
        <div className="grid gap-8 md:gap-16 md:grid-cols-[0.75fr_1fr]">
          {/* Newsletter section */}
          <section aria-labelledby="newsletter-heading">
            <Link className="block h-8 w-fit" href="#" aria-label="Homepage">
              <Image
                className="h-full w-fit select-none pointer-events-none"
                src="/logo.svg"
                width={32}
                height={32}
                alt="Your Company Logo"
                unoptimized
              />
              <span className="sr-only">Company</span>
            </Link>

            <h2 id="newsletter-heading" className="mt-4 font-medium">
              Join our newsletter to stay up to date on features and releases.
            </h2>

            <form
              className="mt-4 flex flex-col sm:flex-row gap-2"
            //   onSubmit={(e) => e.preventDefault()}
              aria-labelledby="newsletter-heading"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <Input
                className="flex-1"
                type="email"
                id="newsletter-email"
                name="email"
                inputMode="email"
                aria-label="Email address"
                placeholder="Your email"
                required
              />
              <Button type="submit" aria-label="Subscribe to newsletter">
                Subscribe
              </Button>
            </form>

            <p className="mt-3 text-xs">
              By subscribing you agree to our{" "}
              <a
                className="underline underline-offset-2 hover:underline-offset-4"
                href="#"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </a>{" "}
              and consent to receive updates from our company.
            </p>
          </section>

          {/* Navigation links */}
          <nav className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start" aria-label="Footer navigation">
            {linkList.map((item) => (
              <section
                key={item.title + "FooterOne"}
                aria-labelledby={`${item.title.toLowerCase()}-heading`}
              >
                <h3 id={`${item.title.toLowerCase()}-heading`} className="font-semibold">
                  {item.title}
                </h3>
                <ul className="mt-4 space-y-1">
                  {item.links.map((link) => (
                    <li key={link.label + "FooterOne"}>
                      <Link
                        href={link.href}
                        className="text-sm hover:underline underline-offset-4"
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
              <h3 id="social-links-heading" className="font-semibold">Follow Us</h3>
              <ul className="mt-4 space-y-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <li key={label + "FooterOne"}>
                    <Link
                      href={href}
                      className="text-sm flex items-center hover:underline underline-offset-4"
                      aria-label={`Follow us on ${label}`}
                    >
                      <Icon className="size-5 mr-2" aria-hidden="true" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </nav>
        </div>

        {/* Footer bottom bar */}
        <div className="border-t mt-6 pt-6 md:mt-12 md:pt-12 flex gap-4 flex-col md:flex-row-reverse md:justify-between md:items-center text-sm">
          <nav aria-label="Legal links">
            <ul className="flex flex-col md:flex-row md:items-center gap-4">
              <li>
                <Link
                  className="underline underline-offset-2 hover:underline-offset-4"
                  href="#"
                  aria-label="Privacy Policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="underline underline-offset-2 hover:underline-offset-4"
                  href="#"
                  aria-label="Terms of Service"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  className="underline underline-offset-2 hover:underline-offset-4"
                  href="#"
                  aria-label="Cookie Settings"
                >
                  Cookies Settings
                </Link>
              </li>
            </ul>
          </nav>
          <p>
            © {new Date().getFullYear()} Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
