"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/resumeData";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-slate-950 text-center px-4">
            {/* Minimalist Spotlight Background */}
            <div className="absolute inset-0 w-full h-full z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary-500/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02]" /> {/* Optional subtle texture */}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-4xl"
            >
                {/* Status Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-full backdrop-blur-md"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                    </span>
                    <span className="text-slate-300 text-xs font-medium tracking-wide">Available for Work</span>
                </motion.div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight text-slate-100">
                    {resumeData.personalInfo.name}
                </h1>

                {/* Subheading / Role */}
                <h2 className="text-2xl md:text-3xl text-slate-400 font-normal mb-10 max-w-2xl mx-auto leading-relaxed">
                    Software Engineer specializing in <span className="text-primary-400 font-medium">Cybersecurity</span> & <span className="text-secondary-400 font-medium">AI</span> at Georgia Tech.
                </h2>

                {/* Action Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <a
                        href="#projects"
                        className="px-8 py-3.5 bg-slate-100 text-slate-900 hover:bg-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20 hover:-translate-y-0.5 text-sm"
                    >
                        View Work
                    </a>

                    <a
                        href="https://tanmay-alt.github.io/portfolio/tanmay_resume.pdf"
                        download="Tanmay_Resume_Portfolio.pdf"
                        className="px-8 py-3.5 glass-panel text-slate-300 hover:text-white rounded-full font-medium transition-all duration-300 hover:bg-slate-800/60 hover:-translate-y-0.5 text-sm flex items-center justify-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        Download Resume
                    </a>

                    <a
                        href={`mailto:${resumeData.personalInfo.email}`}
                        className="px-8 py-3.5 glass-panel text-slate-300 hover:text-white rounded-full font-medium transition-all duration-300 hover:bg-slate-800/60 hover:-translate-y-0.5 text-sm flex items-center justify-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
