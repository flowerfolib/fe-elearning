import React,{useState,useEffect} from 'react'
import styles from './Search.module.css'

function Search() {
    const [value,setValue] = useState("")
    useEffect(() => {
        console.log(value)
    },[value])
    return (
        <section className={`${styles.main} container px-5`} style={{borderRadius:'10px'}}>
            <div className={styles.wrap}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Search..." 
                    value={value}
                    onChange={e => setValue(e.target.value)}/>
                <button className={styles.btn}>
                    Tìm kiếm
                </button>
            </div>
        </section>
    )
}

export default Search