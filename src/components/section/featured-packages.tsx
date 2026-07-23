"use client";

import { useEffect, useState } from "react";
import { packagesData } from "@/db/packages";
import Section from "@/components/section/section";
import PackageCard from "@/components/card/package-card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export default function FeaturedPackages() {
  const featuredPackages = packagesData.filter(
    (pkg) => pkg.status === "PUBLISHED" && pkg.isFeatured
  );

  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <Section
      h2="Our Featured Packages"
      p="Discover handpicked domestic and international tours designed for families, couples, groups, and adventure seekers."
      ctaHref="/packages"
      ctaLabel="View All Packages"
    >
      <Carousel
        setApi={setApi}
        className="mt-10 overflow-visible"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent className="overflow-visible py-6">
          {featuredPackages.map((data, index) => {
            const distance = Math.abs(index - selectedIndex);

            const scaleClass =
              distance === 0
                ? "scale-100 opacity-100"
                : distance === 1
                  ? "scale-95 opacity-90"
                  : "scale-90 ";

            return (
              <CarouselItem
                key={`${data.slug}-HomePackage`}
                className="basis-[80%] md:basis-1/2 xl:basis-1/3"
              >
                <div className={cn("transition-all duration-300 ease-out", scaleClass)}>
                  <PackageCard data={data} />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious className="hidden md:flex -left-4" />
        <CarouselNext className="hidden md:flex -right-4" />
      </Carousel>
    </Section>
  );
}