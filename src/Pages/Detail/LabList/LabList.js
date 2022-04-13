import React from 'react'
import styles from './LabList.module.css'
import { Link } from 'react-router-dom'

function LabList() {
    const labs = [
        {
            id: 0,
            type: 'basic',
            name: 'Đường về xứ phật - Tập 1 - Trưởng lão Thích Thông Lạc',
        },
        {
            id: 1,
            type: 'basic',
            name: 'Đường về xứ phật - Tập 2 - Trưởng lão Thích Thông Lạc',
            exp: '100 xp'
        },
        {
            id: 2,
            type: 'basic',
            name: 'Đường về xứ phật - Tập 3 - Trưởng lão Thích Thông Lạc',
            exp: '100 xp'
        },
        {
            id: 3,
            type: 'advanced',
            name: 'Đường về xứ phật - Tập 4 - Trưởng lão Thích Thông Lạc',
        },
        {
            id: 4,
            type: 'advanced',
            name: 'Đường về xứ phật - Tập 5 - Trưởng lão Thích Thông Lạc',
            exp: '100 xp'
        },
        {
            id: 5,
            type: 'advanced',
            name: 'Đường về xứ phật - Tập 6 - Trưởng lão Thích Thông Lạc',
        },
    ]
    return (
        <>
            <ul className={styles.lab__list}>
                <li className={`mb-3 ${styles.lab__title}`}>
                    <h3>
                        Cơ bản
                    </h3>
                </li>
                {
                    labs.filter(lab => lab.type === 'basic').map((lab, index) => <li key={index} className={styles.lab__item}>
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
                    labs.filter(lab => lab.type === 'advanced').map((lab, index) => <li key={index} className={styles.lab__item}>
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
        </>
    )
}

export default LabList