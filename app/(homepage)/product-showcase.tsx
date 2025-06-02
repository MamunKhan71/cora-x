"use client"

import { AnimatePresence, motion } from "framer-motion"
import {
    Briefcase,
    CalendarDays,
    Cigarette,
    Eye,
    Footprints,
    LogOut,
    Moon,
    Package,
    Phone,
    MonitorIcon as Running,
    Scan,
    ShieldAlert,
    ShoppingBag,
    Smartphone,
    Swords,
    Truck,
    UserCheck,
    UserPlus,
    Users,
} from "lucide-react"
import { useEffect, useState } from "react"

// AI algorithm categories
const algorithmCategories = [
    {
        name: "Behavior Detection",
        description: "Identify specific human behaviors and activities in real-time",
        algorithms: [
            { name: "Falls", icon: Users, description: "Detect when a person falls and may need assistance" },
            { name: "Call", icon: Phone, description: "Identify when a person is on a phone call" },
            { name: "Mobile phone", icon: Smartphone, description: "Detect mobile phone usage in restricted areas" },
            { name: "Fight", icon: Swords, description: "Identify physical altercations between individuals" },
            { name: "Area intrusion", icon: ShieldAlert, description: "Alert when unauthorized access is detected" },
            { name: "Wander", icon: Footprints, description: "Detect aimless movement patterns in monitored areas" },
            { name: "Gather", icon: UserPlus, description: "Identify when groups of people form in specific areas" },
            { name: "Run", icon: Running, description: "Detect running in areas where it may indicate an issue" },
            { name: "Smoke", icon: Cigarette, description: "Identify smoking in non-smoking areas" },
            { name: "Leave", icon: LogOut, description: "Detect when people exit designated areas" },
            { name: "Sleep", icon: Moon, description: "Identify sleeping or inactive individuals" },
            { name: "Seminars", icon: CalendarDays, description: "Monitor attendance and engagement in group settings" },
        ],
    },
    {
        name: "Object Recognition",
        description: "Identify and track objects with high precision",
        algorithms: [
            { name: "Face Recognition", icon: Scan, description: "Identify individuals through facial features" },
            { name: "Vehicle Detection", icon: Truck, description: "Detect and classify different vehicle types" },
            { name: "Package Tracking", icon: Package, description: "Monitor and track packages in transit" },
            { name: "Abandoned Objects", icon: Briefcase, description: "Identify objects left unattended" },
        ],
    },
    {
        name: "Retail Analytics",
        description: "Optimize retail operations with AI-powered insights",
        algorithms: [
            { name: "Customer Flow", icon: Users, description: "Analyze customer movement patterns" },
            { name: "Queue Management", icon: UserCheck, description: "Monitor and optimize checkout queues" },
            { name: "Product Interaction", icon: ShoppingBag, description: "Track how customers interact with products" },
            { name: "Shelf Monitoring", icon: Eye, description: "Ensure shelves remain properly stocked" },
        ],
    },
]

export default function ProductShowcase() {
    const [activeCategory, setActiveCategory] = useState(0)
    const [hoveredAlgorithm, setHoveredAlgorithm] = useState<number | null>(null)
    const [isAutoScrolling, setIsAutoScrolling] = useState(true)

    // Auto-rotate through categories
    useEffect(() => {
        if (!isAutoScrolling) return

        const interval = setInterval(() => {
            setActiveCategory((prev) => (prev + 1) % algorithmCategories.length)
        }, 8000)

        return () => clearInterval(interval)
    }, [isAutoScrolling])

    return (
        <div className="w-full bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent_70%)]"></div>

                {/* Floating particles */}
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-emerald-500/30 rounded-full"
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

            <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 bg-clip-text text-transparent">
                        Rich AI Algorithms
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        The AI box edge host provides 40 different algorithms covering multiple fields. These algorithms are
                        carefully designed and optimized to provide users with accurate and fast intelligent services.
                    </p>
                </motion.div>

                {/* Category tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {algorithmCategories.map((category, index) => (
                        <motion.button
                            key={index}
                            onClick={() => {
                                setActiveCategory(index)
                                setIsAutoScrolling(false)
                            }}
                            className={`px-6 py-3 rounded-full text-white font-medium transition-all duration-300 ${activeCategory === index
                                    ? "bg-gradient-to-r from-emerald-500 to-green-600"
                                    : "bg-white/10 hover:bg-white/20"
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category.name}
                        </motion.button>
                    ))}
                </div>

                {/* Main content area */}
                <div className="">
                    {/* Left side - Algorithm description */}
                    <div className="space-y-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                <h3 className="text-3xl font-bold text-white">{algorithmCategories[activeCategory].name}</h3>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    {algorithmCategories[activeCategory].description}
                                </p>

                                {/* Algorithm details */}
                                <div className="mt-8 space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {algorithmCategories[activeCategory].algorithms.map((algorithm, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                                            onMouseEnter={() => setHoveredAlgorithm(idx)}
                                            onMouseLeave={() => setHoveredAlgorithm(null)}
                                            className={`p-4 rounded-lg transition-all duration-300 ${hoveredAlgorithm === idx ? "bg-white/10" : "bg-transparent"
                                                }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div
                                                    className={`min-w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 p-0.5 flex items-center justify-center ${hoveredAlgorithm === idx ? "scale-110" : "scale-100"
                                                        } transition-transform duration-300`}
                                                >
                                                    <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                                                        <algorithm.icon className="w-6 h-6 text-white" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-semibold text-white">{algorithm.name}</h4>
                                                    <p className="text-gray-400">{algorithm.description}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right side - Visual representation */}
                    <div className="relative">
                        {/* Main image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl"
                        >

                            {/* Algorithm icons overlay */}
                            <div className="absolute top-0 right-0 bottom-0 w-1/3 bg-black/80 backdrop-blur-sm p-4">
                                <div className="grid grid-cols-3 gap-4 h-full overflow-y-auto py-4">
                                    {algorithmCategories[0].algorithms.map((algorithm, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                                            className="flex flex-col items-center justify-center"
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 p-0.5 flex items-center justify-center"
                                            >
                                                <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                                                    <algorithm.icon className="w-6 h-6 text-white" />
                                                </div>
                                            </motion.div>
                                            <p className="text-xs text-center mt-2 text-white">{algorithm.name}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Animated detection boxes */}
                            <AnimatePresence>
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{
                                            opacity: 0,
                                            x: 100 + Math.random() * 300,
                                            y: 100 + Math.random() * 300,
                                            scale: 0.8,
                                        }}
                                        animate={{
                                            opacity: [0, 1, 1, 0],
                                            scale: [0.8, 1, 1, 0.8],
                                        }}
                                        transition={{
                                            duration: 4,
                                            delay: i * 2,
                                            repeat: Number.POSITIVE_INFINITY,
                                            repeatDelay: 3,
                                        }}
                                        className="absolute border-2 border-emerald-500 rounded-md w-16 h-16 pointer-events-none"
                                    >
                                        <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-xs text-white px-2 py-1 rounded-md">
                                            {algorithmCategories[0].algorithms[i].name}
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {/* Pagination dots */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {[...Array(3)].map((_, i) => (
                                <motion.button
                                    key={i}
                                    onClick={() => {
                                        setActiveCategory(i)
                                        setIsAutoScrolling(false)
                                    }}
                                    className={`w-3 h-3 rounded-full ${activeCategory === i ? "bg-emerald-500" : "bg-gray-600"
                                        } transition-colors duration-300`}
                                    whileHover={{ scale: 1.2 }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom accent */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full"
                />
            </div>
        </div>
    )
}
