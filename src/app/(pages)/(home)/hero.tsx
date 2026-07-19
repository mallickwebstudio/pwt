"use client"

import { Button } from "@/components/ui/button";
import { SearchCommand } from "@/components/other/search-command";
import { HeroBackground } from "@/components/other/hero-background";


export default function Hero() {
    return (
        <section className="pt-20 relative bg-background min-h-[80vh] flex items-center justify-center">
            <HeroBackground />

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-neutral-950/70" aria-hidden="true" /> */}

            <div className="relative mx-auto container px-6 py-12 md:p-16 lg:py-20 flex h-full! items-center justify-center">
                {/* Text Content */}
                <header className="mx-auto max-w-2xl flex flex-col justify-center items-center text-center">
                    <h1 className="h1 text-white">
                        Medium length hero heading goes here
                    </h1>
                    {/* <p className="mt-3 md:mt-4 md:text-lg text-muted/70 dark:text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </p> */}

                    <SearchCommand
                        className="mt-6 w-full max-w-xl md:h-12 bg-background"
                    />

                    <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
                        <Button
                            className="cursor-pointer"
                            variant="default"
                            size="lg"
                            aria-label="Get started with the service"
                        >
                            Get started
                        </Button>
                    </div>
                </header>
            </div>
        </section>
    );
}

