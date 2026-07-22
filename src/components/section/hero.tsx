import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";

interface HeroProps {
    h1: string;
    p?: string;
    imageSrc?: string;

    headerCenter?: boolean;
    contentCenter?: boolean;

    className?: string;
    wrapperClassName?: string;
    headerClassName?: string;
    headingWrapperClassName?: string;
    contentClassName?: string;

    children?: ReactNode;
}

export default function Hero({
    h1,
    p,
    headerCenter,
    contentCenter,
    headingWrapperClassName,
    imageSrc,
    className,
    wrapperClassName,
    headerClassName,
    contentClassName,
    children,
}: HeroProps) {
    return (
        <section className={cn("relative overflow-hidden bg-background pt-20", className)}>
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    fill
                    priority
                    fetchPriority="high"
                    sizes="100vw"
                    src={imageSrc ?? "/images/common/banner.webp"}
                    alt={h1}
                    className="pointer-events-none select-none object-cover"
                />
            </div>

            {/* Overlay */}
            <div className={cn("absolute inset-0", headerCenter ? "bg-radial from-transparent to-neutral-950":"bg-linear-to-r from-black to-transparent")} aria-hidden="true" />

            <div className={cn("relative container mx-auto px-6 py-12 md:px-16 md:py-16", wrapperClassName)}>
                <header className={cn("text-secondary text-shadow-lg max-w-2xl", headerCenter && "mx-auto text-center", headerClassName)}>
                    <div className={headingWrapperClassName}>
                        <h1 className="h1 text-shadow-lg">{h1}</h1>

                        {p && (
                            <p className={cn("mt-4 text-secondary/80 text-shadow-lg", headerCenter && "mx-auto max-w-xl")}>{p}</p>
                        )}
                    </div>
                </header>

                {children && (
                    <div className={cn("mt-8", contentCenter && "flex flex-wrap items-center justify-center gap-4", contentClassName)}>
                        {children}
                    </div>
                )}
            </div>
        </section>
    );
}