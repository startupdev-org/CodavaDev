import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import i18n from '../lib/i18n';
import { localeFromPath } from '../lib/localePath';

export const useTranslation = () => {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    return i18n.onLanguageChange(() => {
      forceUpdate(prev => prev + 1);
    });
  }, []);

  return {
    t: (key: string, options?: any) => i18n.t(key, options),
  };
};

interface LanguageContextType {
  language: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const language = localeFromPath(pathname);

  useLayoutEffect(() => {
    document.documentElement.lang = language;
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language }}>
      {children}
    </LanguageContext.Provider>
  );
};
