import React, {Component} from 'react'
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
                    <img  src={photo.file_location} alt={photo.caption}/>
                </div>
                <div className='photo-details'>
                    <p>{photo.caption}</p>
                    <p>{photo.summary}</p>
                    <p>{photo.date_created}</p>
                </div>
            </div>
        )
    }
}
