"use client";

import { motion, useReducedMotion } from "motion/react";
import { ElementType } from "react";

interface TextBlurFadeInProps {
  /** The text sentence or heading to animate */
  text: string;
  /** The HTML tag to render. Defaults to 'h2' for headings, but can be 'p', 'h1', etc. */
  as?: ElementType;
  /** Custom delay offset before the first word begins animating (in seconds) */
  delayOffset?: number;
  /** The duration of each individual word's animation (in seconds) */
  duration?: number;
  /** Total vertical distance each word glides upward (in pixels) */
  yOffset?: number;
  /** Initial blur radius applied to the words (in pixels) */
  blurAmount?: number;
  /** If true, bypasses JavaScript transitions for instant server-side layout rendering */
  isAboveTheFold?: boolean;
  /** Tailwind or standard CSS styles for text typography and layout */
  className?: string;
}

export function TextBlurFadeIn({
  text,
  as: Component = "span",
  delayOffset = 0,
  duration = 0.4,
  yOffset = 8, // Very subtle lift for institutional writing
  blurAmount = 6,
  isAboveTheFold = false,
  className = "",
}: TextBlurFadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  // 1. The SEO and Accessibility Shield:
  // If rendered above the fold or on a low-motion OS device, output vanilla HTML instantly.
  if (isAboveTheFold || shouldReduceMotion) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    /**
     * CRITICAL FOR SEO & ACCESSIBILITY:
     * We pass 'aria-label={text}' to the primary wrapper. 
     * Search engine crawlers and screen readers bypass the split spans completely
     * and read the entire unbroken string immediately.
     */
    <Component className={className} aria-label={text}>
      {words.map((word, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
          }}
        >
          <motion.span
          className="inline-block"
            initial={{ opacity: 0, y: yOffset, filter: `blur(${blurAmount}px)` }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
              duration: duration,
              // Tight stagger calculation so sentences don't take ages to display
              delay: delayOffset + index * 0.03,
              ease: [0.25, 1, 0.5, 1], // Clean, authoritative deceleration
            }}
            // Hides fragmented DOM text fragments from screen readers/bots to avoid gibberish readings
            aria-hidden="true"
          >
            {word}
          </motion.span>
          {/* Preserves natural spacing between staggered inline-block fragments */}
          <span aria-hidden="true">&nbsp;</span>
        </span>
      ))}
    </Component>
  );
}