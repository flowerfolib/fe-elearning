import React from 'react'
import styles from './LabList.module.css'
import { Link } from 'react-router-dom'

function LabList() {
    const labs = [
        {
            id: 0,
            name: 'Đường về xứ phật - Tập 1 - Trưởng lão Thích Thông Lạc',
        },
        {
            id: 0,
            name: 'Đường về xứ phật - Tập 1 - Trưởng lão Thích Thông Lạc',
            exp: '100 xp'
        },
        {
            id: 1,
            name: 'Đường về xứ phật - Tập 2 - Trưởng lão Thích Thông Lạc',
            exp: '100 xp'
        },
        {
            id: 2,
            name: 'Đường về xứ phật - Tập 3 - Trưởng lão Thích Thông Lạc',
            exp: '100 xp'
        },
        {
            id: 3,
            name: 'Đường về xứ phật - Tập 4 - Trưởng lão Thích Thông Lạc',
        },
        {
            id: 4,
            name: 'Đường về xứ phật - Tập 5 - Trưởng lão Thích Thông Lạc',
            exp: '100 xp'
        },
        {
            id: 5,
            name: 'Đường về xứ phật - Tập 6 - Trưởng lão Thích Thông Lạc',
        },
    ]
    return (
        <ul className={styles.lab__list}>
            {
                labs.map((lab, index) => <li key={index} className={styles.lab__item}>
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
                            
                        </span> {lab.name}
                    </Link>
                    {
                        lab.exp && <span className={styles.lab__exp}>
                            {lab.exp}
                        </span>
                    }
                </li>)
            }
        </ul>
    )
}

export default LabList