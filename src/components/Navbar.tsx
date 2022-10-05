import React from 'react'
import logo from '../assets/images/logo.svg'

function Navbar() {
  return (
    <nav className=' bg-slate-800 flex items-center justify-between py-7 px-5 text-white'>
      <div>
         <img src={logo} alt="Fylo logo" className='w-3/5'/>
      </div>
      <ul className='flex gap-3'>
         <li>Features</li>
         <li>Team</li>
         <li>Sign In </li>
      </ul>
    </nav>
  )
}

export default Navbar