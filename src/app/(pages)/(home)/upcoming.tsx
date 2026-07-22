import Section from "@/components/section/section";
import { upcomingToursData } from "@/lib/db/upcoming";
import { packagesData } from "@/lib/db/packages";
import PackageCard from "@/components/card/package-card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/format";

export default function Upcoming() {
  const tours = upcomingToursData.slice(0, 4);
  
  return (
    <Section
      h2="Upcoming Tours"
      p="Discover handpicked domestic and international tours designed for families, couples, groups, and adventure seekers."
    >
      <ul className="mt-10 w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {tours.map((data, i) => {
          return (
            <div className="relative" key={i + "HomeHorizontalCard"}>
              {/* <PackageCardHorizontal data={packagesData.filter(item => item.slug === data.package.slug)[0]} key={i + "HomeHorizontalCard"} /> */}
              <PackageCard data={packagesData.filter(item => item.slug === data.package.slug)[0]} key={i + "HomeHorizontalCard"} />
              <div className="absolute top-2 w-full flex items-center justify-center">
                <Badge className="shadow-sm border" variant="secondary">
                  Departing on <span className="font-heading text-primary"> {formatDate(data.routeMeta.dates[0].departureDate)} </span>
                </Badge>
              </div>
            </div>
          )
        })}
      </ul>
    </Section>
  );
}