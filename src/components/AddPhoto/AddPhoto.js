import React, {Component} from 'react'
import Context from '../../context'
import SimpleFileUpload from 'react-simple-file-upload'
import AlbumApiService from '../../services/album-api-service'
//import config from '../../config'
import './AddPhoto.css'


export default class AddPhoto extends Component{

      static contextType = Context

   handlePhotoSubmit= e => {
    e.preventDefault()
    const {caption, summary, file_location, date_created, album_id, age } = e.target
    AlbumApiService.postPhoto({
        caption: caption.value, 
        summary: summary.value,
        file_location: file_location.value,
        date_created: date_created.value,
        album_id: album_id.value,
        age: age.value
    })
    .then(resPhoto => {
      this.context.addPhoto(resPhoto)
    })
    .catch(error => {
      console.error('add photo ',{ error })
    })
  }
  
  handleFile = url => {
      console.log(url)
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
                        <input type="text" name="photo-caption" placeholder="Birthday card*"  required/>
                    </div>
                    <div>
                        <label htmlFor="photo-summary">Photo summary: </label>
                        <textarea name="photo-summary" rows="15"></textarea>
                    </div>
                    <div>
                        <label htmlFor="album-select">* Albums: </label>
                        <select id='album-select' name='album-id' required> 
                            <option value="" >...</option>
                            {albums.map(album =>
                                <option key={album.id} value={album.id}>
                                {album.title}
                                </option>
                            )}
                        </select>
                    </div>
                    <div className='AddPhoto-form-date'>
                        <label className="photo-date label" htmlFor="date-month">* Date of Creation: </label>
                        <div className="photo-date">
                        <input  type="number" name="date-month" id="date-month" placeholder="01" min="1" max="12" /> /
                        <input  type="number" name="date-day" className="date-day"  placeholder="01" min="1" max="31" /> /
                        <input  type="number" name="date-year" className="date-year" placeholder="2017" min="2016" max="2021" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="child-age">Child's Age: </label>
                        <input type="number" name="child-age" id="child-age" placeholder="4"/>
                    </div>
                    <div>
                        <p>* Upload Photo: </p>
                        
                        <SimpleFileUpload apiKey="3bf7e79dde4685b3ab2827254c60ff6e" onSuccess ={this.handleFile} className="simple-file-upload"/>
                    <div>
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                    </div>
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