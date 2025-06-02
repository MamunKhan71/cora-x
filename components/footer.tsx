"use client"

import { motion } from "framer-motion"
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Youtube,
    ArrowRight,
    Cpu,
    Shield,
    Zap,
    Eye,
    ChevronUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
    products: [
        { name: "AcoteAI Box", href: "#" },
        { name: "Edge Computing Solutions", href: "#" },
        { name: "AI Surveillance Systems", href: "#" },
        { name: "Industrial IoT Devices", href: "#" },
        { name: "Custom Solutions", href: "#" },
    ],
    solutions: [
        { name: "Retail Analytics", href: "#" },
        { name: "Security Monitoring", href: "#" },
        { name: "Smart Manufacturing", href: "#" },
        { name: "Healthcare AI", href: "#" },
        { name: "Smart Cities", href: "#" },
    ],
    support: [
        { name: "Documentation", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Technical Support", href: "#" },
        { name: "Training Resources", href: "#" },
        { name: "Community Forum", href: "#" },
    ],
    company: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "News & Events", href: "#" },
        { name: "Partners", href: "#" },
        { name: "Contact", href: "#" },
    ],
}

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
]

const quickStats = [
    { icon: Cpu, value: "40+", label: "AI Algorithms" },
    { icon: Eye, value: "8CH", label: "Video Streams" },
    { icon: Shield, value: "99.9%", label: "Uptime" },
    { icon: Zap, value: "10W", label: "Power Usage" },
]

export default function CreativeFooter() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="relative bg-black text-white overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Animated gradient orbs */}
                {/* <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div> */}
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

                {/* Floating particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-emerald-500/40 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: Math.random() * 20 + 10,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10">
                {/* Newsletter section */}
                <div className="border-b border-emerald-500/20">
                    <div className="max-w-7xl mx-auto px-6 py-16">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                                Stay Connected
                            </h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Get the latest updates on AI technology, product releases, and industry insights
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="max-w-md mx-auto"
                        >
                            <div className="flex gap-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-white/5 border-emerald-500/30 text-white placeholder:text-gray-500 focus:border-emerald-500"
                                />
                                <Button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-6">
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Quick stats */}
                <div className="border-b border-emerald-500/20">
                    <div className="max-w-7xl mx-auto px-6 py-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {quickStats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center group"
                                >
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 p-0.5 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                                            <stat.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-1">{stat.value}</div>
                                    <div className="text-gray-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main footer content */}
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                        {/* Company info */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-4">
                                    AcoteAI
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Leading the future of edge computing with intelligent AI solutions. Transforming industries through
                                    innovative technology and reliable performance.
                                </p>
                            </div>

                            {/* Contact info */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-400">
                                    <MapPin className="w-5 h-5 text-emerald-500" />
                                    <span>123 Innovation Drive, Tech City, TC 10101</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <Phone className="w-5 h-5 text-emerald-500" />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <Mail className="w-5 h-5 text-emerald-500" />
                                    <span>info@acoteai.com</span>
                                </div>
                            </div>

                            {/* Social links */}
                            <div className="flex gap-4 mt-6">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 flex items-center justify-center text-emerald-400 hover:text-emerald-300 transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Links sections */}
                        {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h4 className="text-lg font-semibold text-white mb-4 capitalize">{category}</h4>
                                <ul className="space-y-2">
                                    {links.map((link, index) => (
                                        <li key={index}>
                                            <a
                                                href={link.href}
                                                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-emerald-500/20">
                    <div className="max-w-7xl mx-auto px-6 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="text-gray-400 text-sm">
                                © 2024 AcoteAI. All rights reserved. | Privacy Policy | Terms of Service
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-gray-400 text-sm">Powered by AI Technology</span>
                                <motion.button
                                    onClick={scrollToTop}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 flex items-center justify-center text-emerald-400 hover:text-emerald-300 transition-all duration-300"
                                    aria-label="Scroll to top"
                                >
                                    <ChevronUp className="w-5 h-5" />
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
