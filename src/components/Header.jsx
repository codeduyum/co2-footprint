import { useState } from 'react'
import Logo from './Logo.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import { useLanguage } from '../i18n/useLanguage.js'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="brand">
          <Logo size={44} />
          <div>
            <h1 className="brand__title">CO₂-Footprint</h1>
            <p className="brand__tagline">{t('tagline')}</p>
          </div>
        </div>

        <nav
          id="global-nav"
          className={menuOpen ? 'global-nav global-nav--open' : 'global-nav'}
          aria-label={t('navStart')}
        >
          <ul>
            <li><a href="#start" onClick={() => setMenuOpen(false)}>{t('navStart')}</a></li>
            <li><a href="#daten" onClick={() => setMenuOpen(false)}>{t('navData')}</a></li>
            <li><a href="#methodik" onClick={() => setMenuOpen(false)}>{t('navMethod')}</a></li>
            <li><a href="#kontakt" onClick={() => setMenuOpen(false)}>{t('navContact')}</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <LanguageSwitcher />

          <button
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="global-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="visually-hidden">
              {menuOpen ? t('menuClose') : t('menuOpen')}
            </span>
            <span className="nav-toggle__bar" aria-hidden="true"></span>
            <span className="nav-toggle__bar" aria-hidden="true"></span>
            <span className="nav-toggle__bar" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
