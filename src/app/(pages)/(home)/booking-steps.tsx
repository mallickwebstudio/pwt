import Section from "@/components/section/section";
import { cn } from "@/lib/utils";
import { ArrowRight, BadgeCheck, Map, Phone } from "lucide-react";
import Image from "next/image";

export const bookingSteps = [
  {
    step: 1,
    title: "Choose Your Package",
    description:
      "Browse our domestic and international tour packages and select the one that best fits your destination, budget, and travel dates.",
    icon: Map,
    features: [
      "Wide range of tour packages",
      "Flexible travel options",
      "Best price guarantee",
    ],
  },
  {
    step: 2,
    title: "Share Your Details",
    description:
      "Submit your name and phone number through our quick inquiry form. Our travel expert will contact you to discuss your requirements.",
    icon: Phone,
    features: [
      "Quick callback",
      "Free travel consultation",
      "Personalized trip planning",
    ],
  },
  {
    step: 3,
    title: "Confirm & Travel",
    description:
      "Review your final itinerary, confirm your booking, and receive all your travel documents before your journey begins.",
    icon: BadgeCheck,
    features: [
      "Secure booking process",
      "Instant confirmation",
      "24/7 travel support",
    ],
  },
];


export default function BookingSteps() {
  return (
    <Section
      h2="Book Your Trip in 3 Simple Steps"
      p="Planning your next vacation is quick and hassle free."
      headingWrapperClassName="mx-auto text-center"
    >
      <ul className="relative mt-10 grid gap-6 md:mt-12 lg:grid-cols-3">
        <Image
          className='absolute bottom-0 left-40 w-60 object-contain select-none pointer-events-none'
          src='/images/decor/ad-one.svg'
          width={200}
          height={200}
          alt='Steps Path Decoration'
          unoptimized
        />
        <Image
          className='absolute top-0 right-40 w-60 rotate-x-180 rotate-45 object-contain select-none pointer-events-none'
          src='/images/decor/ad-one.svg'
          width={200}
          height={200}
          alt='Steps Path Decoration'
          unoptimized
        />

        {bookingSteps.map((data, index) => {
          const Icon = data.icon;
          return (
            <li
              key={data.step}
              className={cn(index === 1 && "lg:mt-20", index === 2 && "lg:mt-40")}
            >
              <article className="relative rounded-4xl bg-card p-6 overflow-hidden">
                <span className="absolute bottom-0 right-2 text-6xl font-bold text-tone-yellow select-none opacity-10">
                  #{data.step}
                </span>


                <header className="mt-1">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="h4">{data.title}</h3>
                  </div>

                  <p className="mt-2 text-sm 2xl:text-base text-muted-foreground">
                    {data.description}
                  </p>

                  <ul className="mt-2 list-none">
                    {data.features.map(item => (
                      <li className="flex items-start gap-2" key={item + "Steps"}>
                        <ArrowRight className="mt-1 size-4 text-tone-yellow shrink-0" strokeWidth={3} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </header>
              </article>
            </li>
          )
        })}
      </ul>
    </Section >
  );
}