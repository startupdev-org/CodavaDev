// Custom i18n implementation for Romanian/English translations

import enTranslations from '../locales/en.json';
import roTranslations from '../locales/ro.json';

class BasicI18n {
  private currentLanguage: string = 'en';
  private resources: Record<string, any> = {
    en: { translation: enTranslations },
    ro: { translation: roTranslations }
  };
  private listeners: Array<() => void> = [];

  init(config: any) {
    // Merge with provided resources if any
    if (config.resources) {
      this.resources = { ...this.resources, ...config.resources };
    }
    return this;
  }

  use(plugin: any) {
    return this;
  }

  changeLanguage(lang: string) {
    this.currentLanguage = lang;
    // Notify all listeners
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

    // Handle returnObjects option for arrays
    if (options?.returnObjects && Array.isArray(value)) {
      return value;
    }

    if (value === undefined) {
      console.warn('Translation missing for key:', key, 'in language:', this.currentLanguage);
      return key; // Return key as fallback
    }

    return value;
  }
}

const i18n = new BasicI18n();
export default i18n;
