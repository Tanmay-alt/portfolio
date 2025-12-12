"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/resumeData";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-space-950 text-center px-4">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 w-full h-full z-0 bg-space-950">
                {/* Cyber Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

                {/* Moving Scanline */}
                <motion.div
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[2px] bg-primary-500/20 shadow-[0_0_10px_rgba(20,184,166,0.5)] z-0"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/80 to-space-950/30" />
            </div>

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
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:shadow-[0_0_30px_rgba(20,184,166,0.6)] hover:-translate-y-1 overflow-hidden min-w-[180px]"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                View Projects
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>

                        <a
                            href="https://tanmay-alt.github.io/portfolio/tanmay_resume.pdf"
                            download="Tanmay_Resume_Portfolio.pdf"
                            className="group px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:-translate-y-1 text-sm flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            Download Resume
                        </a>

                        <a
                            href={`mailto:${resumeData.personalInfo.email}`}
                            className="px-8 py-4 border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white rounded-full transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm bg-slate-950/30 text-sm font-medium"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
