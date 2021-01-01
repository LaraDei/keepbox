import React, {Component} from 'react'
import { getPhotosForAlbum, findAlbum } from '../../helpers'
import Context from '../../context'
import Photo from '../Photo/Photo'
import './Album.css'

export default class Album extends Component{
    static defaultProps = {
        match: {
          params: {}
        }
      }
      
    static contextType = Context
    render(){
        const { id } = this.props.match.params
        const { photos=[] } = this.context
        const{ albums=[] } = this.context
        const album = findAlbum(albums, id)
        const photosForAlbum = getPhotosForAlbum(photos, id)
        return(
            <div className='Album'>
                <h2>{album.title}</h2>
                <div className='Album-photos'>
                        {photosForAlbum.map(photo =>
                            <div key={photo.id}>
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
                        )}
                </div>
            </div>
        )
    }
}