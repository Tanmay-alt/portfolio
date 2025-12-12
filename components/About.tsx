"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/resumeData";

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container px-4 text-center z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-100 tracking-tight">
                        About Me.
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
                        {resumeData.summary}
                    </p>
                </motion.div>

                {/* Skills Section */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    {Object.entries(resumeData.skills).map(([category, skills], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-8 rounded-3xl"
                        >
                            <h3 className="text-xl font-semibold text-slate-200 mb-6 capitalize flex items-center gap-3">
                                {category.replace(/([A-Z])/g, ' $1').trim()}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 bg-slate-800/50 text-slate-300 text-sm rounded-lg border border-slate-700/50 hover:border-primary-500/30 hover:bg-slate-800/80 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
