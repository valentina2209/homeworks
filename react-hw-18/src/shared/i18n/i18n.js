import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json'
import uk from './locales/uk.json'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: { translation: en },
            uk: { translation: uk },
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
    })

export default i18n