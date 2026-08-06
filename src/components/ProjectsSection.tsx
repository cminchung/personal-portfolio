import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github, ArrowUpRight, Eye, Sparkles } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, onSelectProject }) => {
  return (
    <section id="projects" className="py-12 space-y-8 border-b border-white/10">
      {/* Section Header */}
      <div className="flex justify-between items-end border-b border-white/10 pb-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-mono block mb-2">
            PORTFOLIO HIGHLIGHTS
          </span>
          <h2 className="text-4xl md:text-5xl font-serif italic text-white font-light">
            Selected Projects
          </h2>
        </div>
        <span className="text-xs text-white/40 font-mono tracking-widest">
          01 — 03 FEATURED
        </span>
      </div>

      {/* 3 Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="group relative flex flex-col justify-between border border-white/10 bg-[#111] hover:border-white/40 transition-all duration-300 overflow-hidden"
          >
            {/* Top Large Editorial Number */}
            <div className="p-6 border-b border-white/5 flex justify-between items-start bg-[#141414]">
              <span className="text-5xl md:text-6xl font-serif italic text-white/20 group-hover:text-white/80 transition-colors duration-300">
                {project.number}
              </span>
            </div>

            {/* Project Image Preview */}
            <div className="relative h-48 overflow-hidden bg-black/40 border-b border-white/5">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80" />
              
              {/* Floating Quick Action */}
              <button 
                onClick={() => onSelectProject(project)}
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-black text-[10px] uppercase font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer shadow-lg"
              >
                <Eye size={12} />
                <span>Inspect Project</span>
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] text-white/50 font-mono uppercase tracking-wider block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-light text-white group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-light line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5 text-center">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="p-1.5 bg-white/5 border border-white/5">
                    <div className="text-xs font-mono font-medium text-white">{metric.value}</div>
                    <div className="text-[8px] uppercase tracking-tighter text-white/40 font-mono">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3">
                {project.tags.slice(0, 4).map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[9px] font-mono text-white/50 px-2 py-0.5 border border-white/5 bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="text-[9px] font-mono text-white/30 px-1 py-0.5">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>

              {/* Card Footer Links */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs text-white/80 hover:text-white font-mono flex items-center gap-1 group/btn cursor-pointer"
                >
                  <span className="underline underline-offset-4 decoration-white/30">Case Study</span>
                  <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-3 text-white/40">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors"
                    title="View Source on GitHub"
                  >
                    <Github size={16} />
                  </a>
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
