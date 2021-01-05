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
            formTouched: false
        }
    }

    static defaultProps ={
        history: {
            push: () => {}
          },
    }

    static contextType = Context

    updateValue= (value, key) => {
        console.log(value)
        console.log(key)
        this.setState({ [key]: {value: value}})
        console.log(this.state)
    }

    validateCaption= () => {
        const caption = this.state.caption.value.trim();
        if (caption.length === 0) {
            this.setState({ [caption]: {error : "Please enter a photo caption" }})
        }
      }

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
                        <label htmlFor="photo-caption">* Photo Caption: </label>
                        <input type="text" name="caption" placeholder="Birthday card*"  onChange={e => this.updateValue(e.target.value, e.target.name)} required/>
                        {error && <p className='red'>{error}</p>}
                    </div>
                    <div>
                        <label htmlFor="photo-summary">Photo summary: </label>
                        <textarea name="summary" onChange={e => this.updateValue(e.target.value, e.target.name)} ></textarea>
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
                        <textarea name="date_created" onChange={e => this.updateValue(e.target.value, e.target.name)}></textarea>
                    </div>
                    <div>
                        <label htmlFor="child-age">Child's Age: </label>
                        <input type="number" name="age" id="child-age" placeholder="4" onChange={e => this.updateValue(e.target.value, e.target.name)}/>
                    </div>
                    <div>
                        <button type="submit">Upload Photo</button>
                        <button type="reset">Reset</button>
                    </div>

                        <div>{!TokenService.hasAuthToken()
                            ? 'Must be logged in to upload photos'
                            : this.state.formTouched ?
                            <SimpleFileUpload apiKey="3bf7e79dde4685b3ab2827254c60ff6e" onSuccess ={this.handlePhotoSubmit}/>
                            :'Please fill out required photo information first' }
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