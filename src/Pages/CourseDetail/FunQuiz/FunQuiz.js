import React from 'react';
import { useContext } from 'react';
import styles from './FunQuiz.module.css';
import { DataContext } from '../../../Context/Context'
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from 'react';
import clsx from 'clsx'
import { useRef } from 'react';
function FunQuiz() {

    const { data } = useContext(DataContext);
    const currCate = useLocation().hash.split("#")[1];
    const currLab = useLocation().hash.split("#")[2];
    const id = useLocation().search.replace("?", "");
    const funQuizList = data[id]?.lesson[currCate].slides[currLab].questions

    const [isDisabled, setIsDisabled] = useState(true)
    const list = useRef(new Array(funQuizList.length).fill(undefined))
    const [answerList, setAnswerList] = useState()
    const [isDone, setIsDone] = useState(false)
    const [correct, setCorrect] = useState([])
    let corr = []
    function HandleChecked(indexQ, indexA) {
        list.current[indexQ] = indexA
        setAnswerList(list.current.filter((e) => e !== undefined).length)
        console.log(list.current);

    }

    useEffect(() => {
        funQuizList.map(e => (
            e.answers.map((a, index) => {
                if (a.is_correct === true) {
                    return corr.push(index)
                }
            })
        ));
        setCorrect(corr)
    }, [])



    function showResult() {
        setIsDone(true)
    }

    useEffect(() => {
        answerList === list.current.length ? (setIsDisabled(false)) : (setIsDisabled(true))
    }, [answerList])

    return (
        <div className={`${styles.main}`}>
            {funQuizList.length !== 0
                ? <>
                    {funQuizList.map((q, indexQ) => (
                        <form
                            key={indexQ}
                            className={`${styles.container}`}
                        >
                            <h4>
                                <span>Câu {indexQ + 1}: </span>
                                {q.question}
                            </h4>
                            {q.answers.map((a, indexA) => (
                                <div key={indexA} >
                                    <input
                                        // checked
                                        type="radio"
                                        id={a.value}
                                        name={q.question}
                                        onChange={() => HandleChecked(indexQ, indexA)}
                                    />
                                    <label
                                        for={a.value}
                                        style={{ marginLeft: "10px" }}
                                    >
                                        {a.value}
                                    </label>
                                </div>
                            ))}

                        </form>)
                    )}
                    <div className={`${styles.btnWrap}`}>
                        <button
                            disabled={isDisabled}
                            className={
                                clsx(styles.btn, {
                                    [styles.disable]: isDisabled
                                })
                            }
                            onClick={showResult}
                        >Hoàn thành</button>

                    </div>
                    {isDone ? (<div><p>Bạn đã đúng </p></div>) : (<></>)}
                </>
                : (<h1
                    style={{ textAlign: "center" }}
                >
                    Hiện không có câu đố vui nào</h1>)
            }
        </div>
    )
}

export default FunQuiz