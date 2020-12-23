import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Album from '../Album/Album'
import AddAlbum from '../AddAlbum/AddAlbum'
import AddPhoto from '../AddPhoto/AddPhoto'
import DashboardNav from '../DashboardNav/DashboardNav'
import DashboardMain from '../DashboardMain/DashboardMain'
import Context from '../../context'
import './Dashboard.css'
import DashboardPhoto from '../DashboardPhoto/DashboardPhoto'

export default class Dashboard extends Component{
    static defaultProps = {
        match: {
          params: {}
        }
      }
      
    static contextType = Context

    renderNavDashRoutes() {
        return (
          <>
            {['/user', '/user/album/:albumId', '/user/photo/:photoId', '/user/add-album', '/user/add-photo'  ].map(path => (
                <Route
                exact
                    key={path}
                    path={path}
                    component={DashboardNav}
                />
            ))}
          </>
        )
    }

    renderMainDashRoutes(){
        return(
          <>
            {['/user/album/:albumId'].map(path => (
                <Route
                    key={path}
                    path={path}
                    component={Album}
                />
            ))}
            <Route exact path='/user' component={DashboardMain}/>
            <Route path='/user/photo/:photoId' component={DashboardPhoto}/>
            <Route path='/user/add-album' component={AddAlbum} />
            <Route path='/user/add-photo' component={AddPhoto} />
          </>
        )
    }

    render(){
        return(
            <div className='Dashboard'>
                <nav className='Dashboard-nav'>  
                    {this.renderNavDashRoutes()}
                </nav>
                <div className="dashboard-main">
                    {this.renderMainDashRoutes()}
                </div>
            </div>
        )
    }
}