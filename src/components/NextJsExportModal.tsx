import React, { useState } from 'react';
import { X, Copy, Check, Terminal, ExternalLink, Download, Layers } from 'lucide-react';
import { NEXTJS_PAGE_CODE, NEXTJS_PACKAGE_JSON, NEXTJS_TAILWIND_CONFIG } from '../utils/nextjsExport';

interface NextJsExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NextJsExportModal: React.FC<NextJsExportModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'page' | 'package' | 'tailwind'>('page');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const getActiveCode = () => {
    switch (activeTab) {
      case 'page': return NEXTJS_PAGE_CODE;
      case 'package': return NEXTJS_PACKAGE_JSON;
      case 'tailwind': return NEXTJS_TAILWIND_CONFIG;
      default: return NEXTJS_PAGE_CODE;
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(getActiveCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0A0A] border border-white/20 overflow-hidden shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#111] border-b border-white/10 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-1.5 border border-white/10 bg-white/5 text-white">
              <Terminal size={16} />
            </div>
            <div>
              <h2 className="text-sm font-mono font-medium text-white uppercase tracking-wider">
                Next.js 15 App Router Code Export
              </h2>
              <p className="text-[10px] text-white/50 font-mono">
                Ready for one-click Vercel Deployment
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 border border-white/10 hover:border-white hover:bg-white/10 text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Tab Bar */}
        <div className="flex border-b border-white/10 bg-[#0A0A0A] px-6 pt-3 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('page')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border-t border-x transition-colors cursor-pointer ${
              activeTab === 'page'
                ? 'bg-[#141414] text-white border-white/20 border-b-transparent'
                : 'text-white/40 border-transparent hover:text-white'
            }`}
          >
            app/page.tsx
          </button>

          <button
            onClick={() => setActiveTab('package')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border-t border-x transition-colors cursor-pointer ${
              activeTab === 'package'
                ? 'bg-[#141414] text-white border-white/20 border-b-transparent'
                : 'text-white/40 border-transparent hover:text-white'
            }`}
          >
            package.json
          </button>

          <button
            onClick={() => setActiveTab('tailwind')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border-t border-x transition-colors cursor-pointer ${
              activeTab === 'tailwind'
                ? 'bg-[#141414] text-white border-white/20 border-b-transparent'
                : 'text-white/40 border-transparent hover:text-white'
            }`}
          >
            tailwind.config.js
          </button>
        </div>

        {/* Code View Body */}
        <div className="relative p-6 bg-[#0E0E0E] font-mono text-xs text-white/80 overflow-y-auto max-h-[50vh] border-b border-white/10">
          <button
            onClick={handleCopyCode}
            className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-black font-semibold text-[10px] uppercase tracking-wider hover:bg-white/90 transition-colors shadow-md cursor-pointer"
          >
            {copied ? <Check size={12} className="text-emerald-700" /> : <Copy size={12} />}
            <span>{copied ? 'Copied Code' : 'Copy Snippet'}</span>
          </button>

          <pre className="whitespace-pre-wrap leading-relaxed pr-24 font-mono text-emerald-400/90 selection:bg-white selection:text-black">
            {getActiveCode()}
          </pre>
        </div>

        {/* Instructions Footer */}
        <div className="p-6 bg-[#111] space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono block">
                Deployment Guide
              </span>
              <p className="text-xs text-white/80 font-light">
                1. Initialize a new Next.js project: <code className="bg-black px-2 py-0.5 border border-white/10 text-emerald-400 font-mono">npx create-next-app@latest</code><br />
                2. Replace <code className="bg-black px-2 py-0.5 border border-white/10 text-emerald-400 font-mono">app/page.tsx</code> with the exported code above.<br />
                3. Push to GitHub and deploy to Vercel with zero extra setup.
              </p>
            </div>

            <a
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-white text-black text-xs font-mono uppercase tracking-wider font-semibold hover:bg-white/90 transition-colors shrink-0 inline-flex items-center gap-2"
            >
              <span>Deploy to Vercel</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono text-white/40">
            <span>Next.js 15 + React 19 + Tailwind CSS</span>
            <button 
              onClick={onClose}
              className="hover:text-white uppercase tracking-widest transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
