import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../Context/Context'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import Header from '../../Components/Header/Header'
import Banner from './Banner/Banner'
import styles from './Detail.module.css'
import Nav from './Nav/Nav'

function Detail() {
  const id = +useLocation().search.replace('?', '')
  const { data } = useContext(DataContext)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
    <>
      <Header />
      <div className={`${styles.main} pb-4`}>
        <Banner data={data[id]} />
        <Nav data={data[id]} />
      </div>
    </>
  )
}

export default Detail