import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
    function handleNav() {
        var x = document.getElementById("menu");
        if (x.className === "menu") {
            x.className += " responsive";
          } else {
            x.className = "menu";
          }
      }
    return(
        <div className="nav-bar">
        <ul id='menu' className='menu'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/sign-in'}>Sign In</Link></li>
            <li><Link to={'/sign-up'}>Create Account</Link></li>
            <li><Link to={'/user'}>Demo</Link></li>
        </ul>
        <button className='icon' onClick={e => handleNav()}>&#9776;</button>
        </div>
    )
}

