import React, { useEffect, useRef } from 'react'
import styles from './Vid.module.css'
import edumaVideo from '../../Assets/Videos/Eduma-Preview.mp4'

function Vid() {
  const vidRef = useRef()
  return (
    <div className={styles.main}>
      <div className={styles.wrap}>
        {/* <video ref={vidRef} controls muted src={edumaVideo} className={styles.vid} /> */}
        <iframe
          ref={vidRef}
          width="1268"
          height="713"
          className={styles.vid}
          src="https://www.youtube.com/embed/3V0jdXteJdQ"
          allowFullScreen />
      </div>
    </div>
  )
}

export default Vid