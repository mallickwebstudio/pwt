import Link from "next/link";
import { CalendarDays, MapPin, Tag } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Hero from "@/components/section/hero";
import { BasePackage, MediaItem } from "@/types";
import LeadDialog from "@/components/other/lead-dialog";

export default function PackageHero({
    data,
}: {
    data: BasePackage;
    heroImage?: MediaItem;
}) {
    return (
        <Hero h1={data.title} p={data.description} imageSrc={"/images/common/01.jpeg"}>
            <div className="flex items-center gap-2">
                <Badge variant="secondary" className="gap-1.5 px-3 py-1.5 text-sm">
                    <CalendarDays className="h-4 w-4" />
                    {data.duration.nights}N / {data.duration.days}D
                </Badge>
                <Badge variant="secondary" className="gap-1.5 px-3 py-1.5 text-sm">
                    <MapPin className="h-4 w-4" />
                    {data.destinations.join(", ")}
                </Badge>
                <Badge variant="secondary" className="gap-1.5 px-3 py-1.5 text-sm">
                    <Tag className="h-4 w-4" />
                    {data.category}
                </Badge>
            </div>

            <div className="mt-6 w-fit flex items-center justify-center flex-wrap">

                <LeadDialog
                    trigger={<Button size="lg">Get a Quote</Button>}
                    defaultPackageSlug={data.slug}
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