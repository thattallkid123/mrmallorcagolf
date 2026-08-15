'use client'

import { useEffect } from 'react'
import styles from './go-partner.module.css'

export default function GoPartnerClient({ partner }) {
  useEffect(() => {
    const timer = window.setTimeout(() => window.location.replace(partner.target), 2000)
    return () => window.clearTimeout(timer)
  }, [partner.target])

  return (
    <main className={styles.page}>
      <section className={styles.card} aria-labelledby="partner-heading">
        <p className={styles.brand}>Mr Mallorca Golf</p>
        <h2 id="partner-heading">Heading to... {partner.name}</h2>
        <p className={styles.benefit}>{partner.benefit}</p>
        <p className={styles.disclosure}>Disclosure: This is an affiliate link. If you book via my link I may earn a small commission (around 10%) at no extra cost to you. This helps keep my Mallorca course guides and tools free.</p>
        <a className={styles.button} href={partner.target} rel="sponsored noopener">
          Continue to {partner.name}
        </a>
        <p className={styles.note}>You will continue automatically in 2 seconds.</p>
      </section>
    </main>
  )
}
