import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
    return(
        <div className="nav-bar">
        <ul className="home">
            <li><Link to={'/'}>Home</Link></li>
        </ul>
        <ul className="menu"> 
            <li><Link to={'/sign-in'}>Sign In/Out</Link></li>
            <li><Link to={'/sign-up'}>Create Account</Link></li>
            <li><Link to={'/user'}>Demo</Link></li>
        </ul>
        </div>
    )
}

