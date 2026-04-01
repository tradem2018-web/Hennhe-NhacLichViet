import React from 'react';
import { ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { ContentData } from '../types';

interface AppPrivacyProps {
  content: ContentData['privacy'];
}

const AppPrivacy: React.FC<AppPrivacyProps> = ({ content }) => {
  return (
    <section id="privacy" className="pt-40 pb-20 sm:pt-56 sm:pb-32 bg-white overflow-hidden relative scroll-mt-24">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl"
        >
          <div className="bg-slate-50 px-8 py-12 sm:px-10 sm:py-16 relative border-b border-slate-200">
            <ShieldCheck className="absolute top-8 right-8 sm:top-10 sm:right-10 h-32 w-32 sm:h-40 sm:w-40 text-slate-200/50" />
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 relative z-10 tracking-tight">
              {content.title}
            </h2>
            <div className="mt-4 sm:mt-6 flex items-center text-slate-400 text-sm sm:text-base relative z-10 font-medium">
              <Clock className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
              {content.lastUpdated}
            </div>
          </div>
          
          <div className="px-8 py-12 sm:px-16 sm:py-16 bg-white">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed italic border-l-4 border-accent/20 pl-6 sm:pl-8 mb-12 sm:mb-16 font-light"
            >
              {content.intro}
            </motion.p>

            <div className="space-y-12 sm:space-y-16">
              {content.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-4 sm:mb-6 flex items-center">
                    <span className="bg-accent/5 text-accent h-8 w-8 sm:h-10 sm:w-10 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-5 text-sm sm:text-base font-bold group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                      {index + 1}
                    </span>
                    {section.title}
                  </h3>
                  <div className="text-base sm:text-lg text-slate-600 whitespace-pre-line leading-relaxed pl-12 sm:pl-15 font-light group-hover:text-slate-900 transition-colors">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppPrivacy;
