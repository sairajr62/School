import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    
   <>
  <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow static">  
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About Us</Link></li>
        <li><Link to="/Admissions">Admissions</Link></li>
        <li><Link to="/Contact">Contact Us</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl flex items-center justify-center"> 
    <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
      Springdale Public School </a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 static text-center">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/About">About Us</Link></li>
      <li><Link to="/Admissions">Admissions</Link></li>
      <li><Link to="/Contact">Contact Us</Link></li>
    </ul>
  </div>
</div>
   </>
  )
}

export default Navbar