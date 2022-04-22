import React from 'react'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import Courses from '../../Components/Courses/Courses'
import Vid from '../../Components/Vid/Vid'
import Training from '../../Components/Training/Training'
import Footer from '../../Components/Footer/Footer'
import styles from './Home.module.css'

function Home() {
  return <>
    <Header />
    <Hero  />
    <Courses />
    {/* <Vid /> */}
    <Training />
    <Footer />
  </>
}

export default Home