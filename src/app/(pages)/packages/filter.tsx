"use client";

import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { ListFilter, X, Check, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer";
import {
    useQueryStates,
    parseAsString,
    parseAsArrayOf,
    parseAsBoolean,
    parseAsInteger,
} from "nuqs";

// Adjust these two import paths to match where your static data actually lives
import { packagesData } from "@/lib/db/packages";
import { pricingData } from "@/lib/db/pricing";

import {
    filterPackages,
    getDestinationOptions,
    getPriceBounds,
    sortOptions,
    durationBuckets,
    type TourFilters,
} from "@/lib/tour-filters";
import { cn } from "@/lib/utils";
import PackageCard from "@/components/card/package-card";

const categoryOptions = ["International", "Domestic"] as const;

const tourFilterParsers = {
    q: parseAsString.withDefault(""),
    category: parseAsArrayOf(parseAsString).withDefault([]),
    destination: parseAsString.withDefault(""),
    duration: parseAsString.withDefault(""),
    minPrice: parseAsInteger,
    maxPrice: parseAsInteger,
    featured: parseAsBoolean.withDefault(false),
    sort: parseAsString.withDefault("featured"),
};

export default function CategoryFilterTour() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    // nuqs replaces the manual useSearchParams/router.push plumbing.
    // shallow: true keeps this client-only since filtering runs on static data.
    const [filters, setFilters] = useQueryStates(tourFilterParsers, { shallow: true });

    const priceBounds = useMemo(() => getPriceBounds(pricingData), []);
    const destinationOptions = useMemo(() => getDestinationOptions(packagesData), []);

    const filteredPackages = useMemo(() => filterPackages(packagesData, pricingData, filters as TourFilters), [filters]);

    const currentSortLabel = useMemo(() => sortOptions.find((opt) => opt.value === filters.sort)?.label || "Sort", [filters.sort]);

    /**
     * ------------------------------------------------------------
     * Applied filter badges
     * ------------------------------------------------------------
     */
    const appliedFilters = useMemo(() => {
        const applied: { id: string; label: string; onRemove: () => void }[] = [];

        if (filters.q) {
            applied.push({
                id: "q",
                label: `Search – ${filters.q}`,
                onRemove: () => setFilters({ q: "" }),
            });
        }

        filters.category.forEach((c) => {
            applied.push({
                id: `category-${c}`,
                label: `Category – ${c}`,
                onRemove: () =>
                    setFilters({ category: filters.category.filter((v) => v !== c) }),
            });
        });

        if (filters.destination) {
            applied.push({
                id: "destination",
                label: `Destination – ${filters.destination}`,
                onRemove: () => setFilters({ destination: "" }),
            });
        }

        if (filters.duration) {
            const label = durationBuckets.find((b) => b.value === filters.duration)?.label;
            applied.push({
                id: "duration",
                label: `Duration – ${label ?? filters.duration}`,
                onRemove: () => setFilters({ duration: "" }),
            });
        }

        if (filters.minPrice != null || filters.maxPrice != null) {
            applied.push({
                id: "price",
                label: `Price – ₹${(filters.minPrice ?? priceBounds.min).toLocaleString(
                    "en-IN"
                )} to ₹${(filters.maxPrice ?? priceBounds.max).toLocaleString("en-IN")}`,
                onRemove: () => setFilters({ minPrice: null, maxPrice: null }),
            });
        }

        if (filters.featured) {
            applied.push({
                id: "featured",
                label: "Featured – Yes",
                onRemove: () => setFilters({ featured: false }),
            });
        }

        return applied;
    }, [filters, priceBounds, setFilters]);

    const clearAll = () =>
        setFilters({
            q: "",
            category: [],
            destination: "",
            duration: "",
            minPrice: null,
            maxPrice: null,
            featured: false,
        });

    /**
     * ------------------------------------------------------------
     * ACCORDION OPEN STATE
     * ------------------------------------------------------------
     */
    const [openItems, setOpenItems] = useState<string[]>([
        "category",
        "destination",
        "duration",
        "price",
        "featured",
    ]);

    const filterPanel = (
        <FilterPanel
            filters={filters}
            setFilters={setFilters}
            categoryOptions={categoryOptions}
            destinationOptions={destinationOptions}
            priceBounds={priceBounds}
            openItems={openItems}
            setOpenItems={setOpenItems}
        />
    );

    return (
        <div className="relative mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8">
            {/* Filter Drawer - Mobile */}
            <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
                <DrawerContent>
                    <DrawerHeader>
                        <div className="flex items-end justify-between">
                            <DrawerTitle>Filters</DrawerTitle>
                            {appliedFilters.length > 0 && (
                                <div
                                    className="cursor-pointer text-sm font-normal text-muted-foreground hover:text-destructive hover:underline"
                                    onClick={clearAll}
                                >
                                    Clear All
                                </div>
                            )}
                        </div>

                        <div className="text-sm text-muted-foreground text-left">
                            Showing {filteredPackages.length} of {packagesData.length}
                        </div>
                    </DrawerHeader>

                    <div className="p-4 w-full overflow-y-scroll">{filterPanel}</div>

                    <DrawerFooter>
                        <DrawerClose className={buttonVariants({ variant: "outline" })}>
                            {/* <Button variant="outline">Close</Button> */}
                            {/* <Button variant="outline">Close</Button> */}
                            Close
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            {/* Filter Sidebar - Desktop */}
            <div className="hidden lg:block w-64 bg-background lg:sticky lg:top-6 lg:h-fit">
                <div>
                    <div className="flex items-end justify-between">
                        <div className="font-bold text-lg">Filters</div>
                        {appliedFilters.length > 0 && (
                            <div
                                className="cursor-pointer text-sm font-normal text-muted-foreground hover:text-destructive hover:underline"
                                onClick={clearAll}
                            >
                                Clear All
                            </div>
                        )}
                    </div>

                    <div className="text-sm text-muted-foreground">
                        Showing {filteredPackages.length} of {packagesData.length}
                    </div>
                </div>

                {filterPanel}
            </div>

            {/* Results */}
            <div className="w-full">
                <div className="sticky top-18 lg:top-16 h-fit py-2 mb-2 lg:-mt-4 bg-background flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4 z-10 border-b">
                    {/* Applied Filter Badges */}
                    <div className="flex gap-2 flex-wrap">
                        {appliedFilters.map((f) => (
                            <Badge
                                key={f.id}
                                className="hover:bg-red-500 hover:text-white cursor-pointer transition-all"
                                variant="secondary"
                                onClick={f.onRemove}
                            >
                                {f.label}
                                <X className="ml-1 h-3 w-3" strokeWidth={3} />
                            </Badge>
                        ))}
                    </div>

                    {/* Filter-button, Sort-button */}
                    <div className="flex h-fit gap-2 justify-between">
                        <Button
                            className="lg:hidden flex items-center gap-2 cursor-pointer"
                            size="sm"
                            onClick={() => setDrawerOpen(true)}
                        >
                            <ListFilter />
                            Filter
                        </Button>

                        <DropdownMenu>
                            <DropdownMenuTrigger className={cn(buttonVariants({ variant: "outline" }), "border cursor-pointer")}>
                                {currentSortLabel}
                                <ChevronDown />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56 space-y-1">
                                {sortOptions.map((option) => (
                                    <DropdownMenuItem
                                        className={cn(buttonVariants({ variant: "outline", size: 'sm' }), "w-full cursor-pointer")}
                                        key={option.value}
                                        onClick={() => setFilters({ sort: option.value })}
                                    >
                                        {option.label}
                                        {filters.sort === option.value && (
                                            <Check className="w-4 h-4 text-primary" />
                                        )}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {/* Filtered Package Grid — replace with your existing card component */}
                <main className="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredPackages.map((data) => (
                        <div key={data.id}>
                            <PackageCard data={data} />

                            {/* <div key={data.id} className="border rounded-lg p-4">
                                <div className="font-semibold">{data.title}</div>
                                <div className="text-sm text-muted-foreground line-clamp-2">
                                    {data.description}
                                </div>
                                <div className="mt-2 text-sm">
                                    {data.duration.nights}N / {data.duration.days}D ·{" "}
                                    {data.destinations.join(", ")}
                                </div>
                                {pricingData[data.slug as keyof typeof pricingData] && (
                                    <div className="mt-1 font-medium">
                                        ₹
                                        {pricingData[
                                            data.slug as keyof typeof pricingData
                                        ]!.startingPrice.toLocaleString("en-IN")}
                                    </div>
                                )}
                            </div> */}
                        </div>
                    ))}
                </main>

                {filteredPackages.length === 0 && (
                    <div className="px-6 py-12 border text-center">
                        <div className="text-lg font-medium">No results found.</div>
                        <div className="text-muted-foreground">
                            There are no results with this criteria. Try changing your search.
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

/**
 * ------------------------------------------------------------
 * Filter panel (shared between drawer + sidebar)
 * ------------------------------------------------------------
 */
function FilterPanel({
    filters,
    setFilters,
    categoryOptions,
    destinationOptions,
    priceBounds,
    openItems,
    setOpenItems,
}: {
    filters: TourFilters;
    setFilters: (
        values: Partial<TourFilters>
    ) => void;
    categoryOptions: readonly string[];
    destinationOptions: string[];
    priceBounds: { min: number; max: number };
    openItems: string[];
    setOpenItems: Dispatch<SetStateAction<string[]>>;
}) {
    return (
        <div className="mt-4 lg:pr-4 w-full">
            {/* Search */}
            <div className="mb-4">
                <Input
                    className="border border-border"
                    placeholder="Search tours..."
                    value={filters.q}
                    onChange={(e) => setFilters({ q: e.target.value })}
                />
            </div>

            <div className="relative overflow-hidden">
                <div className="hidden lg:block absolute  inset-0 top-px bottom-auto h-6 bg-linear-to-b from-secondary to-transparent z-10 select-none pointer-events-none rounded-t-[calc(var(--radius-4xl)-8px)]" aria-hidden="true" />
                <div className="hidden lg:block absolute  inset-0 bottom-px top-auto h-6 bg-linear-to-t from-secondary to-transparent z-10 select-none pointer-events-none rounded-b-[calc(var(--radius-4xl)-8px)]" aria-hidden="true" />
                <Accordion
                    multiple
                    value={openItems}
                    onValueChange={setOpenItems}
                    className="relative lg:h-[70dvh] lg:overflow-y-scroll"
                >

                    {/* Category */}
                    <AccordionItem value="category">
                        <AccordionTrigger className="cursor-pointer">Category</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col gap-2">
                                {categoryOptions.map((option) => (
                                    <div key={option} className="flex items-center gap-2">
                                        <Checkbox
                                            className="cursor-pointer"
                                            id={`category-${option}`}
                                            checked={filters.category.includes(option)}
                                            onCheckedChange={(checked) => {
                                                const values = checked
                                                    ? [...filters.category, option]
                                                    : filters.category.filter((v) => v !== option);
                                                setFilters({ category: values });
                                            }}
                                        />
                                        <label className="cursor-pointer" htmlFor={`category-${option}`}>
                                            {option}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Destination */}
                    <AccordionItem value="destination">
                        <AccordionTrigger className="cursor-pointer">Destination</AccordionTrigger>
                        <AccordionContent>
                            <RadioGroup
                                value={filters.destination}
                                onValueChange={(val) => setFilters({ destination: val })}
                            >
                                {destinationOptions.map((option) => (
                                    <div key={option} className="flex items-center space-x-2">
                                        <RadioGroupItem
                                            className="cursor-pointer"
                                            value={option}
                                            id={`destination-${option}`}
                                        />
                                        <label className="cursor-pointer" htmlFor={`destination-${option}`}>
                                            {option}
                                        </label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Duration */}
                    <AccordionItem value="duration">
                        <AccordionTrigger className="cursor-pointer">Duration</AccordionTrigger>
                        <AccordionContent>
                            <RadioGroup
                                value={filters.duration}
                                onValueChange={(val) => setFilters({ duration: val })}
                            >
                                {durationBuckets.map((bucket) => (
                                    <div key={bucket.value} className="flex items-center space-x-2">
                                        <RadioGroupItem
                                            className="cursor-pointer"
                                            value={bucket.value}
                                            id={`duration-${bucket.value}`}
                                        />
                                        <label className="cursor-pointer" htmlFor={`duration-${bucket.value}`}>
                                            {bucket.label}
                                        </label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Starting Price */}
                    <AccordionItem value="price">
                        <AccordionTrigger className="cursor-pointer">Starting Price</AccordionTrigger>
                        <AccordionContent>
                            <div className="px-1">
                                <Slider
                                    min={priceBounds.min}
                                    max={priceBounds.max}
                                    step={1000}
                                    value={[
                                        filters.minPrice ?? priceBounds.min,
                                        filters.maxPrice ?? priceBounds.max,
                                    ]}
                                    onValueChange={(value) => {
                                        const [min, max] = value as [number, number];
                                        setFilters({
                                            minPrice: min,
                                            maxPrice: max,
                                        });
                                    }}
                                />
                                <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                                    <span>₹{(filters.minPrice ?? priceBounds.min).toLocaleString("en-IN")}</span>
                                    <span>₹{(filters.maxPrice ?? priceBounds.max).toLocaleString("en-IN")}</span>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Featured */}
                    <AccordionItem value="featured">
                        <AccordionTrigger className="cursor-pointer">Featured</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex items-center gap-2">
                                <Switch
                                    className="cursor-pointer"
                                    id="featured"
                                    checked={filters.featured}
                                    onCheckedChange={(checked) => setFilters({ featured: checked })}
                                />
                                <label className="cursor-pointer" htmlFor="featured">
                                    Featured tours only
                                </label>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}