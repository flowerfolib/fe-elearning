import React from 'react'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import Courses from '../../Components/Courses/Courses'
import Training from '../../Components/Training/Training'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return <>
    <Header />
    <Hero  />
    <Courses />
    <Training />
    <Footer />
  </>
}

export default Home