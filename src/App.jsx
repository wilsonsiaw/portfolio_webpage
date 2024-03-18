import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {
  
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
