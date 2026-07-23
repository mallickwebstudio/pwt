import { packagesData } from "@/lib/db/packages";
import Section from "@/components/section/section";
import DestinationCard from "@/components/card/destination-card";
import { Destination as TypeDestination } from "@/types";
import { pricingData } from "@/lib/db/pricing";
import { mediaData } from "@/lib/db/media";
import { ZoomInUp } from "../animation/zoom-in-up";

const destinations = Object.values(
  packagesData.reduce<Record<string, TypeDestination>>((acc, pkg) => {

    // const heroImage = pkg.media.find((media) => media.isHero)?.url ?? "/images/bg/01.jpeg";
    const imageData = mediaData[pkg.slug][0]
    const heroImage = imageData.url;
    const heroImageAlt = imageData.altText;

    pkg.destinations.forEach((destination) => {
      if (!acc[destination]) {
        acc[destination] = {
          name: destination,
          image: heroImage,
          imageAlt: heroImageAlt,
          href: `/packages?destination=${encodeURIComponent(destination)}`,
          packageCount: 0,
          startingPrice: pricingData[pkg.slug].startingPrice,
        };
      }

      acc[destination].packageCount += 1;
      acc[destination].startingPrice = Math.min(
        acc[destination].startingPrice,
        pricingData[pkg.slug].startingPrice
      );
    });

    return acc;
  }, {})
)
  .sort((a, b) => b.packageCount - a.packageCount)
  .slice(0, 8);

export default function FeaturedDestinations() {
  return (
    <Section
      h2="Explore Our Most Loved Destinations"
      p="Discover handpicked domestic and international tours designed for families, couples, groups, and adventure seekers."
      ctaHref="/packages"
      ctaLabel="View All Destinations"
    >
      {/* Service Cards */}
      <ul className="mt-10 grid gap-2 md:gap-6 grid-cols-2 md:grid-cols-4 list-none">
        {destinations.map((data, i) => (
          <li key={data.name + i + "HomeDestination"}>
            <ZoomInUp delayOffset={i * 0.1}>
              <DestinationCard data={data} />
            </ZoomInUp>
          </li>
        ))}
      </ul>
    </Section>
  );
}
