import React from 'react'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import Courses from '../../Components/Courses/Courses'
import Training from '../../Components/Training/Training'
import Footer from '../../Components/Footer/Footer'
import Lectures from '../../Components/Lectures/Lectures'

function Home() {
  return <>
    <Header />
    <Hero  />
    <Courses />
    <Lectures/>
    <Training />
    <Footer />
  </>
}

export default Home