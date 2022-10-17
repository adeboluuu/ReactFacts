import React from 'react'
import Logo from '../assets/react-logo.png'

const Nav = () => {
  return (
    <nav className='flex'>
        <img className="react-logo"src={Logo}alt="Logo"style={{width:"40px",height:"30px",backgroundColor:"#21222A "}}/>
        <h3>ReactFacts</h3>
        <h4>React Course -Project1</h4>
    </nav>
  )
}

export default Nav