import React from 'react';
import { Mail, Send, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { ContentData } from '../types';

interface AppContactProps {
  content: ContentData['contact'];
}

const AppContact: React.FC<AppContactProps> = ({ content }) => {
  return (
    <section id="contact" className="pt-40 pb-20 sm:pt-56 sm:pb-32 bg-white overflow-hidden relative scroll-mt-24">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            {content.title}
          </h2>
          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-slate-600 font-light leading-relaxed">
            {content.infoText}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="glass-panel rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-slate-200 grid grid-cols-1 md:grid-cols-5 shadow-2xl">
            <div className="bg-slate-900 p-8 sm:p-12 text-white relative md:col-span-2 overflow-hidden flex flex-col justify-between border-r border-slate-800">
              {/* Vibrant background blobs for the dark sidebar */}
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] animate-pulse"></div>
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-accent/10 rounded-full blur-[100px]"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-8 sm:mb-10 tracking-tight">Thông tin liên hệ</h3>
                <div className="space-y-8 sm:space-y-10">
                  <div className="flex items-start space-x-5 sm:space-x-6 group/item">
                    <div className="bg-white/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10 group-hover/item:bg-accent group-hover/item:text-white transition-all duration-300">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Email hỗ trợ</p>
                      <p className="text-lg sm:text-xl font-semibold text-white group-hover/item:text-accent transition-colors">support@hennhe.app</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-5 sm:space-x-6 group/item">
                    <div className="bg-white/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10 group-hover/item:bg-accent group-hover/item:text-white transition-all duration-300">
                      <Info className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Phản hồi</p>
                      <p className="text-lg sm:text-xl font-semibold text-white group-hover/item:text-accent transition-colors">Luôn sẵn sàng lắng nghe</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 sm:mt-20 p-6 sm:p-8 bg-white/5 rounded-2xl sm:rounded-3xl border border-white/5 relative z-10 backdrop-blur-md">
                <p className="text-sm sm:text-base italic text-slate-300 leading-relaxed font-light">
                  "Chúng tôi trân trọng mọi ý kiến đóng góp từ cộng đồng để ứng dụng ngày càng hoàn thiện hơn."
                </p>
              </div>
            </div>

            <div className="p-8 sm:p-12 md:p-16 md:col-span-3 bg-white">
              <form className="space-y-6 sm:space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 sm:mb-3 ml-1">Họ và tên</label>
                    <input
                      type="text"
                      id="name"
                      className="block w-full px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border-slate-200 bg-slate-50 text-slate-900 shadow-sm focus:ring-accent/50 focus:border-accent focus:bg-white transition-all border outline-none text-sm sm:text-base placeholder:text-slate-400"
                      placeholder={content.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 sm:mb-3 ml-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border-slate-200 bg-slate-50 text-slate-900 shadow-sm focus:ring-accent/50 focus:border-accent focus:bg-white transition-all border outline-none text-sm sm:text-base placeholder:text-slate-400"
                      placeholder={content.emailPlaceholder}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 sm:mb-3 ml-1">Nội dung</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="block w-full px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border-slate-200 bg-slate-50 text-slate-900 shadow-sm focus:ring-accent/50 focus:border-accent focus:bg-white transition-all border outline-none resize-none text-sm sm:text-base placeholder:text-slate-400"
                    placeholder={content.messagePlaceholder}
                  ></textarea>
                </div>
                <div className="pt-2 sm:pt-4">
                  <button
                    type="submit"
                    className="w-full btn-primary text-lg sm:text-xl py-4 sm:py-5"
                  >
                    <Send className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                    {content.sendButton}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppContact;
