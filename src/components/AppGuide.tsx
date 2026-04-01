import React from 'react';
import { Lightbulb, Share2, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { ContentData } from '../types';

interface AppGuideProps {
  content: ContentData['guide'];
}

const AppGuide: React.FC<AppGuideProps> = ({ content }) => {
  return (
    <section id="guide" className="pt-40 pb-20 sm:pt-56 sm:pb-32 bg-white overflow-hidden relative scroll-mt-24">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-24"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            {content.title}
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {content.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row items-start md:items-center p-8 sm:p-10 glass-panel rounded-[2rem] sm:rounded-[2.5rem] border border-slate-200 hover:bg-slate-50 hover:shadow-2xl hover:border-accent/30 transition-all duration-500"
            >
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-xl sm:rounded-2xl bg-slate-100 text-slate-500 font-bold text-xl sm:text-2xl border border-slate-200 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-500 mb-6 md:mb-0 md:mr-10 shadow-sm">
                {index + 1}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-3 sm:mb-4 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg text-slate-600 whitespace-pre-line leading-relaxed font-light group-hover:text-slate-900 transition-colors">
                  {step.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel rounded-[1.5rem] sm:rounded-[2rem] p-8 sm:p-10 border border-slate-100 flex flex-col items-center text-center group hover:bg-slate-50 transition-colors duration-500 shadow-lg"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/5 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
              <Lightbulb className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mb-2 sm:mb-3 group-hover:text-accent transition-colors">Mẹo nhỏ</h4>
            <p className="text-sm sm:text-base text-slate-600 italic leading-relaxed font-light group-hover:text-slate-900 transition-colors">{content.tips}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel rounded-[1.5rem] sm:rounded-[2rem] p-8 sm:p-10 border border-slate-100 flex flex-col items-center text-center group hover:bg-slate-50 transition-colors duration-500 shadow-lg"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/5 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
              <Share2 className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mb-2 sm:mb-3 group-hover:text-accent transition-colors">Chia sẻ</h4>
            <p className="text-sm sm:text-base text-slate-600 italic leading-relaxed font-light group-hover:text-slate-900 transition-colors">{content.shareText}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel rounded-[1.5rem] sm:rounded-[2rem] p-8 sm:p-10 border border-slate-100 flex flex-col items-center text-center group hover:bg-slate-50 transition-colors duration-500 shadow-lg"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/5 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
              <Users className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mb-2 sm:mb-3 group-hover:text-accent transition-colors">Đội ngũ</h4>
            <p className="text-sm sm:text-base text-slate-600 italic leading-relaxed font-light group-hover:text-slate-900 transition-colors">{content.team}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppGuide;
