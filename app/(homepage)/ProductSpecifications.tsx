"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import SpecificationsGrid from "./specification-grid"
import KeyFeatures from "./key-features"

export default function ProductSpecifications() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -200])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

    const boxRotateY = useTransform(scrollYProgress, [0, 1], [0, 360])
    const boxY = useTransform(scrollYProgress, [0, 1], [0, -100])

    return (
        <div ref={containerRef} className="text-white overflow-hidden w-full h-full">

            {/* Hero Section */}
            <motion.section
                style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
                className="min-h-screen flex items-center justify-center relative"
            >
                <div className="absolute inset-0 black"></div>
                <div className="relative z-10 text-center px-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 via-green-500 to-green-500 bg-clip-text text-transparent"
                    >
                        CoraX
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto"
                    >
                        The future of edge computing is here. Discover the power of industrial AI.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="relative"
                    >
                        {/* <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-green-600/30 rounded-3xl blur-2xl"></div> */}
                        <Image
                            src="/AcoteAiBox.png"
                            alt="AcoteAI Box Hero"
                            width={800}
                            height={600}
                            className="relative z-10 w-full max-w-4xl h-auto mx-auto"
                        />
                    </motion.div>
                </div>
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                            }}
                            animate={{
                                y: [null, -100, null],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

            </motion.section>

            <div className="min-h-screen flex items-center justify-center relative">
                <KeyFeatures />
            </div>
        </div>
    )
}
