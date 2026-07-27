function Header() {
    return(
        <header className="site-header">
            <div>
                <h1 className="brand">CO₂-Footprint</h1>

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
