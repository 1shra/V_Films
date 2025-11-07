import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import menuIcon from '../assets/Open-Vector.png'
import closeIcon from  '../assets/Close-Vector.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='fixed top-0 left-0 w-full bg-white z-1 px-10'>
      {/* Hamburger PNG */}
      <button onClick={()=>setIsOpen(!isOpen)} 
        className="fixed right-5 top-4 z-50 flex flex-col justify-center items-center w-10 h-10 space-y-2 p-2 rounded-full">
        <img
          src={isOpen ? closeIcon : menuIcon} 
          alt={isOpen ? "Close menu" : "Open menu"}
          className="w-7 h-7 object-contain"
        />
      </button>

      {/* Navigation Items */}
      <ul className={`flex justify-end pr-16 space-x-5 py-4 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      >
        <li><Link to="/" className="hover:text-gray-600">Hero</Link></li>

        <li><Link to="/services" className="hover:text-gray-600">Services</Link></li>
        <li><Link to="/their-stories" className="hover:text-gray-600">Their Stories</Link></li>
        <li><Link to="/ourstory" className="hover:text-gray-600">Our Story</Link></li>
        <li><Link to="/varman" className="hover:text-gray-600">Varman</Link></li>
        <li><Link to="/lets-talk" className="hover:text-gray-600">Let's Talk</Link></li>
      </ul>
    </div>
  )
}

export default Navbar