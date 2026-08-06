import React from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0A0A] border border-white/20 overflow-y-auto shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center z-10">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-serif italic text-white/40">{project.number}</span>
            <span className="text-xs font-mono uppercase tracking-widest text-white/70">{project.category}</span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 border border-white/10 hover:border-white hover:bg-white/10 text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-10 space-y-8">
          {/* Header Title */}
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-serif italic text-white font-light">
              {project.title}
            </h2>
            <p className="text-sm md:text-base text-white/60 font-light">
              {project.subtitle}
            </p>
          </div>

          {/* Hero Banner */}
          <div className="relative h-64 md:h-80 border border-white/10 overflow-hidden bg-black">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Full Description */}
          <div className="space-y-4">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono">
              ARCHITECTURE OVERVIEW
            </h3>
            <p className="text-sm text-white/80 leading-relaxed font-light">
              {project.fullDescription}
            </p>
          </div>

          {/* Highlights List */}
          <div className="space-y-4">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono">
              TECHNICAL HIGHLIGHTS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="p-3 border border-white/10 bg-[#111] flex items-start gap-2.5 text-xs text-white/80 font-light">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="space-y-4">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono">
              PERFORMANCE BENCHMARKS
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="p-4 border border-white/10 bg-[#111] text-center space-y-1">
                  <div className="text-2xl md:text-3xl font-serif italic text-white">{metric.value}</div>
                  <div className="text-[9px] uppercase tracking-widest text-white/40 font-mono">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Tags */}
          <div className="space-y-3">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono">
              TECHNOLOGY STACK
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 border border-white/10 bg-white/5 text-xs text-white/80 font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="sticky bottom-0 bg-[#0A0A0A] border-t border-white/10 p-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white text-black text-xs font-mono uppercase tracking-wider font-semibold hover:bg-white/90 transition-colors inline-flex items-center gap-2"
            >
              <span>Live Application</span>
              <ExternalLink size={14} />
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-white/20 text-white text-xs font-mono uppercase tracking-wider hover:border-white hover:bg-white/5 transition-colors inline-flex items-center gap-2"
            >
              <Github size={14} />
              <span>GitHub Repo</span>
            </a>
          </div>

          <button 
            onClick={onClose}
            className="text-xs text-white/50 hover:text-white font-mono uppercase tracking-widest"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
