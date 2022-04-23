import React from 'react'
import styles from './Banner.module.css'
import {
    getName,
  } from "../../../Utils/Common";

function Banner({ data }) {
    const name = getName()
    const handleSubmit = (e) =>{
        console.log(name)
    }
        return <>
            {data &&
                <div className={styles.main} >
                    <div className="container py-3">
                        <div className="row mx-auto">
                            <div className="col-sm-12 col-md-4">
                                <img src={data.avatar} alt="" className={styles.avatar}/>
                            </div>
                            <div className="col-sm-12 col-md-8">
                                <div className={styles.info__wrap}>
                                    <h1 className={styles.title}>
                                        {data.name}
                                    </h1>
                                    <p
                                        className={styles.desc}
                                        dangerouslySetInnerHTML={{ __html: data.description.replaceAll('<p>', '').split('</p>')[0].italics() }}
                                    />
                                    <input type="submit" value="Tham gia" onClick={handleSubmit}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
}

export default Banner