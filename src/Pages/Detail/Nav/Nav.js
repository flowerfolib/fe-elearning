import React, { useState } from 'react'
import { Link, Route, Switch, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import Evaluate from '../Evaluate/Evaluate'

import LabList from '../LabList/LabList'

import Rating from '../Rating/Rating'

import Desc from './Desc/Desc'
import styles from './Nav.module.css'


function Nav({ data }) {
    const id = useLocation().search.replace('?', '')
    return <>
        <div className={styles.main}>
            <div className="container">
                <ul className={styles.nav}>
                    <li className={styles.nav__item}>
                        <Link
                            to={{
                                pathname: "/khoa-hoc/chi-tiet",
                                search: "mo-ta"
                            }}
                            data-content={1}
                            className={styles.nav__link}>
                            Mô tả
                        </Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link
                            to={{
                                pathname: "/khoa-hoc/chi-tiet",
                                search: "bai-hoc"
                            }}
                            data-content={2}
                            className={styles.nav__link}>
                            Khóa học
                        </Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link
                            to={{
                                pathname: "/khoa-hoc/chi-tiet",
                                search: "danh-gia"
                            }}
                            data-content={3}
                            className={styles.nav__link}>
                            Đánh giá
                        </Link>
                    </li>
                </ul>
            </div>
        </div >
        <div className="container">
            <div className="row py-5">
                <div className="col-md-8 p-5" style={{ border: '1px solid #eee' }}>
                    {
                        id === "mo-ta" ? <Desc data={data} /> : id === "bai-hoc" ? <LabList /> : <Rating />
                    }
                </div>
                <div className="col-md-4">
                    <Evaluate data={data} />
                </div>
            </div>
        </div>
    </>
}

export default Nav