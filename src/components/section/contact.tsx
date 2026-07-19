import { buttonVariants } from "@/components/ui/button";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/metadata";
import { formatPhoneHref } from "@/lib/format";
import Link from "next/link";
import EnquiryForm from "@/components/other/enquiry-form";

export default function Contact() {

    return (
        <section className="relative bg-background border-t" id="enquiry" aria-labelledby="contact-heading">
            <div className="mx-auto container px-6 py-12 md:p-16 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">

                {/* Left Column: Form and Details */}
                <div>
                    <header>
                        <h2 className="h2">Get in Touch</h2>
                        <p className="mt-3">Have questions or need help planning your next trip? Contact our travel experts for personalized assistance, the best package recommendations, and a free travel consultation.</p>
                    </header>
                    <div className="mt-6 p-4 bg-card rounded-4xl border">
                        <h3 className="h4">Contact Form</h3>
                        <EnquiryForm className="mt-2" />
                    </div>

                    <div className="mt-6 p-4 bg-card rounded-4xl border">
                        <h3 className="h4 font-bold text-foreground">
                            Office Hours
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                            We are available to assist you during our working hours,{" "}
                            <strong className="font-semibold text-foreground">Monday to Saturday</strong>,{" "}
                            from <strong className="font-semibold text-foreground">10:00 AM to 8:00 PM</strong>.
                            Feel free to contact or visit us during this time, and we&quot;ll be happy to help.
                        </p>
                    </div>
                </div>

                {/* Right Column: Visual Map Context */}
                <div className="relative overflow-hidden lg:col-span-2">
                    <CompanyDetails />
                    <div className="mt-6 relative h-60 lg:h-100 grid grid-cols-1 rounded-4xl overflow-hidden">
                        <iframe
                            className="block size-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d767.5641538581808!2d73.40823531268963!3d22.131408499185977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fe16e2493c559%3A0x6a0e73a596b8dd69!2sVadodara%20Jilla%20Kelavani%20Mandal!5e1!3m2!1sen!2sin!4v1782736929353!5m2!1sen!2sin"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="VJKM Self Finance College Map Location"
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}

function CompanyDetails() {
    return (
        <div className="bg-card rounded-4xl border grid grid-cols-1 md:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x overflow-hidden divide-x">
            {/* Contact Details */}
            <address className="p-4 not-italic">
                <h3 className="h4">Contact Our Travel Experts</h3>

                <div className="mt-4 flex flex-col gap-2">
                    <Link
                        className={cn(buttonVariants({ size: "sm" }), "var-phone w-full justify-start gap-2")}
                        href={siteConfig.links.phone}
                    >
                        <Phone className="size-4" />
                        {formatPhoneHref(siteConfig.links.phone)}
                    </Link>

                    <Link
                        className={cn(buttonVariants({ size: "sm" }), "var-phone-secondary w-full justify-start gap-2")}
                        href={siteConfig.links.phoneSecondary}
                    >
                        <Phone className="size-4" />
                        {formatPhoneHref(siteConfig.links.phoneSecondary)}
                    </Link>

                    <Link
                        className={cn(buttonVariants({ size: "sm" }), "var-phone-secondary w-full justify-start gap-2")}
                        href={siteConfig.links.phoneTertiary}
                    >
                        <Phone className="size-4" />
                        {formatPhoneHref(siteConfig.links.phoneTertiary)}
                    </Link>

                    <Link
                        className={cn(buttonVariants({ size: "sm" }), "var-whatsapp w-full justify-start gap-2")}
                        href={siteConfig.links.whatsapp}
                    >
                        <MessageCircle className="size-4" />
                        Chat on WhatsApp
                    </Link>

                    <Link
                        className={cn(buttonVariants({ size: "sm" }), "var-mail w-full justify-start gap-2")}
                        href={siteConfig.links.email}
                    >
                        <Mail className="size-4" />
                        patelworldtour.in@gmail.com
                    </Link>
                </div>
            </address>

            {/* Office Details */}
            <div className="bg-secondary p-4">
                <h3 className="h4">Visit Our Office</h3>

                <div className="mt-4 space-y-5">
                    <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                        <div>
                            <h4 className="font-medium">Office Address</h4>
                            <p className="mt-1 text-sm text-muted-foreground">
                                {siteConfig.headoffice.address},
                                <br />
                                {siteConfig.headoffice.area},
                                <br />
                                {siteConfig.headoffice.city}, {siteConfig.headoffice.state}{" "}
                                {siteConfig.headoffice.pincode}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <Clock3 className="mt-0.5 size-5 shrink-0 text-primary" />
                        <div>
                            <h4 className="font-medium">Business Hours</h4>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Monday – Saturday
                                <br />
                                <span className="font-medium text-foreground">
                                    9:30 AM – 1:00 PM
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}