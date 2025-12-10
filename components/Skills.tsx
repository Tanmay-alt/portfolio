"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/resumeData";

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-slate-900/50 relative">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-display font-bold mb-12 text-center md:text-left text-primary-400"
                >
                    Technical Arsenal
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(resumeData.skills).map(([category, skills], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-950 border border-slate-800 p-6 rounded-2xl hover:border-primary-500/50 transition-colors group"
                        >
                            <h3 className="text-xl font-bold mb-4 capitalize text-slate-200 group-hover:text-primary-300 transition-colors">
                                {category.replace(/([A-Z])/g, " $1").trim()}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-400 group-hover:bg-primary-950/30 group-hover:border-primary-900/50 transition-colors"
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
