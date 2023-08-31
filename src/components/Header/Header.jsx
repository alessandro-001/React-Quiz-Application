import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


export default function Header() {
  return (
    <div className='header' >
        <Link to='/' className='title' >
            QUIZTOPIA
        </Link>
        <hr className='divider' />
    </div>
  )
}
