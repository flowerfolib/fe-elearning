import React from 'react'
import styles from './Control.module.css'

function Control() {
    return (
        <div className="d-flex flex-column align-items-center w-100">
            <div className={styles.number__wrap}>
                <div className={styles.number}>
                    <span id="current">
                        1
                    </span>
                    /
                    <span id="total">
                        10
                    </span>
                </div>
            </div>
            <div className={`d-flex justify-content-between align-items-center w-100 pt-4 px-5`}>
                <button className={styles.btn}>
                    Câu trước
                </button>
                <div className={styles.process}>
                    <div className={styles.process__inner} >
                        80%
                    </div>
                </div>
                <button className={styles.btn}>
                    Câu tiếp theo
                </button>
            </div >
        </div>
    )
}

export default Control