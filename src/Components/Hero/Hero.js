import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from './Hero.module.css'

function Hero() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Học không tu như cái tủ đựng sách
        </h1>
        <p className={styles.text}>
          Học tập là hạt giống của kiến thức, là hạt giống của hạnh phúc
        </p>
        <Link to="/tham-gia" className={styles.join}>
        </Link>
      </div>
    </div>
  )
}

export default Hero