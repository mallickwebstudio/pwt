import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CarouselSectionProps {
    h2?: string;
    p?: string;
    ctaHref?: string;
    ctaLabel?: string;
    className?: string;
    wrapperClassName?: string;
    headerClassName?: string;
    headingWrapperClassName?: string;
    children: React.ReactNode;
}

export default function Section({
    h2,
    p,
    ctaHref,
    ctaLabel,
    className,
    wrapperClassName,
    headerClassName,
    headingWrapperClassName,
    children,
}: CarouselSectionProps) {
    const showHeader = !!h2;
    const showCta = !!(ctaHref && ctaLabel);

    return (
        <section className={cn("relative bg-background overflow-hidden", className)}>
            <div className={cn("container mx-auto px-6 py-12 md:px-16", wrapperClassName)}>

                {showHeader && (
                    <header className={cn("flex items-end justify-between gap-6", headerClassName )}>
                        <div className={cn("max-w-2xl", headingWrapperClassName)}>
                            <h2 className="h2">{h2}</h2>
                            {p && (
                                <p className="mt-3 md:mt-4 md:text-lg text-muted-foreground">{p}</p>
                            )}
                        </div>

                        {showCta && (
                            <Link className={cn(buttonVariants({ variant: "secondary" }), "hidden lg:flex")} href={ctaHref}>
                                {ctaLabel}
                                <ArrowRight />
                            </Link>
                        )}
                    </header>
                )}

                {children}

                {/* {showCta && (
                    <Link className={cn(buttonVariants({ variant: "secondary" }), "mx-auto w-full")} href={ctaHref}>
                        {ctaLabel}
                        <ArrowRight />
                    </Link>
                )} */}

                {showCta && (
                    <Link className={cn(buttonVariants({ variant: "secondary" }), "mt-8 w-fit mx-auto flex lg:hidden")} href={ctaHref}>
                        {ctaLabel}
                        <ArrowRight />
                    </Link>
                )}
            </div>
        </section>
    );
}