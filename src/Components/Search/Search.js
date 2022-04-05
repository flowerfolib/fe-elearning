import React from 'react'
import styles from './Search.module.css'

function Search() {
    return (
        <section className={styles.main}>
            <div className={styles.wrap}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Search..." />
                <button className={styles.btn}>
                    Tìm kiếm
                </button>
            </div>
        </section>
    )
}

export default Search