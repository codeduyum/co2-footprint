import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import LocalNav from './components/LocalNav.jsx'
import EmissionsTable from './components/EmissionsTable.jsx'
import { useLanguage } from './i18n/useLanguage.js'

function App() {
  const { t } = useLanguage()

  return (
    <div className="page">
      <Header />

      <div className="content">
        <LocalNav />

        <main className="main" id="start">
          <section id="intro" className="intro">
            <h2>{t('introHeading')}</h2>
            <p>{t('introText')}</p>
          </section>

          <EmissionsTable />

          <section id="methodik" className="text-section">
            <h2>{t('methodHeading')}</h2>
            <p>{t('methodText')}</p>
          </section>

          <section id="kontakt" className="text-section">
            <h2>{t('contactHeading')}</h2>
            <p>{t('contactText')}</p>
          </section>

          <section id="impressum" className="legal-section">
            <h2>{t('footerImprint')}</h2>
            <p>{t('imprintText')}</p>
          </section>

          <section id="datenschutz" className="legal-section">
            <h2>{t('footerPrivacy')}</h2>
            <p>{t('privacyText')}</p>
          </section>

          <section id="nutzung" className="legal-section">
            <h2>{t('footerTerms')}</h2>
            <p>{t('termsText')}</p>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default App