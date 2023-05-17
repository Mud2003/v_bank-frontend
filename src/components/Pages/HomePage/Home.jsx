import React from 'react'
import NavBar from '../../NavBar/NavBar'
import Hero from '../HeroPage/Hero'
import About from '../About/About'
import Discover from '../Discover/Discover'
import Services from '../Services/Services'
import SignUp from '../SignUp/SignUp'
import Footer from '../../Footer/Footer'

export default function Home() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <About/>
      <Discover/>
      <Services/>
      <SignUp/>
      <Footer/>

    </>
  )
}
