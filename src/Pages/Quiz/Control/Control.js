import React, { useContext, useState } from 'react'
import styles from './Control.module.css'
import { Context } from '../Provider'
import clsx from 'clsx'


function Control() {
    const { api, index, setIndex, list } = useContext(Context)
    const [isVisible, setIsVisible] = useState(false)
    function handleSubmit() {
        alert(list.current.map(e => e))
    }

    let listChecked = list.current.length - list.current.filter((e) => e === undefined).length //Số câu trả lời đẫ chọn

    function handleNext() {
        if (index === api.length - 1 && api.length === listChecked + 1) {
            setIsVisible(!isVisible)
        }
        else {
            if (index < api.length - 1) {
                setIndex(index + 1)
            }
        }
    }
    function handlePrev() {
        if (api.length === listChecked) {
            setIsVisible(!isVisible)
        }
        if (index > 0) {
            setIndex(index - 1)
        }
    }
    return (
        <div className="d-flex flex-column align-items-center w-100">
            <div className={styles.number__wrap}>
                <div className={styles.number}>
                    <span id="current">
                        {index + 1}
                    </span>
                    /
                    <span id="total">
                        {api.length}

                    </span>
                </div>
            </div>
            <div className={`d-flex justify-content-between align-items-center w-100 pt-4 px-5`}>
                <button className={styles.btn} onClick={handlePrev}>
                    Câu trước
                </button>
                <div className={styles.process}>
                    <div className={styles.process__inner} style={{ width: `${listChecked * 100 / (api.length)}%` }} >
                        {listChecked * 100 / (api.length)}%
                    </div>
                </div>
                <button className={clsx(styles.btn, {
                    [styles.Invisible]: isVisible
                })}
                    onClick={handleNext}
                >
                    Câu tiếp theo
                </button>
                <button className={clsx(styles.btn, {
                    [styles.Invisible]: !isVisible
                })}
                    onClick={handleSubmit}
                >
                    Nộp bài
                </button>
            </div >
        </div>
    )
}

export default Control