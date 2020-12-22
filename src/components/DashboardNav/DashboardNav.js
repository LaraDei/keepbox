import React, {Component} from 'react'
import {NavLink, Link} from 'react-router-dom'
import './DashboardNav.css'

export default class DashboardNav extends Component{
    render(){
        return(
            <div className='DashboardNav'>
                <ul className='DashboardNav-list'>
                    <li>
                        <NavLink
                          className='DashboardNav-album-link'
                          to={`/user/album/:albumId`}
                        >
                        Album Name
                        </NavLink>
                    </li>
                </ul>
                <div className='DashboardNav-button-wrapper'>
                    <button>
                        <Link to={'/user/add-album'}
                        >
                        Add Album
                        </Link>
                    </button>
                    <button>
                        <Link to={'/user/add-photo'}
                        >
                        Add Photo
                        </Link>
                    </button>
                </div>
            </div>
        )
    }
}