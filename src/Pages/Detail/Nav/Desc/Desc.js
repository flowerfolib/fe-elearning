import React from 'react'
import styles from './Desc.module.css'

function Desc({ data }) {
    return <>
        {data &&
            <div className={styles.main}>
                <h2 className={styles.title}>
                    {data.name}
                </h2>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.description.replaceAll('<br>', '') }}></div>
            </div>
        }
    </>
}

export default Desc