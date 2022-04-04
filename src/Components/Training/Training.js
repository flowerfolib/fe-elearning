import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from './Training.module.css'
import trainImg from '../../Assets/Images/courses.png'

function Training() {
    const handleChange = () => {

    }
    const lineRef = useRef()
    const firstChild = useRef()
    const handleClick = e => {
        const left = e.target.offsetLeft
        const width = e.target.offsetWidth
        lineRef.current.style.left = left + 'px'
        lineRef.current.style.width = width + 'px'
        document.querySelector('.' + styles.nav__item + '.' + styles.active).classList.remove(styles.active)
        e.target.closest('.' + styles.nav__item).classList.add(styles.active)
    }
    useEffect(() => {
        const handleLoad = () => {
            const left = firstChild.current.offsetLeft
            const width = firstChild.current.offsetWidth
            lineRef.current.style.left = left + 'px'
            lineRef.current.style.width = width + 'px'
            firstChild.current.classList.add(styles.active)
        }
        window.addEventListener('load', handleLoad())
    }, [])
    return (
        <div className={styles.main}>
            <h2 className={styles.title}>
                Đào tạo nội bộ
            </h2>
            <ul className={styles.nav}>
                <div ref={lineRef} className={styles.nav__line} />
                <li ref={firstChild} className={styles.nav__item}>
                    <Link to="" onClick={handleClick} className={styles.nav__link}>
                        Tất cả
                    </Link>
                </li>
                <li className={styles.nav__item}>
                    <Link to="" onClick={handleClick} className={styles.nav__link}>
                        Ban cung ứng
                    </Link>
                </li>
                <li className={styles.nav__item}>
                    <Link to="" onClick={handleClick} className={styles.nav__link}>
                        Ban công nghệ
                    </Link>
                </li>
                <li className={styles.nav__item}>
                    <Link to="" onClick={handleClick} className={styles.nav__link}>
                        Ban kiểm soát
                    </Link>
                </li>
                <li className={styles.nav__item}>
                    <Link to="" onClick={handleClick} className={styles.nav__link}>
                        Ban hiền tài
                    </Link>
                </li>
                <li className={styles.nav__item}>
                    <Link to="" onClick={handleClick} className={styles.nav__link}>
                        Ban PTKH
                    </Link>
                </li>
                <li className={styles.nav__item}>
                    <Link to="" onClick={handleClick} className={styles.nav__link}>
                        Ban PTTH và SP
                    </Link>
                </li>
                <li className={styles.nav__item}>
                    <Link to="" onClick={handleClick} className={styles.nav__link}>
                        Ban tài chính kế toán
                    </Link>
                </li>
            </ul>
            <ul className={styles.train__list}>
                <li className={styles.train__item}>
                    <Link className={styles.train__link}>
                        <img src={trainImg} alt="" className={styles.train__img} />
                        <p className={styles.train__title}>
                            Đường về xứ Phật
                        </p>
                    </Link>
                </li>
                <li className={styles.train__item}>
                    <Link className={styles.train__link}>
                        <img src={trainImg} alt="" className={styles.train__img} />
                        <p className={styles.train__title}>
                            Đường về xứ Phật
                        </p>
                    </Link>
                </li>
                <li className={styles.train__item}>
                    <Link className={styles.train__link}>
                        <img src={trainImg} alt="" className={styles.train__img} />
                        <p className={styles.train__title}>
                            Đường về xứ Phật
                        </p>
                    </Link>
                </li>
                <li className={styles.train__item}>
                    <Link className={styles.train__link}>
                        <img src={trainImg} alt="" className={styles.train__img} />
                        <p className={styles.train__title}>
                            Đường về xứ Phật
                        </p>
                    </Link>
                </li>
                <li className={styles.train__item}>
                    <Link className={styles.train__link}>
                        <img src={trainImg} alt="" className={styles.train__img} />
                        <p className={styles.train__title}>
                            Đường về xứ Phật
                        </p>
                    </Link>
                </li>
                <li className={styles.train__item}>
                    <Link className={styles.train__link}>
                        <img src={trainImg} alt="" className={styles.train__img} />
                        <p className={styles.train__title}>
                            Đường về xứ Phật
                        </p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Training