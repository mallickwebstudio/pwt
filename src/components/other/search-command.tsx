"use client"

import * as React from "react"
import { Search } from "lucide-react"

import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import { cn } from "@/lib/utils"

interface CommandBasicProps {
    placeholder?: string
    className?: string
    inputClassName?: string
}

export function SearchCommand({
    placeholder = "Search Destination and Packages...",
    className,
    inputClassName
}: CommandBasicProps) {
    const [open, setOpen] = React.useState(false)

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
                    className={cn("cursor-pointer", inputClassName)}
                />
            </InputGroup>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <Command>
                    <CommandInput placeholder={placeholder} />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                            <CommandItem>Calendar</CommandItem>
                            <CommandItem>Search Emoji</CommandItem>
                            <CommandItem>Calculator</CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </CommandDialog>
        </>
    )
}