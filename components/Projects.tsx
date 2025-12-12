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

                            {/* Project Links */}
                            {project.github && (
                                <div className="mt-auto pt-6 border-t border-slate-800">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors font-medium group/link"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                                        View Code
                                        <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
