import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import Dashboard from './components/Dashboard/Dashboard'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Context from './context'
//import config from './config'
import Store from './Store'
import './App.css'

export default class App extends Component {
  state = {
    photos: [],
    albums: []
  }

  componentDidMount() {
      // fake date loading from API call
      setTimeout(() => this.setState(Store), 600);
  }

  handleDeletePhoto = photoId => {
    this.setState({
      photos: this.state.photos.filter(photo => photo.id !== photoId)
    })
  }

  handleAddAlbum = album =>{
    this.setState(
        {
          albums: [...this.state.albums, album]
        },
    )
  }

  handleAddPhoto = photo =>{
    this.setState(
        {
          photos: [...this.state.photos, photo]
        },
    )
  }

  renderMainRoutes(){
    return(
      <>
        <Route
            exact
            path='/'
            component={LandingPage}
        />
        <Route
            path='/user'
            component={Dashboard}
        />
        <Route
            path='/sign-up'
            component={SignUp}
        />
        <Route
            path='/sign-in'
            component={SignIn}
        />
      </>
    )
}


  render(){
    const value = {
      photos: this.state.photos,
      albums: this.state.albums,
      deletePhoto: this.handleDeletePhoto,
      addAlbum: this.handleAddAlbum,
      addPhoto: this.handleAddPhoto,
    }
    return (
      <Context.Provider value={value}>
      <div className="App">
        <NavBar/>
        <main className="app-main">
          {this.renderMainRoutes()}
        </main>
        <footer>Footer</footer>
      </div>
      </Context.Provider>
    )
  }
}

