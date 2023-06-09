import React from 'react'
import "./App.css"
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Services from './Components/Services/Services'
import Qualification from './Components/Qualification/Qualification'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header />

      <main className='main'> 
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Project />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App