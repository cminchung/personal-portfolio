import React from 'react';

interface HeaderProps {
  onOpenNextJsModal?: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 px-6 py-4 md:px-12 flex justify-between items-center transition-all duration-300">
      {/* Left: Location & Status */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[10px] uppercase tracking-[0.35em] text-white/50 font-mono">
            AVAILABLE FOR FREELANCE / FULL-TIME
          </span>
        </div>
        <span className="text-xs font-semibold tracking-wider text-white/90">
          MALAYSIA / GLOBAL REMOTE
        </span>
      </div>

      {/* Center Nav Links */}
      <nav className="hidden md:flex items-center space-x-6 lg:space-x-10 text-[10px] uppercase tracking-[0.3em] font-medium font-mono">
        <a 
          href="#intro" 
          className={`transition-colors py-1 border-b ${activeSection === 'intro' ? 'text-white border-white' : 'text-white/50 border-transparent hover:text-white'}`}
        >
          About
        </a>
        <a 
          href="#projects" 
          className={`transition-colors py-1 border-b ${activeSection === 'projects' ? 'text-white border-white' : 'text-white/50 border-transparent hover:text-white'}`}
        >
          Projects (03)
        </a>
        <a 
          href="#experience" 
          className={`transition-colors py-1 border-b ${activeSection === 'experience' ? 'text-white border-white' : 'text-white/50 border-transparent hover:text-white'}`}
        >
          Experience & Edu
        </a>
        <a 
          href="#contact" 
          className={`transition-colors py-1 border-b ${activeSection === 'contact' ? 'text-white border-white' : 'text-white/50 border-transparent hover:text-white'}`}
        >
          Contact
        </a>
      </nav>

      {/* Right Action: Status Badge */}
      <div className="flex items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-emerald-400 flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>OPEN TO ROLES</span>
        </span>
      </div>
    </header>
  );
};
