import React from 'react';
import { AlarmClock, CalendarDays, MessageSquare, Cloud, Moon, Zap, Shield, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import { ContentData } from '../types';

interface AppFeaturesProps {
  content: ContentData['intro'];
}

const iconMap: Record<string, any> = {
  AlarmClock,
  CalendarDays,
  MessageSquare,
  Cloud,
  Moon,
  Zap,
  Shield,
  Smartphone,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const AppFeatures: React.FC<AppFeaturesProps> = ({ content }) => {
  return (
    <section id="features" className="relative pt-40 pb-20 sm:pt-56 sm:pb-32 bg-white overflow-hidden scroll-mt-24">
      {/* Background blobs for depth */}
      <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-blue-100/50 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-24"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading tracking-tight mb-6 sm:mb-8">
            {content.title}
          </h2>
          <div className="text-base sm:text-xl text-slate-600 leading-relaxed font-light">
            {content.description.map((paragraph, index) => (
              <p key={index} className={index > 0 ? 'mt-4' : ''}>
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {content.features.map((feature, index) => {
            const Icon = iconMap[feature.iconName] || Zap;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="premium-card p-8 sm:p-10 flex flex-col group"
              >
                <div className="mb-6 sm:mb-8 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-accent/5 text-accent rounded-2xl group-hover:bg-accent group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm shadow-accent/5">
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-heading mb-3 sm:mb-4 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed flex-grow font-light group-hover:text-slate-900 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-24 glass-panel rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 border border-slate-200"
        >
          <p className="text-sm sm:text-base text-slate-600 italic text-center leading-relaxed max-w-4xl mx-auto font-light">
            {content.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AppFeatures;
