import React from 'react';
import { ProfileInfo } from '../types';
import { Github, Mail, ArrowDownRight, CheckCircle2 } from 'lucide-react';

interface IntroSectionProps {
  profile: ProfileInfo;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ profile }) => {
  return (
    <section id="intro" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch pt-4 pb-12 border-b border-white/10">
      {/* Main Name & Headline Column */}
      <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.3em] font-mono text-white/60">
            <span>FULL-STACK & FRONTEND ENGINEER</span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] leading-[0.88] font-light tracking-tighter text-white italic font-serif selection:bg-white selection:text-black">
            Choong<br />Minchung
          </h1>

          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-lg pt-2">
            {profile.tagline}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-3 pt-4">
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono">
            Core Technical Stack & Tooling
          </h3>
          <div className="flex flex-wrap gap-2">
            {['TYPESCRIPT (STRICT)', 'NEXT.JS APP ROUTER', 'REACT 18', 'SUPABASE (POSTGRESQL)', 'AUTH.JS V5', 'ZOD', 'VITEST', 'TANSTACK QUERY V5'].map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 border border-white/10 bg-[#111] text-[10px] font-mono tracking-widest text-white/80 rounded-full hover:border-white/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action CTAs & Social Links */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-medium text-xs tracking-wider uppercase hover:bg-white/90 transition-all"
          >
            <span>Explore Projects</span>
            <ArrowDownRight size={14} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white text-xs tracking-wider uppercase hover:border-white hover:bg-white/5 transition-all"
          >
            <Mail size={14} />
            <span>Contact Me</span>
          </a>

          <div className="flex items-center gap-3 ml-auto text-white/50">
            <a 
              href={profile.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-3 py-1.5 border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-colors text-xs font-mono" 
              title="GitHub Profile"
            >
              <Github size={16} />
              <span>github.com/cminchung</span>
            </a>
          </div>
        </div>
      </div>

      {/* Profile Card & Stats Column */}
      <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
        <div className="border border-white/10 bg-[#111] p-6 space-y-6 relative overflow-hidden group">
          <div className="flex items-center gap-4 border-b border-white/10 pb-5">
            <div className="w-14 h-14 bg-black border border-white/20 flex items-center justify-center font-serif italic text-2xl text-white tracking-tighter shrink-0 select-none">
              CM
            </div>
            <div>
              <h2 className="text-lg font-light text-white">{profile.name}</h2>
              <p className="text-xs text-white/50 font-mono uppercase tracking-wider">{profile.title}</p>
              <div className="flex items-center gap-1.5 mt-1 text-[10px] text-emerald-400 font-mono">
                <CheckCircle2 size={12} />
                <span>Open for Engineering Roles</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-white/70 leading-relaxed font-light">
            {profile.bio}
          </p>

          <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
            <div>
              <div className="text-3xl font-serif italic text-white">3.43</div>
              <div className="text-[9px] uppercase tracking-widest text-white/40 font-mono">B.Eng CGPA / 4.00</div>
            </div>
            <div>
              <div className="text-3xl font-serif italic text-white">3 Shipped</div>
              <div className="text-[9px] uppercase tracking-widest text-white/40 font-mono">Apps</div>
            </div>
          </div>
        </div>

        {/* Editorial Quote Box */}
        <div className="border border-white/10 bg-[#0A0A0A] p-6 space-y-2">
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-mono">ENGINEERING PHILOSOPHY</span>
          <p className="text-sm font-serif italic text-white/80 leading-snug">
            "Combining strict static typing, mathematical efficiency, and reliable data workflows to build fast, robust web applications."
          </p>
        </div>
      </div>
    </section>
  );
};
