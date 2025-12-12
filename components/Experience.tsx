"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/resumeData";

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="container relative z-10">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-display font-bold mb-12 text-center md:text-left text-primary-400"
                >
                    Career Trajectory
                </motion.h2>

                <div className="flex flex-col gap-12 max-w-4xl mx-auto">
                    {resumeData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative bg-slate-900/40 border border-slate-700/50 p-8 rounded-2xl md:ml-12 hover:border-primary-500/50 hover:bg-slate-900/60 transition-all duration-300 group"
                        >
                            {/* Timeline Connector */}
                            <div className="hidden md:block absolute -left-[49px] top-10 w-4 h-4 bg-slate-950 border-2 border-primary-500 rounded-full z-10 shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
                            <div className="hidden md:block absolute -left-[42px] top-14 bottom-[-48px] w-[2px] bg-slate-800 group-last:hidden" />

                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-primary-300 transition-colors">{exp.role}</h3>
                                    <div className="text-lg text-primary-400 font-medium mt-1">{exp.company}</div>
                                </div>
                                <div className="inline-flex items-center px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700 text-xs font-mono text-slate-300">
                                    {exp.date}
                                </div>
                            </div>

                            <ul className="space-y-4">
                                {exp.points.map((point, i) => (
                                    <li key={i} className="text-slate-400 leading-relaxed flex gap-3 text-base">
                                        <span className="text-primary-500 mt-1.5 shrink-0 text-xs">◆</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
