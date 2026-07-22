import Link from "next/link";
import { CalendarDays, IndianRupee, MapPin, Tag } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Hero from "@/components/section/hero";
import { BasePackage, PackagePricing } from "@/types";
import LeadDialog from "@/components/other/lead-dialog";

export default function PackageHero({
    data,
    heroImage,
    pricing
}: {
    data: BasePackage;
    heroImage: string;
    pricing?: PackagePricing;
}) {
    return (
        <Hero h1={data.title} p={data.description} imageSrc={heroImage}>
            <div className="mt-6 grid grid-cols-2 gap-4 max-w-2xl">
                <div className="py-2 px-4 flex items-center gap-3 bg-secondary rounded-2xl">
                    <div className="flex items-center justify-center rounded-full bg-secondary shrink-0">
                        <Tag className="size-5" />
                    </div>
                    <div>
                        <div className="text-xs text-muted-foreground font-mono">
                            Category
                        </div>
                        <div className="font-medium text-sm md:text-base">{data.category}</div>
                    </div>
                </div>

                <div className="py-2 px-4 flex items-center gap-3 bg-secondary rounded-2xl">
                    <div className="flex items-center justify-center rounded-full bg-secondary shrink-0">
                        <CalendarDays className="size-5" />
                    </div>
                    <div>
                        <div className="text-xs text-muted-foreground font-mono">
                            Duration
                        </div>
                        <div className="font-medium text-sm md:text-base">
                            {data.duration.nights}N / {data.duration.days}D
                        </div>
                    </div>
                </div>

                <div className="py-2 px-4 bg-secondary rounded-2xl col-span-2 md:col-span-1">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center rounded-full bg-secondary shrink-0">
                            <MapPin className="size-5" />
                        </div>
                        <div className="text-xs text-muted-foreground font-mono">
                            Destinations
                        </div>
                    </div>
                    <div className="mt-1 font-medium text-sm md:text-base">
                        {data.destinations.join(", ")}
                    </div>
                </div>

                {pricing && (
                    <div className="py-2 px-4 flex items-center gap-3 bg-secondary rounded-2xl">
                        <div className="flex items-center justify-center rounded-full bg-secondary shrink-0">
                            <IndianRupee className="size-5" />
                        </div>
                        <div>
                            <div className="text-xs text-muted-foreground font-mono">
                                Starting From
                            </div>
                            <div className="font-medium md:text-lg font-heading text-tone-yellow">
                                ₹{pricing.startingPrice.toLocaleString("en-IN")}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-6 w-fit flex items-center justify-center flex-wrap gap-4">
                <LeadDialog
                    trigger={<span className={buttonVariants({ size: "lg" })}>Request Booking</span>}
                    defaultPackageSlug={data.slug}
                    ctaLabel="Request Booking"
                />

                {data.flyerHref && (
                    <Link
                        href={data.flyerHref}
                        target="_blank"
                        className={cn(buttonVariants({ variant: "outline" }))}
                    >
                        Download Flyer
                    </Link>
                )}
            </div>
        </Hero>
    );
}