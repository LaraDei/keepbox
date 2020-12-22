import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import './SignIn.css'


export default class SignIn extends Component{
    render(){
        return(
            <div className="SignIn">
                <h1>Sign In</h1>
                <form className='signin-form'>
                    <div>
                    <label htmlFor="user-name">User name: </label>
                    <input placeholder='User Name' type="text" name='user-name' id='user-name' />
                    </div>
                    <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name='password' id='password' />
                    </div>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        )
    }
}