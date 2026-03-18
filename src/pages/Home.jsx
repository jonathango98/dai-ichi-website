import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import useInView from '../hooks/useInView'
import useCountUp from '../hooks/useCountUp'
import usePageMeta from '../hooks/usePageMeta'
import styles from './Home.module.css'

function parseNum(numStr) {
  // Detect locale from separator: "500,000+" → en-US, "500.000+" → id-ID
  const hasComma = numStr.includes(',')
  const hasDot = /\d\.\d/.test(numStr) // dot between digits = thousands sep
  const locale = hasComma ? 'en-US' : hasDot ? 'id-ID' : null
  const suffix = numStr.endsWith('+') ? '+' : ''
  const value = parseInt(numStr.replace(/[,\.+]/g, ''), 10)
  return { value, suffix, locale }
}

function AchievementNum({ numStr, trigger }) {
  const { value, suffix, locale } = parseNum(numStr)
  const count = useCountUp(value, 1500, trigger)
  const display = locale ? count.toLocaleString(locale) : String(count)
  return <>{display}{suffix}</>
}

const PRODUCT_ACCENTS = ['#D32F2F', '#607D8B', '#FF6F00']
const PRODUCT_LOGOS = [
  '/dai-ichi-logo.png',
  '/pegasus-logo.png',
  '/cobra-sports-logo.png',
]

export default function Home() {
  const { t } = useLanguage()
  const h = t.home

  usePageMeta({ title: h.metaTitle, description: h.metaDescription })

  const [productsHeaderRef, productsHeaderVisible] = useInView()
  const [productsGridRef, productsGridVisible] = useInView()
  const [virtualShopRef, virtualShopVisible] = useInView()
  const [achievementsRef, achievementsVisible] = useInView()
  const [techHeaderRef, techHeaderVisible] = useInView()
  const [techGridRef, techGridVisible] = useInView()
  const [ctaRef, ctaVisible] = useInView()

  return (
    <div>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>{h.heroBadge}</span>
          <h1 className={styles.heroTitle}>
            {h.heroTitle1}<br />
            <span className={styles.heroAccent}>{h.heroTitle2}</span><br />
            {h.heroTitle3}
          </h1>
          <p className={styles.heroSubtitle}>{h.heroSubtitle}</p>
          <div className={styles.heroActions}>
            <Link to="/contact" className={styles.heroCta}>{h.heroCta}</Link>
            <Link to="/our-story" className={styles.heroSecondary}>{h.heroSecondary}</Link>
          </div>
        </div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <section className={styles.products}>
        <div className={styles.sectionContainer}>
          <div
            className={`${styles.sectionHeader} reveal${productsHeaderVisible ? ' visible' : ''}`}
            ref={productsHeaderRef}
          >
            <span className={styles.sectionLabel}>{h.productsLabel}</span>
            <h2 className={styles.sectionTitle}>{h.productsTitle}</h2>
            <p className={styles.sectionSubtitle}>{h.productsSubtitle}</p>
          </div>

          <div className={styles.productGrid} ref={productsGridRef}>
            {h.products.map((p, i) => (
              <div
                key={p.title}
                className={`${styles.productCard} reveal${productsGridVisible ? ' visible' : ''}`}
                style={{ '--reveal-delay': `${i * 130}ms`, '--accent': PRODUCT_ACCENTS[i] }}
              >
                <div className={styles.productLogoWrap}>
                  <img
                    src={PRODUCT_LOGOS[i]}
                    alt={`${p.title} logo`}
                    className={styles.productLogo}
                  />
                </div>
                <div className={styles.productTag}>{p.tag}</div>
                <h3 className={styles.productTitle}>{p.title}</h3>
                <p className={styles.productTagline}>{p.tagline}</p>
                <p className={styles.productDesc}>{p.description}</p>
                <ul className={styles.featureList}>
                  {p.features.map((f) => (
                    <li key={f} className={styles.featureItem}>
                      <span className={styles.featureDot} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={styles.productCta}>
                  {h.productCta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIRTUAL SHOP CTA ── */}
      <section className={styles.virtualShop}>
        <div
          className={`${styles.virtualShopInner} reveal${virtualShopVisible ? ' visible' : ''}`}
          ref={virtualShopRef}
        >
          <div className={styles.virtualShopText}>
            <span className={styles.sectionLabel} style={{ color: 'var(--red)' }}>{h.virtualShopLabel}</span>
            <h2 className={styles.virtualShopTitle}>{h.virtualShopTitle}</h2>
            <p className={styles.virtualShopBody}>{h.virtualShopBody}</p>
            <div className={styles.virtualShopActions}>
              <a
                href="https://instagram.com/pegasusknalpot"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.virtualShopCta}
              >
                {h.virtualShopCta}
              </a>
              <a
                href="https://wa.me/PLACEHOLDER_WA_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.virtualShopWaBtn}
              >
                {h.virtualShopWa}
              </a>
            </div>
          </div>
          <div className={styles.virtualShopBadge}>
            <img src="/pegasus-logo.png" alt="Pegasus Knalpot" className={styles.virtualShopLogo} />
            <span className={styles.virtualShopHandle}>@pegasusknalpot</span>
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className={styles.achievements}>
        <div className={styles.sectionContainer}>
          <div
            className={`${styles.sectionHeader} reveal${achievementsVisible ? ' visible' : ''}`}
            ref={achievementsRef}
          >
            <span className={styles.sectionLabel}>{h.achievementsLabel}</span>
            <h2 className={styles.sectionTitle}>{h.achievementsTitle}</h2>
          </div>
          <div className={styles.achievementsGrid}>
            {h.achievements.map((a, i) => (
              <div
                key={a.label}
                className={`${styles.achievementCard} reveal${achievementsVisible ? ' visible' : ''}`}
                style={{ '--reveal-delay': `${i * 100}ms` }}
              >
                <span className={styles.achievementNum}>
                  <AchievementNum numStr={a.num} trigger={achievementsVisible} />
                </span>
                <span className={styles.achievementLabel}>{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNICAL EXCELLENCE ── */}
      <section className={styles.tech}>
        <div className={styles.sectionContainer}>
          <div
            className={`${styles.sectionHeader} reveal${techHeaderVisible ? ' visible' : ''}`}
            ref={techHeaderRef}
          >
            <span className={styles.sectionLabel} style={{ color: 'var(--silver)' }}>{h.techLabel}</span>
            <h2 className={styles.sectionTitle} style={{ color: 'var(--white)' }}>{h.techTitle}</h2>
            <p className={styles.sectionSubtitle} style={{ color: 'var(--silver)' }}>{h.techSubtitle}</p>
          </div>

          <div className={styles.techGrid} ref={techGridRef}>
            {h.tech.map((item, i) => (
              <div
                key={item.title}
                className={`${styles.techCard} reveal${techGridVisible ? ' visible' : ''}`}
                style={{ '--reveal-delay': `${i * 90}ms` }}
              >
                <div className={styles.techIcon}>{item.icon}</div>
                <h4 className={styles.techTitle}>{item.title}</h4>
                <p className={styles.techDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className={styles.ctaSection}>
        <div
          className={`${styles.sectionContainer} reveal${ctaVisible ? ' visible' : ''}`}
          ref={ctaRef}
        >
          <h2 className={styles.ctaTitle}>{h.ctaTitle}</h2>
          <p className={styles.ctaBody}>{h.ctaBody}</p>
          <Link to="/contact" className={styles.ctaBtn}>{h.ctaBtn}</Link>
        </div>
      </section>
    </div>
  )
}
