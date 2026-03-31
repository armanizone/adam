"use client";

import { I18nextProvider } from "react-i18next";
import { useEffect } from "react";
import i18n from "../lib/i18n";

export default function I18nProvider({ children }) {
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    const savedLang = localStorage.getItem("lang");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    const onLang = (lng) => {
      localStorage.setItem("lang", lng);
      document.documentElement.lang = lng;
    };
    i18n.on("languageChanged", onLang);
    return () => i18n.off("languageChanged", onLang);
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
