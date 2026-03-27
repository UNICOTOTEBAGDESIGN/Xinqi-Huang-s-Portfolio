import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, TrendingUp, Video, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { accounts, projects } from '../data/portfolioData';

const Hero = () => {
  const keywords = [
    { icon: <Layers size={18} />, title: "Content Strategy" },
    { icon: <Sparkles size={18} />, title: "AIGC Creation" },
    { icon: <TrendingUp size={18} />, title: "Social Growth" },
    { icon: <Video size={18} />, title: "Visual Campaigns" },
  ];

  return (
    <section className="relative min-h-[60vh] flex items-center px-6 overflow-hidden pt-32 pb-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-2xl text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tighter mb-6">
            Xinqi <span className="text-accent">(Christina)</span> Huang
          </h1>

          <p className="text-lg md:text-xl text-secondary mb-6 font-light leading-tight">
            Content Operations / AIGC Operations / Visual Storytelling
          </p>
          
          <p className="text-base text-primary/80 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            “I create content systems, visual campaigns, and AIGC-driven social media work that connect creative ideas with platform growth.”
          </p>

          {/* Identity Tags - Integrated and Tight */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10">
            {keywords.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (idx * 0.1) }}
                className="flex items-center space-x-2 px-3 py-1.5 border border-border-light rounded-full bg-card/30 backdrop-blur-sm"
              >
                <div className="text-accent">{item.icon}</div>
                <span className="text-[9px] uppercase tracking-widest font-bold whitespace-nowrap">{item.title}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Link to="/projects" className="btn-primary flex items-center space-x-2">
              <span>View My Work</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn-secondary">
              About Me
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full max-w-[320px] md:max-w-[400px] lg:w-[400px] aspect-square rounded-[2.5rem] overflow-hidden border border-accent/20 shadow-2xl bg-card flex-shrink-0 lg:mt-2"
        >
          <img
            src="/profile.JPG"
            alt="Xinqi (Christina) Huang"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop";
            }}
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedAccounts = () => {
  return (
    <section className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Accounts</h2>
            <p className="text-secondary">Platform growth and content operations case studies.</p>
          </div>
          <Link to="/accounts" className="text-accent hover:underline hidden md:block">
            View all accounts
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accounts.slice(0, 6).map((account, idx) => (
            <motion.div
              key={account.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="premium-card group overflow-hidden flex flex-col"
            >
              <Link to={`/accounts/${account.id}`} className="block flex-grow flex flex-col">
                {account.coverImage && (
                  <div className="aspect-[4/5] -mx-6 -mt-6 mb-6 overflow-hidden border-b border-border-light">
                    <img 
                      src={account.coverImage} 
                      alt={account.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {account.platform}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{account.name}</h3>
                <p className="text-xs text-secondary mb-4">{account.category}</p>
                <p className="text-sm text-primary/70 mb-6 line-clamp-2 flex-grow">{account.positioning}</p>
                <div className="pt-4 border-t border-border-light flex justify-between items-center mt-auto">
                  <span className="text-[10px] text-secondary uppercase tracking-widest font-bold">View Case Study</span>
                  <ArrowRight size={14} className="text-accent transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedProjects = () => {
  return (
    <section className="py-8 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Projects</h2>
            <p className="text-secondary">Visual campaigns and AIGC-driven creative work.</p>
          </div>
          <Link to="/projects" className="text-accent hover:underline hidden md:block">
            View all projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.slice(0, 4).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Link to={`/projects/${project.id}`} className="block aspect-video bg-card rounded-3xl mb-8 overflow-hidden border border-border-light relative group/card">
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center z-10">
                   <p className="text-accent font-bold uppercase tracking-widest text-sm bg-background/80 px-4 py-2 rounded-full backdrop-blur-sm transform translate-y-4 group-hover/card:translate-y-0 transition-transform">View Project Details</p>
                </div>
                {project.coverImage ? (
                  <img 
                    src={project.coverImage} 
                    alt={project.title} 
                    className={`w-full h-full group-hover/card:scale-105 transition-transform duration-500 ${
                      project.coverFit === 'contain' ? 'object-contain' : 'object-cover'
                    }`}
                    style={{ objectPosition: project.coverPosition || 'center' }}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-secondary/20 font-bold text-4xl italic">
                    {project.title.split(' ')[0]}
                  </div>
                )}
              </Link>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-accent text-sm uppercase tracking-widest mb-4">{project.category}</p>
              <p className="text-secondary max-w-md">{project.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPreview = () => {
  return (
    <section className="py-8 px-6 bg-card/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Christina</h2>
          <p className="text-xl text-primary/80 leading-relaxed mb-12">
            Based in Toronto, I specialize in the intersection of content growth, AIGC creation, and AI product operations. With a background from the University of Toronto, I focus on how visual storytelling and creative technology can drive platform trends.
          </p>
          <Link to="/about" className="btn-secondary">
            Read Full Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <div className="bg-background">
      <Hero />
      <FeaturedAccounts />
      <FeaturedProjects />
      <AboutPreview />
    </div>
  );
};
