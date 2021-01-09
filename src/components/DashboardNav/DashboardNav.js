import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import Context from '../../context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faPlus } from'@fortawesome/free-solid-svg-icons'

import './DashboardNav.css'

export default class DashboardNav extends Component{
    static contextType = Context

    closeNav() {
        document.getElementById("DashboardNav").style.width = "0";
    }
    render(){
        const { albums=[] } = this.context
        return(
            <div className='DashboardNav' id='DashboardNav'>
                <div className="closeContainer">
                    <button className="closebtn" onClick={e => this.closeNav()}> <FontAwesomeIcon icon={faTimesCircle} /></button>
                    <label className="close">close</label>
                </div>
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
                    
                        <NavLink className="NavCircleButton dasNavAddBtn" to={'/user/add-album'}
                        >
                        <FontAwesomeIcon icon={faPlus} /> Album
                        </NavLink>
                    
            
                        <NavLink className="NavCircleButton dasNavAddBtn" to={'/user/add-photo'}
                        > 
                        <FontAwesomeIcon icon={faPlus} /> Photo
                        </NavLink>
                    
                </div>
            </div>
        )
    }
}