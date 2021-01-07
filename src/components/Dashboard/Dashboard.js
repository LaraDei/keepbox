import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Album from '../DashboardAlbum/DashboardAlbum'
import AddAlbum from '../AddAlbum/AddAlbum'
import AddPhoto from '../AddPhoto/AddPhoto'
import DashboardNav from '../DashboardNav/DashboardNav'
import DashboardMain from '../DashboardMain/DashboardMain'
import context from '../../context'
import AlbumApiService from '../../services/album-api-service'
import TokenService from '../../services/token-service'
import './Dashboard.css'
import DashboardPhoto from '../DashboardPhoto/DashboardPhoto'
import Store from  '../../Store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from'@fortawesome/free-solid-svg-icons'

export default class Dashboard extends Component{
static contextType = context  

  componentDidMount() {
    const albumCall =  TokenService.hasAuthToken() ? AlbumApiService.getAlbums() : Store.albums
    const photoCall = TokenService.hasAuthToken() ? AlbumApiService.getPhotos() : Store.photos
       Promise.all([albumCall, photoCall]) 
          .then(([albums, photos]) => { 
            this.context.setAlbumList(albums)
            this.context.setPhotoList(photos)
            // localStorage.setItem("albums", JSON.stringify(...albums))
            // localStorage.setItem("photos", JSON.stringify(...photos))
          })
        
        .catch(error => {
          console.error({error});
        })
  }   

  openNav(){
    document.getElementById("DashboardNav").style.width = "250px";
  }

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
                    component={Album }
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
              <div className='Dashboard-nav'>
                {this.renderNavDashRoutes()}
              </div>
              <div className="dashboard-main">
                <button className='Dashboard-link NavCircleButton' onClick={e => this.openNav()} ><FontAwesomeIcon icon={faBars} /></button>  
                  {this.renderMainDashRoutes()}
              </div>
          </div>
      )
    }
}
