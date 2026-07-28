import { useEffect, useState } from 'react'
import { LanguageContext } from './LanguageContext.js'
import { LANGUAGES, DEFAULT_LANG, translations, dataLabels } from './translations.js'

// Ermittelt die Startsprache aus den Browsereinstellungen.
function detectLanguage() {
  const preferred = navigator.languages ?? [navigator.language]

  for (const tag of preferred) {
    const code = tag.toLowerCase().split('-')[0]
    if (LANGUAGES[code]) {
      return code
    }
  }

  return DEFAULT_LANG
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectLanguage)

  const dir = LANGUAGES[lang].dir

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
  }, [lang, dir])

  function t(key) {
    return translations[lang][key] ?? key
  }

  // Übersetzt Datenwerte (Land, Sektor). 
  // Unbekannte Werte wie Unternehmensnamen werden unverändert zurückgegeben.
  function tData(value) {
    return dataLabels[lang][value] ?? value
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir, t, tData }}>
      {children}
    </LanguageContext.Provider>
  )
}