import { createContext } from 'react'

// Der Context transportiert Sprache, Schreibrichtung und Übersetzungsfunktion.
// Der Standardwert null wird nie verwendet, da immer ein Provider darüber liegt.
export const LanguageContext = createContext(null)