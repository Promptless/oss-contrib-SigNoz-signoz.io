import React, { useState } from 'react'
import styles from './styles.module.css'

const DiscussYourProject = ({ title, desc, withUnderline = false }) => {
  return (
    <section className={styles.yourProject}>
      <div className="mx-auto w-full max-w-[1140px] px-4">
        <h3 className={`${styles.title} ${withUnderline ? styles.withUnderline : ''}`}>{title}</h3>
        <p className={styles.subTagline}>{desc}</p>
      </div>
    </section>
  )
}

export default DiscussYourProject
