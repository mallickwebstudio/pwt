import Section from "@/components/section/section";
import { servicesData } from "@/db/services";
import Image from "next/image";
// import { Section } from "@/components/common/section";
// import { services } from "@/data/services";

export function ServiceOverview() {
  return (
    <>
      {servicesData.map((service, index) => {
        const isEven = index % 2 === 0;

        return (
          <Section
            key={service.title}
          >
            <div
              className={`mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 ${!isEven ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
                }`}
            >
              {/* Content */}
              <header>
                <h2 className="h3">{service.title}</h2>
                <p className="mt-2">{service.subTitle}</p>

                <div className="mt-6 prose prose-neutral dark:prose-invert max-w-none">
                  {service.content}
                </div>
              </header>

              {/* Image */}
              <div>
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  width={700}
                  height={700}
                  className="aspect-square w-full rounded-2xl object-cover"
                  unoptimized
                />
              </div>
            </div>
          </Section>
        );
      })}
    </>
  );
}