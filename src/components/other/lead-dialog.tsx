"use client";

import { useEffect, useId, useMemo, useState, type ReactNode } from "react"; import { LoaderIcon, Astroid } from "lucide-react";
import { cn } from "@/lib/utils";
import { packagesData } from "@/lib/db/packages";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "../ui/textarea";
import { handleFormSubmit } from "@/lib/contact";
import { Marquee } from "./marquee";

const LEAD_DIALOG_VISITED_KEY = "lead-dialog-opened";
/**
 * ------------------------------------------------------------
 * Google Form config — centralized here so every page that
 * renders <LeadDialog /> stays in sync without duplicating logic.
 * Replace the TODO entry IDs with the real ones from your form.
 * ------------------------------------------------------------
 */

const TRAVELLER_OPTIONS = ["2 Adults", "Family", "Group", "Solo"];

const TRUST_POINTS = [
    "Free itinerary",
    "Best available discount",
    "Expert consultation",
];

function getUpcomingMonths(count = 12): string[] {
    const now = new Date();
    return Array.from({ length: count }, (_, i) => {
        const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
        return d.toLocaleDateString("en-IN", { month: "long", year: "numeric" });
    });
}

const emptyForm = {
    name: "",
    phone: "",
    package: "",
    month: "",
    travellers: "",
    message: "",
};

interface LeadDialogProps {
    /** Custom trigger element, e.g. a differently styled Button. Defaults to a standard Button. */
    trigger?: ReactNode;
    /** Label used only for the default trigger button (ignored if `trigger` is passed). */
    triggerLabel?: string;
    /** Pre-select a package, e.g. pass `pkg.slug` from a package details page. */
    ctaLabel?: string;
    triggerClassName?: string;
    defaultPackageSlug?: string;
    className?: string;
}

export default function LeadDialog({
    trigger,
    triggerLabel = "Get Free Quote",
    defaultPackageSlug,
    triggerClassName,
    className,
    ctaLabel,
}: LeadDialogProps) {
    const uid = useId();
    const [open, setOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        ...emptyForm,
        package: defaultPackageSlug ?? "",
    });

    const months = useMemo(() => getUpcomingMonths(), []);

    function updateField(key: keyof typeof formData, value: string) {
        setFormData((prev) => ({ ...prev, [key]: value }));
    }

    function resetForm() {
        setFormData({ ...emptyForm, package: defaultPackageSlug ?? "" });
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (isSubmitting) return;

        setIsSubmitting(true);

        const success = await handleFormSubmit({
            name: formData.name,
            phone: formData.phone,
            package: formData.package,
            month: formData.month,
            traveller: formData.travellers,
            message: formData.message,
            type: "Lead",
        });

        if (success) {
            resetForm();
            setOpen(false);
        }

        setIsSubmitting(false);
    }

    useEffect(() => {
        // Already opened before
        if (localStorage.getItem(LEAD_DIALOG_VISITED_KEY)) return;

        const timer = setTimeout(() => {
            localStorage.setItem(LEAD_DIALOG_VISITED_KEY, "true");
            setOpen(true);
        }, 15000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Dialog
            open={open}
            onOpenChange={(next) => {
                if (next) { localStorage.setItem(LEAD_DIALOG_VISITED_KEY, "true") }
                setOpen(next);
                if (!next) { resetForm() }
            }}
        >
            <DialogTrigger className={triggerClassName}>
                {trigger ?? (
                    <span className={cn(buttonVariants(), "cursor-pointer", triggerClassName)}>
                        {triggerLabel}
                    </span>
                )}
            </DialogTrigger>

            <DialogContent className={cn("sm:max-w-md", className)}>
                <DialogHeader className="text-left">
                    <span className="text-sm font-medium text-primary">
                        ✈️ Planning Your Next Trip?
                    </span>
                    <DialogTitle className="text-2xl leading-tight">
                        Get the Best Price & Exclusive Offers
                    </DialogTitle>
                </DialogHeader>

                <Marquee pauseOnHover className="-mt-4 -mb-2 [--duration:20s] hover:shadow-sm transition-all">
                    {TRUST_POINTS.map((point) => (
                        <div key={point} className="flex items-start gap-4.5 text-xs uppercase">
                            <Astroid className="size-3.5 shrink-0 text-primary fill-primary" />
                            <span className="text-tone-yellow">{point}</span>
                        </div>
                    ))}
                </Marquee>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <Label htmlFor={`${uid}-name`}>
                                Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id={`${uid}-name`}
                                className="mt-1"
                                placeholder="Vikas Sharma"
                                required
                                value={formData.name}
                                onChange={(e) => updateField("name", e.target.value)}
                            />
                        </div>

                        <div>
                            <Label htmlFor={`${uid}-phone`}>
                                Phone Number <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id={`${uid}-phone`}
                                className="mt-1"
                                type="tel"
                                placeholder="+91 00000 00000"
                                required
                                value={formData.phone}
                                onChange={(e) => updateField("phone", e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <Label htmlFor={`${uid}-package`}>Interested Package</Label>
                        <Select
                            value={formData.package}
                            onValueChange={(val) => {
                                if (val !== null) {
                                    updateField("package", val);
                                }
                            }}
                        >
                            <SelectTrigger id={`${uid}-package`} className="mt-1 w-full">
                                <SelectValue placeholder="Select a package" />
                            </SelectTrigger>
                            <SelectContent>
                                {packagesData.map((pkg) => (
                                    <SelectItem key={pkg.slug} value={pkg.title}>
                                        {pkg.title}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <Label htmlFor={`${uid}-month`}>Travel Month</Label>
                            <Select
                                value={formData.month}
                                onValueChange={(val) => {
                                    if (val !== null) {
                                        updateField("month", val);
                                    }
                                }}
                            >
                                <SelectTrigger id={`${uid}-month`} className="mt-1 w-full">
                                    <SelectValue placeholder="Select month" />
                                </SelectTrigger>
                                <SelectContent>
                                    {months.map((month) => (
                                        <SelectItem key={month} value={month}>
                                            {month}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label htmlFor={`${uid}-travellers`}>Travellers</Label>
                            <Select
                                value={formData.travellers}
                                onValueChange={(val) => {
                                    if (val !== null) {
                                        updateField("travellers", val);
                                    }
                                }}
                            >
                                <SelectTrigger id={`${uid}-travellers`} className="mt-1 w-full">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    {TRAVELLER_OPTIONS.map((option) => (
                                        <SelectItem key={option} value={option}>
                                            {option}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>


                    <div>
                        <label className="block text-sm font-medium" htmlFor={`${uid}-message`}>
                            Message
                        </label>
                        <Textarea
                            id={`${uid}-message`}
                            className="mt-0.5 border-black/20 resize-none"
                            name="message"
                            placeholder={"Type your message here..."}
                            value={formData.message}
                            onChange={(e) => updateField("message", e.target.value)}
                        />
                    </div>

                    <Button type="submit" className="w-full cursor-pointer" disabled={isSubmitting}>
                        <LoaderIcon className={cn("animate-spin", isSubmitting ? "block" : "hidden")} />
                        {isSubmitting ? "Submitting..." : (ctaLabel || "Get Free Quote")}
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                        No spam. We&apos;ll contact you shortly.
                    </p>
                </form>
            </DialogContent>
        </Dialog>
    );
}