"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "motion/react";

/**
 * Each slot needs two sources:
 *  - thumb: a small/low-quality webp, cheap to load, shown at all times in the background grid
 *  - full:  a high-quality webp, only fetched right before that slot takes over the screen
 */
export interface HeroImage {
    thumb: string;
    full: string;
}

const defaultImages: HeroImage[] = [
    { thumb: "/images/common/01.webp", full: "/images/common/01.webp" },
    { thumb: "/images/common/02.webp", full: "/images/common/02.webp" },
    { thumb: "/images/common/03.webp", full: "/images/common/03.webp" },
    { thumb: "/images/common/04.webp", full: "/images/common/04.webp" },
    { thumb: "/images/common/05.webp", full: "/images/common/05.webp" },
    { thumb: "/images/common/06.webp", full: "/images/common/06.webp" },
    { thumb: "/images/common/07.webp", full: "/images/common/07.webp" },
    { thumb: "/images/common/08.webp", full: "/images/common/08.webp" },
    { thumb: "/images/common/09.webp", full: "/images/common/09.webp" },
    { thumb: "/images/common/10.webp", full: "/images/common/10.webp" },
    { thumb: "/images/common/01.webp", full: "/images/common/01.webp" },
    { thumb: "/images/common/02.webp", full: "/images/common/02.webp" },
];

export interface HeroBackgroundProps {
    /** Low-quality thumbnails shown permanently in the background grid. */
    thumbnails?: string[];
    /** High-quality images, only fetched right before a tile expands to fullscreen. */
    images?: string[];
    /** Convenience prop: pass paired {thumb, full} objects instead of two parallel arrays. */
    pairs?: HeroImage[];
    animationDuration?: number; // ms, expand/collapse transition
    fullscreenDuration?: number; // ms, how long a tile stays fullscreen
    delayBetweenImages?: number; // ms, gap between one collapse and the next expand
    columns?: number;
    gap?: number;
    className?: string;
    overlay?: boolean;
    overlayOpacity?: number;
    randomOrder?: boolean;
    autoplay?: boolean;
}

// Small in-memory cache so a full-res image is only ever fetched once per session.
const preloadCache = new Set<string>();
function preload(src: string, timeoutMs = 1200): Promise<void> {
    if (!src || preloadCache.has(src)) return Promise.resolve();
    return new Promise((resolve) => {
        const img = new window.Image();
        const done = () => {
            preloadCache.add(src);
            resolve();
        };
        img.onload = done;
        img.onerror = done; // don't block the sequence on a broken image
        img.src = src;
        // Never let a slow/failed fetch stall the whole loop indefinitely.
        setTimeout(done, timeoutMs);
    });
}

