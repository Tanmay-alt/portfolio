"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/resumeData";

export default function About() {
    return (
        <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
            <div className="container relative z-10 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-primary-400">
                        Professional Profile
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                        {resumeData.summary}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
