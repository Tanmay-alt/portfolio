"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/resumeData";
import { FolderGit2 } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-slate-900/50">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-display font-bold mb-12 text-center md:text-left text-primary-400"
                >
                    Selected Projects
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {resumeData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:transform hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,173,221,0.2)] transition-all duration-300 flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <FolderGit2 className="text-primary-500 w-10 h-10" />
                                <span className="text-xs font-mono text-primary-300 border border-primary-900/50 bg-primary-950/20 px-3 py-1 rounded-full">
                                    {project.tech}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-100 mb-4">{project.name}</h3>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {project.points.map((point, i) => (
                                    <li key={i} className="text-slate-400 text-sm leading-relaxed">
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
