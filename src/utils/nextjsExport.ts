export const NEXTJS_PAGE_CODE = `'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Github, Linkedin, Twitter, Mail, ExternalLink, Code, Sparkles, 
  Terminal, ArrowUpRight, Check, Copy, Layers, MapPin, Globe 
} from 'lucide-react';

// Portfolio Next.js App Router Single-Page Deployment Target
// Ready for Vercel / Next.js 15 App Directory
export default function PortfolioPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("minchungchoong@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] font-sans selection:bg-white selection:text-black">
      {/* Top Editorial Nav Header */}
      <header className="border-b border-white/10 px-6 py-4 md:px-12 flex justify-between items-center sticky top-0 bg-[#0A0A0A]/90 backdrop-blur-md z-40">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-mono">Available for Roles</span>
          <span className="text-xs font-medium text-white/80">MALAYSIA / GLOBAL REMOTE</span>
        </div>
        <nav className="hidden md:flex items-center space-x-10 text-[10px] uppercase tracking-[0.3em] font-mono">
          <a href="#intro" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects (03)</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-24">
        {/* Intro Section */}
        <section id="intro" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-[100px] leading-[0.88] font-light tracking-tighter text-white italic font-serif">
              Choong<br />Minchung
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-xl pt-4">
              Full-Stack Web Developer & Engineer crafting resilient web apps with Next.js App Router, TypeScript, React 18, and Supabase.
            </p>
            <div className="flex flex-wrap gap-3 pt-6 font-mono">
              {['NEXT.JS APP ROUTER', 'TYPESCRIPT (STRICT)', 'SUPABASE (POSTGRESQL)', 'AUTH.JS V5', 'ZOD', 'VITEST'].map((tag) => (
                <span key={tag} className="px-3 py-1 border border-white/10 text-[10px] uppercase tracking-widest text-white/70 rounded-full bg-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 border border-white/10 p-8 bg-[#111] space-y-6">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/40 border-b border-white/10 pb-3 font-mono">Status & Focus</h3>
            <p className="text-sm text-white/80 leading-relaxed font-light">
              B.Eng (Honours) graduate specializing in Next.js App Router, Supabase PostgreSQL, Auth.js v5, and O(1) performance optimization.
            </p>
            <div className="pt-4 flex justify-between text-xs border-t border-white/10 text-white/60 font-mono">
              <span>CGPA: 3.43 / 4.00</span>
              <span>Projects: 3 Shipped</span>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <div className="flex justify-between items-end border-b border-white/10 pb-4">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-mono">Selected Projects</h2>
            <span className="text-[10px] text-white/30 font-mono">01 — 03</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Strategy Simulator', category: 'Full-Stack / Supabase', desc: 'Financial dashboard using Next.js App Router, Supabase, and Optimistic UI.' },
              { num: '02', title: 'Portfolio Tracker', category: 'Financial Tech / TanStack Query', desc: 'Asset allocation & P&L engine with 24-hour API caching layer.' },
              { num: '03', title: 'Habit Tracker', category: 'Productivity / Heatmap O(1)', desc: '90-day GitHub-style calendar heatmap rendered in O(1) complexity.' }
            ].map((p) => (
              <div key={p.num} className="p-8 border border-white/10 bg-[#111] hover:border-white/30 transition-all group flex flex-col justify-between h-64">
                <div className="text-4xl font-serif italic text-white/20 group-hover:text-white/60 transition-colors">{p.num}</div>
                <div>
                  <h4 className="text-2xl font-light text-white mb-2">{p.title}</h4>
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-2 font-mono">{p.category}</p>
                  <p className="text-xs text-white/70 line-clamp-2 font-light">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8 border-t border-white/10 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-mono block mb-2">INITIATE COLLABORATION</span>
              <h2 className="text-4xl md:text-5xl font-serif italic font-light text-white">Let's build something remarkable.</h2>
            </div>
            <span className="text-xs text-white/40 font-mono mt-4 md:mt-0">MALAYSIA / GLOBAL REMOTE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 border border-white/10 bg-[#111] space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono">
                  <Mail size={14} />
                  <span>Direct Email</span>
                </div>
                <div className="text-sm text-white font-mono bg-black/60 p-3 border border-white/10 truncate">
                  minchungchoong@gmail.com
                </div>
              </div>
              <button onClick={handleCopyEmail} className="w-full inline-flex items-center justify-center gap-2 py-3 bg-white text-black hover:bg-white/90 transition-colors text-xs font-mono uppercase tracking-wider font-semibold cursor-pointer">
                {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedEmail ? 'Email Copied' : 'Copy Email Address'}</span>
              </button>
            </div>

            <div className="p-8 border border-white/10 bg-[#111] space-y-4">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono">
                <Globe size={14} />
                <span>Code & Social</span>
              </div>
              <p className="text-xs text-white/70 font-light">GitHub: @cminchung</p>
              <p className="text-xs text-white/70 font-light">Phone: +6011 2803 8864</p>
            </div>

            <div className="p-8 border border-white/10 bg-[#111] space-y-4">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono">
                <MapPin size={14} />
                <span>Location</span>
              </div>
              <p className="text-sm text-white font-medium">Malaysia / Global Remote</p>
              <p className="text-xs text-white/60 font-light">Open for Full-Stack & Frontend Software Engineering roles.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 md:px-12 flex justify-between items-center text-xs text-white/40 font-mono">
        <span>© 2026 Choong Minchung. Next.js App Router Portfolio.</span>
        <span>DEPLOYED ON VERCEL</span>
      </footer>
    </div>
  );
}
`;

export const NEXTJS_PACKAGE_JSON = `{
  "name": "choong-minchung-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "lucide-react": "^0.468.0",
    "motion": "^12.0.0",
    "tailwindcss": "^4.0.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "^5.7.0"
  }
}`;

export const NEXTJS_TAILWIND_CONFIG = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};`;
