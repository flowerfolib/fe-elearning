import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import styles from './main.module.css'
import logo from '../../Assets/Images/logo.png'
import Content from './Content/Content'
import Control from './Control/Control';

function Quiz() {
    return (
        <div className={styles.main}>
            <img src={logo} alt="logo" className={styles.logo} />
            <Content />
            <Control />
        </div>
    )
}

export default Quiz