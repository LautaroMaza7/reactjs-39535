import React from 'react'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import About from './Components/about/About'
import Experience from './Components/experience/Experience'
/* import Services from './Components/services/Services' */
import Portfolio from './Components/portfolio/Portfolio'
/* import Testimonials from './Components/testimonials/Testimonials' */
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
import Salones from './Components/CarrouselItems/Salones'
const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
      <Experience />
      <Salones/>
{/*         <Services /> */}
        <Portfolio />
{/*         <Testimonials /> */}
        <Contact />
        <Footer />
    </>
  )
}

export default App