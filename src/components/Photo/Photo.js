import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

export default class Photo extends Component{
    render(){
        return(
            <div className='Photo'>
                <h2>Photo Name</h2>
                <div>Photo</div>
            </div>
        )
    }
}