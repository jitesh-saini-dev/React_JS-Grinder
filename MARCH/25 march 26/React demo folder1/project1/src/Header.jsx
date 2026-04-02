import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/About'}>Home</Link>
        <Link to={'/Cart'}>Home</Link>
        <Link to={'/Contact'}>Home</Link>
        <Link to={'/'}>Home</Link>

    </div>
  )
}

export default Header