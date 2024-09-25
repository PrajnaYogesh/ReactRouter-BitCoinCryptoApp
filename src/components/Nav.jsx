import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    
    <div className="nav">
    <Link to='/'> <button>CrypoPrices</button> </Link>
    <Link to='/currencies'> <button>Currency</button> </Link>
    </div>

  )
}

export default Nav