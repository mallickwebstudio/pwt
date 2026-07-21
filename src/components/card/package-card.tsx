import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BasePackage } from "@/types";
import { pricingData } from "@/lib/db/pricing";

export default function PackageCard({ data }: { data: BasePackage }) {
    // const heroImage = pkg.media.find((img) => img.isHero)?.url ?? pkg.media[0]?.url;
    const heroImage = "/images/bg/02.jpeg";

    return (
        <Link
            className="relative block"
            href={`/packages/${data.slug}`}
        >
            <article className="relative block rounded-4xl border bg-card group overflow-hidden">
                <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                        className="w-full object-cover transition duration-500 group-hover:scale-105 select-none pointer-events-none"
                        src={heroImage}
                        alt={data.title}
                        width={400}
                        height={300}
                    />
                    <div className="absolute inset-0 top-auto pt-6 p-2 bg-linear-to-t from-black to-transparent flex items-center justify-between">
                        <Badge variant="secondary" className={cn(data.category === "Domestic" ? "text-tone-yellow" : "text-primary", "font-bold")}>
                            {data.category}
                        </Badge>

                        <Badge className="font-bold text-primary" variant="secondary">
                            {data.duration.days}D / {data.duration.nights}N
                        </Badge>
                    </div>
                </div>

                <header className="p-3">
                    <h3 className="h5 h-14 text-primary line-clamp-2">
                        {data.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm">
                        {data.description}
                    </p>


                    <div className="flex items-end justify-between pt-2">
                        <div>
                            <p className="text-xs text-muted-foreground italic">
                                Starting From
                            </p>
                            <p className="text-lg font-bold text-tone-yellow font-heading">
                                ₹{pricingData[data.slug].startingPrice.toLocaleString("en-IN")}
                            </p>
                        </div>

                        <div className={buttonVariants({ variant: "outline", size: "sm" })}>
                            View Details
                            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </header>
            </article>
            {data.isFeatured && (
                <div className="absolute -left-6 top-2 -rotate-45">
                    <Badge className="bg-primary text-secondary px-4 py-2 rounded-none border border-secondary">
                        <div className="absolute -right-2 size-3.5 bg-background rotate-45 border-l border-b border-secondary" />
                        <div className="absolute -left-2 size-3.5 bg-background rotate-45 border-r border-t border-secondary" />
                        Featured
                    </Badge>
                </div>
            )}
        </Link>
    )
}
