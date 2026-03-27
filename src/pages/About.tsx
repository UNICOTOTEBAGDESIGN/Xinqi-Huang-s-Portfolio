import React from 'react';
import { motion } from 'motion/react';
import { experiences, skills } from '../data/portfolioData';
import { GraduationCap, Briefcase, Award, Sparkles, Palette, Edit3, Terminal, BarChart } from 'lucide-react';

export const About = () => {
  return (
    <div className="bg-background py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Intro */}
        <section className="mb-12">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            About <span className="text-accent">Me.</span>
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <p className="text-xl text-primary/90 leading-relaxed mb-6">
                I am Christina Huang, a creative operations professional and AIGC strategist dedicated to bridging the gap between innovative ideas and measurable platform growth.
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                My work focuses on building content systems that leverage the latest in AI technology to tell compelling visual stories. I believe that the future of digital marketing lies in the synergy between human creativity and algorithmic precision.
              </p>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border-light h-fit">
              <h3 className="text-accent font-bold uppercase tracking-widest text-xs mb-4">Quick Facts</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between"><span className="text-secondary">Location</span><span>Toronto, CA</span></li>
                <li className="flex justify-between"><span className="text-secondary">Education</span><span>UofT</span></li>
                <li className="flex justify-between"><span className="text-secondary">Focus</span><span>AIGC & Growth</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <GraduationCap className="text-accent" size={32} />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="premium-card">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold">University of Toronto</h3>
                <p className="text-accent">Digital Enterprise Management</p>
              </div>
              <span className="text-secondary mt-2 md:mt-0">Undergraduate Degree</span>
            </div>
            <p className="text-secondary mb-6">
              Focusing on communication, culture, information, and technology. Exploring the intersection of digital business and creative media.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Dean's List", "Digital Strategy", "Visual Communication", "Media Theory"].map((tag) => (
                <span key={tag} className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <Award className="text-accent" size={32} />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCategory title="AIGC Tools" icon={<Sparkles size={20} />} items={skills.aigc} />
            <SkillCategory title="Design" icon={<Palette size={20} />} items={skills.design} />
            <SkillCategory title="Editing" icon={<Edit3 size={20} />} items={skills.editing} />
            <SkillCategory title="Technical" icon={<Terminal size={20} />} items={skills.technical} />
            <SkillCategory title="Marketing" icon={<BarChart size={20} />} items={skills.marketing} />
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <Briefcase className="text-accent" size={32} />
            <h2 className="text-3xl font-bold">Internship Experience</h2>
          </div>
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="premium-card"
              >
                <div className="flex flex-col md:flex-row md:justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                    <p className="text-accent font-medium">{exp.role}</p>
                  </div>
                  <span className="text-secondary font-mono text-sm mt-2 md:mt-0">{exp.date}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-secondary mb-4">Responsibilities</h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2 text-primary/80">
                          <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-secondary mb-4">Key Outcomes</h4>
                    <p className="text-primary/80 mb-6">{exp.outcomes}</p>
                    <h4 className="text-xs uppercase tracking-widest text-secondary mb-4">Platforms</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.platforms.map(p => (
                        <span key={p} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Personal Projects */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Creator Practice</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-8 border border-border-light rounded-3xl hover:bg-card/50 transition-colors">
                <h3 className="text-xl font-bold mb-2">Rednote Personal IP</h3>
                <p className="text-secondary text-sm">Personal brand building through AIGC visual identity.</p>
             </div>
             <div className="p-8 border border-border-light rounded-3xl hover:bg-card/50 transition-colors">
                <h3 className="text-xl font-bold mb-2">Douyin Personal IP</h3>
                <p className="text-secondary text-sm">Short-form storytelling and growth iteration.</p>
             </div>
             <div className="p-8 border border-border-light rounded-3xl hover:bg-card/50 transition-colors">
                <h3 className="text-xl font-bold mb-2">Blob团子 AIGC</h3>
                <p className="text-secondary text-sm">Original character development and GIF exploration.</p>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, icon, items }: { title: string, icon: React.ReactNode, items: string[] }) => (
  <div className="p-6 bg-card/50 border border-border-light rounded-2xl">
    <div className="flex items-center space-x-3 mb-6 text-accent">
      {icon}
      <h3 className="text-sm uppercase tracking-widest font-bold text-primary">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map(item => (
        <span key={item} className="text-xs text-secondary border border-white/5 px-2 py-1 rounded-md">{item}</span>
      ))}
    </div>
  </div>
);
