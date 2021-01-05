import React, {Component} from 'react'
import Context from '../../context'
import TokenService from '../../services/token-service'


export default class DashboardMain extends Component{
    static contextType = Context
    render(){
        return(
            <div className='DashboardMain'>
<               header className='DashboardMain-header'>
                    <h1>
                    {TokenService.hasAuthToken() 
                      ?  'Your Dashboard'
                      : 'Demo Dashboard'}
                    </h1>
                    <p>Welcome to KeepBox </p> 
                </header>
            </div>
        )
    }
}
