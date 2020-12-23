import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Context from '../../context'
import './Photo.css'

export default class Photo extends Component{
    static defaultProps ={
        onDeletePhoto: () => {},
        history: {
            push: () => {}
          },
    }

    static contextType = Context

    render(){
        const { caption, id, author, age, thumbnail } = this.props
        return(
            <div className='Photo'>
                <p className='photo-caption'>
                    <Link to={`/user/photo/${id}`}>
                    <img  src={thumbnail} alt={caption}/>
                    </Link>
                </p>
                <p>{author}</p>
                <p>Age :{age}</p>
            </div>
        )
    }
}