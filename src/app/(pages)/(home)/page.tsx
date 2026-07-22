import React from 'react'
import FeaturedDestinations from '@/components/section/featured-destinations'
import FeaturedPackages from '@/components/section/featured-packages'
import WhyPwt from '@/components/section/why-pwt'
// import Category from './category'
// import Offer from './offer'
import BookingSteps from '../../../components/section/booking-steps'
import Activities from './activities'
import Upcoming from './upcoming'
import Team from '../../../components/section/team'
import Faq from '../../../components/section/faq'
import Hero from './hero'
import Cta from '@/components/section/cta'

export default function page() {
    return (
        <>
            <Hero />
            {/* <Partntrs /> marquee*/}
            <FeaturedDestinations />
            <FeaturedPackages />
            <Upcoming />
            <WhyPwt />
            {/* <Category /> */}
            {/* <Offer /> */}
            <BookingSteps />
            {/* <Testimonials /> Later*/}
            {/* <Gallery /> Later*/}
            {/* <Activities /> */}
            <Faq />
            <Team />
            {/* <Ig /> */}
            <Cta />
        </>
    )
}
