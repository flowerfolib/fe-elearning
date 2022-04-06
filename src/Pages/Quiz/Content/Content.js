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
    <div className="d-flex align-items-center" style={{ height: '50vh', paddingBottom: '10vh' }}>
      <div className="mx-auto">
        <h1 className={styles.quest__content}>
          <span className={styles.quest__number}>
            Câu 1:
          </span>
          Chữ “Phật” nghĩa là gì?
        </h1>
      </div>
    </div>
    <ul className={`d-flex justify-content-center ${styles.answer__list}`}>
      <li className={`${styles.answer__item}`}>
        <span className={styles.tag}>
          A
        </span>
        <div className={`${styles.item__inner} d-flex justify-content-center align-items-center`}>
          Bậc hoàn toàn giác ngộ
        </div>
      </li>
      <li className={`${styles.answer__item}`}>
        <span className={styles.tag}>
          B
        </span>
        <div className={`${styles.item__inner} d-flex justify-content-center align-items-center`}>
          Người giác ngộ chân chánh
        </div>
      </li>
      <li className={`${styles.answer__item}`}>
        <span className={styles.tag}>
          C
        </span>
        <div className={`${styles.item__inner} d-flex justify-content-center align-items-center`}>
          Bậc tự giác, giác tha, giác hạnh viên mãn
        </div>
      </li>
      <li className={`${styles.answer__item}`}>
        <span className={styles.tag}>
          D
        </span>
        <div className={`${styles.item__inner} d-flex justify-content-center align-items-center`}>
          Bậc cao hơn thượng đế
        </div>
      </li>
    </ul>
  </div >
}

export default Content