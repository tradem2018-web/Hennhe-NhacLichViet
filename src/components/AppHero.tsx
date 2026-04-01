import React from 'react';
import { ChevronRight, Download, Apple } from 'lucide-react';
import { motion } from 'motion/react';
import { ContentData } from '../types';

interface AppHeroProps {
  content: ContentData['hero'];
}

const AppHero: React.FC<AppHeroProps> = ({ content }) => {
  return (
    <section className="relative pt-32 pb-16 sm:pt-44 sm:pb-24 overflow-hidden bg-white">
      {/* Background elements - Layered blurred blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[140px] opacity-70 animate-pulse"></div>
        <div className="absolute bottom-[5%] right-[-10%] w-[45%] h-[45%] bg-sky-100/50 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-indigo-100/50 rounded-full blur-[100px] opacity-40"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-3xl tracking-tight font-extrabold text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl font-heading leading-[1.15] mb-6 sm:mb-8">
              {content.title}
            </h1>
            <p className="text-base text-slate-600 sm:text-2xl max-w-2xl mx-auto leading-relaxed font-light mb-8 sm:mb-12">
              {content.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-20 w-full sm:w-auto items-center"
          >
            <a 
              href="https://apps.apple.com/app/id6761185220"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-slate-900 border border-slate-800 rounded-xl px-6 py-2.5 hover:bg-black transition-all group shadow-xl w-full sm:w-auto justify-center hover:-translate-y-1 active:translate-y-0 duration-300"
            >
              <Apple className="w-8 h-8 text-white mr-3 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-white/60 leading-none mb-1">Download on the</p>
                <p className="text-xl font-semibold text-white leading-none">App Store</p>
              </div>
            </a>
            
            <button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary group w-full sm:w-auto flex items-center justify-center h-[52px]"
            >
              {content.learnMore}
              <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-5xl"
          >
            <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1),0_10px_20px_-10px_rgba(0,0,0,0.05)] border border-slate-100 aspect-[4/5] sm:aspect-[16/10] group">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="https://picsum.photos/seed/app-ui/1600/1000"
                alt="App Interface"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-16 text-center">
                <p className="text-slate-900 text-sm sm:text-2xl md:text-3xl font-medium leading-relaxed max-w-4xl mx-auto">
                  {content.imageSubtitle}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppHero;
