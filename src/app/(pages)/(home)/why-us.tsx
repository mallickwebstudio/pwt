import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Hotel,
  UtensilsCrossed,
  ChefHat,
  Camera,
  Droplets,
  Trees,
  Ship,
  Bus,
  Users,
  Headset,
} from "lucide-react";

const whyChooseUs = [
  {
    icon: Hotel,
    title: "Premium Stay",
    description:
      "Stay at carefully selected premium hotels for maximum comfort and relaxation.",
  },
  {
    icon: UtensilsCrossed,
    title: "Maximum Meals",
    description:
      "Enjoy delicious breakfast, lunch, and dinner with generous meal inclusions.",
  },
  {
    icon: ChefHat,
    title: "Food Experts",
    description:
      "Indian, Jain, and Swaminarayan meals thoughtfully arranged by our food specialists.",
  },
  {
    icon: Camera,
    title: "Maximum Sightseeing",
    description:
      "Visit more attractions and create unforgettable memories without missing the highlights.",
  },
  {
    icon: Droplets,
    title: "Unlimited Water",
    description:
      "Complimentary drinking water throughout your journey to keep you refreshed.",
  },
  {
    icon: Trees,
    title: "Premium Safari",
    description:
      "Experience exciting wildlife safaris with premium vehicles and expert planning.",
  },
  {
    icon: Ship,
    title: "Premium Yacht / Cruise",
    description:
      "Enjoy luxury yacht rides and memorable cruise experiences on selected tours.",
  },
  {
    icon: Bus,
    title: "Own Transportation",
    description:
      "Travel in dedicated, comfortable vehicles for a smooth and hassle-free experience.",
  },
  {
    icon: Users,
    title: "Experienced Tour Manager",
    description:
      "Friendly and knowledgeable tour managers accompany you throughout the trip.",
  },
  {
    icon: Headset,
    title: "24×7 Customer Support",
    description:
      "Round-the-clock assistance before, during, and after your journey.",
  },
];

export default function WhyUs() {
  return (
    <section
      className="relative bg-background"
      aria-labelledby="why-us-heading"
    >
      <div className="container mx-auto grid gap-10 px-6 py-12 md:px-16 lg:grid-cols-2 lg:items-center pt-0">
        {/* Content */}
        <header>
          <h2 id="why-us-heading" className="h3">
            Why Thousands of Travelers Choose Patel World Tours
          </h2>

          <p className="mt-4 text-muted-foreground">
            We don&apos;t just plan holidays, we deliver comfortable stays, delicious
            meals, premium experiences, and reliable support so you can travel
            with complete peace of mind.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="cursor-pointer">
              Get Free Quote
            </Button>

            <Button variant="ghost" className="group">
              Explore Packages
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </header>

        {/* Image */}
        <div>
          <Image
            src="/image.svg"
            alt="Patel World Tours premium travel experience"
            width={700}
            height={700}
            className="aspect-square w-full rounded-2xl object-cover"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}