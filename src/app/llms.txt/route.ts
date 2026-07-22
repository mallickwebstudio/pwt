import { packagesData } from "@/lib/db/packages";
import { siteConfig } from "@/lib/metadata";
import { NextResponse } from "next/server";
export const dynamic = "force-static";

export async function GET() {
    const content = `
# ${siteConfig.name}

> ${siteConfig.description}

Website: ${siteConfig.baseUrl}

## Tour Packages

${packagesData.filter((pkg) => pkg.status === "PUBLISHED").map((pkg) =>
        `- ${pkg.title}
  URL: ${siteConfig.baseUrl}/packages/${pkg.slug}
  Description: ${pkg.description}`
    ).join("\n\n")}

## Services

- Visa Assistance
- Air Ticket Booking
- Passport Services
- Land Packages
- Customized Tour Packages
- Travel Support

## Contact

Website: ${siteConfig.baseUrl}
Email: info@example.com
Phone: +91XXXXXXXXXX
`;

    return new NextResponse(content, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
}