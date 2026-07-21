import React from 'react'
// import TrustBanner from './trust-banner'
import Destination from './destination'
import Package from './package'
import WhyUs from './why-us'
import Category from './category'
import Offer from './offer'
import BookingSteps from './booking-steps'
// import Testimonials from './testimonials'
// import Gallery from './gallery'
import Activities from './activities'
// import DestinationListMap from './destination-list-map'
import Upcoming from './upcoming'
import Team from './team'
import Faq from './faq'
// import Partntrs from './partntrs'
// import Ig from './ig'
// import CtaBanner from './cta-banner'
import Hero from './hero'

export default function page() {
    return (
        <>
            <Hero />
            {/* <TrustBanner /> */}
            {/* <Partntrs /> */}
            <Destination />
            <Package />
            <Upcoming />
            <WhyUs />
            <Category />
            <Offer />
            <BookingSteps />
            {/* <Testimonials /> */}
            {/* <Gallery /> */}
            <Activities />
            {/* <DestinationListMap /> */}
            <Team />
            <Faq />
            {/* <Partntrs /> */}
            {/* <Ig /> */}
            {/* <CtaBanner /> */}
        </>
    )
}
