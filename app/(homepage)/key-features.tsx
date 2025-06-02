"use client"

import { motion } from "framer-motion"
import { Puzzle, Brain, MonitorSpeaker, Cpu, Shield, Settings, Layers, DollarSign } from "lucide-react"

const keyFeatures = [
    {
        icon: Puzzle,
        title: "High Compatibility",
        description: "Seamless integration with existing systems and protocols",
        gradient: "from-emerald-400 to-green-500",
        delay: 0.1,
    },
    {
        icon: Brain,
        title: "Rich AI Algorithms",
        description: "Advanced machine learning capabilities for intelligent processing",
        gradient: "from-green-400 to-emerald-500",
        delay: 0.2,
    },
    {
        icon: MonitorSpeaker,
        title: "High-definition Decoding",
        description: "Crystal clear 1080P video processing across 8 channels",
        gradient: "from-teal-400 to-emerald-500",
        delay: 0.3,
    },
    {
        icon: Cpu,
        title: "Powerful Computing Power",
        description: "Quad-core processor with dedicated NPU for edge computing",
        gradient: "from-emerald-500 to-teal-500",
        delay: 0.4,
    },
    {
        icon: Shield,
        title: "High Reliability",
        description: "Industrial-grade components for 24/7 operation",
        gradient: "from-green-500 to-emerald-600",
        delay: 0.5,
    },
    {
        icon: Settings,
        title: "Flexible Deployment",
        description: "Adaptable configuration for various industrial environments",
        gradient: "from-teal-500 to-green-500",
        delay: 0.6,
    },
    {
        icon: Layers,
        title: "8-CH Model",
        description: "Multi-channel video processing for comprehensive monitoring",
        gradient: "from-emerald-400 to-teal-500",
        delay: 0.7,
    },
    {
        icon: DollarSign,
        title: "Efficient and Economical",
        description: "Low power consumption with maximum performance output",
        gradient: "from-green-400 to-teal-600",
        delay: 0.8,
    },
]

export default function KeyFeatures() {
    return (
        <div className="w-full max-w-7xl mx-auto p-8">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 bg-clip-text text-transparent">
                    Key Features
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                    Discover what makes AcoteAI Box the ultimate edge computing solution
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {keyFeatures.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: feature.delay,
                            type: "spring",
                            stiffness: 100,
                        }}
                        whileHover={{
                            y: -10,
                            scale: 1.02,
                            transition: { duration: 0.3 },
                        }}
                        viewport={{ once: true }}
                        className="group cursor-pointer"
                    >
                        <div className="relative h-full">
                            {/* Background glow */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity duration-500`}
                            />

                            {/* Card */}
                            <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group-hover:border-emerald-500/30 transition-all duration-500">
                                {/* Icon */}
                                <div
                                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <div className="w-full h-full rounded-xl bg-black/20 backdrop-blur-sm flex items-center justify-center">
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                    {feature.description}
                                </p>

                                {/* Animated border */}
                                <motion.div
                                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20`}
                                    animate={{
                                        background: [
                                            `linear-gradient(45deg, transparent, transparent)`,
                                            `linear-gradient(45deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1))`,
                                            `linear-gradient(45deg, transparent, transparent)`,
                                        ],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatType: "reverse",
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom accent */}
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                className="mt-16 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full"
            />
        </div>
    )
}
