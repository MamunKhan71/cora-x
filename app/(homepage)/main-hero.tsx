import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
const MainHero = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                <video
                    className="w-full h-full object-cover opacity-40"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source
                        src="/ai-bg.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
                </div>
                {/* Enhanced overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90"></div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
            >
                <p className="text-white/60 mb-2 text-sm">Discover More</p>
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                    <ChevronDown className="w-6 h-6 text-emerald-400" />
                </motion.div>
            </motion.div>
            {/* Stunning overlay with blur, gradient, and opacity */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-br from-black/90 via-black/90 to-black/100 absolute inset-0 opacity-50" />
                <div className="w-full h-full absolute inset-0" />
                <div className="w-full h-full bg-black/40 absolute inset-0" />
            </div>
            <div className="absolute h-full w-full">
                <div className="w-full h-full absolute bottom-0 left-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            </div>
            {/* Hero content */}
        </div>
    )
}

export default MainHero