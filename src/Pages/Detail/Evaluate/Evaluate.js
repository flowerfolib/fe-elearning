import React from 'react'
import styles from './Evaluate.module.css'
import lecture from '../../../Assets/Images/Detail/lecture.jpg'

function Evaluate({ data }) {
    console.log(data);
    return (
        <div className={styles.main}>
            <div className="d-flex flex-column">
                <div className={`${styles.lecturer} py-5 d-flex flex-column align-items-center`} style={{ border: '1px solid #eee' }}>
                    <img src={lecture} alt="" className={styles.lecture__img} />
                    <div className={styles.lecture__info}>
                        <div className={styles.info__wrap}>
                            <span className={styles.info__title}>
                                Tên giảng viên :
                            </span>
                            <span className={styles.info__desc}>
                                Lee Wang Nong
                            </span>
                        </div>
                        <div className={styles.info__wrap}>
                            <span className={styles.info__title}>
                                Thâm niên :
                            </span>
                            <span className={styles.info__desc}>
                                Tuần trước
                            </span>
                        </div>
                        <div className={styles.info__wrap}>
                            <span className={styles.info__title}>
                                Vị trí :
                            </span>
                            <span className={styles.info__desc}>
                                End Developer
                            </span>
                        </div>
                    </div>
                </div>
                <div className={`${styles.rating} py-5 mt-3 d-flex flex-column align-items-center`} style={{ border: '1px solid #eee' }}>
                    <h3 className={styles.rate__title}>
                        Đánh giá
                    </h3>
                    <div className={styles.wrap}>
                        <span className={styles.star}>★★★★★</span>
                    </div>nop
                </div>
            </div>
        </div >
    )
}

export default Evaluate