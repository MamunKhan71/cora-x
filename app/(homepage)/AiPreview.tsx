"use client"

import { BorderBeam } from "@/components/magicui/border-beam"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { BarChart2, Brain } from "lucide-react"

const aiFeatures = [
    { icon: Brain, title: "Intelligent Analysis", description: "Leverages 40+ AI algorithms to process data in real-time." },
    { icon: BarChart2, title: "Actionable Insights", description: "Transforms raw data into clear, decision-ready reports." },
]

const AiPreview = () => {
    return (
        <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 bg-black text-white z-10 py-16">
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(5,150,105,0.1),transparent_30%)]"></div>
            <Card className="relative w-full h-full overflow-hidden bg-transparent border border-gray-900">
                <CardContent>
                    <video
                        src="/ai-bg.mp4"
                        autoPlay
                        loop
                        muted
                        className="h-full min-h-[400px] rounded-xl object-cover"
                    />
                </CardContent>
                <BorderBeam duration={8} size={100} />
            </Card>
            <div className="flex flex-col justify-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
                >
                    About CoraX AI
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-300 text-lg mb-8 max-w-lg"
                >
                    Experience the future of AI with our cutting-edge technology. Watch how Acote AI transforms data into actionable insights, enhancing decision-making and driving innovation.
                </motion.p>
                {/* Feature List */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="space-y-6 mb-10"
                >
                    {aiFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                            className="flex items-start gap-4"
                        >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 p-0.5">
                                <div className="w-full h-full rounded-full bg-black/50 flex items-center justify-center">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <Button
                        size="lg"
                        className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold text-lg rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
                    >
                        Learn More
                    </Button>
                </motion.div>
            </div>
        </div>
    )
}

export default AiPreview;