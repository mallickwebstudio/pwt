import Section from "@/components/section/section";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"


export default function Activities() {
  return (
    <Section
      className=" overflow-hidden"
      h2="Activities"
      p="Planning your next vacation is quick and hassle free."
      headingWrapperClassName="mx-auto text-center"
    >
      <Carousel
        opts={{ align: "center", loop: true }}
        className="mt-10 w-full"
      >
        <CarouselContent wrapperClassName="overflow-visible!">
          {Array.from({ length: 20 }).map((_, index) => (
            <CarouselItem className="basis-[80%] md:basis-1/2 lg:basis-1/3 xl:h-1/4 2xl:h-1/5" key={index + "HomeActivities"}>
              <div className="relative aspect-video w-full shrink-0 rounded-4xl overflow-hidden">
                <Image
                  className='relative size-full object-cover select-none pointer-events-none'
                  src='/image.svg'
                  width={200}
                  height={200}
                  alt='Steps Path Decoration'
                  unoptimized
                />

                <div className="absolute inset-0 top-auto pt-6 p-4 bg-linear-to-t from-black to-transparent flex items-center justify-between">
                  <h3 className="h6 text-tone-yellow">Name</h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Section>
  );
}