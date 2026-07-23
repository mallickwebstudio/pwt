import { packagesData } from "@/db/packages";
import { siteConfig } from "@/lib/metadata";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
    // Note: Ensure the template literal has no unnecessary indentation 
    // on the left so the Markdown renders correctly.
    const content = `
# ${siteConfig.name}

> ${siteConfig.description}

## Core Pages

- [Home](${siteConfig.baseUrl}/)
- [About Us](${siteConfig.baseUrl}/about-us)
- [Tour Packages](${siteConfig.baseUrl}/packages)
- [Services](${siteConfig.baseUrl}/services)
- [Contact Us](${siteConfig.baseUrl}/contact-us)
- [Privacy Policy](${siteConfig.baseUrl}/privacy-policy)
- [Terms of Service](${siteConfig.baseUrl}/terms-of-service)

## Tour Packages

${packagesData
            .filter((pkg) => pkg.status === "PUBLISHED")
            .map((pkg) => `- [${pkg.title}](${siteConfig.baseUrl}/packages/${pkg.slug})\n  ${pkg.description}`)
            .join("\n\n")}

## Services

- Visa Assistance
- Air Ticket Booking
- Passport Services
- Land Packages
- Customized Tour Packages
- Travel Support

## Contact Information

- [Website](${siteConfig.baseUrl}/)
- Email: info@example.com
- Phone: +91XXXXXXXXXX
`.trim();

    return new NextResponse(content, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
}