import Section from "@/components/section/section";
import { upcomingToursData } from "@/lib/db/upcoming";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import PackageCardHorizontal from "@/components/card/package-card-horizontal";
import { packagesData } from "@/lib/db/packages";

export default function Upcoming() {
  const tours = upcomingToursData.slice(0, 4);

  return (
    <Section
      h2="Upcoming Tours"
      p="Discover handpicked domestic and international tours designed for families, couples, groups, and adventure seekers."
    >
      <ul className="mt-10 w-full grid gap-6 grid-cols-1 md:grid-cols-2">
        {tours.map((data, i) => {
          console.log(data.package.slug)
          return (
            <div className="" key={i + "HomeHorizontalCard"}>
              <PackageCardHorizontal data={packagesData.filter(item => item.slug === data.package.slug)[0]} key={i + "HomeHorizontalCard"} />
            </div>
          )
        })}
      </ul>
    </Section>
  );
}