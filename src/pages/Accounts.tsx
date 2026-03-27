import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { accounts } from '../data/portfolioData';
import { ArrowUpRight, BarChart3, Target, Zap, Settings } from 'lucide-react';

export const Accounts = () => {
  return (
    <div className="bg-background py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Case <span className="text-accent">Studies.</span>
          </motion.h1>
          <p className="text-xl text-secondary max-w-2xl">
            A portfolio of operated accounts, platform growth strategies, and social media experiments.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accounts.map((account, idx) => (
            <motion.div
              key={account.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={`/accounts/${account.id}`} className="block h-full">
                <div className="bg-card rounded-3xl border border-border-light overflow-hidden h-full flex flex-col hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5">
                  {/* Image Header */}
                  <div className="aspect-video relative overflow-hidden">
                    {account.coverImage ? (
                      <img 
                        src={account.coverImage} 
                        alt={account.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-accent/5">
                        <span className="text-secondary/20 text-4xl font-bold italic">{account.name}</span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-accent/20">
                        {account.platform}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors">{account.name}</h3>
                      <p className="text-xs text-secondary font-medium uppercase tracking-wider">{account.category}</p>
                    </div>

                    <div className="space-y-3 mb-6 flex-grow">
                      <div className="flex items-start gap-2">
                        <Target size={14} className="text-accent mt-0.5 shrink-0" />
                        <p className="text-xs text-secondary line-clamp-2"><span className="font-bold text-primary/80">Role:</span> {account.role}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Zap size={14} className="text-accent mt-0.5 shrink-0" />
                        <p className="text-xs text-secondary line-clamp-2"><span className="font-bold text-primary/80">Strategy:</span> {account.strategy}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border-light flex justify-between items-center">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">View Case Study</span>
                      <ArrowUpRight size={16} className="text-accent transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DetailBlock = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) => (
  <div className="flex space-x-4">
    <div className="text-accent mt-1">{icon}</div>
    <div>
      <h4 className="text-xs uppercase tracking-widest text-secondary mb-1">{title}</h4>
      <p className="text-sm font-medium">{content}</p>
    </div>
  </div>
);
