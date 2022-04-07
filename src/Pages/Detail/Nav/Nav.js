import React from 'react'
import { Link, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Evaluate from '../Evaluate/Evaluate'
import Desc from './Desc/Desc'
import styles from './Nav.module.css'


function Nav({ data }) {
    return <>
        <div className={styles.main}>
            <div className="container">
                <ul className={styles.nav}>
                    <li className={styles.nav__item}>
                        <Link className={styles.nav__link}>
                            Mô tả
                        </Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link className={styles.nav__link}>
                            Khóa học
                        </Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link className={styles.nav__link}>
                            Đánh giá
                        </Link>
                    </li>
                </ul>
            </div>
        </div >
        <div className="container">
            <div className="row py-5">
                <div className="col-md-8 p-5" style={{border: '1px solid #eee'}}>
                    <Desc data={data} />
                </div>
                <div className="col-md-4">
                    <Evaluate data={data} />
                </div>
            </div>
        </div>
    </>
}

export default Nav