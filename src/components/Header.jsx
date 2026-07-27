import Logo from "./Logo.jsx"

function Header() {
    return(
        <header className="site-header">
            <div className="site-header__inner">
                <div className="brand">
                    <Logo size={44} />
                    <h1 className="brand__title">CO₂-Footprint</h1>
                </div>

                <nav className="global-nav" aria-label="Hauptnavigation">
                    <ul>
                        <li><a href="#start">Start</a></li>
                        <li><a href="#daten">Daten</a></li>
                        <li><a href="#methodik">Methodik</a></li>
                        <li><a href="#kontakt">Kontakt</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
