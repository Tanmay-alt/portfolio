import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Tanmay Joshi | Software Engineer",
  description: "Software Engineer Portfolio - Cybersecurity, AI & Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-slate-950 text-slate-200 antialiased selection:bg-emerald-500/30`}>
        {children}
      </body>
    </html>
  );
}
