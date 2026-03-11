import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, t, toggle } = useLanguage()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.brand} onClick={() => setMenuOpen(false)}>
          <img
            src="/dai-ichi-logo.png"
            alt="Dai-ichi Logo"
            className={styles.brandLogo}
          />
          <span className={styles.brandSub}>INDONESIA</span>
        </NavLink>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={menuOpen ? styles.barOpen : styles.bar} />
          <span className={menuOpen ? styles.barMidOpen : styles.barMid} />
          <span className={menuOpen ? styles.barOpen : styles.bar} />
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.home}
          </NavLink>
          <NavLink
            to="/our-story"
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.story}
          </NavLink>
          <NavLink
            to="/contact"
            className={styles.ctaLink}
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.contact}
          </NavLink>

          <button
            className={styles.langToggle}
            onClick={() => { toggle(); setMenuOpen(false) }}
            aria-label="Toggle language"
          >
            <span className={lang === 'id' ? styles.langActive : styles.langInactive}>ID</span>
            <span className={styles.langSep}>|</span>
            <span className={lang === 'en' ? styles.langActive : styles.langInactive}>EN</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
