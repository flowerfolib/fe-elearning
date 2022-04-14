import React, { useContext, useState } from 'react'
import styles from './Control.module.css'
import { Context } from '../Provider'


function Control() {
    const { api, index, setIndex, answerList } = useContext(Context)

    function handleNext() {
        if (index < api.length - 1) {
            setIndex(index + 1)
        }

    }
    function handlePrev() {
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
                    <div className={styles.process__inner} style={{ width: `${(answerList.map(e => e.a).length) * 100 / (api.length)}%` }} >
                        {(answerList.map(e => e.a).length) * 100 / (api.length)}%
                    </div>
                </div>
                <button className={styles.btn} onClick={handleNext}>
                    Câu tiếp theo
                </button>
            </div >
        </div>
    )
}

export default Control