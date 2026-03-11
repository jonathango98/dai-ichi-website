import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import useInView from '../hooks/useInView'
import usePageMeta from '../hooks/usePageMeta'
import styles from './Contact.module.css'

export default function Contact() {
  const { t } = useLanguage()
  const c = t.contact

  usePageMeta({ title: c.metaTitle, description: c.metaDescription })

  const [contactRef, contactVisible] = useInView()

  const [form, setForm] = useState({
    name: '',
    email: '',
    whatsapp: '',
    zipcode: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = c.errors.name
    if (!form.email.trim()) e.email = c.errors.email
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = c.errors.emailInvalid
    if (!form.whatsapp.trim()) e.whatsapp = c.errors.whatsapp
    if (!form.message.trim()) e.message = c.errors.message
    return e
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={styles.successPage}>
        <div className={styles.successCard}>
          <div className={styles.successIcon}>✓</div>
          <h2 className={styles.successTitle}>{c.success.title}</h2>
          <p className={styles.successBody}>{c.success.body(form.name)}</p>
          <button
            className={styles.successBtn}
            onClick={() => {
              setSubmitted(false)
              setForm({ name: '', email: '', whatsapp: '', zipcode: '', message: '' })
            }}
          >
            {c.success.btn}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* ── PAGE HERO ── */}
      <section className={styles.pageHero}>
        <div className={styles.heroContainer}>
          <span className={styles.heroBadge}>{c.heroBadge}</span>
          <h1 className={styles.heroTitle}>
            {c.heroTitle1}<br />
            <span className={styles.heroAccent}>{c.heroTitle2}</span>
          </h1>
          <p className={styles.heroSubtitle}>{c.heroSubtitle}</p>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer} ref={contactRef}>
          {/* FORM */}
          <div className={`${styles.formSide} reveal-left${contactVisible ? ' visible' : ''}`}>
            <h2 className={styles.formTitle}>{c.formTitle}</h2>
            <p className={styles.formIntro}>{c.formIntro}</p>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">
                    {c.fields.name} <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={c.fields.namePlaceholder}
                    value={form.name}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    autoComplete="name"
                  />
                  {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">
                    {c.fields.email} <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={c.fields.emailPlaceholder}
                    value={form.email}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    autoComplete="email"
                  />
                  {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                </div>
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="whatsapp">
                    {c.fields.whatsapp} <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    placeholder={c.fields.whatsappPlaceholder}
                    value={form.whatsapp}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.whatsapp ? styles.inputError : ''}`}
                    autoComplete="tel"
                  />
                  {errors.whatsapp && <span className={styles.errorMsg}>{errors.whatsapp}</span>}
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="zipcode">
                    {c.fields.zipcode}
                    <span className={styles.hint}> {c.fields.zipcodeHint}</span>
                  </label>
                  <input
                    id="zipcode"
                    name="zipcode"
                    type="text"
                    placeholder={c.fields.zipcodePlaceholder}
                    value={form.zipcode}
                    onChange={handleChange}
                    className={styles.input}
                    maxLength={10}
                    autoComplete="postal-code"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">
                  {c.fields.message} <span className={styles.required}>*</span>
                  <span className={styles.hint}> {c.fields.messageHint}</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder={c.fields.messagePlaceholder}
                  value={form.message}
                  onChange={handleChange}
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                />
                {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
              </div>

              <button type="submit" className={styles.submitBtn}>
                {c.submitBtn}
              </button>

              <p className={styles.disclaimer}>{c.disclaimer}</p>
            </form>
          </div>

          {/* INFO SIDE */}
          <div className={`${styles.infoSide} reveal-right${contactVisible ? ' visible' : ''}`}
            style={{ '--reveal-delay': '150ms' }}
          >
            <div className={styles.infoCard}>
              <h3 className={styles.infoCardTitle}>{c.infoTitle}</h3>

              <div className={styles.infoList}>
                {c.info.map((item) => (
                  <div key={item.label} className={styles.infoItem}>
                    <span className={styles.infoIcon}>{item.icon}</span>
                    <div>
                      <div className={styles.infoLabel}>{item.label}</div>
                      <div className={styles.infoValue}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.infoDivider} />

              <h4 className={styles.infoSubtitle}>{c.leadTimeTitle}</h4>
              <div className={styles.leadTimeList}>
                {c.leadTimes.map((lt) => (
                  <div key={lt.brand} className={styles.leadItem}>
                    <div className={styles.leadBrand}>{lt.brand}</div>
                    <div className={styles.leadTime}>{lt.time}</div>
                  </div>
                ))}
              </div>

              <div className={styles.infoDivider} />

              <div className={styles.warrantyBadge}>
                <span className={styles.warrantyIcon}>🛡</span>
                <div>
                  <div className={styles.warrantyTitle}>{c.warranty.title}</div>
                  <div className={styles.warrantyDesc}>{c.warranty.desc}</div>
                </div>
              </div>
            </div>

            <div className={styles.brandCards}>
              {c.brandMinis.map((b) => (
                <div key={b.name} className={styles.brandMini} style={{ borderColor: b.color }}>
                  <span className={styles.brandMiniName}>{b.name}</span>
                  <span className={styles.brandMiniTag}>{b.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
