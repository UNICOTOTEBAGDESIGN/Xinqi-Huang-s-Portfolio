import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '../data/portfolioData';
import { ArrowLeft, ExternalLink, Wrench, CheckCircle, Info, Lightbulb, GitBranch, Activity, AlertCircle, Brain, List, Target, Layout } from 'lucide-react';

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-accent hover:underline">Back to Projects</Link>
        </div>
      </div>
    );
  }

  const isUXCaseStudy = project.category.toLowerCase().includes('product design') || project.category.toLowerCase().includes('ux');
  const isDatingApp = project.id === 'dating-app-critique';

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Lightbulb': return <Lightbulb size={24} className="text-accent" />;
      case 'Layout': return <Layout size={24} className="text-accent" />;
      case 'Activity': return <Activity size={24} className="text-accent" />;
      case 'Target': return <Target size={24} className="text-accent" />;
      case 'List': return <List size={24} className="text-accent" />;
      case 'GitBranch': return <GitBranch size={24} className="text-accent" />;
      case 'AlertCircle': return <AlertCircle size={24} className="text-accent" />;
      case 'Brain': return <Brain size={24} className="text-accent" />;
      default: return <Info size={24} className="text-accent" />;
    }
  };

  return (
    <div className="bg-background min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <Link 
          to="/projects" 
          className="inline-flex items-center space-x-2 text-secondary hover:text-accent transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="transform group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Projects</span>
        </Link>

        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-widest">
              {project.category}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-12">{project.title}</h1>
          
          {/* Showcase Video / YouTube - Only if not a UX case study or if explicitly provided */}
          {!isUXCaseStudy && (project.showcaseVideo || project.youtubeId) && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16 rounded-3xl overflow-hidden border border-border-light bg-card aspect-video shadow-2xl shadow-accent/5"
            >
              {project.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${project.youtubeId}`}
                  title={project.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video 
                  src={project.showcaseVideo} 
                  controls 
                  className="w-full h-full object-cover"
                  poster={project.coverImage}
                />
              )}
            </motion.div>
          )}

          {!isUXCaseStudy && !project.youtubeId && !project.showcaseVideo && project.coverImage && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-12 rounded-3xl overflow-hidden border border-border-light aspect-video bg-card"
            >
              <img 
                src={project.coverImage} 
                alt={project.title} 
                className={`w-full h-full ${
                  project.coverFit === 'contain' ? 'object-contain' : 'object-cover'
                }`}
                style={{ objectPosition: project.coverPosition || 'center' }}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          )}

          <div className="max-w-3xl">
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-4">Overview</h2>
            <p className="text-xl md:text-2xl text-secondary leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          {/* Mockups for UX Case Studies */}
          {isUXCaseStudy && project.mockups && (
            <div className={`mt-16 ${isDatingApp ? 'max-w-4xl mx-auto' : ''}`}>
              <div className={`grid ${
                isDatingApp 
                  ? 'grid-cols-2 gap-8' 
                  : (project.id === 'humva-poster' 
                    ? 'grid-cols-2 md:grid-cols-4 gap-4' 
                    : 'grid-cols-1 md:grid-cols-2 gap-8')
              }`}>
                {project.mockups.map((mockup, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`${project.id === 'humva-poster' ? 'rounded-xl' : 'rounded-3xl'} overflow-hidden border border-border-light bg-card shadow-sm`}
                  >
                    <img src={mockup} alt={`Mockup ${idx + 1}`} className="w-full h-auto" referrerPolicy="no-referrer" />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
          <div className="lg:col-span-2 space-y-20">
            {/* Custom Sections */}
            {project.customSections && project.customSections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 italic">
                  {getIcon(section.icon)}
                  {section.title}
                </h2>
                <div className="text-secondary leading-relaxed text-lg">
                  {section.content}
                </div>
              </section>
            ))}

            {/* Default Sections (only if no customSections) */}
            {!project.customSections && (
              <>
                {project.problem && (
                  <section>
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 italic">
                      <Target size={24} className="text-accent" />
                      The Problem
                    </h2>
                    <div className="p-8 bg-card rounded-3xl border border-border-light text-secondary leading-relaxed text-lg">
                      {project.problem}
                    </div>
                  </section>
                )}

                {project.concepts && (
                  <section>
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 italic">
                      <Lightbulb size={24} className="text-accent" />
                      {isUXCaseStudy ? "Solution / Concept" : "Concepts"}
                    </h2>
                    <div className="text-secondary leading-relaxed text-lg space-y-4">
                      {project.concepts}
                    </div>
                  </section>
                )}

                {project.keyFeatures && (
                  <section>
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 italic">
                      <List size={24} className="text-accent" />
                      Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.keyFeatures.map((feature, idx) => (
                        <div key={idx} className="p-6 bg-card rounded-2xl border border-border-light flex items-start gap-4">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <p className="text-secondary text-sm">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {project.workflow && (
                  <section>
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 italic">
                      <GitBranch size={24} className="text-accent" />
                      {isUXCaseStudy ? "User Flow / Design Logic" : "Workflow"}
                    </h2>
                    <div className="p-8 bg-card rounded-3xl border border-border-light text-secondary leading-relaxed">
                      {project.workflow}
                    </div>
                  </section>
                )}

                {project.process && (
                  <section>
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 italic">
                      <Activity size={24} className="text-accent" />
                      {isUXCaseStudy ? "Design Process" : "The Process"}
                    </h2>
                    <div className="text-secondary leading-relaxed text-lg">
                      {project.process}
                    </div>
                  </section>
                )}

                {project.challenges && (
                  <section>
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 italic">
                      <AlertCircle size={24} className="text-accent" />
                      Challenges
                    </h2>
                    <div className="p-8 bg-destructive/5 rounded-3xl border border-destructive/10 text-secondary leading-relaxed">
                      {project.challenges}
                    </div>
                  </section>
                )}
              </>
            )}

            {project.outcome && (
              <section>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 italic">
                  <CheckCircle size={24} className="text-accent" />
                  {isUXCaseStudy ? "Outcome / Impact" : "Key Outcome"}
                </h2>
                <div className="p-10 bg-accent/5 rounded-3xl border border-accent/10">
                  <p className="text-primary text-xl font-medium leading-relaxed italic">
                    {project.outcome}
                  </p>
                </div>
              </section>
            )}

            {project.reflection && (
              <section>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 italic">
                  <Brain size={24} className="text-accent" />
                  What I Learned
                </h2>
                <div className="text-secondary leading-relaxed text-lg">
                  {project.reflection}
                </div>
              </section>
            )}
          </div>

          <aside className="space-y-12">
            <div className="sticky top-12 space-y-12">
              <section className="p-8 bg-card rounded-3xl border border-border-light">
                <h2 className="text-sm font-bold mb-6 flex items-center gap-3 uppercase tracking-widest">
                  <Wrench size={18} className="text-accent" />
                  Tools Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map(tool => (
                    <span key={tool} className="text-[10px] uppercase tracking-widest font-bold bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-secondary">
                      {tool}
                    </span>
                  ))}
                </div>
              </section>

              <section className="p-8 bg-card rounded-3xl border border-border-light">
                <h2 className="text-sm font-bold mb-6 uppercase tracking-widest">Project Info</h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-accent font-bold mb-1">Category</h4>
                    <p className="text-sm text-secondary">{project.category}</p>
                  </div>
                  {project.date && (
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-accent font-bold mb-1">Date</h4>
                      <p className="text-sm text-secondary">{project.date}</p>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
