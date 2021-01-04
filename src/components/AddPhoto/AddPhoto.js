import React, {Component} from 'react'
import Context from '../../context'
import SimpleFileUpload from 'react-simple-file-upload'
import AlbumApiService from '../../services/album-api-service'
import TokenService from '../../services/token-service'
//import config from '../../config'
import './AddPhoto.css'


export default class AddPhoto extends Component{
    constructor(props){
        super(props)
        this.state={
            file_location: ''
        }
    }

    static defaultProps ={
        history: {
            push: () => {}
          },
    }

      static contextType = Context

   handlePhotoSubmit= e => {
    e.preventDefault()
    const {caption, summary, date_created, album_id, age } = e.target
    AlbumApiService.postPhoto({
        caption: caption.value, 
        summary: summary.value,
        file_location: this.state.file_location,
        date_created: date_created.value,
        album_id: album_id.value,
        age: age.value
    })
    .then(resPhoto => {
      this.context.addPhoto(resPhoto)
      this.props.history.push('/user')
      
    })
    .catch(error => {
      console.error('add photo ',{ error })
    })
  }
  
  handleFile = url => {
      this.setState({ file_location: url })
  }


    render(){
        const { albums=[] } = this.context
        return(
            <div className='AddPhoto'>
                <h2>Upload a New Photo</h2>
                <p>*required</p>
                
                <form className='add-photo-form' onSubmit={this.handlePhotoSubmit}>
                    <div>
                        <label htmlFor="photo-caption">* Photo Caption: </label>
                        <input type="text" name="caption" placeholder="Birthday card*"  required/>
                    </div>
                    <div>
                        <label htmlFor="photo-summary">Photo summary: </label>
                        <textarea name="summary" ></textarea>
                    </div>
                    <div>
                        <label htmlFor="album-select">* Albums: </label>
                        <select id='album-select' name='album_id' required> 
                            <option value="" >...</option>
                            {albums.map(album =>
                                <option key={album.id} value={album.id}>
                                {album.title}
                                </option>
                            )}
                        </select>
                    </div>
                    <div className='date'>
                        <label className="photo-date" htmlFor="date"> Date of Creation: </label>
                        <textarea name="date_created" ></textarea>
                    </div>
                    <div>
                        <label htmlFor="child-age">Child's Age: </label>
                        <input type="number" name="age" id="child-age" placeholder="4"/>
                    </div>
                    <div>
                        <p>* Upload Photo: </p>
                        <div>{TokenService.hasAuthToken()
                    ? <SimpleFileUpload apiKey="3bf7e79dde4685b3ab2827254c60ff6e" onSuccess ={this.handleFile}/>: 'Must be logged in to uplaod photos' }</div>
                        
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                    </div>
                </form>
            </div>
        )
    }
}

<form className='signin-form'>
                    <div>
                    <label htmlFor="user-name">User name: </label>
                    <input placeholder='User Name' type="text" name='user-name' id='user-name' />
                    </div>
                    <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name='password' id='password' />
                    </div>
                    <button type='submit'>Sign Up</button>
                </form>