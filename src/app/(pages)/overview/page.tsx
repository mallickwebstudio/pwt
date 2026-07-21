import Section from "@/components/section/section";
import TourOverviewTable from "./overview";

export default function page() {
    return (
        <Section
            className="mt-20"
            h2="Overview">
            <TourOverviewTable />

        </Section>
    )
}
