"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Compass, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

// Assuming your data and types are exported from a central lib
import { packagesData } from "@/db/packages";
import {
    Command,
    CommandDialog,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
} from "@/components/ui/command"; // Adjust based on your actual imports
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"; // Adjust imports

interface CommandBasicProps {
    placeholder?: string;
    className?: string;
    inputClassName?: string;
}

export function SearchCommand({
    placeholder = "Search Destination and Packages...",
    className,
    inputClassName,
}: CommandBasicProps) {
    const [open, setOpen] = React.useState(false);
    const router = useRouter();

    // Extract unique destinations from packagesData
    const uniqueDestinations = React.useMemo(() => {
        const dests = packagesData.flatMap((pkg) => pkg.destinations);
        return Array.from(new Set(dests));
    }, []);

    const categories = ["International", "Domestic"];

    const handleSelect = (type: "destination" | "category" | "package", value: string, slug?: string) => {
        setOpen(false);
        const params = new URLSearchParams();

        if (type === "destination") {
            params.set("destination", value);
            router.push(`/packages?${params.toString()}`);
        } else if (type === "category") {
            params.set("category", value); // nuqs parses this array automatically
            router.push(`/packages?${params.toString()}`);
        } else if (type === "package") {
            // WHAT YOU ASKED FOR: Redirect to filtered list
            params.set("q", value);
            router.push(`/packages?${params.toString()}`);

            // WHAT YOU SHOULD BE DOING:
            // router.push(`/packages/${slug}`);
        }
    };

    return (
        <>
            <InputGroup className={className}>
                <InputGroupAddon>
                    <Search className="size-4 text-muted-foreground" />
                </InputGroupAddon>

                <InputGroupInput
                    readOnly
                    placeholder={placeholder}
                    onClick={() => setOpen(true)}
                    className={cn("cursor-text", inputClassName)}
                />
            </InputGroup>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <Command>
                    <CommandInput placeholder={placeholder} />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>

                        <CommandGroup heading="Destinations">
                            {uniqueDestinations.map((dest) => (
                                <CommandItem
                                    key={dest}
                                    onSelect={() => handleSelect("destination", dest)}
                                >
                                    <MapPin className="mr-2 h-4 w-4" />
                                    {dest}
                                </CommandItem>
                            ))}
                        </CommandGroup>

                        <CommandGroup heading="Categories">
                            {categories.map((cat) => (
                                <CommandItem
                                    key={cat}
                                    onSelect={() => handleSelect("category", cat)}
                                >
                                    <Compass className="mr-2 h-4 w-4" />
                                    {cat}
                                </CommandItem>
                            ))}
                        </CommandGroup>

                        <CommandGroup heading="Packages">
                            {packagesData.map((pkg) => (
                                <CommandItem
                                    key={pkg.slug}
                                    onSelect={() => handleSelect("package", pkg.title, pkg.slug)}
                                >
                                    <Briefcase className="mr-2 h-4 w-4" />
                                    {pkg.title}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </CommandDialog>
        </>
    );
}