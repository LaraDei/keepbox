import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import Dashboard from './components/Dashboard/Dashboard'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import config from './config'
import './App.css'

export default class App extends Component {
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
    return (
      <div className="App">
        <NavBar/>
        <main className="app-main">
          {this.renderMainRoutes()}
        </main>
        <footer>Footer</footer>
      </div>
    )
  }
}

