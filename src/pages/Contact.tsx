import React from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, Linkedin, Send, ArrowRight } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="bg-background py-20 px-6 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            Say <span className="text-accent">Hello.</span>
          </h1>
          <p className="text-xl text-secondary mb-12 max-w-md leading-relaxed">
            I'm interested in roles related to AIGC content, visual storytelling, and social media strategy.
            If you'd like to talk about content, AI, design, or creative projects, feel free to reach out.
          </p>

          <div className="space-y-8">
            <ContactMethod
              icon={<Mail size={24} />}
              label="Email"
              value="christinahuang050326@gmail.com"
              href="mailto:christinahuang050326@gmail.com"
            />
            <ContactMethod
              icon={<Instagram size={24} />}
              label="Instagram"
              value="@christinaaaa_qxh"
              href="https://www.instagram.com/christinaaaa_qxh?igsh=YnVwNjdhdzIzYmg0&utm_source=qr"
            />
            <ContactMethod
              icon={<Linkedin size={24} />}
              label="LinkedIn"
              value="Christina Huang"
              href="https://www.linkedin.com/in/xinqi-huang-b401aa34a?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            />
            <ContactMethod
              icon={<Send size={24} />}
              label="WeChat"
              value="christina050326"
              href="#"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="premium-card"
        >
          <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-secondary font-bold">Name</label>
                <input
                  type="text"
                  className="w-full bg-background border border-border-light rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-secondary font-bold">Email</label>
                <input
                  type="email"
                  className="w-full bg-background border border-border-light rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-secondary font-bold">Subject</label>
              <input
                type="text"
                className="w-full bg-background border border-border-light rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors"
                placeholder="Project Inquiry"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-secondary font-bold">Message</label>
              <textarea
                rows={5}
                className="w-full bg-background border border-border-light rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button className="btn-primary w-full flex items-center justify-center space-x-2">
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

const ContactMethod = ({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) => (
  <a href={href} className="flex items-center space-x-6 group">
    <div className="w-14 h-14 rounded-2xl bg-card border border-border-light flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
      {icon}
    </div>
    <div>
      <p className="text-xs uppercase tracking-widest text-secondary font-bold mb-1">{label}</p>
      <p className="text-lg font-medium group-hover:text-accent transition-colors">{value}</p>
    </div>
  </a>
);
