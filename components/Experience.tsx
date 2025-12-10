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

                <div className="space-y-12">
                    {resumeData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-slate-800 hover:border-primary-500 transition-colors pb-8 last:pb-0"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-950 border-2 border-slate-600 rounded-full group-hover:border-primary-500 transition-colors" />

                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                                <h3 className="text-2xl font-bold text-slate-100">{exp.role}</h3>
                                <span className="text-primary-400 font-mono text-sm">{exp.date}</span>
                            </div>

                            <div className="text-xl text-primary-200 mb-4">{exp.company}</div>

                            <ul className="space-y-3">
                                {exp.points.map((point, i) => (
                                    <li key={i} className="text-slate-400 leading-relaxed flex gap-2">
                                        <span className="text-primary-500 mt-1.5">▹</span>
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
