import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

export default class DashboardMain extends Component{
    render(){
        return(
            <div className='DashboardMain'>
<               header className='DashboardMain-header'>
                    <h1>
                        User's Dashboard 
                    </h1>
                    <p>Welcome to your KeepBox account</p>     
                </header>
            </div>
        )
    }
}
