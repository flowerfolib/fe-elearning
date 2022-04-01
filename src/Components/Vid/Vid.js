import React, { useEffect, useRef } from 'react'
import styles from './Vid.module.css'
import edumaVideo from '../../Assets/Videos/Eduma-Preview.mp4'

function Vid() {
  const vidRef = useRef()
  useEffect(() => {
    const handleVideo = () => {
      if (window.scrollY > 1300 && window.scrollY < 2500) {
        vidRef.current.play()
        window.removeEventListener('scroll', handleVideo)
      }
    }
    window.addEventListener('load', () => {
      handleVideo()
      if (window.innerWidth > 768) {
        window.addEventListener('scroll', handleVideo)
      }
    })
  }, [])
  return (
    <div className={styles.main}>
      <div className={styles.wrap}>
        <video ref={vidRef} controls muted src={edumaVideo} className={styles.vid} />
      </div>
    </div>
  )
}

export default Vid