import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import styles from './main.module.css'
import logo from '../../Assets/Images/logo.png'
import Content from './Content/Content'
import Control from './Control/Control';
import Provider from "./Provider"
import { Link } from "react-router-dom/cjs/react-router-dom.min";




function Quiz() {



    return (
        <Provider>
            <div className={styles.main}>
                <Link
                    to={{
                        pathname: `/`,
                    }}
                >
                    <img src={logo} alt="logo" className={styles.logo} />

                </Link>
                <Content />
                <Control />



            </div>
        </Provider>
    )
}

export default Quiz