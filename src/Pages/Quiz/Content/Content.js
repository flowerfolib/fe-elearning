import React, { useMemo, useState, useLayoutEffect, useEffect, useRef } from 'react'
import styles from './Content.module.css'
import timer from '../../../Assets/Images/quiz/time.png'
import { useContext } from 'react'
import { Context } from '../Provider'
import clsx from 'clsx'
function Content() {



  const { api, index, list } = useContext(Context)

  const [answer, setAnswer] = useState(undefined)

  function checked(e) {

    if (e === list.current[index]) {   
      list.current[index] = undefined
      setAnswer(undefined)

    }
    else {
      list.current[index] = e
      setAnswer(e)
    }


    console.log(list.current);
  }
  return (
    <>
      <div className={`${styles.main} container`}>

        {/*timmer */}
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
                Câu {index + 1}:
              </span>
              {api[index].question}
            </h1>
          </div>
        </div>
        <ul className={`d-flex justify-content-center ${styles.answer__list}`}>

          {api[index].answers.map((e, indexAnswer) => (
            <li className={styles.answer__item} key={indexAnswer}>
              <span className={styles.tag}>
                {indexAnswer + 1}
              </span>
              <div
                onClick={() => checked(e)}
                className={clsx(
                  'd-flex justify-content-center align-items-center',
                  styles.item__inner,
                  { [styles.item__innerActive]: (list.current[index] === e) }
                )}
              >
                {e}
              </div>
            </li>
          ))}
        </ul>




      </div>
    </>

  )

}

export default Content