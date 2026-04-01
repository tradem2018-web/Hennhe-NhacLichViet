import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import AppNavbar from './components/AppNavbar';
import AppHero from './components/AppHero';
import AppFeatures from './components/AppFeatures';
import AppGuide from './components/AppGuide';
import AppPrivacy from './components/AppPrivacy';
import AppContact from './components/AppContact';
import AppFooter from './components/AppFooter';
import { Language } from './types';
import { CONTENT } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const AppRoutes: React.FC<{ currentContent: any }> = ({ currentContent }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<PageWrapper key="home"><AppHero content={currentContent.hero} /></PageWrapper>} />
        <Route path="/intro" element={<PageWrapper key="intro"><AppFeatures content={currentContent.intro} /></PageWrapper>} />
        <Route path="/guide" element={<PageWrapper key="guide"><AppGuide content={currentContent.guide} /></PageWrapper>} />
        <Route path="/privacy" element={<PageWrapper key="privacy"><AppPrivacy content={currentContent.privacy} /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper key="contact"><AppContact content={currentContent.contact} /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.VI);

  const toggleLang = () => {
    setLang(prev => prev === Language.VI ? Language.EN : Language.VI);
  };

  const currentContent = CONTENT[lang];

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-primary font-sans text-slate-900 flex flex-col selection:bg-accent/10 selection:text-accent">
        <AppNavbar
          lang={lang}
          toggleLang={toggleLang}
          content={currentContent.nav}
        />
        <main className="flex-grow">
          <AppRoutes currentContent={currentContent} />
        </main>
        <AppFooter content={currentContent.footer} />
      </div>
    </HashRouter>
  );
};

export default App;
