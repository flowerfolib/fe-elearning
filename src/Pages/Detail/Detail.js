import React, { useContext } from 'react'
import { DataContext } from '../../Context/Context'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import Header from '../../Components/Header/Header'
import Banner from './Banner/Banner'
import styles from './Detail.module.css'

function Detail() {
  const id = +useLocation().search.replace('?','')
  const { data } = useContext(DataContext)
  return (
    <div className={styles.main}>
      <Header />
      <Banner data={data[id]} />
    </div>
  )
}

export default Detail