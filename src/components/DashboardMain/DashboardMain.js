import React, {Component} from 'react'
import Context from '../../context'


export default class DashboardMain extends Component{
    static contextType = Context
    render(){
        return(
            <div className='DashboardMain'>
<               header className='DashboardMain-header'>
                    <h1>
                        User's Dashboard 
                    </h1>
                    <p>Welcome to your KeepBox account</p>    
                    <p>Please create an album in order to upload photos.</p> 
                </header>
            </div>
        )
    }
}
