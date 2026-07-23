"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/metadata";
import CtaButton from "@/components/other/cta-button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

type NavItems = {
    label: string;
    href?: string;
    subItems?: {
        label: string;
        href?: string;
    }[];
}

const navItems: NavItems[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Packages", href: "/packages" },
    { label: "Services", href: "/services" },
    // {
    //     label: "More",
    //     subItems: [
    //         { label: "Pricing", href: "#" },
    //         { label: "Features", href: "#" },
    //         { label: "Testimonials", href: "#" },
    //     ],
    // },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header className="fixed inset-0 bottom-auto  w-full border-b bg-black/50 backdrop-blur-lg text-foreground z-50">
            <div className="mx-auto container p-4 md:py-2 md:px-16 grid grid-cols-2 lg:grid-cols-3 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="p-1 h-12 w-fit flex gap-2 justify-self-start bg-amber-100 rounded-full" aria-label="Go to homepage">
                    <Image
                        className="h-full w-fit object-contain select-none pointer-events-none"
                        width={32}
                        height={32}
                        src="/images/logo/logo-title.png"
                        alt={siteConfig.name + " Logo"}
                        unoptimized
                    />
                    <span className="sr-only">{siteConfig.name}</span>
                </Link>

                {/* Desktop Navigation */}
                <nav
                    className="hidden lg:flex justify-self-center gap-2"
                    role="navigation"
                    aria-label="Primary Navigation"
                >
                    <NavbarNavigationLinks className="hidden lg:flex justify-self-center gap-2" />
                </nav>

                {/* Desktop Actions */}
                <NavbarCtaAction className="hidden lg:flex items-center gap-2 justify-self-end" />

                {/* Mobile Menu Toggle */}
                <div className="flex lg:hidden items-center gap-2">
                    <CtaButton />
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={toggleMobileMenu}
                        className="cursor-pointer justify-self-end"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <>
                    <nav className="lg:hidden p-4 border-t space-y-2" role="navigation" aria-label="Mobile Navigation">
                        <NavbarNavigationLinks />

                        {/* Mobile Actions */}
                        <NavbarCtaAction className="hidden lg:flex flex-col gap-2" />
                    </nav>
                </>
            )}
        </header>
    );
}

function NavbarNavigationLinks({ className }: { className?: string }) {
    return (
        <NavigationMenu className={className} role="navigation" aria-label="Primary Navigation">
            <NavigationMenuList className="flex-col items-start lg:flex-row gap-1">
                {navItems.map((item) =>
                    item.subItems ? (
                        <NavigationMenuItem key={item.label + "NavbarOne"}>
                            <NavigationMenuTrigger
                                // className={cn(buttonVariants({ variant: "ghost" }), "px-4!")}
                                aria-expanded="false"
                                aria-label={`${item.label} navigation options`}
                            >
                                {item.label}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-fit gap-3">
                                    {item.subItems.map((sub) => (
                                        <li key={sub.label + "NavbarOne"} role="none">
                                            <NavigationMenuLink className={cn(buttonVariants({ variant: "outline" }), "w-full")} href={sub.href}>
                                                {sub.label}
                                            </NavigationMenuLink>
                                        </li>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ) : (
                        <NavigationMenuItem key={item.label + "NavbarOne"}>
                            <NavigationMenuLink className={cn(buttonVariants({ variant: "outline" }))} href={item.href}>
                                {item.label}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    )
                )}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function NavbarCtaAction({ className }: { className?: string }) {
    return (
        <ul className={className}>
            <li>
                <CtaButton />
            </li>
        </ul>
    )
}