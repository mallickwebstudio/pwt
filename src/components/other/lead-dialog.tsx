"use client";

import { useId, useMemo, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { LoaderIcon, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { packagesData } from "@/lib/db/packages";
import { Button } from "@/components/ui/button";
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

/**
 * ------------------------------------------------------------
 * Google Form config — centralized here so every page that
 * renders <LeadDialog /> stays in sync without duplicating logic.
 * Replace the TODO entry IDs with the real ones from your form.
 * ------------------------------------------------------------
 */
const GOOGLE_FORM_ACTION_URL =
    "https://docs.google.com/forms/d/e/dfsa-rtuEwuNyMPxIEf7uFKatHRk7Wfw/formResponse";

const FORM_ENTRY_IDS = {
    name: "entry.626445614",
    phone: "entry.1614402530",
    package: "entry.XXXXXXXXX", // TODO: replace with real entry id
    month: "entry.XXXXXXXXX", // TODO: replace with real entry id
    travellers: "entry.XXXXXXXXX", // TODO: replace with real entry id
};

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
};

interface LeadDialogProps {
    /** Custom trigger element, e.g. a differently styled Button. Defaults to a standard Button. */
    trigger?: ReactNode;
    /** Label used only for the default trigger button (ignored if `trigger` is passed). */
    triggerLabel?: string;
    /** Pre-select a package, e.g. pass `pkg.slug` from a package details page. */
    defaultPackageSlug?: string;
    className?: string;
}

export default function LeadDialog({
    trigger,
    triggerLabel = "Get Free Quote",
    defaultPackageSlug,
    className,
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

        const body = new FormData();
        body.append(FORM_ENTRY_IDS.name, formData.name);
        body.append(FORM_ENTRY_IDS.phone, formData.phone);
        body.append(FORM_ENTRY_IDS.package, formData.package);
        body.append(FORM_ENTRY_IDS.month, formData.month);
        body.append(FORM_ENTRY_IDS.travellers, formData.travellers);

        try {
            await fetch(GOOGLE_FORM_ACTION_URL, {
                method: "POST",
                mode: "no-cors",
                body,
            });
            toast.success("Thanks! Our team will call you back shortly.");
            resetForm();
            setOpen(false);
        } catch (error) {
            console.error("Lead submission error:", error);
            toast.error("Failed to submit. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Dialog
            open={open}
            onOpenChange={(next) => {
                setOpen(next);
                if (!next) resetForm();
            }}
        >
            <DialogTrigger>
                {trigger ?? <Button className="cursor-pointer">{triggerLabel}</Button>}
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

                <ul className="grid grid-cols-1 gap-1.5 text-sm text-muted-foreground sm:grid-cols-3">
                    {TRUST_POINTS.map((point) => (
                        <li key={point} className="flex items-start gap-1.5 text-xs">
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                            {point}
                        </li>
                    ))}
                </ul>

                <form onSubmit={handleSubmit} className="space-y-3">
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
                                    <SelectItem key={pkg.slug} value={pkg.slug}>
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

                    <Button type="submit" className="w-full cursor-pointer" disabled={isSubmitting}>
                        <LoaderIcon className={cn("animate-spin", isSubmitting ? "block" : "hidden")} />
                        {isSubmitting ? "Submitting..." : "Get Free Quote"}
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                        No spam. We&apos;ll contact you shortly.
                    </p>
                </form>
            </DialogContent>
        </Dialog>
    );
}