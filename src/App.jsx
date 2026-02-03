import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <div className="animated-bg"></div>
      <Navigation />
      <Hero />
      <TechStack />
      <Projects />
      <Footer />
    </>
  )
}

export default App
