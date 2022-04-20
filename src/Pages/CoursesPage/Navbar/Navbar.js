import React, { useEffect } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { toSlug } from '../../../Extensions/Extensions'
import styles from './Navbar.module.css'

function Navbar() {
    const handleClick = (e) => {
        const listActive = e.target.parentElement.querySelector('.' + styles.list__child)
        const height = listActive.lastChild.offsetTop + listActive.lastChild.offsetHeight - listActive.offsetTop + 2
        if (listActive.offsetHeight === 0) {
            listActive.style.height = height + 'px'
        } else {
            listActive.style.height = 0
        }
    }
    useEffect(() => {
        document.querySelectorAll('.' + styles.list__child).forEach(val => {
            const height = val.lastChild.offsetTop + val.lastChild.offsetHeight - val.offsetTop
            if (val.offsetHeight === 0) {
                val.style.height = height + 'px'
            } else {
                val.style.height = 0
            }
        })
    }, [])
    const handleClickMobile = e => {
        if (window.innerWidth <= 768) {
            const list = e.target.closest('.' + styles.list__child)
            list.style.height = 0
        }
    }
    const classSic = [
        {
            id: 0,
            name: 'Khóa học chung',
            cates: [
                "Hội nhập định hướng"
            ]
        },
        {
            id: 1,
            name: 'Khóa học theo ban',
            cates: [
                "Công nghệ",
                "Ban hiền tài",
                "Ban kiểm soát",
                "Ban cung ứng",
                "Ban PTKH",
                "Ban PTTH và SP",
                "Ban tài chính kế toán"
            ]
        }
    ]
    return <>
        <ul className={styles.list}>
            {
                // cates.map((val, index) => <li key={index} className={styles.item}>
                //     <Link to={`/khoa-hoc/${toSlug(val)}`} className={styles.item__link}>
                //         {val}
                //     </Link>
                // </li>)
                classSic && classSic.map((val, index) => {
                    return <div key={index} className={styles.wrap}>
                        <li onClick={handleClick} className={styles.item} >
                            {val.name}
                        </li>
                        <ul className={styles.list__child}>
                            {val.cates.map((item, id) => <li key={id} className={styles.item__child}>
                                <Link onClick={handleClickMobile} to={`/khoa-hoc/${toSlug(item)}`} className={styles.child__link}>
                                    {item}
                                </Link>
                            </li>)}
                        </ul>
                    </div>
                })
            }
        </ul >
    </>
}

export default Navbar