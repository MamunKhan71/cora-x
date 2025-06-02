"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Check, Loader2, MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setFormState("submitting")

        // Simulate API call
        setTimeout(() => {
            setFormState("success")
            // Reset form after 3 seconds
            setTimeout(() => {
                setFormState("idle")
                setFormData({
                    name: "",
                    email: "",
                    company: "",
                    phone: "",
                    message: "",
                })
            }, 3000)
        }, 2000)
    }

    return (
        <div className="w-full bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent_70%)]"></div>

                {/* Animated lines */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"
                        style={{
                            top: `${20 + i * 15}%`,
                            left: 0,
                            right: 0,
                        }}
                        animate={{
                            x: ["-100%", "100%"],
                        }}
                        transition={{
                            duration: 15 + i * 5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Have questions about our products or services? We're here to help you find the perfect solution.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-gray-300">
                                        Full Name
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-gray-300">
                                        Email Address
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="company" className="text-gray-300">
                                        Company
                                    </Label>
                                    <Input
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your Company"
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-gray-300">
                                        Phone Number
                                    </Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 000-0000"
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-gray-300">
                                    Message
                                </Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project or inquiry..."
                                    required
                                    rows={5}
                                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 resize-none"
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={formState === "submitting" || formState === "success"}
                                className={`w-full py-6 text-lg font-medium transition-all duration-300 ${formState === "success"
                                        ? "bg-gradient-to-r from-green-500 to-emerald-600"
                                        : "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700"
                                    }`}
                            >
                                {formState === "idle" && (
                                    <span className="flex items-center gap-2">
                                        Send Message <Send className="w-4 h-4" />
                                    </span>
                                )}
                                {formState === "submitting" && (
                                    <span className="flex items-center gap-2">
                                        <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                                    </span>
                                )}
                                {formState === "success" && (
                                    <span className="flex items-center gap-2">
                                        <Check className="w-4 h-4" /> Message Sent!
                                    </span>
                                )}
                            </Button>
                        </form>

                        {/* Form submission animation */}
                        {formState === "success" && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: [0, 1.2, 1] }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-2xl z-10"
                            >
                                <div className="text-center">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 mx-auto flex items-center justify-center mb-4">
                                        <Check className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                                    <p className="text-gray-300">We'll get back to you shortly.</p>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                            <p className="text-gray-300">
                                Our team is ready to assist you with any questions about our AI solutions and how they can benefit your
                                business.
                            </p>

                            <div className="space-y-6 mt-8">
                                {[
                                    { icon: MapPin, title: "Address", content: "123 Innovation Drive, Tech City, TC 10101" },
                                    { icon: Phone, title: "Phone", content: "+1 (555) 123-4567" },
                                    { icon: Mail, title: "Email", content: "info@acoteai.com" },
                                    { icon: Clock, title: "Working Hours", content: "Monday - Friday: 9AM - 6PM" },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 p-0.5 flex-shrink-0">
                                            <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                                                <item.icon className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                                            <p className="text-gray-400">{item.content}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}
