"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
    Building,
    GraduationCap,
    Factory,
    HardHat,
    Fuel,
    Building2,
    MapPin,
    FolderOpen,
    ArrowRight,
    Zap,
    Shield,
    Eye,
    Cpu,
} from "lucide-react"

const applicationScenarios = [
    {
        id: 1,
        title: "Smart Community",
        icon: Building,
        description: "Intelligent residential management with AI-powered security and automation",
        features: ["Facial Recognition", "Visitor Management", "Emergency Detection", "Energy Optimization"],
        color: "from-emerald-400 to-green-500",
        bgImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070",
    },
    {
        id: 2,
        title: "Smart Campus",
        icon: GraduationCap,
        description: "Advanced educational environment monitoring and safety management",
        features: ["Attendance Tracking", "Behavior Analysis", "Safety Monitoring", "Resource Management"],
        color: "from-green-400 to-emerald-500",
        bgImage: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086",
    },
    {
        id: 3,
        title: "Smart Park",
        icon: Factory,
        description: "Industrial park automation with comprehensive monitoring solutions",
        features: ["Production Monitoring", "Quality Control", "Safety Compliance", "Efficiency Analytics"],
        color: "from-teal-400 to-emerald-500",
        bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
    },
    {
        id: 4,
        title: "Smart Construction Site",
        icon: HardHat,
        description: "Construction site safety and progress monitoring with AI analytics",
        features: ["Safety Compliance", "Progress Tracking", "Equipment Monitoring", "Risk Assessment"],
        color: "from-emerald-500 to-teal-500",
        bgImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070",
    },
    {
        id: 5,
        title: "Smart Gas Station",
        icon: Fuel,
        description: "Automated fuel station management with intelligent monitoring",
        features: ["Transaction Monitoring", "Safety Detection", "Inventory Management", "Customer Analytics"],
        color: "from-green-500 to-emerald-600",
        bgImage: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070",
    },
    {
        id: 6,
        title: "Smart Building",
        icon: Building2,
        description: "Intelligent building management with comprehensive automation",
        features: ["Access Control", "Energy Management", "Space Optimization", "Maintenance Alerts"],
        color: "from-teal-500 to-green-500",
        bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    },
    {
        id: 7,
        title: "Smart City",
        icon: MapPin,
        description: "City-wide intelligent infrastructure and traffic management",
        features: ["Traffic Optimization", "Public Safety", "Environmental Monitoring", "Urban Planning"],
        color: "from-emerald-400 to-teal-500",
        bgImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070",
    },
    {
        id: 8,
        title: "More Scenarios",
        icon: FolderOpen,
        description: "Explore additional applications and custom solutions",
        features: ["Custom Solutions", "Industry Specific", "Scalable Deployment", "Future Ready"],
        color: "from-green-400 to-teal-500",
        bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
    },
]

const algorithmStats = [
    { icon: Cpu, value: "40+", label: "AI Algorithms" },
    { icon: Eye, value: "8CH", label: "Video Streams" },
    { icon: Shield, value: "99.9%", label: "Accuracy" },
    { icon: Zap, value: "Real-time", label: "Processing" },
]

export default function ApplicationScenarios() {
    const [selectedScenario, setSelectedScenario] = useState(0)
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)

    return (
        <div className="w-full bg-black relative overflow-hidden py-24">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div> */}
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(5,150,105,0.1),transparent_30%)]"></div>

                {/* Animated grid */}
                <motion.div
                    className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"
                    animate={{
                        backgroundPosition: ["0px 0px", "60px 60px"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 bg-clip-text text-transparent"
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    >
                        Main Application Scenarios
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
                    >
                        Discover how our AI algorithms transform various industries with intelligent automation
                    </motion.p>

                    {/* Algorithm stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        {algorithmStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 p-0.5 mx-auto mb-3">
                                    <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div className="text-lg font-bold text-emerald-400">{stat.value}</div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Main content */}
                <div>
                    {/* Left side - Scenario cards grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {applicationScenarios.map((scenario, index) => (
                            <motion.div
                                key={scenario.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                onClick={() => setSelectedScenario(index)}
                                className={`relative group cursor-pointer ${selectedScenario === index ? "scale-105" : "hover:scale-105"
                                    } transition-all duration-300`}
                            >
                                {/* Card background */}
                                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-48 overflow-hidden group-hover:border-emerald-500/30 transition-all duration-300">
                                    {/* Background image */}
                                    <div className="absolute inset-0 opacity-20">
                                        <Image
                                            src={scenario.bgImage || "/placeholder.svg"}
                                            alt={scenario.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 h-full flex flex-col">
                                        {/* Icon */}
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${scenario.color} p-0.5 mb-4`}>
                                            <div className="w-full h-full rounded-xl bg-black/20 backdrop-blur-sm flex items-center justify-center">
                                                <scenario.icon className="w-7 h-7 text-white" />
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                                            {scenario.title}
                                        </h3>
                                        {/* Hover glow */}
                                        <div
                                            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${scenario.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
