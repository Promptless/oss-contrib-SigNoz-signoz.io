import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const Hero = (props) => {
  const { title, desc, billForComparison, trySigNozCloud, selfHost } = props
  return (
    <div className={styles.svsdHeaderContainer}>
      <h2 className={styles.headerTitle}>{title}</h2>
      <p className={styles.headerDesc}>{desc}</p>
      <div className={styles.ctaContainer}>
        {billForComparison.isVisible && (
          <Link
            className={`inline-flex items-center justify-center rounded-md px-6 py-1.5 font-bold ${billForComparison.className} ${styles.ctaButton}`}
            href={billForComparison.path}
          >
            Send your bill for comparison
          </Link>
        )}
        {trySigNozCloud.isVisible && (
          <Link
            className="primary-gradient inline-flex items-center justify-center rounded-md bg-signoz_vanilla-300 px-6 py-1.5 font-bold text-signoz_ink-300"
            href="/teams"
          >
            Get Started - Free
          </Link>
        )}
        {selfHost.isVisible && (
          <Link
            className={`inline-flex items-center justify-center rounded-md px-6 py-1.5 font-bold ${selfHost.className} ${styles.ctaButton}`}
            href={selfHost.path}
          >
            Self-Host
          </Link>
        )}
      </div>
      <div className={styles.headerHeroImageContainer}>
        <img src="/img/signoz-distributed-tracing.webp" />
      </div>
    </div>
  )
}

export default Hero
