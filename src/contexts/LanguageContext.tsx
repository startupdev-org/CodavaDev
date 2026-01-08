import React, { createContext, useContext, useEffect, useState } from 'react';
import i18n from '../lib/i18n';

// Custom useTranslation hook that works with our basic i18n
export const useTranslation = () => {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    // Subscribe to language changes
    const unsubscribe = i18n.onLanguageChange(() => {
      forceUpdate(prev => prev + 1);
    });

    return unsubscribe;
  }, []);

  return {
    t: (key: string, options?: any) => i18n.t(key, options),
    i18n: {
      changeLanguage: (lang: string) => i18n.changeLanguage(lang)
    }
  };
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<string>('en');

  // Initialize language from localStorage or default to English
  useEffect(() => {
    const storedLang = localStorage.getItem('preferred-language') || 'en';
    setLanguageState(storedLang);
    i18n.changeLanguage(storedLang);
  }, []);

  const setLanguage = async (lang: string) => {
    setLanguageState(lang);
    await i18n.changeLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    isLoading: false, // No loading since we don't detect IP
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
