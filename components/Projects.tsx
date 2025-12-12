"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/resumeData";
import { FolderGit2, ArrowUpRight } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-slate-900/20">
            <div className="container px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-100 tracking-tight">
                        Selected Work.
                    </h2>
                    <div className="h-1 w-20 bg-primary-500 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resumeData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative glass-card p-8 rounded-3xl flex flex-col ${index === 0 ? "md:col-span-2" : ""}`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 group-hover:bg-primary-900/20 group-hover:border-primary-500/30 transition-colors">
                                    <FolderGit2 className="w-6 h-6 text-slate-300 group-hover:text-primary-400 transition-colors" />
                                </div>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-500 hover:text-white transition-colors"
                                    >
                                        <ArrowUpRight className="w-6 h-6" />
                                    </a>
                                )}
                            </div>

                            <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-primary-300 transition-colors">
                                {project.name}
                            </h3>

                            <div className="mb-6">
                                <span className="text-xs font-semibold tracking-wide text-primary-400 bg-primary-950/40 px-3 py-1 rounded-full border border-primary-900/50">
                                    {project.tech}
                                </span>
                            </div>

                            <ul className="space-y-3 mb-6 flex-grow">
                                {project.points.map((point, i) => (
                                    <li key={i} className="text-slate-400 text-sm leading-relaxed line-clamp-3">
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
