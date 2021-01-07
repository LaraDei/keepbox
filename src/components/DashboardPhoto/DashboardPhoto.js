import React, {Component} from 'react'
import Context from '../../context'
import {findPhoto} from '../../helpers'
import './DashboardPhoto.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from'@fortawesome/free-solid-svg-icons'
import AlbumApiService from '../../services/album-api-service'
import TokenService from '../../services/token-service'

export default class DashboardPhoto extends Component{
    static defaultProps = {
        match: {
          params: {}
        },
        history: {
            goBack: () => { }
          },
      }

    static contextType = Context

    handlePhotoDelete= e => {
        e.preventDefault()
        const {photoId} = this.props.match.params
        AlbumApiService.deletePhoto({id: photoId})
        .then(res => {
          this.context.deletePhoto(photoId)
          this.props.history.goBack()
        })
        .catch(error => {
          console.error('delete photo ',{ error })
        })
      }

    render(){
        const { photos=[] } = this.context
        const { photoId } = this.props.match.params
        const photo = findPhoto(photos, photoId) || { content: '' }
        return(
            <div className='DashboardPhoto'>
                <button className="backbtn" onClick={() => this.props.history.goBack()}>Back</button>
                <div className='photo-large'>
                    <img  src={photo.file_location} alt={photo.caption}/>
                </div>
                <div className='photo-details'>
                    <p>{photo.caption}</p>
                    <p>{photo.summary}</p>
                    <p>{photo.date_created}</p>
                </div>
                {TokenService.hasAuthToken()
                ?<button className="deletebtn" onClick={this.handlePhotoDelete}><FontAwesomeIcon icon={faTrash} /> Delete</button>
                : null}
            </div>
        )
    }
}
