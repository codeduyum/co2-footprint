import { useLanguage } from '../i18n/useLanguage.js'

// Lokales Menü mit Sprungmarken innerhalb der Seite.
// Es steht als erste Spalte im Raster. Durch CSS Logical Properties und
// das dir-Attribut erscheint es bei Deutsch/Englisch links, bei Arabisch rechts.
function LocalNav() {
  const { t } = useLanguage()

  return (
    <nav className="local-nav" aria-label={t('localNavHeading')}>
      <h2 className="local-nav__heading">{t('localNavHeading')}</h2>
      <ul>
        <li><a href="#intro">{t('localIntro')}</a></li>
        <li><a href="#daten">{t('localTable')}</a></li>
        <li><a href="#methodik">{t('localMethod')}</a></li>
      </ul>
    </nav>
  )
}

export default LocalNav
