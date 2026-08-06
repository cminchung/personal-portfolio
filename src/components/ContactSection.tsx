import React, { useState } from 'react';
import { Mail, Check, Copy, Github, MapPin, Globe } from 'lucide-react';

interface ContactSectionProps {
  email: string;
  githubUrl: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  email, githubUrl 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12 space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-mono block mb-2">
            INITIATE COLLABORATION
          </span>
          <h2 className="text-4xl md:text-6xl font-serif italic text-white font-light">
            Let's build something remarkable.
          </h2>
        </div>
        <span className="text-xs text-white/40 font-mono tracking-widest mt-4 md:mt-0">
          MALAYSIA / GLOBAL REMOTE
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email & Phone Card */}
        <div className="p-8 border border-white/10 bg-[#111] space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono">
              <Mail size={14} className="text-white/60" />
              <span>Direct Communication</span>
            </div>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              For full-stack engineering roles, project inquiries, or technical opportunities:
            </p>
            <div className="space-y-2">
              <div className="text-xs text-white font-mono bg-black/60 p-3 border border-white/10 truncate">
                {email}
              </div>
              <div className="text-xs text-white/80 font-mono bg-black/60 p-3 border border-white/10">
                +6011 2803 8864
              </div>
            </div>
          </div>

          <button
            onClick={handleCopyEmail}
            className="w-full inline-flex items-center justify-center gap-2 py-3 bg-white text-black hover:bg-white/90 transition-colors text-xs font-mono uppercase tracking-wider font-semibold cursor-pointer"
          >
            {copied ? <Check size={14} className="text-emerald-700" /> : <Copy size={14} />}
            <span>{copied ? 'Email Copied' : 'Copy Email Address'}</span>
          </button>
        </div>

        {/* Social Presence Card */}
        <div className="p-8 border border-white/10 bg-[#111] space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono">
              <Globe size={14} className="text-white/60" />
              <span>Code & Profile Archives</span>
            </div>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              Explore open-source repositories and live project deployments:
            </p>
            <div className="space-y-2">
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 border border-white/10 bg-black/40 hover:border-white/30 transition-colors group"
              >
                <span className="text-xs font-mono text-white/80 group-hover:text-white flex items-center gap-2">
                  <Github size={14} />
                  <span>GitHub</span>
                </span>
                <span className="text-[10px] font-mono text-white/40">@cminchung</span>
              </a>

              <a 
                href="https://strategy-simulator-next.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 border border-white/10 bg-black/40 hover:border-white/30 transition-colors group"
              >
                <span className="text-xs font-mono text-white/80 group-hover:text-white flex items-center gap-2">
                  <Globe size={14} />
                  <span>Strategy Simulator</span>
                </span>
                <span className="text-[10px] font-mono text-white/40">Live Demo</span>
              </a>

              <a 
                href="https://portfolio-tracker-next-one.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 border border-white/10 bg-black/40 hover:border-white/30 transition-colors group"
              >
                <span className="text-xs font-mono text-white/80 group-hover:text-white flex items-center gap-2">
                  <Globe size={14} />
                  <span>Portfolio Tracker</span>
                </span>
                <span className="text-[10px] font-mono text-white/40">Live Demo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Location & Availability Card */}
        <div className="p-8 border border-white/10 bg-[#111] space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono">
              <MapPin size={14} className="text-white/60" />
              <span>Location & Availability</span>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-white font-medium">Malaysia / Global Remote</div>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                Available for worldwide full-time remote roles and full-stack software development projects.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open for Engineering Opportunities</span>
              </div>
            </div>
          </div>

          <div className="pt-4 text-[10px] font-mono text-white/30 border-t border-white/5">
            RESPONSE TIME: WITHIN 24 HOURS
          </div>
        </div>
      </div>
    </section>
  );
};

