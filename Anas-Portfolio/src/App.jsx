import { React, useState } from 'react'
import Navbar from "./components/Navbar/index.jsx";
import HeroSection from "./components/HeroSection/index.jsx";
import Footer from './components/Footer/index.jsx';
import Skills from './components/Skills/index.jsx';
import Experience from './components/Experience/index.jsx';
import Projects from "./components/Projects/index.jsx";
import Education from './components/Education/index.jsx';
import Contact from "./components/Contact/index.jsx";



function App() {
  

  return (
    <>
     <Navbar />
     <HeroSection />
     <Skills />
     <Experience />
     <Education />
     <Projects />
     <Contact />
     <Footer />
    </>
  )
}

export default App
