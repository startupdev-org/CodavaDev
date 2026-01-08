import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ro' : 'en';
    setLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 hover:border-white/20 transition-all duration-200 group"
      title={`Switch to ${language === 'en' ? 'Romanian' : 'English'}`}
    >
      <span className="text-white/80 text-sm font-medium">
        {language === 'en' ? 'EN' : 'RO'}
      </span>
      <svg
        className="w-3 h-3 text-white/60 group-hover:text-white/80 transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
};
