"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, ChevronDown, Zap, Shield, Cpu, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroStats = [
    { value: "40+", label: "AI Algorithms", icon: Cpu },
    { value: "8CH", label: "Video Streams", icon: Eye },
    { value: "24/7", label: "Reliability", icon: Shield },
    { value: "10W", label: "Power Efficient", icon: Zap },
]

export default function HeroSectionTwo() {
    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(true)
    const [currentStat, setCurrentStat] = useState(0)
    const videoRef = useRef<HTMLVideoElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    // Auto-cycle through stats
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStat((prev) => (prev + 1) % heroStats.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    return (
        <motion.section ref={containerRef} style={{ y, opacity }} className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted={isMuted} loop playsInline>
                    <source
                        src="ai-bg.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                {/* Video overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 via-transparent to-green-900/30"></div>
            </div>

            {/* Animated grid overlay */}
            <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center px-6">
                {/* Main heading */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-center mb-12"
                >
                    <motion.h1
                        className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400 bg-clip-text text-transparent"
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    >
                        CoraX
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-xl md:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed"
                    >
                        Revolutionary edge computing with 40+ AI algorithms for intelligent surveillance and automation
                    </motion.p>
                </motion.div>

                {/* Stats carousel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mb-12"
                >
                    <div className="bg-black/40 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-8 min-w-[300px]">
                        <motion.div
                            key={currentStat}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 p-0.5">
                                    <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                                        {(() => {
                                            const Icon = heroStats[currentStat].icon;
                                            return <Icon className="w-8 h-8 text-white" />;
                                        })()}
                                    </div>
                                </div>
                            </div>
                            <div className="text-4xl md:text-6xl font-bold text-emerald-400 mb-2">{heroStats[currentStat].value}</div>
                            <div className="text-lg text-white/80">{heroStats[currentStat].label}</div>
                        </motion.div>

                        {/* Progress indicators */}
                        <div className="flex justify-center mt-6 space-x-2">
                            {heroStats.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-1 rounded-full transition-all duration-300 ${index === currentStat ? "w-8 bg-emerald-500" : "w-2 bg-white/30"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="flex flex-col sm:flex-row gap-4 mb-16"
                >
                    <Button
                        size="lg"
                        className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold text-lg rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
                    >
                        Explore Features
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="px-8 py-4 border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-semibold text-lg rounded-full backdrop-blur-sm transition-all duration-300"
                    >
                        Watch Demo
                    </Button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                >
                    <p className="text-white/60 mb-2 text-sm">Discover More</p>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                        <ChevronDown className="w-6 h-6 text-emerald-400" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Video controls */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-20">
                <motion.button
                    onClick={togglePlay}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-all duration-300"
                >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </motion.button>
                <motion.button
                    onClick={toggleMute}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-all duration-300"
                >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </motion.button>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                            y: [null, -100, null],
                            opacity: [0.3, 1, 0.3],
                            scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>
        </motion.section>
    )
}
