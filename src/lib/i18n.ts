import enTranslations from '../locales/en.json';
import roTranslations from '../locales/ro.json';
import { localeFromPath } from './localePath';

class BasicI18n {
  private currentLanguage: string =
    typeof window === "undefined" ? "ro" : localeFromPath(window.location.pathname);
  private resources: Record<string, any> = {
    en: { translation: enTranslations },
    ro: { translation: roTranslations }
  };
  private listeners: Array<() => void> = [];

  changeLanguage(lang: string) {
    if (this.currentLanguage === lang) return Promise.resolve();
    this.currentLanguage = lang;
    this.listeners.forEach(listener => listener());
    return Promise.resolve();
  }

  onLanguageChange(callback: () => void) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(listener => listener !== callback);
    };
  }

  t(key: string, options?: any) {
    const keys = key.split('.');
    let value = this.resources[this.currentLanguage]?.translation;

    for (const k of keys) {
      value = value?.[k];
    }

    if (options?.returnObjects && Array.isArray(value)) {
      return value;
    }

    if (value === undefined) {
      console.warn('Translation missing for key:', key, 'in language:', this.currentLanguage);
      return key;
    }

    return value;
  }
}

const i18n = new BasicI18n();
export default i18n;
