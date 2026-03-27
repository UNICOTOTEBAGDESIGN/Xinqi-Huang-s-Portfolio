import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const Projects = () => {
  return (
    <div className="bg-background py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Creative <span className="text-accent">Work.</span>
          </motion.h1>
          <p className="text-xl text-secondary max-w-2xl">
            A showcase of selected visual campaigns, AIGC-driven storytelling, and product design projects.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col group"
            >
              <Link to={`/projects/${project.id}`} className="block mb-8">
                <div className="aspect-video bg-card rounded-3xl border border-border-light overflow-hidden relative">
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                    <ArrowUpRight size={48} className="text-accent" />
                  </div>
                  {project.coverImage ? (
                    <img 
                      src={project.coverImage} 
                      alt={project.title} 
                      className={`w-full h-full group-hover:scale-105 transition-transform duration-500 ${
                        project.coverFit === 'contain' ? 'object-contain' : 'object-cover'
                      }`}
                      style={{ objectPosition: project.coverPosition || 'center' }}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-secondary/10 text-2xl font-black uppercase tracking-tighter text-center px-8">
                      {project.title}
                    </div>
                  )}
                </div>
              </Link>

              <div className="flex-grow">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  <Link to={`/projects/${project.id}`}>{project.title}</Link>
                </h2>
                <p className="text-secondary text-sm mb-6 leading-relaxed line-clamp-2">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map(tool => (
                    <span key={tool} className="text-[10px] uppercase tracking-widest font-bold text-secondary/60">
                      #{tool}
                    </span>
                  ))}
                </div>

                <Link 
                  to={`/projects/${project.id}`} 
                  className="inline-flex items-center space-x-2 text-accent font-bold text-sm group/link"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight size={16} className="transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
