/**
 * @module i18n
 */

// lib
import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
// translation files
import resources from './manifest'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    debug: true,
    fallbackLng: 'es',
    // language priority
    order: ['querystring', 'navigator', 'path', 'subdomain', 'cookie', 'localStorage', 'htmlTag'],
    lookupQuerystring: 'lng',
    interpolation: {
      escapeValue: false
    }
  })
