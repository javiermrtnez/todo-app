import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, useTranslation } from 'react-i18next';
import en from '../i18n/en.json';
import es from '../i18n/es.json';

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

await i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources,
  });

export const POSSIBLE_LANGUAGES = Object.keys(resources);
