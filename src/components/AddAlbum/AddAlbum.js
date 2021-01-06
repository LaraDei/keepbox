import React, {Component} from 'react'
import Context from '../../context'
import TokenService from '../../services/token-service'
import AlbumApiService from '../../services/album-api-service'
import './AddAlbum.css'

export default class AddAlbum extends Component{

    static contextType = Context

    handleAlbumSubmit= e => {
        e.preventDefault()
        const {title} = e.target
        AlbumApiService.postAlbum({title: title.value})
        .then(resAlbum => {
          this.context.addAlbum(resAlbum)
          this.props.history.push(`/user`)
        })
        .catch(error => {
          console.error('add album ',{ error })
        })
      }


    render(){
        return(
            <div className='AddAlbum'>
                <h2>Create a New Album</h2>
                <p>{TokenService.hasAuthToken() ? null : 'Must be logged in to upload photos'}</p>
                <form className='AddAlbum-form' onSubmit={this.handleAlbumSubmit}>
                    <div>
                    <label htmlFor='Album Title'>Album Title: </label>
                    <input placeholder='Album Title*' type="text" name='title' id='title' required />
                    </div>
                    <button type='submit' className="simpleBtn">Save</button>
                </form>
            </div>
        )
    }
}