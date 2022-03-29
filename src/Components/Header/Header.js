import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from './Header.module.css'

function Header() {
    const headerRef = useRef()
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                headerRef.current.classList.add(styles.active)
            } else {
                headerRef.current.classList.remove(styles.active)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <header ref={headerRef} className={styles.main}>
            <Link to="/" className={styles.logo}>
                <img src="../../images/logo.png" alt="Elearning" />
            </Link>
            <ul className={styles.nav}>
                <li className={styles.item}>
                    <Link to="/" className={styles.item__link}>
                        Trang chủ
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to="/khoa-hoc" className={styles.item__link}>
                        Khóa học
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to="/ky-thi" className={styles.item__link}>
                        Kỳ thi
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to="/ho-tro" className={styles.item__link}>
                        Hỗ trợ
                    </Link>
                </li>
            </ul>
            <Link to="/login" className={styles.login}>
                Đăng nhập
            </Link>
        </header>
    )
}

export default Header