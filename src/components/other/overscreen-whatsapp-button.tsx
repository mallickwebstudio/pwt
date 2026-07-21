// 'use client'

// import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/metadata'

export default function OverscreenWhatsappButton() {
    // const [isAnyVisible, setIsAnyVisible] = useState(false)

    // useEffect(() => {
    //     const enquiryElement = document.getElementById('enquiry')
    //     const heroSection = document.getElementById('hero-header')

    //     if (!enquiryElement && !heroSection) return

    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             const isVisible = entries.some(entry => entry.isIntersecting)
    //             setIsAnyVisible(isVisible)
    //         },
    //         { threshold: 0.1 }
    //     );

    //     if (enquiryElement) {
    //         observer.observe(enquiryElement)
    //     }
    //     if (heroSection) {
    //         observer.observe(heroSection)
    //     }

    //     return () => observer.disconnect()
    // }, [])

    return (
        <Link
            className={cn(
                buttonVariants(),
                'fixed right-4 bottom-4 z-50 animate-bounce border shadow-lg',
                'var-whatsapp',
            )}
            href={siteConfig.links.whatsapp}
        >
            <MessageCircle className="size-4" />
            Ask on Whatsapp
        </Link>
    )
}