import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Context from '../../context'
import './Photo.css'

export default class Photo extends Component{
    static contextType = Context
    
    static defaultProps ={
        onDeletePhoto: () => {},
        history: {
            push: () => {}
          },
    }

    render(){
        const { caption, id, url } = this.props
        console.log(this.props)
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


