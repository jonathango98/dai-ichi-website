import { useState, useEffect, useCallback, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import useInView from '../hooks/useInView'
import styles from './GalleryCarousel.module.css'

const IMAGES = [
  'WhatsApp Image 2026-03-14 at 05.20.58 (1).jpeg',
  'WhatsApp Image 2026-03-14 at 05.20.58.jpeg',
  'WhatsApp Image 2026-03-14 at 05.20.59.jpeg',
  'WhatsApp Image 2026-03-14 at 05.21.01 (1).jpeg',
  'WhatsApp Image 2026-03-14 at 05.21.01.jpeg',
  'WhatsApp Image 2026-03-14 at 05.21.03.jpeg',
  'WhatsApp Image 2026-03-14 at 05.21.07.jpeg',
  'WhatsApp Image 2026-03-14 at 05.21.17.jpeg',
  'WhatsApp Image 2026-03-14 at 05.21.20.jpeg',
  'WhatsApp Image 2026-03-14 at 05.21.21.jpeg',
  'WhatsApp Image 2026-03-14 at 05.21.23 (1).jpeg',
  'WhatsApp Image 2026-03-14 at 05.21.23.jpeg',
  'WhatsApp Image 2026-03-14 at 05.21.24 (1).jpeg',
  'WhatsApp Image 2026-03-14 at 05.21.24.jpeg',
].map((name) => `/galeri/${encodeURIComponent(name)}`)

export default function GalleryCarousel() {
  const { t } = useLanguage()
  const g = t.home.gallery
  const [headerRef, headerVisible] = useInView()

  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef(null)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % IMAGES.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + IMAGES.length) % IMAGES.length)
  }, [])

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(next, 4000)
    return () => clearInterval(intervalRef.current)
  }, [paused, next])

  return (
    <section className={styles.section}>
      <div
        className={`${styles.header} reveal${headerVisible ? ' visible' : ''}`}
        ref={headerRef}
      >
        <span className={styles.label}>{g.label}</span>
        <h2 className={styles.title}>{g.title}</h2>
      </div>

      <div
        className={styles.carousel}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={styles.imageWrap}>
          <img
            key={current}
            src={IMAGES[current]}
            alt={`Gallery ${current + 1}`}
            className={styles.image}
          />
        </div>

        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={prev}
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={next}
          aria-label="Next"
        >
          ›
        </button>

        <div className={styles.dots}>
          {IMAGES.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
