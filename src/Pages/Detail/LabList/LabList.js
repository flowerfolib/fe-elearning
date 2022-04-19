import React, { useContext } from 'react'
import styles from './LabList.module.css'
import { Link } from 'react-router-dom'
import { DataContext } from "../../../Context/Context";
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


function LabList() {
    const id = useLocation().search.replace('?', '')
    const { data } = useContext(DataContext);
    console.log(data[id] && data[id].lesson)
    return (
        <>
            {/* <ul className={styles.lab__list}>
                <li className={`mb-3 ${styles.lab__title}`}>
                    <h3>
                        Cơ bản
                    </h3>
                </li>
                {
                    data.filter(lab => lab['lesson'].title === 'CƠ BẢN').map((lab, index) => <li key={index} className={styles.lab__item}>
                        <Link
                            to={
                                {
                                    pathname: "/khoa-hoc/chi-tiet/lab",
                                    search: `${lab.id}`
                                }
                            }
                            className={styles.lab__link}
                        >
                            <span className={styles.lab__icon}>
                                <i className="fa-solid fa-circle-play"></i>
                            </span> {lab.name}
                        </Link>
                        <div>
                        </div>
                    </li>)
                }
            </ul>
            <ul className={styles.lab__list}>
                <li className={`mt-5 mb-3 ${styles.lab__title}`}>
                    <h3>
                        Nâng cao
                    </h3>
                </li>
                {
                    data.filter(lab => lab['lesson'].title === 'TRUNG CẤP').map((lab, index) => <li key={index} className={styles.lab__item}>
                        <Link
                            to={
                                {
                                    pathname: "/khoa-hoc/chi-tiet/lab",
                                    search: `${lab.id}`
                                }
                            }
                            className={styles.lab__link}
                        >
                            <span className={styles.lab__icon}>
                                <i className="fa-solid fa-circle-play"></i>
                            </span> {lab.name}
                        </Link>
                        <div>
                        </div>
                    </li>)
                }
            </ul> */}
            {
                data[id] && data[id].lesson.map((vals, index) => <ul key={index}>
                    <li className={`mt-5 mb-3 ${styles.lab__title}`}>
                        <h3>
                            {vals.title}
                        </h3>
                    </li>
                    {
                        vals.slides.map(val => <li key={val.id} className={styles.lab__item}>
                            <Link
                                to={
                                    {
                                        pathname: "/khoa-hoc/chi-tiet/lab",
                                        search: `${val.id}`
                                    }
                                }
                                className={styles.lab__link}
                            >
                                <span className={styles.lab__icon}>
                                    <i className="fa-solid fa-circle-play"></i>
                                </span> {val.name}
                            </Link>
                            <div>
                            </div>
                        </li>)
                    }
                </ul>)
            }
        </>
    )
}

export default LabList