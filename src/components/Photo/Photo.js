import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Context from '../../context'
import './Photo.css'

export default class Photo extends Component{
    static contextType = Context
    

    render(){
        const { caption, id, url } = this.props
        return(
            <div className='Photo'>
                    <p><Link to={`/user/photo/${id}`}>
                    {caption}
                    </Link></p>
                    <div>
                    <img  src={url} alt={caption}/>
                    </div>
            </div>
        )
    }
}


