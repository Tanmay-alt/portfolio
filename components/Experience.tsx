"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/resumeData";

export default function Experience() {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="container relative z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-100 tracking-tight">
                        Experience.
                    </h2>
                    <div className="h-1 w-20 bg-primary-500 rounded-full" />
                </motion.div>

                <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-16">
                    {resumeData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Node */}
                            <div className="absolute -left-[5px] top-2 w-[11px] h-[11px] rounded-full bg-slate-950 border-2 border-primary-500 ring-4 ring-slate-950" />

                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4 gap-2">
                                <h3 className="text-xl md:text-2xl font-semibold text-slate-100">
                                    {exp.role} <span className="text-slate-500 font-normal">at</span> <span className="text-primary-400">{exp.company}</span>
                                </h3>
                                <span className="text-sm font-mono text-slate-500 shrink-0 uppercase tracking-wider">{exp.date}</span>
                            </div>

                            <ul className="space-y-3 max-w-3xl">
                                {exp.points.map((point, i) => (
                                    <li key={i} className="text-slate-400 leading-relaxed text-base md:text-lg pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-slate-700 before:rounded-full">
                                        {point}
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
