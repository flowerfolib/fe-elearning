import React, { useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Evaluate from '../Evaluate/Evaluate'
import Rating from '../Rating/Rating'
import Desc from './Desc/Desc'
import styles from './Nav.module.css'


function Nav({ data }) {
    const [content, setContent] = useState(3)
    const handleClick = e => {
        console.log(e.target.dataset.content)
        setContent(+e.target.dataset.content)
    }
    return <>
        <div className={styles.main}>
            <div className="container">
                <ul className={styles.nav}>
                    <li className={styles.nav__item}>
                        <Link to="/chi-tiet/mo-ta" onClick={handleClick} data-content={1} className={styles.nav__link}>
                            Mô tả
                        </Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link to="/chi-tiet/bai-hoc" onClick={handleClick} data-content={2} className={styles.nav__link}>
                            Khóa học
                        </Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link to="/chi-tiet/danh-gia" onClick={handleClick} data-content={3} className={styles.nav__link}>
                            Đánh giá
                        </Link>
                    </li>
                </ul>
            </div>
        </div >
        <div className="container">
            <div className="row py-5">
                <div className="col-md-8 px-5" style={{ border: '1px solid #eee' }}>
                    {
                        content === 1 ? <Desc data={data} /> : content === 2 ? 'content2' : <Rating />
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