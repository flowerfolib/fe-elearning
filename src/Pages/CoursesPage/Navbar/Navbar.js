import React, { useContext } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { toSlug } from '../../../Extensions/Extensions'
import { DataContext } from '../Context/Context'
import styles from './Navbar.module.css'

function Navbar() {
    const { cates } = useContext(DataContext)
    return <>
        <ul className={styles.list}>
            {
                cates.map((val, index) => <li key={index} className={styles.item}>
                    <Link to={`/khoa-hoc/${toSlug(val)}`} className={styles.item__link}>
                        {val}
                    </Link>
                </li>)
            }
        </ul>
    </>
}

export default Navbar