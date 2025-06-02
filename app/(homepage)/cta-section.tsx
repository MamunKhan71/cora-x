import React from 'react'
import { motion } from 'framer-motion'

const CtaSection = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-green-900/30 to-transparent"></div>
            <div
               
                className="text-center px-8 relative z-10"
            >
                <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                    Ready to Transform?
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                    Experience the power of edge computing with AcoteAI Box. Built for the future, designed for today.
                </p>
                <button
                    className="px-12 py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-xl font-semibold hover:shadow-2xl transition-all duration-300"
                >
                    Get Started Today
                </button>
            </div>
        </section>
    )
}

export default CtaSection;