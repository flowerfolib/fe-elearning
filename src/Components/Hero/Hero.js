import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from './Hero.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Hero() {
  AOS.init()

  return (
    <div className={styles.main} >
      <div className={styles.content}>
        <h1 className={styles.title} data-aos="fade-right" data-aos-duration="1000">
          Học không tu như cái tủ đựng sách
        </h1>
        <p className={styles.text} data-aos="fade-right" data-aos-duration="2000">
          Học tập là hạt giống của kiến thức, là hạt giống của hạnh phúc
        </p>
        <Link to="/tham-gia" className={styles.join} data-aos="fade-right" data-aos-duration="3000">
        </Link>
      </div>
    </div>
  )
}

export default Hero