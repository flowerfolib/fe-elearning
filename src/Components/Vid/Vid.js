import React, {  useRef } from 'react'
import styles from './Vid.module.css'
import edumaVideo from '../../Assets/Videos/Eduma-Preview.mp4'

function Vid() {
  const vidRef = useRef()
  return (
    <div className={styles.main}>
      <div className={styles.wrap}>
        <video ref={vidRef} controls muted src={edumaVideo} className={styles.vid} />
        <iframe
        title = "video"
          ref={vidRef}
          width="800"
          height="600"
          className={styles.vid}
          src="https://www.youtube.com/embed/3V0jdXteJdQ"
          allowFullScreen />
      </div>
    </div>
  )
}

export default Vid