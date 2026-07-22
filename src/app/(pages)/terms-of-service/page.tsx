import Hero from "@/components/section/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "Review the terms and conditions governing the use of Patel World Tour's website and travel services.",

    alternates: {
        canonical: "/terms-of-service",
    },
};

export default function page() {
    return (
        <>
            <Hero
                h1="Terms Of Service"
                p="Welcome to Patel World Tour. By accessing our website (patelworldtours.com) and utilizing our services, you agree to comply with and be bound by the following terms and conditions."
            />

            <TermsOfService />
        </>
    )
}

function TermsOfService() {
    return (
        <section className="prose">
            <div className="container mx-auto px-6 py-12 md:px-16">
                <h2>1. Website Usage & Booking Process</h2>
                <p>Our website serves as a digital catalog for our international and domestic tour curations, premium hotel bookings, global flight ticketing, and passport assistance services. Direct booking through the website is not automated. The booking process is as follows:</p>
                <ul>
                    <li>Users select a preferred travel package.</li>
                    <li>Users contact us directly via WhatsApp, email, website form, or phone.</li>
                    <li>Users may request customizations to the package.</li>
                    <li>Users provide the required traveler details, we process the booking, and issue a confirmation upon payment.</li>
                </ul>

                <h2>2. Pricing & Package Availability</h2>
                <p>The pricing displayed on our website is indicative and applies strictly to the base package listed. If you customize the package (e.g., upgrading hotels, changing flight classes, adding excursions), the final price will change accordingly. Package availability is subject to real-time confirmation at the time of booking.</p>

                <h2>3. Booking Policy</h2>
                <ul>
                    <li><strong>Required Documents:</strong> [Placeholder: Required documents]</li>
                    <li><strong>Pricing Validity:</strong> Quotes provided during inquiry are valid for a limited period and subject to change based on airline/hotel availability.</li>
                    <li><strong>Booking Confirmation:</strong> A booking is only considered confirmed once the required advance payment is received and an official confirmation receipt is issued by Patel World Tour.</li>
                </ul>

                <h2>4. Payment Policy</h2>
                <ul>
                    <li><strong>Accepted Methods:</strong> Cash, Debit Cards, and Online UPI.</li>
                    <li><strong>Payment Schedule:</strong> An advance payment is required to initiate the booking. The total balance must be paid in full at least 2 weeks (14 days) prior to the departure date.</li>
                    <li><strong>Taxes:</strong> All bookings are subject to Goods and Services Tax (GST) as mandated by the Government of India.</li>
                    <li><strong>TCS for International Tours:</strong> Under the Liberalised Remittance Scheme (LRS), Tax Collected at Source (TCS) applies to all international tour packages. This will be calculated and added to your final invoice in compliance with current Indian tax laws.</li>
                </ul>

                <h2>5. Refund & Cancellation Policy</h2>
                <p>We understand that plans change; however, travel bookings involve strict non-refundable commitments to airlines, hotels, and local operators.</p>
                <ul>
                    <li><strong>Cancellation Timeline:</strong> Cancellations must be initiated at least 2 weeks (14 days) before the departure date.</li>
                    <li><strong>Minimum Charge Cutoff:</strong> All cancellations will incur a minimum cancellation charge due to non-refundable ticket and operational costs. The exact deduction depends on the specific package and third-party vendor policies.</li>
                    <li><strong>Refund Processing:</strong> Refunds, minus the applicable cancellation charges, will be processed only after the cancellation is officially confirmed by our operational team.</li>
                    <li><strong>Cancellation by Third Parties:</strong> If flights or hotels are canceled by the operator, we will assist in securing alternatives or refunds based strictly on that specific operator&apos;s policy. We hold no financial liability for vendor-initiated cancellations.</li>
                    <li><strong>Visa Rejection Cases:</strong> [Placeholder: Visa rejection cases]</li>
                    <li><strong>Force Majeure:</strong> [Placeholder: Force majeure (natural disasters, pandemics, etc.)]</li>
                </ul>

                <h2>6. Visa Disclaimer</h2>
                <p>Visa approval is strictly at the discretion of the respective embassy or consulate. Patel World Tour acts only as an assisting agent. The submission of required documents does not guarantee visa approval. In the event of a visa rejection, visa fees and service charges are strictly non-refundable.</p>

                <h2>7. Travel Disclaimer</h2>
                <p>Travel itineraries are subject to change without prior notice due to weather conditions, local operational issues, government regulations, or airline schedule modifications. Photographs used on our website are for illustrative purposes only. We reserve the right to substitute hotels with properties of an equivalent category if the originally booked property becomes unavailable.</p>

                <h2>8. User Responsibilities</h2>
                <p>Users are responsible for ensuring that all provided personal details match their official government IDs and passports perfectly. Users must ensure their passports have sufficient validity (usually 6 months from the date of return) and carry all necessary travel documents, visas, and medical certificates required by the destination country.</p>

                <h2>9. Intellectual Property</h2>
                <p>All content, branding, images, and text on patelworldtours.com is the intellectual property of Patel World Tour. Unauthorized reproduction, distribution, or copying is prohibited.</p>

                <h2>10. Limitation of Liability</h2>
                <p>Patel World Tour acts strictly as a booking agent for third-party services (airlines, hotels, transport). We shall not be held liable for any loss, injury, damage, delay, or accident that occurs during the tour caused by third-party negligence or unforeseen circumstances.</p>
            </div>
        </section>
    )
}