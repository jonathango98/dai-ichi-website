import { useLanguage } from '../contexts/LanguageContext'
import useInView from '../hooks/useInView'
import usePageMeta from '../hooks/usePageMeta'
import GalleryCarousel from '../components/GalleryCarousel'
import styles from './OurStory.module.css'

export default function OurStory() {
  const { t } = useLanguage()
  const s = t.story

  usePageMeta({ title: s.metaTitle, description: s.metaDescription })

  const [meaningRef, meaningVisible] = useInView()
  const [timelineHeaderRef, timelineHeaderVisible] = useInView()
  const [timelineRef, timelineVisible] = useInView()
  const [valuesHeaderRef, valuesHeaderVisible] = useInView()
  const [valuesRef, valuesVisible] = useInView()

  return (
    <div>
      {/* ── PAGE HERO ── */}
      <section className={styles.pageHero}>
        <div className={styles.heroContainer}>
          <span className={styles.heroBadge}>{s.heroBadge}</span>
          <h1 className={styles.heroTitle}>
            {s.heroTitle1}<br />
            <span className={styles.heroAccent}>{s.heroTitle2}</span>
          </h1>
          <p className={styles.heroSubtitle}>{s.heroSubtitle}</p>
        </div>
      </section>

      {/* ── THE MEANING ── */}
      <section className={styles.meaning}>
        <div className={styles.sectionContainer}>
          <div className={styles.meaningGrid} ref={meaningRef}>
            <div className={`${styles.meaningText} reveal-left${meaningVisible ? ' visible' : ''}`}>
              <span className={styles.sectionLabel}>{s.meaningLabel}</span>
              <h2 className={styles.meaningTitle}>{s.meaningTitle}</h2>
              {s.meaningBody.map((para, i) => (
                <p
                  key={i}
                  className={styles.meaningBody}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
            <div className={`${styles.meaningVisual} reveal-scale${meaningVisible ? ' visible' : ''}`}
              style={{ '--reveal-delay': '180ms' }}
            >
              <div className={styles.meaningCard}>
                <div className={styles.meaningKanji}>第一</div>
                <div className={styles.meaningKanjiLabel}>Dai-ichi</div>
                <div className={styles.meaningKanjiMeaning}>{s.kanjiMeaning}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className={styles.timelineSection}>
        <div className={styles.sectionContainer}>
          <div
            className={`${styles.timelineHeader} reveal${timelineHeaderVisible ? ' visible' : ''}`}
            ref={timelineHeaderRef}
          >
            <span className={styles.sectionLabel} style={{ color: 'var(--silver)' }}>{s.timelineLabel}</span>
            <h2 className={styles.timelineTitle}>{s.timelineTitle}</h2>
            <p className={styles.timelineSubtitle}>{s.timelineSubtitle}</p>
          </div>

          <div className={styles.timelineBody}>
            <div className={styles.timeline} ref={timelineRef}>
              {s.events.map((event, i) => (
                <div
                  key={event.year}
                  className={`${styles.event} ${event.highlight ? styles.eventHighlight : ''} ${event.highlight ? 'reveal-scale' : 'reveal'}${timelineVisible ? ' visible' : ''}`}
                  style={{ '--reveal-delay': `${i * 100}ms` }}
                >
                  <div className={styles.eventYear}>{event.year}</div>
                  <div className={styles.eventConnector}>
                    <div className={styles.eventDot} />
                    <div className={styles.eventLine} />
                  </div>
                  <div className={styles.eventContent}>
                    <h3 className={styles.eventTitle}>{event.title}</h3>
                    <p className={styles.eventDesc}>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.timelinePhotoCol}>
              <div className={styles.timelinePhotoSticky}>
                <img
                  src="/yahya-goenadibrata.jpeg"
                  alt="Yahya Goenadibrata — Founder of Dai Ichi Indonesia"
                  className={styles.timelinePhoto}
                />
                <div className={styles.timelinePhotoCaption}>
                  <span className={styles.timelinePhotoCaptionName}>{s.founderName}</span>
                  <span className={styles.timelinePhotoCaptionRole}>{s.founderLabel} · {s.founderYears}</span>
                </div>
                <img
                  src="/bengkel.jpeg"
                  alt="Bengkel Ngagel Jaya — Dai Ichi Indonesia showroom"
                  className={styles.timelinePhoto}
                  style={{ marginTop: '2rem' }}
                />
                <div className={styles.timelinePhotoCaption}>
                  <span className={styles.timelinePhotoCaptionName}>{s.bengkelName}</span>
                  <span className={styles.timelinePhotoCaptionRole}>{s.bengkelLabel}</span>
                </div>
                <img
                  src="/daiichi-front.jpeg"
                  alt="Pintu masuk pabrik Dai Ichi Indonesia, Bulusidokare"
                  className={styles.timelinePhoto}
                  style={{ marginTop: '2rem' }}
                />
                <div className={styles.timelinePhotoCaption}>
                  <span className={styles.timelinePhotoCaptionName}>Pabrik Dai Ichi Indonesia</span>
                  <span className={styles.timelinePhotoCaptionRole}>Di Sidoarjo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <GalleryCarousel />

      {/* ── MODERN EVOLUTION ── */}
      <section className={styles.modernSection}>
        <div className={styles.sectionContainer}>
          <div
            className={`${styles.sectionHeader} reveal${valuesHeaderVisible ? ' visible' : ''}`}
            ref={valuesHeaderRef}
          >
            <span className={styles.sectionLabel}>{s.modernLabel}</span>
            <h2 className={styles.sectionTitle}>{s.modernTitle}</h2>
            <p className={styles.sectionSubtitle}>{s.modernSubtitle}</p>
          </div>

          <div className={styles.valueGrid} ref={valuesRef}>
            {s.values.map((v, i) => (
              <div
                key={v.num}
                className={`${styles.valueCard} reveal${valuesVisible ? ' visible' : ''}`}
                style={{ '--reveal-delay': `${i * 100}ms` }}
              >
                <div className={styles.valueNum}>{v.num}</div>
                <h4 className={styles.valueTitle}>{v.title}</h4>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
