import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./translation/en/global.js";

// i18n configuration
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes content
  },
});

export default i18n;
