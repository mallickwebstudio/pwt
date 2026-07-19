import Section from "@/components/section/section";
import { packagesData } from "@/lib/db/packages";
import CategoryCard from "@/components/card/category-card";
import { PackageCategory } from "@/types";

const categories: PackageCategory[] = [...new Set(packagesData.map((pkg) => pkg.category))].map(
  (category, i): PackageCategory => ({
    name: category,
    count: packagesData.filter((pkg) => pkg.category === category).length,
    // image: packagesData.find((pkg) => pkg.category === category)?.media.find(
    //   (img) => img.isHero
    // )?.url ?? "/images/common/01.jpeg",
    image: `/images/common/0${i + 1}.webp`,
  })
);
export default function Category() {
  return (
    <Section
      className="bg-linear-to-t from-secondary to-transparent"
      h2="Explore Tour Categories"
      p="Choose from carefully curated travel experiences tailored for every kind of traveler."
      headingWrapperClassName="mx-auto text-center"
    >
      <ul className="mt-10 flex flex-wrap items-start justify-around gap-6 list-none">
        {categories.map((data) => (
          <li className="w-fit max-w-sm" key={data.name}>
            <CategoryCard data={data} />
          </li>
        ))}
      </ul>
    </Section>
  );
}