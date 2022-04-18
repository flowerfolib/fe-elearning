import React, { useContext, useState } from 'react'
import styles from './Control.module.css'
import { Context } from '../Provider'
import clsx from 'clsx'
import { listItemTextClasses } from '@mui/material'


function Control() {
    const {
        api,
        index,
        setIndex,
        list,
        listChecked,
        setListChecked,
        isVisible,
        setIsVisible,
        isDisable,
        setIsDisable }
        = useContext(Context)

    function handleSubmit() {
        alert(list.current.map(e => e))
    }




    function handleNext() {

        if (index < api.length - 1) {
            setIndex(index + 1)
        }

        if (index === api.length - 2 && api.length !== listChecked) {
            setIsDisable(true)
        }

        if (index === api.length - 1 && api.length === listChecked) {
            setIsVisible(true)
        }
    }
    function handlePrev() {
        setIsVisible(false)
        setIsDisable(false)
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
                <div

                    className={styles.process}>
                    <div className={styles.process__inner} style={{ width: `${listChecked * 100 / (api.length)}%` }} >
                        {listChecked * 100 / (api.length)}%
                    </div>
                </div>
                <button
                    disabled={isDisable}
                    className={clsx(styles.btn, {
                        [styles.Invisible]: isVisible,
                        [styles.disable_Btn]: isDisable
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