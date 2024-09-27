import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';



import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Caraousel from './components/Caraousel/caraousel'
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Admissions from './components/Pages/Admissions';

function App() {
  

  return (
    <Router>
    <>
      <Navbar />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Admissions" element={<Admissions/>} />
      </Routes>
      <Caraousel />
      <Footer />
    </>
  </Router>
);
}

export default App
