import React, { useState, useEffect } from 'react';
import { Menu, X, AlarmClock, Globe } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Language, ContentData } from '../types';

interface AppNavbarProps {
  lang: Language;
  toggleLang: () => void;
  content: ContentData['nav'];
}

const AppNavbar: React.FC<AppNavbarProps> = ({ lang, toggleLang, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: content.home },
    { path: '/intro', label: content.features },
    { path: '/guide', label: content.guide },
    { path: '/privacy', label: content.privacy },
    { path: '/contact', label: content.contact },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass-panel rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => setIsOpen(false)}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-accent text-white p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300"
            >
              <AlarmClock className="h-5 w-5" />
            </motion.div>
            <span className="ml-3 text-lg sm:text-xl font-bold text-slate-900 tracking-tight font-heading">
              Hẹn Nhé - <span className="text-accent">Nhắc Lịch Việt</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                      ? 'text-accent bg-accent/5 shadow-sm'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={toggleLang}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-slate-300 transition-all shadow-sm group"
            >
              <Globe className="w-4 h-4 text-slate-500 group-hover:text-accent transition-colors" />
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">{lang}</span>
            </motion.button>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-500 hover:text-accent hover:bg-slate-50 transition-all"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 mx-4 overflow-hidden"
          >
            <div className="glass-panel rounded-[2rem] p-6 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block w-full text-left px-5 py-4 rounded-2xl text-base font-medium transition-all ${isActive
                      ? 'text-accent bg-accent/5'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default AppNavbar;
