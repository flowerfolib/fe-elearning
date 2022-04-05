import React from 'react'
import styles from './Content.module.css'
import timer from '../../../Assets/Images/quiz/time.png'

function Content() {

  return <div className={`${styles.main} container`}>
    <div className="d-flex flex-column align-items-center">
      <img src={timer} alt="time" className={styles.timer} />
      <p className={styles.timer__param}>
        <span className={styles.time__minute}>
          59
        </span>
        :
        <span className={styles.time__second}>
          59
        </span>
      </p>
    </div>
    <div className="d-flex align-items-center" style={{ height: '60vh', paddingBottom: '10vh' }}>
      <div className="mx-auto">
        <h1 className={styles.quest__content}>
          <span className={styles.quest__number}>
            Câu 1:
          </span>
          Ai thấy hoa vàng trên cỏ xanh ?
        </h1>
      </div>
    </div>
    <ul className={`d-flex justify-content-center ${styles.answer__list}`}>
      <li className={`${styles.answer__item}`}>
        <span className={styles.tag}>
          A
        </span>
        <div className={`${styles.item__inner} d-flex justify-content-center align-items-center`}>
          Trung Anh
        </div>
      </li>
      <li className={`${styles.answer__item}`}>
        <span className={styles.tag}>
          A
        </span>
        <div className={`${styles.item__inner} d-flex justify-content-center align-items-center`}>
          Thăng
        </div>
      </li>
      <li className={`${styles.answer__item}`}>
        <span className={styles.tag}>
          A
        </span>
        <div className={`${styles.item__inner} d-flex justify-content-center align-items-center`}>
          Long
        </div>
      </li>
      <li className={`${styles.answer__item}`}>
        <span className={styles.tag}>
          A
        </span>
        <div className={`${styles.item__inner} d-flex justify-content-center align-items-center`}>
          Cả 3 đáp án trên
        </div>
      </li>
    </ul>
  </div >
}

export default Content