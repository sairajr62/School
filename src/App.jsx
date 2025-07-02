import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Admissions from './components/Pages/Admissions';
import Caraousel from './components/Caraousel/Caraousel';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Caraousel/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Admissions" element={<Admissions/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
  </>
);
}

export default App
