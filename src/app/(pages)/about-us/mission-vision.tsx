import Image from "next/image";

export default function MissionVision() {
  return (
    <>
      {/* //////////MISSION/////////// */}
      <section className="relative bg-background">
        <div className="mx-auto container px-6 py-12 md:px-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-10">
          {/* Text Content */}
          <header>

            <h2 className="h2">Our MissionMission</h2>
            <p className="mt-4">Making Travel Simple, Accessible, and Memorable</p>
            <ul className="mt-4 list-decimal list-inside">
              <li>Our mission is to deliver reliable, affordable, and well-planned travel experiences that exceed customer expectations. We strive to simplify every aspect of travel by offering end-to-end services, expert guidance, transparent pricing, and dedicated support so our travelers can focus on enjoying their journey with confidence.</li>
            </ul>
          </header>

          {/* Hero Image */}
          <div className="relative grid grid-cols-2 gap-4" >
            <div className="flex flex-col justify-end items-end gap-4">
              <Image
                className="w-1/2 aspect-square object-cover rounded-md select-none pointer-events-none"
                src="/images/common/09.webp"
                width={250}
                height={250}
                alt="Illustration of Vadodara Jilla Kelavani Mandal's Mission"
              />
              <Image
                className="w-full aspect-2/2.5 object-cover rounded-md select-none pointer-events-none"
                src="/images/common/02.webp"
                width={250}
                height={250}
                alt="Illustration of Vadodara Jilla Kelavani Mandal's Mission"
              />
            </div>
            <div className="pt-12 flex flex-col gap-4">
              <Image
                className="w-full aspect-2/2.5 object-cover rounded-md select-none pointer-events-none"
                src="/images/common/03.webp"
                width={250}
                height={250}
                alt="Illustration of Vadodara Jilla Kelavani Mandal's Mission"
              />
              <Image
                className="w-1/2 aspect-square object-cover rounded-md select-none pointer-events-none"
                src="/images/common/04.webp"
                width={250}
                height={250}
                alt="Illustration of Vadodara Jilla Kelavani Mandal's Mission"
              />
            </div>
          </div>
        </div>

      </section>

      {/* //////////VISION/////////// */}
      <section className="relative bg-background">
        <div className="mx-auto container px-6 py-12 md:px-16 grid grid-cols-1 md:grid-cols-2 items-center text-center md:text-left gap-8 md:gap-10">
          {/* Text Content */}
          <header className="md:order-1">

            <h2 className="h2">
              Our Vision
            </h2>

            <p className="mt-4">To Inspire More People to Explore the World</p>
            <p className="mt-4">Our vision is to become one of the most trusted travel companies by delivering exceptional service, building lasting customer relationships, and continuously expanding our travel experiences across India and the world. We aim to make quality travel accessible while creating journeys that leave lifelong memories.</p>
          </header>

          {/* Hero Image */}
          <div className="relative flex">
            <Image
              className="mx-auto w-3/4 aspect-square object-cover rounded-md select-none pointer-events-none"
              src="/images/common/01.webp"
              width={250}
              height={250}
              alt="Illustration of Vadodara Jilla Kelavani Mandal's Vision"
            />
            <Image
              className="absolute top-1/12 right-0 w-2/5 aspect-square object-cover rounded-md select-none pointer-events-none border"
              src="/images/common/06.webp"
              width={250}
              height={250}
              alt="Illustration of Vadodara Jilla Kelavani Mandal's Vision"
            />
            <Image
              className="absolute bottom-1/12 left-0 w-2/4 aspect-video object-cover rounded-md select-none pointer-events-none border"
              src="/images/common/05.webp"
              width={250}
              height={250}
              alt="Illustration of Vadodara Jilla Kelavani Mandal's Vision"
            />
          </div>
        </div>
      </section>
    </>
  );
}