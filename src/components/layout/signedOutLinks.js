import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return(
    <ul className="right">
      <li><NavLink to='/'>Sign up</NavLink></li>
      <li><NavLink to='/'>Log in</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks;