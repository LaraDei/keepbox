import React, {Component} from 'react'
import {NavLink, Link} from 'react-router-dom'
import Context from '../../context'
import './DashboardNav.css'

export default class DashboardNav extends Component{
    static contextType = Context
    render(){
        const { albums=[] } = this.context
        return(
            <div className='DashboardNav'>
                <ul className='DashboardNav-list'>
                    {albums.map(album =>
                        <li key={album.id}>
                            <NavLink
                            className='DashboardNav-album-link'
                            to={`/user/album/${album.id}`}
                            >
                            {album.title}
                            </NavLink>
                        </li>
                    )}
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