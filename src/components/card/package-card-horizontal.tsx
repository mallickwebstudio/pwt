import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BasePackage } from "@/types";
import { pricingData } from "@/lib/db/pricing";

export default function PackageCardHorizontal({ data }: { data: BasePackage }) {
    // Pass dynamic image or fall back to default
    //   const heroImage = data.media?.find((img) => img.isHero)?.url ?? data.media?.[0]?.url ?? "/images/bg/02.jpeg";
    const heroImage = "/images/bg/02.jpeg";
    const price = pricingData[data.slug]?.startingPrice;

    return (
        <Link className="relative block group" href={`/packages/${data.slug}`}>
            <article className="relative flex flex-col sm:flex-row rounded-3xl border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg">

                {/* Media Container */}
                <div className="relative w-full sm:w-2/5 aspect-4/3 sm:aspect-auto shrink-0 overflow-hidden">
                    <Image
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105 select-none pointer-events-none"
                        src={heroImage}
                        alt={data.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent sm:hidden" />

                    {/* Mobile Badges overlay */}
                    <div className="absolute bottom-2 inset-x-2 flex justify-between sm:hidden">
                        <Badge
                            variant="secondary"
                            className={cn(data.category === "Domestic" ? "text-tone-yellow" : "text-primary", "font-bold uppercase")}
                        >
                            {data.category}
                        </Badge>
                        <Badge className="font-bold text-primary" variant="secondary">
                            {data.duration.days}D / {data.duration.nights}N
                        </Badge>
                    </div>
                </div>

                {/* Body Content */}
                <div className="flex flex-col justify-between p-5 w-full sm:w-3/5">
                    <header className="space-y-2">
                        {/* Desktop Badges */}
                        <div className="hidden sm:flex items-center gap-2">
                            <Badge
                                variant="secondary"
                                className={cn(data.category === "Domestic" ? "text-tone-yellow" : "text-primary", "font-bold uppercase text-xs")}
                            >
                                {data.category}
                            </Badge>
                            <Badge className="font-bold text-primary text-xs" variant="secondary">
                                {data.duration.days}D / {data.duration.nights}N
                            </Badge>
                        </div>

                        <h3 className="h5 text-primary line-clamp-2 font-heading font-semibold text-lg sm:text-xl">
                            {data.title}
                        </h3>

                        <p className="line-clamp-2 text-sm text-muted-foreground">
                            {data.description}
                        </p>
                    </header>

                    {/* Footer / CTA */}
                    <div className="flex items-end justify-between pt-4 mt-2 border-t border-border/50">
                        <div>
                            <p className="text-xs text-muted-foreground italic">Starting From</p>
                            <p className="text-xl font-bold text-tone-yellow font-heading">
                                {price ? `₹${price.toLocaleString("en-IN")}` : "N/A"}
                            </p>
                        </div>

                        <div className={cn(buttonVariants({ variant: "outline", size: "sm" }), "rounded-full")}>
                            View Details
                            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </div>

                {/* Featured Ribbon */}
                {data.isFeatured && (
                    <div className="absolute top-3 right-3 z-10">
                        <Badge className="bg-primary text-primary-foreground font-semibold shadow-sm">
                            Featured
                        </Badge>
                    </div>
                )}
            </article>
        </Link>
    );
}