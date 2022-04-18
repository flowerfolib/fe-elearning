import React, { useState } from 'react'
import { Link, Route, Switch, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import Evaluate from '../Evaluate/Evaluate'

import LabList from '../LabList/LabList'

import Rating from '../Rating/Rating'

import Desc from './Desc/Desc'
import styles from './Nav.module.css'


function Nav({ data }) {
    const id = useLocation()
    console.log(id.hash)
    return <>
        <div className={styles.main}>
            <div className="container">
                <ul className={styles.nav}>
                    <li className={styles.nav__item}>
                        <Link
                            to={{
                                pathname: id.pathname,
                                search: id.search,
                                hash: ''
                            }}
                            data-content={1}
                            className={styles.nav__link}>
                            Mô tả
                        </Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link
                            to={{
                                pathname: id.pathname,
                                search: id.search,
                                hash: 'bai-hoc'
                            }}
                            data-content={2}
                            className={styles.nav__link}>
                            Khóa học
                        </Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link
                            to={{
                                pathname: id.pathname,
                                search: id.search,
                                hash: 'danh-gia'
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
                        id.hash === "" ? <Desc data={data} /> : id.hash === "#bai-hoc" ? <LabList data={data} /> : <Rating />
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