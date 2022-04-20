import React, {  useState, useEffect} from 'react'
import styles from './Content.module.css'
import timer from '../../../Assets/Images/quiz/time.png'
import { useContext } from 'react'
import { Context } from '../Provider'
import clsx from 'clsx'
function Content() {
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(59);
  const {
    api,
    index,
    list,
    listChecked,
    setListChecked,
    setIsVisible, } = useContext(Context)
  const [answer, setAnswer] = useState(undefined)

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval)
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000)
    return () => {
      clearInterval(myInterval);
    };
  });

  useEffect(() => {
    if (api.length === listChecked && api.length - 1 === index) {
      setIsVisible(true)
    }
    else {
      setIsVisible(false)

    }
  }, [listChecked])

  function checked(e) {

    if (e === list.current[index]) {
      list.current[index] = undefined
      setAnswer(undefined)

    }
    else {
      list.current[index] = e
      setAnswer(e)
    }

    setListChecked(list.current.filter((e) => e !== undefined).length) //Số câu trả lời đã chọn





  }
  return (
    <>
      <div className={`${styles.main} container`}>

        {/*timer */}
        <div className="d-flex flex-column align-items-center">
          <img src={timer} alt="time" className={styles.timer} />
          <p className={styles.timer__param}>
            <span className={styles.time__minute}>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
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