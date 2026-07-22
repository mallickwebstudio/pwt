import Hero from "@/components/section/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Read Patel World Tour's Privacy Policy to understand how we collect, use, and protect your personal information.",

    alternates: {
        canonical: "/privacy-policy",
    },
};

export default function page() {
    return (
        <>
            <Hero
                h1="Privacy & Policy"
                p={`Welcome to Patel World Tour ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy governs the privacy policies and practices of our website, patelworldtours.com.`}
            />

            <PrivacyPolicy />
        </>
    )
}

function PrivacyPolicy() {
    return (
        <section className="prose">
            <div className="container mx-auto px-6 py-12 md:px-16">
                <h2>1. Information We Collect</h2>
                <p>When you visit our website, inquire about a package, or make a booking, we collect the following personal information:</p>
                <ul>
                    <li><strong>Identity Data:</strong> Full name.</li>
                    <li><strong>Contact Data:</strong> Phone numbers, email addresses, and WhatsApp contact details.</li>
                    <li><strong>Inquiry Data:</strong> Information regarding your travel preferences, package customizations, and passenger details.</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <p>We use the collected data to:</p>
                <ul>
                    <li>Process your travel bookings and manage your itineraries.</li>
                    <li>Communicate with you regarding packages, updates, and customer support.</li>
                    <li>Improve our website performance and marketing strategies.</li>
                </ul>

                <h2>3. Third-Party Services</h2>
                <p>We use third-party tools to monitor user activity and for marketing purposes. These third parties have their own privacy policies regarding how they handle your data:</p>
                <ul>
                    <li><strong>Google Analytics & Search Console:</strong> Used to track website traffic, user behavior, and site performance.</li>
                    <li><strong>Meta Pixel:</strong> Used to track conversions from Facebook and Instagram ads, optimize ads, and build targeted audiences.</li>
                    <li><strong>WhatsApp:</strong> Integrated for direct communication and booking facilitation.</li>
                </ul>

                <h2>4. Cookie Policy</h2>
                <p>We use cookies to enhance your browsing experience. By using our website, you consent to our use of cookies as described below:</p>
                <ul>
                    <li><strong>Essential Cookies:</strong> Necessary for the website to function properly (e.g., security, network management).</li>
                    <li><strong>Analytics Cookies:</strong> Track how users navigate and interact with the site to help us improve user experience.</li>
                    <li><strong>Marketing Cookies:</strong> Track your online activity to help advertisers deliver more relevant advertising or limit how many times you see an ad.</li>
                </ul>

                <h2>5. Your User Rights</h2>
                <p>You have the right to request access to the personal data we hold about you, request corrections to any errors, or request deletion of your data, subject to legal and operational retention requirements.</p>

                <h2>6. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, contact us at:</p>
                <p><strong>Patel World Tour</strong><br />
                    604, Veer Enclave, Opp. Fortune Platinum, Near Tulsidham Char Rasta<br />
                    Manjalpur, Vadodara, Gujarat 390011<br />
                    Phone: +91 7201919911 / +91 8320646940 / +91 7984172824<br />
                    Email: patelworldtour.in@gmail.com
                </p>
            </div>
        </section>
    )
}