"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/resumeData";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-space-950 text-center px-4">
            {/* Dynamic Background Glows */}
            <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/20 rounded-full blur-[120px] pointer-events-none" 
            />
            <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] bg-secondary-500/10 rounded-full blur-[100px] pointer-events-none" 
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
            >
                <div className="mb-2 inline-block px-3 py-1 bg-primary-950/50 border border-primary-500/30 rounded-full backdrop-blur-md">
                    <span className="text-primary-300 text-sm font-medium tracking-wider uppercase">Welcome to my portfolio</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 bg-gradient-to-r from-primary-200 via-primary-400 to-secondary-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(20,184,166,0.3)]">
                    {resumeData.personalInfo.name}
                </h1>
                
                <h2 className="text-2xl md:text-4xl text-slate-300 font-light mb-8 max-w-3xl mx-auto tracking-wide">
                    CS <span className="text-primary-400 font-semibold">@</span> Georgia Tech
                </h2>

                <motion.div 
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:shadow-[0_0_30px_rgba(20,184,166,0.6)] hover:-translate-y-1 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Projects
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                    <a
                        href={`mailto:${resumeData.personalInfo.email}`}
                        className="px-8 py-4 border border-slate-700 hover:border-primary-400 text-slate-300 hover:text-white rounded-full transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm bg-slate-950/30"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
