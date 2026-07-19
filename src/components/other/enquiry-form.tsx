"use client"

import { toast } from "sonner"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { LoaderIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function EnquiryForm({ className }: { className?: string }) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: ""
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const data = new FormData()
            data.append("entry.626445614", formData.name)
            data.append("entry.1614402530", formData.phone)
            data.append("entry.1454671805", formData.message)

            fetch("https://docs.google.com/forms/d/e/dfsa-rtuEwuNyMPxIEf7uFKatHRk7Wfw/formResponse", {
                method: "POST",
                mode: "no-cors",
                body: data
            })
                .then(() => {
                    toast.success("Form submitted successfully!")
                    setIsSubmitted(true)
                })
                .catch((error) => {
                    console.error("Submission error:", error)
                    toast.error("Failed to submit the form. Please try again.")
                })
                .finally(() => {
                    setIsSubmitting(false)
                })
        } catch (error) {
            console.error("Submission error:", error)
            toast.error("Failed to submit the form. Please try again.")
            setIsSubmitting(false)
        }
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
