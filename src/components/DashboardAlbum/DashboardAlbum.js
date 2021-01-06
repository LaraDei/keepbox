import React, {Component} from 'react'
import { getPhotosForAlbum, findAlbum } from '../../helpers'
import Context from '../../context'
import Photo from '../Photo/Photo'
import Slider from '../Slider/Slider'


export default class DashboardAlbum extends Component{
    static defaultProps = {
        match: {
          params: {}
        }
      }
       
    static contextType = Context

    render(){
        const {albumId}  = this.props.match.params
        const { photos=[] } = this.context
        const{ albums=[] } = this.context
        const selectedAlbum = findAlbum(albums, albumId) || { content: '' }
        const photosForAlbum = getPhotosForAlbum(photos, albumId) || { content: '' }
        const albumLength = photosForAlbum.length || { content: '' }
        return (
            <div className='DashboardAlbum'>
                <h2>{selectedAlbum.title}</h2>
                <div className='Album-photos'>
                    <Slider
                        length={albumLength}
                        photos={photosForAlbum}
                        album={selectedAlbum}
                    />
                </div>
            </div>
        )
    }
}

