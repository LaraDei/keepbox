import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

export default class Album extends Component{
    render(){
        return(
            <div className='Album'>
                <h2>Album Name</h2>
                <div>Album Photos</div>
            </div>
        )
    }
}