import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import TokenService from '../../services/token-service'
import Context from '../../context'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from'@fortawesome/free-solid-svg-icons'

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
              Dashboard
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
              <div className='icon-wrapper'>
            <button className='icon' onClick={e => this.handleNav()}><FontAwesomeIcon icon={faBars}/></button>
            </div>
            <ul id='menu' className='menu'>
                <li className="logo"><Link to={'/'}>keepbox</Link></li>
                <li>{TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}</li>
                <li>{TokenService.hasAuthToken()
                    ? this.renderUserLink()
                    : this.renderDemoLink()} </li>
                <li>{TokenService.hasAuthToken()
                    ? null
                    : <Link to={'/sign-up'}>Create Account</Link>}</li>
            </ul>
            
            </div>
        )
    }
}
