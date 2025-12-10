"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Stars } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Message {
    role: "user" | "bot";
    content: string;
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "bot", content: "Hello! I'm Tanmay's AI assistant. Ask me anything about his experience or projects." }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        // CLIENT-SIDE MOCK LOGIC (For Static Deployment)
        // Since this is a static export, we cannot use server-side API routes.
        // We simulate the AI response here.

        setTimeout(() => {
            const lowerMsg = userMessage.toLowerCase();
            let mockReply = "I don't have that information in my database.";

            if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
                mockReply = "Hello! I am Tanmay's virtual assistant. Ask me about his projects, skills, or experience!";
            } else if (lowerMsg.includes("experience") || lowerMsg.includes("work") || lowerMsg.includes("job")) {
                mockReply = "Tanmay has experience at **GTRI** (Performance Optimization), **Georgia Tech Alumni Association** (Data Analyst), and **NSF** (Frontend Engineer). He is currently working on 3D-printed medical implants QA.";
            } else if (lowerMsg.includes("skills") || lowerMsg.includes("stack") || lowerMsg.includes("tech")) {
                mockReply = "Tanmay is proficient in **Java**, **Python**, **JavaScript**, **React**, **SQL**, and **AWS**. He also has expertise in Cybersecurity and AI/ML concepts like PyTorch and Computer Vision.";
            } else if (lowerMsg.includes("project")) {
                mockReply = "Tanmay has built a **Threat Response Platform** using Python/PostgreSQL, a **Facial Recognition System** for attendance, and a **Predictive Model** for student test scores.";
            } else if (lowerMsg.includes("contact") || lowerMsg.includes("email") || lowerMsg.includes("reach")) {
                mockReply = "You can reach Tanmay at [joshi.y.tanmay@gmail.com](mailto:joshi.y.tanmay@gmail.com) or visit his [LinkedIn](https://linkedin.com/in/tanmayjoshi1).";
            } else if (lowerMsg.includes("education") || lowerMsg.includes("school") || lowerMsg.includes("gpa")) {
                mockReply = "Tanmay is pursuing a B.S. in Computer Science at **Georgia Tech**, specializing in Cybersecurity & AI. He has a GPA of **3.4/4.0**.";
            }

            setMessages((prev) => [...prev, { role: "bot", content: mockReply }]);
            setIsLoading(false);
        }, 1000);
    };


    return (
        <div className="fixed bottom-8 right-8 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="absolute bottom-20 right-0 w-[90vw] md:w-[400px] h-[500px] bg-slate-900/90 backdrop-blur-xl border border-primary-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-slate-950/50 p-4 border-b border-primary-500/20 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Stars className="w-5 h-5 text-primary-400" />
                                <h3 className="font-display font-bold text-slate-100">AI Assistant</h3>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-primary-600" : "bg-slate-700"
                                        }`}>
                                        {msg.role === "user" ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-primary-300" />}
                                    </div>
                                    <div className={`p-3 rounded-2xl max-w-[80%] text-sm ${msg.role === "user"
                                        ? "bg-primary-600/20 border border-primary-500/30 text-slate-100 rounded-tr-none"
                                        : "bg-slate-800/50 border border-slate-700 text-slate-300 rounded-tl-none"
                                        }`}>
                                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                                        <Bot className="w-4 h-4 text-primary-300 animate-pulse" />
                                    </div>
                                    <div className="bg-slate-800/50 border border-slate-700 p-3 rounded-2xl rounded-tl-none">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                            <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                            <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-4 bg-slate-950/50 border-t border-primary-500/20">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about Tanmay's experience..."
                                    className="w-full bg-slate-900 border border-slate-700 hover:border-primary-500/50 focus:border-primary-500 rounded-xl py-3 pl-4 pr-12 text-slate-100 placeholder-slate-500 focus:outline-none transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-primary-600 hover:bg-primary-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,173,221,0.5)] transition-all z-50 text-white"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </motion.button>
        </div>
    );
}
