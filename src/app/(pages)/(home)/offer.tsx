import Section from "@/components/section/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { offersData } from "@/db/offers";
import { ArrowRight } from "lucide-react";
import { mediaData } from "@/db/media";
import { pricingData } from "@/db/pricing";

export default function Offer() {
  const offer = offersData[0]
  const heroImages = mediaData[offer.slug].slice(0, 3);

  return (
    <Section wrapperClassName="px-2 sm:px-6 py-2 md:py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-4xl border bg-primary text-primary-foreground p-6 lg:p-10 overflow-hidden">
        {/* Images */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 top-1/2 bottom-1/2 -translate-y-1/2 left-1/2 right-1/2 -translate-x-1/2 size-60 md:size-80 blur-[500px] bg-secondary" aria-hidden />
          {/* {heroImages[1] && ( */}
          <Image
            src="/images/common/01.webp"
            alt={heroImages[1].altText}
            width={300}
            height={400}
            className={cn(
              "absolute left-[28%] -translate-x-1/2 -rotate-12",
              "w-44 lg:w-56 aspect-3/4 rounded-xl object-cover shadow-2xl"
            )}
          />
          {/* )} */}

          <Image
            src="/images/common/02.webp"
            alt={"heroImages[2].altText"}
            width={300}
            height={400}
            className={cn(
              "absolute left-[72%] -translate-x-1/2 rotate-12",
              "w-44 lg:w-56 aspect-3/4 rounded-xl object-cover shadow-2xl"
            )}
          />

          <Image
            src="/images/common/03.webp"
            alt={"heroImages[0].altText"}
            width={320}
            height={430}
            className="relative z-10 w-44 lg:w-56 aspect-3/4 rounded-xl object-cover shadow-2xl"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <h2 className="h2 text-secondary">
            {offer.title}
          </h2>

          <p className="mt-2 text-primary-foreground/80 max-w-xl">
            {offer.description}
          </p>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-6 gap-4">
            <div className="rounded-2xl bg-white/10 backdrop-blur p-4 col-span-6 sm:col-span-2">
              <p className="text-xs uppercase text-primary-foreground/60 font-mono">
                Starting From
              </p>

              <h3 className="mt-1 text-2xl font-bold text-secondary font-heading">
                ₹{pricingData[offer.slug].startingPrice.toLocaleString("en-IN")}
              </h3>
            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur p-4 col-span-3 sm:col-span-2">
              <p className="text-xs uppercase text-primary-foreground/60 font-mono">
                Duration
              </p>

              <h3 className="mt-1 text-2xl font-bold text-primary-foreground">
                {offer.duration.days}D / {offer.duration.nights}N
              </h3>
            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur p-4 col-span-3 sm:col-span-2">
              <p className="text-xs uppercase text-primary-foreground/60 font-mono">
                Destinations
              </p>

              <ul className="mt-1 list-disc text-xs space-y-1">
                {offer.destinations.map(item => (
                  <li className="flex items-start gap-0.5" key={item + "HomeOffer"}>
                    <ArrowRight className="mt-0.5 size-3 shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-3 mt-8">
            {/* {offer.highlights && offer.highlights.slice(0, 4).map((highlight) => (
              <div
                className="flex items-start gap-2 rounded-xl bg-white/5 p-3"
                key={highlight}
              >
                <CheckCheck className="mt0.5 size-4 shrink-0 text-secondary" />

                <p className="text-sm text-primary-foreground/90">
                  {highlight}
                </p>
              </div>
            ))} */}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mt-10 items-center justify-center">
            <Button
              size="lg"
              className="rounded-full px-8"
              variant="secondary"
            >
              <Link href={`/packages/${offer.slug}`}>
                Explore Package
              </Link>
            </Button>

            {offer.flyerHref && (
              <Button
                variant="outline"
                size="lg"
                className="rounded-full bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href={offer.flyerHref} target="_blank">
                  Download Flyer
                </Link>
              </Button>
            )}
          </div>

          {/* Trust */}
          {/* <div className="flex flex-wrap gap-6 mt-10 text-sm text-primary-foreground/70">
            <span>✈ Flight Included</span>
            <span>🏨 Premium Hotels</span>
            <span>🚌 Guided Tours</span>
            <span>🎫 Attraction Tickets</span>
          </div> */}
        </div>
      </div>
    </Section>
  );
}