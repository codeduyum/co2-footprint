import { useLanguage } from '../i18n/useLanguage.js'
import { LANGUAGES } from '../i18n/translations.js'

function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div className="lang-switcher">
      <label htmlFor="lang-select" className="visually-hidden">
        {t('language')}
      </label>
      <select
        id="lang-select"
        value={lang}
        onChange={(event) => setLang(event.target.value)}
      >
        {Object.entries(LANGUAGES).map(([code, info]) => (
          <option key={code} value={code}>
            {info.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSwitcher