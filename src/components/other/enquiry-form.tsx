"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { LoaderIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { handleFormSubmit } from "@/lib/contact"

export default function EnquiryForm({ className }: { className?: string }) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        type: "Contact",
        name: "",
        phone: "",
        message: ""
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (isSubmitting) return;

        setIsSubmitting(true);

        const success = await handleFormSubmit({
            name: formData.name,
            phone: formData.phone,
            message: formData.message,
            type: "Contact", // optional, defaults to Contact
        });

        if (success) {
            setIsSubmitted(true);
            setFormData({
                type: "Contact",
                name: "",
                phone: "",
                message: "",
            });
        }

        setIsSubmitting(false);
    }

    return (
        <form onSubmit={handleSubmit} className={cn("mt-6 space-y-3 max-w-2xl mx-auto", className)}>
            <div>
                <label className="block text-sm font-medium">
                    your Name <span className="text-red-500">*</span>
                </label>
                <Input
                    className="mt-0.5 border-black/20"
                    name="name"
                    placeholder="Vikas Sharma"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label className="block text-sm font-medium">
                    Phone No. <span className="text-red-500">*</span>
                </label>
                <Input
                    className="mt-0.5 border-black/20"
                    name="phone"
                    placeholder="+91 00000 00000"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label className="block text-sm font-medium">
                    Message
                </label>
                <Textarea
                    className="mt-0.5 border-black/20 resize-none"
                    name="message"
                    placeholder={"Type your message here..."}
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>

            <div className="flex justify-center">
                <Button
                    className="relative cursor-pointer"
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                >
                    <LoaderIcon className={cn("animate-spin", isSubmitting ? "block" : "hidden")} />
                    {isSubmitting ? "Submitting..." : isSubmitted ? "Submitted" : "Request Callback"}
                </Button>
            </div>
        </form>
    )
}
