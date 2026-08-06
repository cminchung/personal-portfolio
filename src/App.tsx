import React, { useState, useEffect } from 'react';
import { PROFILE_DATA, PROJECTS_DATA } from './data/portfolioData';
import { Project } from './types';
import { Header } from './components/Header';
import { IntroSection } from './components/IntroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceEducationSection } from './components/ExperienceEducationSection';
import { ContactSection } from './components/ContactSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { NextJsExportModal } from './components/NextJsExportModal';
import { ArrowUp, Code } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isNextJsModalOpen, setIsNextJsModalOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('intro');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Active section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }

      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] font-sans selection:bg-white selection:text-black antialiased border-8 border-[#1A1A1A]">
      {/* Top Editorial Nav Header */}
      <Header 
        onOpenNextJsModal={() => setIsNextJsModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        {/* Intro Section */}
        <IntroSection profile={PROFILE_DATA} />

        {/* Projects Section (3 Projects) */}
        <ProjectsSection 
          projects={PROJECTS_DATA} 
          onSelectProject={(project) => setSelectedProject(project)} 
        />

        {/* Technical Experience & Education Section */}
        <ExperienceEducationSection profile={PROFILE_DATA} />

        {/* Contact Section */}
        <ContactSection 
          email={PROFILE_DATA.email}
          githubUrl={PROFILE_DATA.githubUrl}
        />
      </main>

      {/* Editorial Footer */}
      <footer className="border-t border-white/10 mt-16 px-6 md:px-12 py-10 bg-[#070707]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex space-x-8 md:space-x-12">
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-white/30 font-mono mb-1">GitHub</span>
              <a href={PROFILE_DATA.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-white/80 hover:text-white hover:underline underline-offset-4 decoration-white/30 transition-colors">
                @cminchung
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-white/30 font-mono mb-1">Direct Email</span>
              <a href={`mailto:${PROFILE_DATA.email}`} className="text-xs text-white/80 hover:text-white hover:underline underline-offset-4 decoration-white/30 transition-colors">
                {PROFILE_DATA.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6 text-right w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
            <div>
              <div className="text-4xl font-serif italic text-white/20">2026</div>
              <div className="text-[9px] uppercase tracking-widest text-white/30 font-mono mt-0.5">
                Choong Minchung Portfolio
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-white text-black border border-white hover:bg-white/90 transition-all duration-200 z-30 shadow-2xl cursor-pointer"
          title="Scroll to Top"
        >
          <ArrowUp size={16} />
        </button>
      )}

      {/* Project Inspection Modal */}
      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Next.js 15 Export Code Modal */}
      <NextJsExportModal 
        isOpen={isNextJsModalOpen} 
        onClose={() => setIsNextJsModalOpen(false)} 
      />
    </div>
  );
}
