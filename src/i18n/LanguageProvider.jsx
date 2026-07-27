import { useEffect, useState } from 'react'
import { LanguageContext } from './LanguageContext.js'
import { LANGUAGES, translations, dataLabels } from './translations.js'

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('de')

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