import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import LeadDialog from "./lead-dialog";
import { cn } from "@/lib/utils";
import { Plane } from "lucide-react";

type CtaButtonProps = {
    label?: string;
    className?: string;
    variant?: VariantProps<typeof buttonVariants>["variant"];
};

export default function CtaButton({
    label = "Plan My Trip",
    variant,
    className,
}: CtaButtonProps) {
    return (
        <LeadDialog
            trigger={
                <div
                    className={cn(
                        buttonVariants({ variant }),
                        (!variant && "relative w-full bg-accent text-primary"),
                        "hover:text-accent hover:bg-primary cursor-pointer group",
                        className
                    )}
                >
                    <Plane className="relative left-0 group-hover:left-[calc(100%-1rem)] transition-all" />
                    <span className="relative left-0 group-hover:-left-5 transition-all">
                        {label}
                    </span>
                </div>
            }
        />
    );
}