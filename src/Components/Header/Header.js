import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Header.module.css'
import logo from '../../Assets/Images/logo.png'

function Header() {
    const headerRef = useRef()
    const navRef = useRef()
    const [show, setShow] = useState(false)
    const showStyle = {
        fontSize: '10vw',
        color: 'var(--text)',
    }
    const handleShow = () => {
        if (window.innerWidth <= 768) {
            setShow(!show)
        }
    }
    useEffect(() => {
        if (show) {
            const lastItem = navRef.current.lastChild
            const height = lastItem.offsetTop + lastItem.offsetHeight
            navRef.current.style.height = height + 'px'
        } else {
            navRef.current.style.height = 0
        }
    }, [show])
    return (
        <header ref={headerRef} className={styles.main} >
            <Link to="/" className={styles.logo}>
                <img src={logo} alt="Elearning" />
            </Link>
            <ul ref={navRef} className={styles.nav}>
                <li className={styles.item}>
                    <Link onClick={handleShow} to="/" className={styles.item__link}>
                        Trang chủ
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link onClick={handleShow} to="/khoa-hoc" className={styles.item__link}>
                        Khóa học
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link onClick={handleShow} to="/ky-thi" className={styles.item__link}>
                        Kỳ thi
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link onClick={handleShow} to="/ho-tro" className={styles.item__link}>
                        Hỗ trợ
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link onClick={handleShow} to="/login" className={styles.login} id={styles.login__mobile}>
                        Đăng nhập
                    </Link>
                </li>
            </ul>
            <Link to="/login" className={styles.login}>
                Đăng nhập
            </Link>
            <MenuIcon onClick={handleShow} className={styles.btn__show} sx={showStyle} />
        </header>
    )
}

export default Header