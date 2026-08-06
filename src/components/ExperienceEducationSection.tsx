import React from 'react';
import { ProfileInfo } from '../types';
import { Briefcase, GraduationCap, Award, Globe, Code, Layers, Wrench, CheckCircle2 } from 'lucide-react';

interface ExperienceEducationSectionProps {
  profile: ProfileInfo;
}

export const ExperienceEducationSection: React.FC<ExperienceEducationSectionProps> = ({ profile }) => {
  return (
    <section id="experience" className="py-12 space-y-12 border-b border-white/10">
      {/* Section Header */}
      <div className="flex justify-between items-end border-b border-white/10 pb-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-mono block mb-2">
            BACKGROUND & CREDENTIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-serif italic text-white font-light">
            Technical Skills & Experience
          </h2>
        </div>
        <span className="text-xs text-white/40 font-mono tracking-widest">
          ENGINEERING CREDENTIALS
        </span>
      </div>

      {/* Technical Skills Categories Grid */}
      <div className="space-y-6">
        <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono flex items-center gap-2">
          <Code size={14} className="text-white/60" />
          <span>Technical Skills Overview</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Languages & Core */}
          <div className="p-6 border border-white/10 bg-[#111] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-white border-b border-white/10 pb-3">
              <Code size={16} className="text-emerald-400" />
              <span>Languages & Core</span>
            </div>
            <ul className="space-y-2">
              {profile.skillsCategorized.languagesAndCore.map((skill, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-white/80 font-mono">
                  <span className="w-1.5 h-1.5 bg-white/40 shrink-0"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Backend & State */}
          <div className="p-6 border border-white/10 bg-[#111] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-white border-b border-white/10 pb-3">
              <Layers size={16} className="text-emerald-400" />
              <span>Backend & State</span>
            </div>
            <ul className="space-y-2">
              {profile.skillsCategorized.backendAndState.map((skill, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-white/80 font-mono">
                  <span className="w-1.5 h-1.5 bg-white/40 shrink-0"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testing & Tooling */}
          <div className="p-6 border border-white/10 bg-[#111] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-white border-b border-white/10 pb-3">
              <Wrench size={16} className="text-emerald-400" />
              <span>Testing, Tooling & Concepts</span>
            </div>
            <ul className="space-y-2">
              {profile.skillsCategorized.testingAndTooling.map((skill, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-white/80 font-mono">
                  <span className="w-1.5 h-1.5 bg-white/40 shrink-0"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Work Experience & Education Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Work Experience (Col 7) */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono flex items-center gap-2">
            <Briefcase size={14} className="text-white/60" />
            <span>Work Experience</span>
          </h3>

          <div className="space-y-6">
            {profile.workExperiences.map((exp) => (
              <div key={exp.id} className="p-6 border border-white/10 bg-[#111] space-y-4 relative">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div>
                    <h4 className="text-base text-white font-medium">{exp.company}</h4>
                    <span className="text-xs text-white/60 font-mono">{exp.role}</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 px-2.5 py-1 border border-white/10 bg-black/40 self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-white/70 font-light leading-relaxed">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications (Col 5) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono flex items-center gap-2">
              <GraduationCap size={14} className="text-white/60" />
              <span>Education</span>
            </h3>

            {profile.education.map((edu, idx) => (
              <div key={idx} className="p-6 border border-white/10 bg-[#111] space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="text-sm font-medium text-white">{edu.institution}</h4>
                  <span className="text-[9px] font-mono text-white/40 uppercase">{edu.period}</span>
                </div>
                <p className="text-xs text-white/70 font-light leading-snug">
                  {edu.degree}
                </p>
                {edu.cgpa && (
                  <div className="inline-block pt-1">
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1">
                      CGPA: {edu.cgpa}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Certifications & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* Certifications */}
            <div className="p-6 border border-white/10 bg-[#111] space-y-3">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono border-b border-white/10 pb-2">
                <Award size={14} />
                <span>Certifications</span>
              </div>
              <ul className="space-y-2">
                {profile.certifications.map((cert, idx) => (
                  <li key={idx} className="text-xs text-white/80 font-mono flex items-center gap-2">
                    <span className="text-emerald-400 text-sm">✓</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="p-6 border border-white/10 bg-[#111] space-y-3">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono border-b border-white/10 pb-2">
                <Globe size={14} />
                <span>Languages</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {profile.languages.map((lang, idx) => (
                  <div key={idx} className="p-2 border border-white/5 bg-black/40 text-center">
                    <div className="text-xs text-white font-mono">{lang.language}</div>
                    <div className="text-[9px] text-white/40 font-mono uppercase">{lang.proficiency}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
