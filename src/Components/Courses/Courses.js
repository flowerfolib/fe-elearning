import React, { useEffect, useRef } from 'react'
import styles from './Courses.module.css'
import course from '../../Assets/Images/courses.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Courses() {
    const introRef = useRef()
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                console.log('active')
                introRef.current.classList.add(styles.laptopL)
            } else {
                console.log('remove')
                introRef.current.classList.remove(styles.laptopL)
            }
        }
        window.addEventListener('load', () => {
            handleResize()
            window.addEventListener('resize', handleResize)
        })
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return <>
        <section className={styles.main}>
            <div ref={introRef} className={styles.intro}>
                <h2 className={styles.intro__title}>
                    Hội nhập văn hóa Diligo Holdings
                </h2>
                <p className={styles.intro__content}>
                    Công tác đào tạo nhân viên, đào tạo chi nhánh,
                    nhà máy, nhà phân phối, thi và kiểm tra,
                    thống kê việc học tập lên môi trường đào tạo trực tuyến 100%
                </p>
            </div>
            <ul className={styles.course__list}>
                <li className={styles.course__item}>
                    <Link to="" className={styles.course__link}>
                        <div className={styles.img__wrap}>
                            <img src={course} alt="" className={styles.img} />
                        </div>
                        <h3 className={styles.item__title}>
                            Hội nhập văn hóa
                        </h3>

                    </Link>
                </li>
                <li className={styles.course__item}>
                    <Link to="" className={styles.course__link}>
                        <div className={styles.img__wrap}>
                            <img src={course} alt="" className={styles.img} />
                        </div>
                        <h3 className={styles.item__title}>
                            Hội nhập văn hóa
                        </h3>
                    </Link>
                </li>
                <li className={styles.course__item}>
                    <Link to="" className={styles.course__link}>
                        <div className={styles.img__wrap}>
                            <img src={course} alt="" className={styles.img} />
                        </div>
                        <h3 className={styles.item__title}>
                            Hội nhập văn hóa
                        </h3>
                    </Link>
                </li>
                <li className={styles.course__item}>
                    <Link to="" className={styles.course__link}>
                        <div className={styles.img__wrap}>
                            <img src={course} alt="" className={styles.img} />
                        </div>
                        <h3 className={styles.item__title}>
                            Hội nhập văn hóa
                        </h3>
                    </Link>
                </li>
                <li className={styles.course__item}>
                    <Link to="" className={styles.course__link}>
                        <div className={styles.img__wrap}>
                            <img src={course} alt="" className={styles.img} />
                        </div>
                        <h3 className={styles.item__title}>
                            Hội nhập văn hóa
                        </h3>
                    </Link>
                </li>
                <li className={styles.course__item}>
                    <Link to="" className={styles.course__link}>
                        <div className={styles.img__wrap}>
                            <img src={course} alt="" className={styles.img} />
                        </div>
                        <h3 className={styles.item__title}>
                            Hội nhập văn hóa
                        </h3>
                    </Link>
                </li>
            </ul>
        </section>
    </>
}

export default Courses