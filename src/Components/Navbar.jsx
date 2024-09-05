import React from 'react'
import {Outlet, NavLink } from 'react-router-dom'
import '../Style/Navbar.css'
import dp2 from '../Assets/dp2.png'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <img src={dp2} alt="" />
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/education'>Education</NavLink></li>
                <li><NavLink to='/skills'>Skills</NavLink></li>
                <li><NavLink to='/projects'>Projects</NavLink></li>
                <li><NavLink to='/contact'>Contact Me</NavLink></li>

            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Navbar

