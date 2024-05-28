import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { mainLanguage } from "../locales/language";

i18n
  .use(Backend)
  .use(detector)
  .use(initReactI18next)
  .init({
    fallbackLng: mainLanguage,

    supportedLngs: ["es", "en"],

    load: "languageOnly",

    interpolation: {
      escapeValue: false,
    },

    returnNull: false,

    detection: {
      order: ["localStorage"],
      lookupLocalStorage: "acedia-LNG",
    },
  });

export default i18n;
