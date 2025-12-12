import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-space-950 text-slate-200 selection:bg-primary-500/30">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900/50 bg-space-950">
        <p>© {new Date().getFullYear()} Tanmay Joshi. All rights reserved.</p>
      </footer>
      <ChatWidget />
    </main>
  );
}
