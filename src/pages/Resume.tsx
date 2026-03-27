import React from 'react';
import { motion } from 'motion/react';
import { Download, FileText, Calendar, MapPin, Mail, Award, BookOpen, Star, Users, MessageSquare, ChevronDown } from 'lucide-react';
import { experiences, skills, education, projects } from '../data/portfolioData';
import { AnimatePresence } from 'motion/react';
import { Project } from '../data/portfolioData';

export const Resume = () => {
  return (
    <div className="bg-background py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Resume.
            </motion.h1>
            <p className="text-secondary text-xl">Xinqi (Christina) Huang — Content & AIGC Operations</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/resume-en.pdf" 
              download 
              className="btn-primary flex items-center space-x-2 w-full sm:w-fit justify-center"
            >
              <Download size={18} />
              <span>English PDF</span>
            </a>
            <a 
              href="/resume-zh.pdf" 
              download 
              className="btn-secondary flex items-center space-x-2 w-full sm:w-fit justify-center"
            >
              <Download size={18} />
              <span>中文 PDF</span>
            </a>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-16">
            {/* Experience */}
            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-10">Experience</h2>
              <div className="space-y-12 relative border-l border-border-light pl-8 ml-2">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                    <div className="mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      <span className="text-xs font-mono text-secondary">{exp.date}</span>
                    </div>
                    <p className="text-accent text-sm mb-4">{exp.role}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} className="text-sm text-secondary flex items-start space-x-2 leading-relaxed">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-secondary flex-shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-10">Key Projects</h2>
              <div className="space-y-4">
                {projects.map((project, idx) => (
                  <ProjectItem key={idx} project={project} />
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-10">Education</h2>
              <div className="premium-card">
                <h3 className="text-xl font-bold mb-1">{education.school}</h3>
                <p className="text-secondary text-sm mb-4">{education.degree}</p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-secondary/60 mb-6">
                  <span className="flex items-center space-x-1"><Calendar size={12} /> <span>{education.period}</span></span>
                  <span className="flex items-center space-x-1"><MapPin size={12} /> <span>{education.location}</span></span>
                  <span className="flex items-center space-x-1 font-bold text-accent"><Award size={12} /> <span>{education.gpa}</span></span>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {education.highlights.map(h => (
                      <span key={h} className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-full border border-accent/20">{h}</span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border-light">
                    <h4 className="text-[10px] uppercase tracking-widest text-secondary/60 mb-2 flex items-center space-x-1">
                      <BookOpen size={10} />
                      <span>Relevant Coursework</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {education.coursework.map(c => (
                        <span key={c} className="text-[10px] text-secondary">{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            {/* Self Evaluation */}
            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-6">Self Evaluation</h2>
              <div className="space-y-4">
                <div className="bg-card p-4 rounded-xl border border-border-light">
                  <div className="flex items-center space-x-2 mb-2 text-accent">
                    <Star size={14} />
                    <h4 className="text-xs font-bold">Professional Skills</h4>
                  </div>
                  <p className="text-xs text-secondary leading-relaxed">
                    Strong interest in content strategy and social media operations, familiar with short-form content workflows and platform trends.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border-light">
                  <div className="flex items-center space-x-2 mb-2 text-accent">
                    <Users size={14} />
                    <h4 className="text-xs font-bold">Team Collaboration</h4>
                  </div>
                  <p className="text-xs text-secondary leading-relaxed">
                    Outgoing and cooperative personality, able to collaborate effectively in team environments and contribute to project execution.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border-light">
                  <div className="flex items-center space-x-2 mb-2 text-accent">
                    <MessageSquare size={14} />
                    <h4 className="text-xs font-bold">Communication</h4>
                  </div>
                  <p className="text-xs text-secondary leading-relaxed">
                    Strong interpersonal communication skills, able to clearly express ideas and coordinate smoothly with team members.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-6">Skills</h2>
              <div className="space-y-6">
                <SkillGroup title="AIGC" items={skills.aigc} />
                <SkillGroup title="Design" items={skills.design} />
                <SkillGroup title="Editing" items={skills.editing} />
                <SkillGroup title="Technical" items={skills.technical} />
                <SkillGroup title="Languages" items={skills.languages} />
              </div>
            </section>

            <section className="bg-card p-6 rounded-2xl border border-border-light">
              <h2 className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">Contact</h2>
              <div className="space-y-3 text-sm">
                <a href="mailto:christinahuang050326@gmail.com" className="flex items-center space-x-2 text-secondary hover:text-accent">
                  <Mail size={14} />
                  <span>Email Me</span>
                </a>
                <div className="flex items-center space-x-2 text-secondary">
                  <FileText size={14} />
                  <span>Portfolio Site</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="premium-card overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-start text-left group"
      >
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-lg font-bold group-hover:text-accent transition-colors leading-tight">{project.title}</h3>
            <span className="text-[10px] font-mono text-secondary whitespace-nowrap ml-4">{project.date}</span>
          </div>
          <p className="text-xs text-accent">{project.category}</p>
        </div>
        <div className={`ml-4 mt-1 text-secondary group-hover:text-accent transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="pt-4 mt-4 border-t border-white/5">
              <p className="text-sm text-secondary mb-4 leading-relaxed">{project.summary}</p>
              {project.outcome && (
                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                  <p className="text-xs text-primary/80 italic">Outcome: {project.outcome}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SkillGroup = ({ title, items }: { title: string, items: string[] }) => (
  <div>
    <h4 className="text-[10px] uppercase tracking-widest text-secondary/60 mb-2">{title}</h4>
    <div className="flex flex-wrap gap-1.5">
      {items.map(item => (
        <span key={item} className="text-[10px] bg-white/5 px-2 py-0.5 rounded border border-white/5">{item}</span>
      ))}
    </div>
  </div>
);
