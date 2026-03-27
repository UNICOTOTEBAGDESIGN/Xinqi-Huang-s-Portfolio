import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { accounts } from '../data/portfolioData';
import { ArrowLeft, ExternalLink, Users, TrendingUp, Play, PieChart, X, Loader2 } from 'lucide-react';

export const AccountDetail = () => {
  const { id } = useParams<{ id: string }>();
  const account = accounts.find(a => a.id === id);
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; videoUrl: string } | null>(null);

  useEffect(() => {
    if (selectedVideo) {
      // Check if script already exists
      const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
      
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      } else if ((window as any).tiktok) {
        // If script exists, just trigger load
        try {
          (window as any).tiktok.load();
        } catch (e) {
          console.error("TikTok load error:", e);
        }
      }
    }
  }, [selectedVideo]);

  if (!account) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Account Not Found</h1>
          <Link to="/accounts" className="text-accent hover:underline">Back to Accounts</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <Link 
          to="/accounts" 
          className="inline-flex items-center space-x-2 text-secondary hover:text-accent transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="transform group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Accounts</span>
        </Link>

        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-widest">
              {account.platform}
            </span>
            <span className="text-secondary text-sm font-medium">{account.category}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">{account.name}</h1>
          
          {account.accountLink && (
            <a 
              href={account.accountLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-accent text-white px-6 py-3 rounded-xl font-bold hover:bg-accent/90 transition-colors"
            >
              <span>Visit {account.platform} Account</span>
              <ExternalLink size={18} />
            </a>
          )}
        </header>

        {/* Top Section: Strategy Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <section className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <TrendingUp size={24} className="text-accent" />
              Growth Strategy
            </h2>
            <div className="p-6 bg-card rounded-3xl border border-border-light">
              <h3 className="text-xs uppercase tracking-widest text-accent font-bold mb-2">Positioning</h3>
              <p className="text-secondary text-sm leading-relaxed">{account.positioning}</p>
            </div>
            <div className="p-6 bg-card rounded-3xl border border-border-light">
              <h3 className="text-xs uppercase tracking-widest text-accent font-bold mb-2">Core Strategy</h3>
              <p className="text-secondary text-sm leading-relaxed">{account.strategy}</p>
            </div>
          </section>

          {account.strategyInsights && (
            <section className="p-8 bg-card rounded-3xl border border-border-light">
              <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
                <PieChart size={20} className="text-accent" />
                Strategy Overview
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">Content Direction</h3>
                  <p className="text-sm text-secondary leading-relaxed">{account.strategyInsights.contentDirection}</p>
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">Content Types</h3>
                  <div className="flex flex-wrap gap-2">
                    {account.strategyInsights.contentTypes.map((type, idx) => (
                      <span key={idx} className="text-[10px] bg-white/5 px-2 py-1 rounded border border-white/5 text-secondary">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {account.strategyInsights.tools.map((tool, idx) => (
                      <span key={idx} className="text-[10px] font-bold text-primary">#{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Middle Section: Viral Content (Full Width Grid) */}
        {account.viralVideos && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Play size={24} className="text-accent" />
              Viral Content Showcase
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {account.viralVideos.map((video, idx) => (
                <div 
                  key={idx} 
                  className={`group ${video.videoUrl ? 'cursor-pointer' : 'cursor-default'}`}
                  onClick={() => video.videoUrl && setSelectedVideo({ title: video.title, videoUrl: video.videoUrl })}
                >
                  <div className="aspect-[3/4] bg-card rounded-2xl overflow-hidden mb-3 relative border border-border-light">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {video.videoUrl && (
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                          <Play size={24} fill="white" className="text-white ml-1" />
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white">
                      {video.views}
                    </div>
                  </div>
                  <h4 className={`text-sm font-bold transition-colors truncate ${video.videoUrl ? 'group-hover:text-accent' : ''}`}>{video.title}</h4>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Section: Results & Learnings Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <section className="space-y-8">
            <div className="p-8 bg-card rounded-3xl border border-border-light">
              <h3 className="text-xs uppercase tracking-widest text-accent font-bold mb-4">What Was Tested</h3>
              <div className="grid grid-cols-1 gap-3">
                {account.strategyInsights?.whatWasTested.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 bg-card rounded-3xl border border-border-light">
              <h3 className="text-xs uppercase tracking-widest text-accent font-bold mb-4">Key Learnings</h3>
              <p className="text-sm text-secondary leading-relaxed">
                {account.strategyInsights?.keyLearnings}
              </p>
            </div>
          </section>

          <section className="space-y-8">
            <div className="p-8 bg-accent/5 rounded-3xl border border-accent/10 h-fit">
              <h3 className="text-xs uppercase tracking-widest text-accent font-bold mb-4">Key Results</h3>
              <p className="text-primary/90 font-medium leading-relaxed italic">
                "{account.strategyInsights?.keyResults}"
              </p>
            </div>
            <div className="p-8 bg-card rounded-3xl border border-border-light">
              <h2 className="text-xl font-bold mb-4">Quick Highlights</h2>
              <p className="text-sm text-secondary leading-relaxed mb-6">
                {account.highlights}
              </p>
              <div className="space-y-4">
                {account.metrics?.map((metric, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">{metric.label}</span>
                    <span className="text-lg font-bold text-accent">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* TikTok Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg bg-card rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 flex justify-between items-center border-b border-border-light">
                <h3 className="font-bold text-accent truncate pr-8">{selectedVideo.title}</h3>
                <button 
                  onClick={() => setSelectedVideo(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8 flex flex-col items-center justify-center bg-black min-h-[400px] text-center">
                {(() => {
                  const isTikTok = selectedVideo.videoUrl.includes('tiktok.com');
                  const isRednote = selectedVideo.videoUrl.includes('xiaohongshu.com') || selectedVideo.videoUrl.includes('xhslink.com');
                  const platformName = isTikTok ? 'TikTok' : isRednote ? 'Rednote' : 'External Platform';
                  const platformDesc = isTikTok 
                    ? 'This video is hosted on TikTok. Click below to watch the full content on their platform.'
                    : isRednote 
                    ? 'This content is hosted on Rednote (Xiaohongshu). Click below to view the full post.'
                    : 'This content is hosted on an external platform. Click below to view it.';
                  
                  return (
                    <div className="flex flex-col items-center space-y-8 max-w-sm">
                      <div className="w-24 h-24 bg-accent/20 rounded-3xl flex items-center justify-center animate-in zoom-in duration-500">
                        <ExternalLink size={48} className="text-accent" />
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-2xl font-bold text-white tracking-tight">View on {platformName}</h4>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {platformDesc}
                        </p>
                      </div>

                      <a 
                        href={selectedVideo.videoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full py-4 bg-accent text-white rounded-2xl font-bold text-lg hover:bg-accent/90 transition-all shadow-2xl shadow-accent/30 group active:scale-[0.98]"
                      >
                        <ExternalLink size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        <span>Open in {platformName}</span>
                      </a>
                      
                      <p className="text-white/30 text-[10px] uppercase tracking-[0.2em]">
                        Redirecting to official app or website
                      </p>
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
