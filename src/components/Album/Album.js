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
        const { albumId } = this.props.match.params
        const { photos=[] } = this.context
        const{ albums=[] } = this.context
        const selectedAlbum = findAlbum(albums, albumId)
        const photosForAlbum = getPhotosForAlbum(photos, albumId)
        console.log(photos)
        return(
            <div className='Album'>
                <h2>{selectedAlbum.title}</h2>
                <div className='Album-photos'>
                        {photosForAlbum.map(photo =>
                            <div key={photo.id}>
                            <Photo
                                id={photo.id}
                                caption={photo.caption}
                                age={photo.age}
                                url={photo.file_location}
                            />
                            </div>
                        )}
                </div>
            </div>
        )
    }
}