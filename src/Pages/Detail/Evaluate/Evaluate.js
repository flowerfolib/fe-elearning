import React from 'react'
import styles from './Evaluate.module.css'

function Evaluate({ data }) {
    return (
        <div className={styles.main}>
            <div className="d-flex flex-column">
                <div className={`${styles.lecturer} py-5 d-flex flex-column align-items-center`} style={{ border: '1px solid #eee' }}>
                    <img src={data.avatar_lecturers} alt="" className={styles.lecture__img} />
                    <div className={styles.lecture__info}>
                        <div className={styles.info__wrap}>
                            <span className={styles.info__title}>
                                Tên giảng viên :
                            </span>
                            <span className={styles.info__desc}>
                                Nguyễn Trần Nhiệm
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
                                Trưởng ban CNTT
                            </span>
                        </div>
                    </div>
                </div>
                <div className={`${styles.rating} p-5 mt-3 d-flex flex-column align-items-center`} style={{ border: '1px solid #eee' }}>
                    <h3 className={styles.rate__title}>
                        Đánh giá
                    </h3>
                    <div className={styles.title__wrap}>
                        <span className={styles.rate__total}>
                            3.6
                        </span>
                        <span className={styles.star__main}>★</span>
                    </div>
                    <div className={styles.wrap}>
                        <span className={styles.rate__number}>
                            5
                        </span>
                        <span className={styles.rate__item}>
                            ★★★★★
                        </span>
                    </div>
                    <div className={styles.wrap}>
                        <span className={styles.rate__number}>
                            4
                        </span>
                        <span className={styles.rate__item}>
                            ★★★★
                        </span>
                    </div>
                    <div className={styles.wrap}>
                        <span className={styles.rate__number}>
                            3
                        </span>
                        <span className={styles.rate__item}>
                            ★★★
                        </span>
                    </div>
                    <div className={styles.wrap}>
                        <span className={styles.rate__number}>
                            2
                        </span>
                        <span className={styles.rate__item}>
                            ★★
                        </span>
                    </div>
                    <div className={styles.wrap}>
                        <span className={styles.rate__number}>
                            1
                        </span>
                        <span className={styles.rate__item}>
                            ★
                        </span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Evaluate