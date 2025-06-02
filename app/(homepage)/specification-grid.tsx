"use client"

import { motion } from "framer-motion"
import {
    Cpu,
    HardDrive,
    Wifi,
    Monitor,
    Usb,
    Thermometer,
    Zap,
    Ruler,
    Camera,
    Network,
    Volume2,
    Shield,
    Database,
    AlertTriangle,
} from "lucide-react"

const specifications = [
    { icon: Camera, label: "Video Stream", value: "8-channel 1080P", color: "from-emerald-400 to-green-500" },
    { icon: Cpu, label: "CPU", value: "Quad-core 1.2GHz", color: "from-green-400 to-emerald-500" },
    { icon: Zap, label: "NPU", value: "4TOPS@INT8", color: "from-teal-400 to-cyan-500" },
    { icon: HardDrive, label: "Memory", value: "4GB", color: "from-emerald-500 to-green-600" },
    { icon: Database, label: "eMMC", value: "64GB", color: "from-green-500 to-emerald-600" },
    { icon: HardDrive, label: "Storage", value: "microSD 128GB", color: "from-teal-500 to-emerald-500" },
    { icon: Network, label: "Ethernet", value: "Dual Port", color: "from-emerald-400 to-teal-500" },
    { icon: Wifi, label: "Wireless", value: "WiFi + 4G", color: "from-green-400 to-teal-500" },
    { icon: Volume2, label: "Audio In", value: "3.5mm Input", color: "from-emerald-500 to-green-500" },
    { icon: Volume2, label: "Audio Out", value: "3.5mm Output", color: "from-teal-400 to-emerald-500" },
    { icon: Monitor, label: "Display", value: "HDMI Interface", color: "from-green-500 to-teal-600" },
    { icon: Usb, label: "USB", value: "2-channel USB2.0", color: "from-emerald-400 to-green-600" },
    { icon: AlertTriangle, label: "Alarm I/O", value: "3-in / 2-out", color: "from-teal-500 to-green-500" },
    { icon: Thermometer, label: "Temperature", value: "-10°C to 50°C", color: "from-emerald-500 to-teal-500" },
    { icon: Shield, label: "Humidity", value: "10%-90% RH", color: "from-green-400 to-emerald-600" },
    { icon: Zap, label: "Power", value: "DC12V, 10W", color: "from-teal-400 to-green-500" },
    { icon: Ruler, label: "Dimensions", value: "234×144×50mm", color: "from-emerald-400 to-teal-600" },
]

export default function SpecificationsGrid() {
    return (
        <div className="w-full max-w-6xl mx-auto p-8">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                    Technical Specifications
                </h2>
                <p className="text-xl text-gray-300">Comprehensive hardware specifications for professional deployment</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {specifications.map((spec, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 100,
                        }}
                        whileHover={{
                            scale: 1.05,
                            y: -5,
                            transition: { duration: 0.2 },
                        }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center group cursor-pointer"
                    >
                        {/* Icon Circle */}
                        <div
                            className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${spec.color} p-0.5 mb-3 group-hover:shadow-2xl transition-all duration-300`}
                        >
                            <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                                <spec.icon className="w-8 h-8 text-white" />
                            </div>

                            {/* Animated ring */}
                            <motion.div
                                className={`absolute inset-0 rounded-full bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-30`}
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0, 0.3, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatDelay: 1,
                                }}
                            />
                        </div>

                        {/* Label */}
                        <h3 className="text-sm font-semibold text-white text-center mb-1 group-hover:text-emerald-400 transition-colors duration-300">
                            {spec.label}
                        </h3>

                        {/* Value */}
                        <p className="text-xs text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-300">
                            {spec.value}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-12 space-x-2">
                {[0, 1, 2].map((dot) => (
                    <motion.div
                        key={dot}
                        className={`w-3 h-3 rounded-full ${dot === 0 ? "bg-emerald-500" : "bg-gray-600"}`}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                    />
                ))}
            </div>
        </div>
    )
}
