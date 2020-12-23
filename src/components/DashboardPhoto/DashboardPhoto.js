import React, {Component} from 'react'
import Photo from '../Photo/Photo'
import Context from '../../context'
import {findPhoto} from '../../helpers'
import './DashboardPhoto.css'

export default class DashboardPhoto extends Component{
    static defaultProps = {
        match: {
          params: {}
        }
      }

    static contextType = Context

    render(){
        const { photos=[] } = this.context
        const { photoId } = this.props.match.params
        const photo = findPhoto(photos, photoId) || { content: '' }
        return(
            <div className='DashboardPhoto'>
                <div className='photo-large'>
                    <img  src={photo.location} alt={photo.caption}/>
                </div>
                <Photo
                    id={photo.id}
                    caption={photo.caption}
                    modified={photo.date_modified}
                    author={photo.author}
                    age={photo.age}
                    thumbnail={photo.thumbnail}
                    url={photo.location}
                    createdDate={photo.date_created}
                />
            </div>
        )
    }
}
