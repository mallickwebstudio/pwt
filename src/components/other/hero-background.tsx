"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
const imagesss = [
    "/images/poster/bali-0.webp", "/images/poster/bali-1.webp", "/images/poster/daman-0.webp", "/images/poster/dubai-0.webp",
    "/images/poster/dubai-1.webp", "/images/poster/goa-0.webp", "/images/poster/kerala-0.webp", "/images/poster/kerala-1.webp",
    "/images/poster/phuket-0.webp", "/images/poster/shimla-manali-0.webp", "/images/poster/sikkim-0.webp", "/images/poster/singapore-0.webp",
    "/images/poster/singapore-malaysia-0.webp", "/images/poster/singapore-malaysia-1.webp", "/images/poster/thailand-0.webp", "/images/poster/vietnam-0.webp",
]

export interface HeroBackgroundProps {
    images?: string[];
    animationDuration?: number; // ms
    fullscreenDuration?: number; // ms
    delayBetweenImages?: number; // ms
    columns?: number;
    gap?: number;
    className?: string;
    overlay?: boolean;
    overlayOpacity?: number;
    randomOrder?: boolean;
    autoplay?: boolean;
}

export function HeroBackground({
    images = imagesss,
    animationDuration = 1000,
    fullscreenDuration = 3000,
    delayBetweenImages = 1000,
    columns = 4,
    gap = 16,
    className = "",
    overlay = true,
    overlayOpacity = 0.5,
    randomOrder = false,
    autoplay = true,
}: HeroBackgroundProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const isRunning = useRef(autoplay);

    useEffect(() => {
        isRunning.current = autoplay;
    }, [autoplay]);

    useEffect(() => {
        if (!isRunning.current || images.length === 0) return;

        let timeoutId: NodeJS.Timeout;

        const runCycle = (currentIndex: number) => {
            if (!isRunning.current) return;

            // Expand to fullscreen
            setActiveIndex(currentIndex);

            // Hold fullscreen, then collapse
            timeoutId = setTimeout(() => {
                if (!isRunning.current) return;
                setActiveIndex(null);

                // Wait for collapse + delay before firing next
                timeoutId = setTimeout(() => {
                    if (!isRunning.current) return;
                    const nextIndex = randomOrder
                        ? Math.floor(Math.random() * images.length)
                        : (currentIndex + 1) % images.length;

                    runCycle(nextIndex);
                }, animationDuration + delayBetweenImages);
            }, animationDuration + fullscreenDuration);
        };

        // Initial delay before starting the loop
        timeoutId = setTimeout(() => {
            const startIndex = randomOrder ? Math.floor(Math.random() * images.length) : 0;
            runCycle(startIndex);
        }, delayBetweenImages);

        return () => clearTimeout(timeoutId);
    }, [
        images.length,
        animationDuration,
        fullscreenDuration,
        delayBetweenImages,
        randomOrder,
    ]);

    const animationSeconds = animationDuration / 1000;

    return (
        <div
            className={`absolute inset-0 z-0 overflow-hidden bg-black ${className}`}
            aria-hidden="true"
        >
            {/* Background Grid */}
            <div
                className="absolute inset-0 grid w-full h-full"
                style={{
                    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                    gap: `${gap}px`,
                    padding: `${gap}px`,
                }}
            >
                {images.map((src, index) => (
                    <div key={`grid-item-${index}`} className="relative w-full h-full overflow-hidden">
                        {activeIndex !== index && (
                            <motion.img
                                layoutId={`hero-image-${index}`}
                                src={src}
                                alt=""
                                className="absolute inset-0 object-cover w-full h-full rounded-lg"
                                transition={{ duration: animationSeconds, ease: "easeInOut" }}
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Fullscreen Overlay Canvas */}
            <AnimatePresence>
                {activeIndex !== null && (
                    <motion.div
                        className="absolute inset-0 z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: animationSeconds }}
                    >
                        <motion.img
                            layoutId={`hero-image-${activeIndex}`}
                            src={images[activeIndex]}
                            alt=""
                            className="absolute inset-0 object-cover w-full h-full select-none pointer-events-none"
                            transition={{ duration: animationSeconds, ease: "easeInOut" }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Darken Overlay for Text Readability */}
            {overlay && (
                <div
                    className="absolute inset-0 z-20 pointer-events-none bg-black"
                    style={{ opacity: overlayOpacity }}
                />
            )}
        </div>
    );
}