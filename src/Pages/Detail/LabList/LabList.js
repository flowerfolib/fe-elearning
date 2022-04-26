import React, { useContext } from 'react'
import styles from './LabList.module.css'
import { Link } from 'react-router-dom'
import { DataContext } from "../../../Context/Context";
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


function LabList() {
    const id = useLocation().search.replace('?', '')
    const labPath = useLocation().pathname.split('/')[3]
    const { data } = useContext(DataContext);
    return (
        <> 
            {
                data[id] && data[id].lesson.map((vals, index) => <ul key={index} className={styles.lab__list}>
                    <li className={`my-3 ${styles.lab__title}`}>
                        <h3>
                            {vals.title}
                        </h3>
                    </li>
                    {
                        vals.slides.map(val => <li key={val.id} className={styles.lab__item}>
                            <Link
                                to={
                                    {
                                        pathname: `/khoa-hoc/chi-tiet/${labPath}/lab`,
                                        search: `${id}`,
                                        hash: `${data[id].lesson.indexOf(vals)}#${vals.slides.indexOf(val)}`
                                    }
                                }
                                className={styles.lab__link}
                            >
                                <span className={styles.lab__icon}>
                                    <i className="fa-solid fa-circle-play"></i>
                                </span>
                                <span>{val.name}</span>
                            </Link>
                            <div>
                            </div>
                        </li>)
                    }
                </ul>)
            }
        </>
    )
}

export default LabList