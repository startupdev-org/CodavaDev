import React, { useEffect, useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SEEN_KEY = 'lang-switch-seen';

const readSeen = (): boolean => {
  try {
    return localStorage.getItem(SEEN_KEY) === '1';
  } catch {
    return true;
  }
};

const writeSeen = () => {
  try {
    localStorage.setItem(SEEN_KEY, '1');
  } catch {
    /* private mode / storage disabled — non-critical */
  }
};

interface LanguageSelectorProps {
  /** Draw a one-time attention pulse on first visit (until the user has interacted with any selector). */
  pulse?: boolean;
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ pulse = false, className = '' }) => {
  const { language, setLanguage } = useLanguage();
  const isEn = language === 'en';

  const [showPulse, setShowPulse] = useState(false);

  useEffect(() => {
    if (!pulse || readSeen()) return;
    setShowPulse(true);
    const timer = setTimeout(() => setShowPulse(false), 3200);
    return () => clearTimeout(timer);
  }, [pulse]);

  const toggleLanguage = () => {
    writeSeen();
    setShowPulse(false);
    setLanguage(isEn ? 'ro' : 'en');
  };

  const label = isEn ? 'Comută în română' : 'Switch to English';

  return (
    <button
      onClick={toggleLanguage}
      title={label}
      aria-label={label}
      className={`inline-flex items-center gap-2 rounded-xl border border-[#194EFF]/40 bg-[#194EFF]/10 px-3 py-1.5 text-sm font-medium text-white transition-all duration-200 hover:border-[#194EFF]/70 hover:bg-[#194EFF]/20 ${
        showPulse ? 'animate-pulse ring-2 ring-[#194EFF]/60' : ''
      } ${className}`}
    >
      <span className="text-base leading-none">{isEn ? '🇬🇧' : '🇷🇴'}</span>
      <span className="tracking-wide">{isEn ? 'EN' : 'RO'}</span>
      <ArrowLeftRight className="h-3.5 w-3.5 text-white/60" />
    </button>
  );
};
