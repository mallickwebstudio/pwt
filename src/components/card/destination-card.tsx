import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Destination } from '@/types'

export default function DestinationCard({ data }: { data: Destination }) {
    return (
        <Link className="block relative rounded-4xl border hover:shadow-lg group overflow-hidden" href={data.href}>
            <article className='relative p-1'>
                <div className="absolute inset-0 object-cover overflow-hidden select-none pointer-events-none z-0">
                    <Image
                        src={data.image}
                        alt={data.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized
                    />
                </div>

                <div className="relative mt-60 p-2 bg-card rounded-3xl border z-10">
                    <header>
                        <h3 className="h5 text-primary">{data.name}</h3>

                        <p className="mt-1 text-sm text-muted-foreground">
                            {data.packageCount} Tour
                            {data.packageCount > 1 ? "s" : ""} Available
                        </p>
                    </header>

                    <div className="flex items-end justify-between">
                        <div>
                            <p className="text-xs text-muted-foreground italic">
                                Starting From
                            </p>

                            <p className="text-lg font-bold text-tone-yellow">
                                ₹{data.startingPrice.toLocaleString("en-IN")}
                            </p>
                        </div>

                        <div className={cn(buttonVariants({ variant: "outline", size: "sm", }), "pointer-events-none")}>
                            Explore
                            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    )
}
