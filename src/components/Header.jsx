import { useState } from 'react'
import Logo from './Logo.jsx'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="brand">
          <Logo size={44} />
          <h1 className="brand__title">CO₂-Footprint</h1>
        </div>

        <button
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="global-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="visually-hidden">
            {menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          </span>
          <span className="nav-toggle__bar" aria-hidden="true"></span>
          <span className="nav-toggle__bar" aria-hidden="true"></span>
          <span className="nav-toggle__bar" aria-hidden="true"></span>
        </button>

        <nav
          id="global-nav"
          className={menuOpen ? 'global-nav global-nav--open' : 'global-nav'}
          aria-label="Hauptnavigation"
        >
          <ul>
            <li><a href="#start" onClick={() => setMenuOpen(false)}>Start</a></li>
            <li><a href="#daten" onClick={() => setMenuOpen(false)}>Daten</a></li>
            <li><a href="#methodik" onClick={() => setMenuOpen(false)}>Methodik</a></li>
            <li><a href="#kontakt" onClick={() => setMenuOpen(false)}>Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
