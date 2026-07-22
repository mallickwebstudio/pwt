import Section from '@/components/section/section';
import Image from 'next/image';
import React from 'react'

export const teamData = [
  {
    name: "Chirag Patel",
    designation: "Founder & Travel Consultant",
    image: {
      // url: "/images/team/chirag.jpeg",
      url: "/images/team/chirag.png",
      alt: "Chirag Patel profile image",
    },
    description: "Passionate about creating unforgettable travel experiences with personalized itineraries.",
  },
  {
    name: "Ankush Khosla",
    designation: "Manager",
    image: {
      // url: "/images/team/ankush.jpeg",
      url: "/images/team/ankush.png",
      alt: "Ankush Khosla profile image",
    },
    description: "Ensures every trip is well-planned, organized, and hassle-free for our travelers.",
  },
  {
    name: "Tulsi Khosla",
    designation: "Sales Head",
    image: {
      // url: "/images/team/tulsi.jpeg",
      url: "/images/team/tulsi.png",
      alt: "Tulsi Khosla profile image",
    },
    description: "Ensures every trip is well-planned, organized, and hassle-free for our travelers.",
  },
  {
    name: "Mansi Patel",
    designation: "Sales Head",
    image: {
      // url: "/images/team/mansi.jpeg",
      url: "/images/team/mansi.png",
      alt: "Mansi Patel profile image",
    },
    description: "Ensures every trip is well-planned, organized, and hassle-free for our travelers.",
  },
];

export default function Team() {
  return (
    <Section
      className='bg-foreground text-background'
      h2="The Team Behind Your Journey"
      p="From trip planning to your safe return, our passionate travel professionals are here to make every step of your vacation effortless and enjoyable."
    >

      <ul className="mt-10 md:mt-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamData.slice(0, 4).map((item, index) => (
          <li className='relative rounded-4xl overflow-hidden' key={item.name + index + 'TeamCTwoAlignLeft'}>
            <article className='relative group aspect-3/4'>

              <div
                // className="absolute inset-0 top-1/2 bottom-1/2 -translate-y-1/2 left-1/2 right-1/2 -translate-x-1/2 size-30  blur-[500px] bg-primary"
                className="absolute inset-0 bg-linear-to-t from-blue-700/70 to-blue-500/10"
                aria-hidden
              />

              {/* <div className="absolute inset-0 top-1/2 bottom-1/2 -translate-y-1/2 left-[55%] right-1/2 -translate-x-1/2 size-full">
                <Image
                  className="size-full object-contain opacity-50 select-none pointer-events-none group-hover:opacity-100 group-hover:scale-75 transition-all duration-300"
                  width={32}
                  height={32}
                  src="/images/logo/logo.png"
                  alt={siteConfig.name + " Logo"}
                  unoptimized
                />
              </div> */}

              <figure className='block absolute inset-0'>
                <Image
                  className="size-full object-cover select-none pointer-events-none rounded-md scale-110 group-hover:scale-125 transition-all duration-300"
                  src={item.image.url}
                  width={400}
                  height={40}
                  alt={item.image.alt}
                  itemProp="image"
                  unoptimized
                />
              </figure>

              <header className="absolute inset-0 top-auto p-1 sm:p-3 pt-12! bg-linear-to-t from-black to-transparent text-white text-center">
                {/* <div className="pt-12 absolute inset-0 top-auto size-full bg-linear-to-t from-black to-transparent" aria-hidden /> */}

                <h3 className="relative h5 font-bold font-heading text-secondary text-shadow-primary">
                  {item.name}
                </h3>
                <p className="relative mt-1 text-white/80 text-xs sm:text-sm line-clamp-2">
                  {item.designation}
                </p>

                {/* <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p> */}
              </header>

            </article>
          </li>
        ))}
      </ul>
    </Section>
  )
}
