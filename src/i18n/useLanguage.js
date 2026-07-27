import { useContext } from 'react'
import { LanguageContext } from './LanguageContext.js'

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (context === null) {
    throw new Error('useLanguage muss innerhalb von LanguageProvider verwendet werden')
  }

  return context
}