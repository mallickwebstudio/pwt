import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  MapPin,
  Tag,
  IndianRupee,
  CheckCircle2,
  Check,
  X,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Section from "@/components/section/section";
import {
  BasePackage,
  HighlightsData,
  HotelStay,
  InclusionsExclusions,
  ItineraryDay,
  MediaItem,
  PackagePricing as PackagePricingType,
} from "@/types";

/**
 * ------------------------------------------------------------
 * Quick Facts strip — sits right below the hero
 * ------------------------------------------------------------
 */
export function PackageQuickFacts({
  data,
  pricing,
}: {
  data: BasePackage;
  pricing?: PackagePricingType;
}) {
  return (
    <section className="border-b bg-background">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-6 px-6 py-6 md:px-16">
        <div className="flex flex-wrap items-center gap-8">
          <QuickFact
            icon={CalendarDays}
            label="Duration"
            value={`${data.duration.nights}N / ${data.duration.days}D`}
          />
          <QuickFact
            icon={MapPin}
            label="Destinations"
            value={data.destinations.join(", ")}
          />
          <QuickFact icon={Tag} label="Category" value={data.category} />
          {pricing && (
            <QuickFact
              icon={IndianRupee}
              label="Starting From"
              value={`₹${pricing.startingPrice.toLocaleString("en-IN")}`}
            />
          )}
        </div>

        <Link
          href="#enquiry"
          className={cn(buttonVariants({ variant: "default" }), "shrink-0")}
        >
          Enquire Now
        </Link>
      </div>
    </section>
  );
}

