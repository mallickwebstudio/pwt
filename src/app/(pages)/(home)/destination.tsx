import { packagesData } from "@/lib/db/packages";
import Section from "@/components/section/section";
import DestinationCard from "@/components/card/destination-card";
import { Destination as TypeDestination } from "@/types";

const destinations = Object.values(
  packagesData.reduce<Record<string, TypeDestination>>((acc, pkg) => {
    // const heroImage = pkg.media.find((media) => media.isHero)?.url ?? "/images/bg/01.jpeg";
    const heroImage = "/images/bg/03.jpeg";

    pkg.destinations.forEach((destination) => {
      if (!acc[destination]) {
        acc[destination] = {
          name: destination,
          image: heroImage,
          href: `/packages?destination=${encodeURIComponent(destination)}`,
          packageCount: 0,
          startingPrice: pkg.pricing.startingPrice,
        };
      }

      acc[destination].packageCount += 1;
      acc[destination].startingPrice = Math.min(
        acc[destination].startingPrice,
        pkg.pricing.startingPrice
      );
    });

    return acc;
  }, {})
)
  .sort((a, b) => b.packageCount - a.packageCount)
  .slice(0, 3);

export default function Destination() {
  return (
    <Section
      h2="Explore Our Most Loved Destinations"
      p="Discover handpicked domestic and international tours designed for families, couples, groups, and adventure seekers."
      ctaHref="/destinations"
      ctaLabel="View All Destinations"
    >
      {/* Service Cards */}
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 list-none">
        {destinations.map((data) => (
          <li key={data.name + "HomeDestination"}>
            <DestinationCard data={data} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
