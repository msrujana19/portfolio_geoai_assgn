import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <div className="animated-bg"></div>
      <div className="p-4 bg-blue-600/20 text-center text-sm font-medium text-blue-400">
        Tailwind CSS v4 is Active
      </div>
      <Navigation />
      <Hero />
      <TechStack />
      <Projects />
      <Footer />
    </>
  )
}

export default App
