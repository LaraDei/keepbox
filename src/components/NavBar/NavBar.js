import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import TokenService from '../../services/token-service'
import Context from '../../context'
import './NavBar.css'

export default class NavBar extends Component {
  static contextType = Context  
  
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        this.context.handleLog()
      }
    
      renderLogoutLink() {
        return (
          <div className='Header__logged-in'>
            <Link
              onClick={this.handleLogoutClick}
              to='/'>
              Logout
            </Link>
          </div>
        )
      }
    
      renderLoginLink() {
        return (
          <div className='Header__not-logged-in'>
            <Link
              to='/sign-in'>
              Sign in
            </Link>
          </div>
        )
      }

      renderUserLink() {
        return (
          <div className='Header__dashboard-logged-in'>
            <Link
              to='/user'>
              Dasboard
            </Link>
          </div>
        )
      }

      renderDemoLink() {
        return (
          <div className='Header__dashboard-demo'>
            <Link
              to='/user'>
              Demo
            </Link>
          </div>
        )
      }

   handleNav() {
        var x = document.getElementById("menu");
        if (x.className === "menu") {
            x.className += " responsive";
          } else {
            x.className = "menu";
          }
      }

      render() {
        return(
            <div className="nav-bar">
            <ul id='menu' className='menu'>
                <li><Link to={'/'}>Home</Link></li>
                <li>{TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}</li>
                <li><Link to={'/sign-up'}>Create Account</Link></li>
                <li>{TokenService.hasAuthToken()
                    ? this.renderUserLink()
                    : this.renderDemoLink()} </li>
            </ul>
            <button className='icon' onClick={e => this.handleNav()}>&#9776;</button>
            </div>
        )
    }
}
