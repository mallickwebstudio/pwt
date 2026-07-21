import React from 'react'
import LeadDialog from './lead-dialog'
import { cn } from '@/lib/utils'
import { Plane } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CtaButton({
    label = "Plan My Trip",
}: { label?: string }) {
    return (
        <LeadDialog
            trigger={
                <Button
                    className={cn("relative w-full bg-accent hover:text-accent hover:bg-primary text-primary cursor-pointer group")}
                >
                    <Plane className="relative left-0 group-hover:left-[calc(100%-1rem)] transition-all" />
                    <span className="relative left-0 group-hover:-left-5 transition-all">
                        {label}
                    </span>
                </Button>
            }
        />
    )
}