export function HeroBackground({
    thumbnails,
    images,
    pairs,
    animationDuration = 700,
    fullscreenDuration = 3000,
    delayBetweenImages = 1000,
    columns = 4,
    gap = 16,
    className = "",
    randomOrder = true,
    autoplay = true,
}: HeroBackgroundProps) {
    const slots: HeroImage[] = pairs
        ? pairs
        : (thumbnails ?? images ?? defaultImages.map((d) => d.thumb)).map((thumb, i) => ({
            thumb,
            full: images?.[i] ?? thumb,
        }));

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    // Stays "on" for the active tile a little longer than activeIndex: it keeps
    // the tile above the dark overlay (z-index) and keeps showing the full-res
    // image for the whole shrink-back animation, not just the expand. Without
    // this, the tile's z-index (and src) would drop the instant the collapse
    // *starts*, so it'd sink behind the overlay and appear to "vanish" mid-shrink
    // while still visually mid-animation.
    const [raisedIndex, setRaisedIndex] = useState<number | null>(null);
    const raiseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    // State (not a ref) because it's read during render (JSX below) — refs can't
    // safely be read during render, only in effects/handlers/callbacks.
    const [reduceMotion, setReduceMotion] = useState(false);
    const isRunning = useRef(autoplay);
    const isVisible = useRef(true);
    // Mirrors `reduceMotion` state for use inside the timeout-based loop below,
    // so that loop (which only runs in effects, never during render) always
    // reads the latest value without needing to be re-created on every change.
    const reduceMotionRef = useRef(false);

    useEffect(() => {
        isRunning.current = autoplay;
    }, [autoplay]);

    // Respect the user's OS-level motion preference.
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const apply = (matches: boolean) => {
            reduceMotionRef.current = matches;
            setReduceMotion(matches);
        };
        apply(mq.matches);
        const handler = (e: MediaQueryListEvent) => apply(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    // Pause the cycle when the tab isn't visible so we're not decoding images off-screen.
    useEffect(() => {
        const handler = () => (isVisible.current = document.visibilityState === "visible");
        document.addEventListener("visibilitychange", handler);
        return () => document.removeEventListener("visibilitychange", handler);
    }, []);

    const waitForVisible = useCallback(() => {
        return new Promise<void>((resolve) => {
            const check = () => {
                if (isVisible.current) return resolve();
                setTimeout(check, 500);
            };
            check();
        });
    }, []);

    useEffect(() => {
        if (!isRunning.current || slots.length === 0) return;

        let timeoutId: ReturnType<typeof setTimeout>;
        let cancelled = false;

        const runCycle = async (currentIndex: number) => {
            if (!isRunning.current || cancelled) return;

            await waitForVisible();
            // Fetch the high-quality version just before it's needed so the swap
            // from thumbnail -> full image is invisible to the viewer.
            await preload(slots[currentIndex]?.full);
            if (cancelled) return;

            if (raiseTimeoutRef.current) clearTimeout(raiseTimeoutRef.current);
            setRaisedIndex(currentIndex);
            setActiveIndex(currentIndex);

            const holdMs = reduceMotionRef.current ? 0 : animationDuration;
            timeoutId = setTimeout(() => {
                if (!isRunning.current || cancelled) return;
                setActiveIndex(null);
                // Don't drop the raised (elevated z-index + full-res) state until
                // the shrink transition has actually had time to finish.
                raiseTimeoutRef.current = setTimeout(() => {
                    if (!cancelled) setRaisedIndex((prev) => (prev === currentIndex ? null : prev));
                }, holdMs + 50);

                timeoutId = setTimeout(() => {
                    if (!isRunning.current || cancelled) return;
                    const nextIndex = randomOrder
                        ? Math.floor(Math.random() * slots.length)
                        : (currentIndex + 1) % slots.length;
                    runCycle(nextIndex);
                }, holdMs + delayBetweenImages);
            }, holdMs + fullscreenDuration);
        };

        timeoutId = setTimeout(() => {
            const startIndex = randomOrder ? Math.floor(Math.random() * slots.length) : 0;
            runCycle(startIndex);
        }, delayBetweenImages);

        return () => {
            cancelled = true;
            clearTimeout(timeoutId);
            if (raiseTimeoutRef.current) clearTimeout(raiseTimeoutRef.current);
        };
        // slots is derived each render from props; only re-run the loop when the
        // underlying data or timing actually changes.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        slots.length,
        animationDuration,
        fullscreenDuration,
        delayBetweenImages,
        randomOrder,
        waitForVisible,
    ]);

    const animationSeconds = animationDuration / 1000;

    return (
        <div
            className={`absolute inset-0 z-0 overflow-hidden bg-black ${className}`}
            aria-hidden="true"
        >
            <div
                className="absolute inset-0 grid w-full h-full"
                style={{
                    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                    gap: `${gap}px`,
                    padding: `${gap}px`,
                }}
            >
                {slots.map((slot, index) => {
                    // Drives position/size only — this is what the FLIP animation keys off.
                    const isActive = activeIndex === index;
                    // Drives stacking order + which src is loaded — stays true for the
                    // full duration of both the expand *and* the collapse animation, so
                    // the tile never dips behind the dark overlay or pops to a low-res
                    // image while it's still visually mid-transition.
                    const isRaised = raisedIndex === index;
                    return (
                        <div
                            key={`grid-item-${index}`}
                            className={`relative w-full h-full rounded-lg ${!isRaised ? "overflow-hidden" : ""}`}
                            style={{ zIndex: isRaised ? 50 : 0 }}
                        >
                            {/*
                                One persistent <motion.img> per slot. Framer Motion's `layout`
                                prop FLIP-animates it between its grid position/size and the
                                fullscreen position/size, in both directions, on the *same*
                                DOM node. Nothing unmounts mid-transition, which is what caused
                                the old shrink-then-vanish glitch (that version mounted a
                                second element with a matching layoutId in an AnimatePresence
                                tree, and the two independent exit/enter animations raced).
                            */}
                            <motion.img
                                layout
                                src={isRaised ? slot.full : slot.thumb}
                                alt=""
                                loading={index < columns ? "eager" : "lazy"}
                                decoding="async"
                                className={
                                    isActive
                                        ? "fixed inset-0 w-screen h-screen object-cover select-none pointer-events-none"
                                        : "absolute inset-0 w-full h-full object-cover" // Removed rounded-lg here
                                }
                                style={{
                                    borderRadius: isActive ? "0px" : "0.5rem" // Forces smooth corner interpolation
                                }}
                                transition={{
                                    duration: reduceMotion ? 0 : animationSeconds,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}