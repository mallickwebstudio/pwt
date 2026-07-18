import { TourPackage } from "@/types/packages";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PackageCard({ data }: { data: TourPackage }) {
    // const heroImage = pkg.media.find((img) => img.isHero)?.url ?? pkg.media[0]?.url;
    const heroImage = "/images/bg/02.jpeg";

    return (
        <Link
            className="relative block rounded-4xl border bg-card group overflow-hidden"
            href={`/packages/${data.slug}`}
        >
            <article>
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
                            <p className="text-xl font-bold text-tone-yellow">
                                ₹{data.pricing.startingPrice.toLocaleString("en-IN")}
                            </p>
                        </div>

                        <div className={buttonVariants({ variant: "outline", size: "sm" })}>
                            View Details
                            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </header>
            </article>
        </Link>
    )
}
