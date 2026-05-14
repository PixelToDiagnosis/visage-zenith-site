import React, { createContext, useContext, useState, useCallback } from "react";

type Language = "fr" | "nl";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (fr: string, nl: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("nl");

  const t = useCallback((fr: string, nl: string) => (lang === "fr" ? fr : nl), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
