import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Mail, Linkedin, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Accounts', path: '/accounts' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border-light">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-accent">
          CH.
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border-light p-6 flex flex-col space-y-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link text-lg ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border-light py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-6">Let's connect.</h2>
          <p className="text-secondary mb-8 max-w-md">
            Open for collaborations in content strategy, AIGC operations, and digital storytelling.
          </p>
          <div className="flex space-x-6">
            <a href="mailto:christinahuang050326@gmail.com" className="text-secondary hover:text-accent transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://www.instagram.com/christinaaaa_qxh?igsh=YnVwNjdhdzIzYmg0&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/xinqi-huang-b401aa34a?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors">
              <Linkedin size={24} />
            </a>
            <div className="flex items-center space-x-2 text-secondary hover:text-accent transition-colors cursor-default" title="WeChat: christina050326">
              <MessageSquare size={24} />
              <span className="text-xs font-bold">christina050326</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:items-end justify-center">
          <p className="mt-8 text-xs text-secondary/50 uppercase tracking-widest">
            © 2026 Christina Huang. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
