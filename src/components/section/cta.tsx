import React from "react";
import { cn } from "@/lib/utils";
import CtaButton from "../other/cta-button";
import { ctas } from "@/lib/db";
import { ZoomInUp } from "../animation/zoom-in-up";

interface CtaProps {
    h2?: string;
    p?: string;
    align?: "center" | "left";
    ctaHref?: string;
    ctaLabel?: string;
    className?: string;
    wrapperClassName?: string;
    headerClassName?: string;
    headingWrapperClassName?: string;
    children?: React.ReactNode;
}

export default function Cta({
    h2 = ctas[0].title,
    p = ctas[0].subtitle,
    align = "center",
    ctaHref,
    ctaLabel,
    className,
    wrapperClassName,
    headerClassName,
    headingWrapperClassName,
    children,
}: CtaProps) {
    const showHeader = !!h2;
    // const showCta = !!(ctaHref && ctaLabel);

    const isCenter = align === "center";

    return (
        <section className={cn("relative overflow-hidden bg-background", className)}>
            <div className={cn("container mx-auto p-6 md:px-16", wrapperClassName)}>
                {showHeader && (
                    <ZoomInUp duration={0.2}>
                        <header
                            className={cn(
                                "p-4 py-10 md:py-12 bg-primary text-primary-foreground rounded-4xl",
                                isCenter
                                    ? "flex flex-col items-center text-center gap-6"
                                    : "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
                                headerClassName
                            )}
                        >
                            <div
                                className={cn(
                                    isCenter ? "max-w-2xl" : "max-w-2xl",
                                    headingWrapperClassName
                                )}
                            >
                                <h2 className="h2 text-secondary">{h2}</h2>

                                {p && (
                                    <p className="mt-3 md:mt-4 md:text-lg text-primary-foreground/80">
                                        {p}
                                    </p>
                                )}
                            </div>

                            <CtaButton
                                className="hover:border hover:border-secondary"
                                label={ctaLabel}
                            />
                        </header>
                    </ZoomInUp>
                )}

                {children}
            </div>
        </section>
    );
}