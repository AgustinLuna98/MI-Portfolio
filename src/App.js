import React from 'react'

//components
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'
// import Testimonials from './components/testimonials/Testimonials'
// import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Services from './components/services/Services'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        {/* <Portfolio />
        <Testimonials /> */}
        <Contact />
        <Footer />      
    </>
  )
}

export default App
