import { useLanguage } from '../i18n/useLanguage.js'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <nav className="footer-links" aria-label={t('footerImprint')}>
        <ul>
          <li><a href="#impressum">{t('footerImprint')}</a></li>
          <li><a href="#datenschutz">{t('footerPrivacy')}</a></li>
          <li><a href="#nutzung">{t('footerTerms')}</a></li>
        </ul>
      </nav>

      <p className="footer-disclaimer">{t('footerDisclaimer')}</p>
      <p className="footer-copyright">{t('footerCopyright')}</p>
    </footer>
  )
}

export default Footer