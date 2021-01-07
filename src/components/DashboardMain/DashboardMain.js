import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Context from '../../context'
import TokenService from '../../services/token-service'
import './DashboardMain.css'


export default class DashboardMain extends Component{
    static contextType = Context
    render(){
        const { albums=[] } = this.context
        return(
            <div className='DashboardMain'>
<               div className='DashboardMain-header'>
                    <h1>
                    {TokenService.hasAuthToken() 
                      ?  'Your Dashboard'
                      : 'Demo Dashboard'}
                    </h1>
                    <p>Welcome to <span className='logo'>keepbox</span>!</p> 
                </div>
                <div className='album-list-main'>
                    {albums.map(album =>
                        <div className='album-link-main' key={album.id}>
                            <Link
                            to={`/user/album/${album.id}`}
                            >
                            {album.title}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
