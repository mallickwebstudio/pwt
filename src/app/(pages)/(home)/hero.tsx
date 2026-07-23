"use client"

import { buttonVariants } from "@/components/ui/button";
import { SearchCommand } from "@/components/other/search-command";
import { HeroBackground } from "@/components/other/hero-background";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Hero() {
    return (
        <section className="pt-20 relative bg-background min-h-[80vh] flex items-center justify-center">
            <HeroBackground />

            {/* Overlay */}
            <div className="absolute inset-0 bg-neutral-950/50" aria-hidden="true" />

            <div className="relative mx-auto container px-6 py-12 md:p-16 lg:py-20 flex h-full! items-center justify-center">
                {/* Text Content */}
                <header className="mx-auto max-w-2xl flex flex-col justify-center items-center text-center">
                    <h1 className="h1 text-secondary text-shadow-lg">
                        Your Journey Begins with Patel World Tour
                    </h1>
                    <p className="mt-3 md:mt-4 md:text-lg text-secondary/80 text-shadow-lg">
                        From iconic landmarks to hidden gems, we design journeys that combine comfort, convenience, and memorable experiences for every traveler.
                    </p>

                    <SearchCommand
                        className="mt-6 w-full max-w-xl md:h-12 bg-background"
                    />

                    <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
                        <Link className={cn(buttonVariants({ variant: "outline", size: "lg" }), "cursor-pointer")} href="/services">
                            View Services
                        </Link>
                        <Link className={cn(buttonVariants({ size: "lg" }), "cursor-pointer")} href="/packages#packages">
                            Explore Packages
                        </Link>
                    </div>
                </header>
            </div>
        </section>
    );
}

