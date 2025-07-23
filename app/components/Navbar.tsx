import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className='navbar my-2'>
      <Link to='/'>
        <p className='text-2xl font-bold text_gradient '>GREATS</p>
      </Link>
      <Link to='/upload' className='primary_button w-fit'>
        Upload Document
      </Link>
    </nav>
  )
}

export default Navbar