function QuickFact({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
}

/**
 * ------------------------------------------------------------
 * Highlights + Activities
 * ------------------------------------------------------------
 */
export function PackageHighlights({ data }: { data: HighlightsData }) {
  return (
    <Section h2="Highlights" p="What makes this tour special">
      <div className="mb-10 grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">
        {data.highlights.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      {data.activities.length > 0 && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {data.activities.map((activity, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                // src={activity.imageSrc}
                src={"/images/common/03.webp"}
                alt={activity.label}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-transparent" />
              <div className="absolute bottom-0 left-0 p-3 text-sm font-medium text-white">
                {activity.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}

/**
 * ------------------------------------------------------------
 * Gallery
 * ------------------------------------------------------------
 */
export function PackageGallery({
  media,
  title,
}: {
  media: MediaItem[];
  title: string;
}) {
  const images = media.filter((m) => !m.isHero);
  if (images.length === 0) return null;

  return (
    <Section
      h2="Gallery"
      p="A closer look at what awaits you"
      className="bg-secondary/30"
    >
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.map((image, i) => (
          <div
            key={i}
            className={cn(
              "relative aspect-square overflow-hidden rounded-xl",
              i === 0
                ? "col-span-2 row-span-2 aspect-square md:aspect-video"
                : "aspect-square"
            )}
          >
            <Image
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              // src={image.url}
              src={"/images/common/01.webp"}
              alt={image.altText || title}
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}

/**
 * ------------------------------------------------------------
 * Itinerary — vertical timeline (ItineraryDay only has day + title)
 * ------------------------------------------------------------
 */
export function PackageItinerary({ days }: { days: ItineraryDay[] }) {
  return (
    <Section h2="Itinerary" p="Day-by-day plan for your trip">
      <ol className="mt-8 relative max-w-3xl border-l-2 border-border pl-8">
        {days.map((day, i) => (
          <li
            key={day.day}
            className={cn("relative", i !== days.length - 1 && "pb-8")}
          >
            <span className="absolute -left-12 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground ring-4 ring-background">
              {day.day}
            </span>
            <div className="pt-1 font-medium">{day.title}</div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/**
 * ------------------------------------------------------------
 * Hotel Stays
 * ------------------------------------------------------------
 */
export function PackageHotels({ hotels }: { hotels: HotelStay[] }) {
  return (
    <Section
      h2="Hotel Stays"
      p="Handpicked stays included in this package"
      className="bg-secondary/30"
    >
      <div className="max-w-3xl overflow-hidden rounded-xl border bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>City</TableHead>
              <TableHead>Hotel</TableHead>
              <TableHead className="text-right">Nights</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {hotels.map((stay, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{stay.city}</TableCell>
                <TableCell>{stay.name}</TableCell>
                <TableCell className="text-right">{stay.nights}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Section>
  );
}

/**
 * ------------------------------------------------------------
 * Pricing
 * ------------------------------------------------------------
 */
export function PackagePricing({ pricing }: { pricing: PackagePricingType }) {
  const rows = [
    { label: "Adult Rate", value: pricing.adultRate },
    { label: "Child (No Bed, 5–12 yrs)", value: pricing.childNoBed5to12 },
    { label: "Child (No Bed, 2–5 yrs)", value: pricing.childNoBed2to5 },
    { label: "Child (No Bed)", value: pricing.childNoBed },
    { label: "Infant Rate", value: pricing.infantRate },
  ].filter((row): row is { label: string; value: number } => row.value != null);

  return (
    <Section h2="Pricing" p="Transparent, per-person pricing">
      <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1fr)_320px]">
        <div className="overflow-hidden rounded-xl border">
          {rows.length > 0 ? (
            <Table>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.label}>
                    <TableCell className="font-medium">{row.label}</TableCell>
                    <TableCell className="text-right">
                      {pricing.currency} {row.value.toLocaleString("en-IN")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="p-6 text-muted-foreground">
              Contact us for a detailed price breakdown.
            </div>
          )}
          {pricing.taxes && (
            <div className="border-t px-4 py-3 text-sm text-muted-foreground">
              {pricing.taxes}
            </div>
          )}
        </div>

        <div className="rounded-xl border bg-secondary/40 p-6">
          <div className="text-sm text-muted-foreground">Starting from</div>
          <div className="mt-1 text-3xl font-bold">
            {pricing.currency} {pricing.startingPrice.toLocaleString("en-IN")}
          </div>
          <div className="text-sm text-muted-foreground">per person</div>
          {pricing.note && (
            <p className="mt-4 text-sm text-muted-foreground">{pricing.note}</p>
          )}
          <Link
            href="#enquiry"
            className={cn(buttonVariants({ variant: "default" }), "mt-6 w-full")}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </Section>
  );
}

/**
 * ------------------------------------------------------------
 * Inclusions & Exclusions
 * ------------------------------------------------------------
 */
export function PackageInclusionsExclusions({
  data,
}: {
  data: InclusionsExclusions;
}) {
  return (
    <Section
      h2="Inclusions & Exclusions"
      p="Know exactly what's covered"
      className="bg-secondary/30"
    >
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-lg font-semibold">Inclusions</h3>
          <ul className="space-y-3">
            {data.inclusions.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Exclusions</h3>
          <ul className="space-y-3">
            {data.exclusions.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/**
 * ------------------------------------------------------------
 * Enquiry CTA — anchor target for #enquiry links above
 * ------------------------------------------------------------
 */
export function PackageEnquiry({ data }: { data: BasePackage }) {
  return (
    <section id="enquiry" className="border-t bg-primary/5">
      <div className="container mx-auto flex flex-col items-center gap-4 px-6 py-14 text-center md:px-16">
        <h2 className="h2">Ready to book {data.title}?</h2>
        <p className="max-w-xl text-muted-foreground">
          Share your travel dates and group size — our team will get back to you
          with a customized quote.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Link href="tel:+911234567890" className={cn(buttonVariants({ variant: "default" }))}>
            Call Us
          </Link>
          <Link
            href={`mailto:info@example.com?subject=${encodeURIComponent(
              `Enquiry: ${data.title}`
            )}`}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Email Enquiry
          </Link>
        </div>
      </div>
    </section>
  );
}