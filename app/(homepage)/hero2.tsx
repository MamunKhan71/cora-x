"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, ArrowRight, Sparkles, Zap, Shield, Cpu, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroStats = [
    { value: "40+", label: "AI Algorithms", icon: Cpu, color: "from-emerald-400 to-green-500" },
    { value: "8CH", label: "Video Streams", icon: Eye, color: "from-green-400 to-emerald-500" },
    { value: "24/7", label: "Reliability", icon: Shield, color: "from-teal-400 to-emerald-500" },
    { value: "10W", label: "Power Efficient", icon: Zap, color: "from-emerald-500 to-teal-500" },
]

const floatingElements = [
    { text: "AI-Powered", delay: 0, x: "10%", y: "20%" },
    { text: "Edge Computing", delay: 1, x: "80%", y: "30%" },
    { text: "Real-time", delay: 2, x: "15%", y: "70%" },
    { text: "Industrial Grade", delay: 3, x: "75%", y: "80%" },
]

export default function StunningVideoHero() {
    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(true)
    const [currentStat, setCurrentStat] = useState(0)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const videoRef = useRef<HTMLVideoElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

    // Mouse tracking for parallax effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    // Auto-cycle through stats
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStat((prev) => (prev + 1) % heroStats.length)
        }, 4000)
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
        <motion.section
            ref={containerRef}
            style={{ y, opacity }}
            className="relative h-screen w-full overflow-hidden bg-black"
        >
            {/* Video Background with enhanced overlay */}
            <motion.div style={{ scale }} className="absolute inset-0 w-full h-full">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover opacity-40"
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                >
                    <source
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                {/* Enhanced overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-transparent to-green-900/20"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
            </motion.div>

            {/* Animated geometric patterns */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Rotating rings */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-[800px] h-[800px] border border-emerald-500/10 rounded-full"
                    style={{
                        x: mousePosition.x * 0.5,
                        y: mousePosition.y * 0.5,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-green-500/10 rounded-full"
                    style={{
                        x: mousePosition.x * -0.3,
                        y: mousePosition.y * -0.3,
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                {/* Floating geometric shapes */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-emerald-500/20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            x: mousePosition.x * (0.1 + i * 0.05),
                            y: mousePosition.y * (0.1 + i * 0.05),
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.5,
                        }}
                    />
                ))}
            </div>

            {/* Main content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center px-6">
                {/* Floating text elements */}
                {floatingElements.map((element, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.6, scale: 1 }}
                        transition={{ duration: 1, delay: element.delay }}
                        className="absolute text-emerald-400/60 text-sm font-medium"
                        style={{
                            left: element.x,
                            top: element.y,
                            x: mousePosition.x * (0.2 + index * 0.1),
                            y: mousePosition.y * (0.2 + index * 0.1),
                        }}
                    >
                        {element.text}
                    </motion.div>
                ))}

                {/* Main heading with enhanced animations */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="text-center mb-16 relative"
                >
                    {/* Sparkle effects */}
                    <motion.div
                        className="absolute -top-8 -right-8"
                        animate={{
                            rotate: [0, 180, 360],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    >
                        <Sparkles className="w-8 h-8 text-emerald-400" />
                    </motion.div>

                    <motion.h1
                        className="text-6xl md:text-9xl font-black mb-8 relative"
                        style={{
                            x: mousePosition.x * 0.1,
                            y: mousePosition.y * 0.1,
                        }}
                    >
                        <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400 bg-clip-text text-transparent">
                            AcoteAI
                        </span>
                        <br />
                        <span className="text-white/90 text-5xl md:text-7xl">Box</span>

                        {/* Animated underline */}
                        <motion.div
                            className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-emerald-500 to-green-500"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2, delay: 1.5 }}
                        />
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-xl md:text-3xl text-white/80 max-w-5xl mx-auto leading-relaxed font-light"
                        style={{
                            x: mousePosition.x * -0.05,
                            y: mousePosition.y * -0.05,
                        }}
                    >
                        Revolutionary edge computing with <span className="text-emerald-400 font-semibold">40+ AI algorithms</span>{" "}
                        for intelligent surveillance and automation
                    </motion.p>
                </motion.div>

                {/* Enhanced stats display */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="mb-16 relative"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {heroStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.5 + index * 0.2 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="relative group"
                            >
                                <div className="bg-black/60 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-6 text-center group-hover:border-emerald-500/40 transition-all duration-300">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} p-0.5 mx-auto mb-4`}>
                                        <div className="w-full h-full rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                                            <stat.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Value */}
                                    <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>

                                    {/* Label */}
                                    <div className="text-white/70 font-medium">{stat.label}</div>

                                    {/* Hover glow effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/10 group-hover:to-green-500/10 transition-all duration-300" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Enhanced CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="flex flex-col sm:flex-row gap-6 mb-20"
                >
                    <Button
                        size="lg"
                        className="group px-10 py-6 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 relative overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Explore Features
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                        className="px-10 py-6 border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black font-bold text-xl rounded-full backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/25"
                    >
                        Watch Demo
                    </Button>
                </motion.div>

                {/* Scroll indicator with enhanced animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                    className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                >
                    <p className="text-white/40 mb-4 text-sm font-medium">Discover More</p>
                    <motion.div
                        className="w-6 h-10 border-2 border-emerald-500/50 rounded-full flex justify-center"
                        animate={{ borderColor: ["rgba(16,185,129,0.5)", "rgba(16,185,129,1)", "rgba(16,185,129,0.5)"] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                        <motion.div
                            className="w-1 h-3 bg-emerald-500 rounded-full mt-2"
                            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Enhanced video controls */}
            <div className="absolute bottom-8 right-8 flex gap-3 z-20">
                <motion.button
                    onClick={togglePlay}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-xl border border-emerald-500/30 hover:border-emerald-500/60 flex items-center justify-center text-emerald-400 hover:text-emerald-300 transition-all duration-300"
                >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
                </motion.button>
                <motion.button
                    onClick={toggleMute}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-xl border border-emerald-500/30 hover:border-emerald-500/60 flex items-center justify-center text-emerald-400 hover:text-emerald-300 transition-all duration-300"
                >
                    {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                </motion.button>
            </div>

            {/* Enhanced floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(25)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-emerald-400/40 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                            y: [null, -200, null],
                            opacity: [0.2, 1, 0.2],
                            scale: [0.5, 1.5, 0.5],
                        }}
                        transition={{
                            duration: Math.random() * 6 + 4,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: Math.random() * 3,
                        }}
                    />
                ))}
            </div>
        </motion.section>
    )
}
