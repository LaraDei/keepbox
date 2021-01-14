import React, {Component} from 'react'
import Context from '../../context'
import SimpleFileUpload from 'react-simple-file-upload'
import AlbumApiService from '../../services/album-api-service'
import TokenService from '../../services/token-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faRedo } from'@fortawesome/free-solid-svg-icons'
import './AddPhoto.css'

export default class AddPhoto extends Component{
    constructor(props){
        super(props)
        this.state={
            caption: {
                value: '',
                error: null
            },
            album_id: {
                value: '',
                error: null
            },
            summary: {
                value: '',
                error: null
            },
            date_created: {
                value: '',
                error: null
            },
            age: {
                value: '',
                error: null
            },
            formTouched: false,
            
        }
    }

    static defaultProps ={
        history: {
            push: () => {}
          },
    }

    static contextType = Context
    //collect required data before photo submit
    updateValue= (value, key) => {
        this.setState({ [key]: {value: value}})
    }

    validateCaption= () => {
        const caption = this.state.caption.value.trim();
        if (caption.length === 0) {
            this.setState({ [caption]: {error : "Please enter a photo caption" }})
        }
    }
      // post new photo to API
    handlePhotoSubmit= url => {
        AlbumApiService.postPhoto({
            caption: this.state.caption.value, 
            summary: this.state.summary.value,
            file_location: url,
            date_created: this.state.date_created.value,
            album_id: this.state.album_id.value,
            age: this.state.age.value
        })
        .then(resPhoto => {
        this.context.addPhoto(resPhoto)
        this.props.history.push('/user')
        
        })
        .catch(error => {
        console.error('add photo ',{ error })
        })
    }
  
    handlePhotoInfo = e => {
        e.preventDefault()
        this.setState({ formTouched: true})
        
    }


    render(){
        const { error } = this.state.caption
        const { albums=[] } = this.context
        return(
            <div className='AddPhoto'>
                <h2>Upload a New Photo</h2>
                <p>*required</p>
                
                <form className='add-photo-form' onSubmit={this.handlePhotoInfo}>
                    <div>
                        <label htmlFor="caption">* Photo Caption: </label>
                        <input type="text" name="caption" placeholder="Birthday card*" id="caption" onChange={e => this.updateValue(e.target.value, e.target.name)} required/>
                        {error && <p className='red'>{error}</p>}
                    </div>
                    <div>
                        <label htmlFor="summary">Photo summary: </label>
                        <textarea name="summary" id="summary" onChange={e => this.updateValue(e.target.value, e.target.name)} ></textarea>
                    </div>
                    <div>
                        <label htmlFor="album-select">* Albums: </label>
                        <select id='album-select' name='album_id' onChange={e => this.updateValue(e.target.value, e.target.name)} required> 
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
                        <textarea name="date_created" id="date" onChange={e => this.updateValue(e.target.value, e.target.name)}></textarea>
                    </div>
                    <div>
                        <label htmlFor="child-age">Child's Age: </label>
                        <input type="number" name="age" id="child-age" placeholder="4" min="0" onChange={e => this.updateValue(e.target.value, e.target.name)}/>
                    </div>
                    <div className='addphoto-btn-wrapper'>
                        <button className='submitBtn' type="submit">Select <FontAwesomeIcon icon={faImage} /></button>
                        <button className='resetBtn' type="reset">Reset{' '}<FontAwesomeIcon icon={faRedo} /></button>
                    </div>

                        <div>{!TokenService.hasAuthToken()
                            ? <p>* You must be logged in to upload photos</p>
                            : this.state.formTouched ?
                            <SimpleFileUpload apiKey="3bf7e79dde4685b3ab2827254c60ff6e" onSuccess ={this.handlePhotoSubmit}/>
                            :<p> * Please fill out required photo information first</p> }
                        </div>
                </form>
            </div>
        )
    }
}

