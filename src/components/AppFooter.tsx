import React from 'react';
import { AlarmClock } from 'lucide-react';
import { ContentData } from '../types';

interface AppFooterProps {
  content: ContentData['footer'];
}

const AppFooter: React.FC<AppFooterProps> = ({ content }) => {
  return (
    <footer className="bg-slate-50 text-slate-900 py-12 overflow-hidden relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-accent/5 p-2 rounded-xl border border-accent/10">
                <AlarmClock className="h-6 w-6 text-accent" />
              </div>
              <span className="text-2xl font-bold font-heading tracking-tight text-slate-900">Hẹn Nhé - <span className="text-accent">Nhắc Lịch Việt</span></span>
            </div>
            <p className="text-slate-600 text-sm max-w-md leading-relaxed font-light">
              Ứng dụng báo thức & quản lý lịch hẹn thông minh dành riêng cho người Việt.
            </p>
          </div>
          
          <div className="w-full pt-8 border-t border-slate-200">
            <p className="text-slate-500 text-xs font-medium tracking-widest uppercase">
              {content.copyright}
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  );
};

export default AppFooter;
