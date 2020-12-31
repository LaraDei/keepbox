import React, {Component} from 'react'
import Context from '../../context'
import SimpleFileUpload from 'react-simple-file-upload'
import config from '../../config'
import './AddPhoto.css'


export default class AddPhoto extends Component{
    constructor(props){
        super(props)
        this.state = {
            error: null,
            title: {
                value: '',
                touched: false,
                valid: false,
            },
        }
    }

    static defaultProps = {
        history: {
          push: () => {}
        },
    }

    static contextType = Context

    updateName= title => {
        this.setState({ title: { value: title, touched: true }})
        console.log(this.state.title.value)
      }

    validateName= () => {
        const title = this.state.title.value.trim()
        if (title.length === 0) {
            return 'Note name can not be blank.'
        }
      }
    handleFile(url){
        console.log('The URL of the file is ' + url)
    }

    render(){
        const { albums=[] } = this.context
        return(
            <div className='AddPhoto'>
                <h2>Upload a New Photo</h2>
                <p>*required</p>
                
                <form className='add-photo-form'>
                    <div>
                        <label htmlFor="photo-caption">* Photo Caption: </label>
                        <input type="text" name="photo-caption" placeholder="Birthday card*" onChange={e => this.updateName(e.target.value)} required/>
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
                        <input  type="number" name="date-month" id="date-month" placeholder="01" min="1" max="12" required=""/> /
                        <input  type="number" name="date-day" className="date-day"  placeholder="01" min="1" max="31" required=""/> /
                        <input  type="number" name="date-year" className="date-year" placeholder="2017" min="2016" max="2017" required=""/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="child-age">Child's Age: </label>
                        <input type="number" name="child-age" id="child-age" placeholder="4" required/>
                    </div>
                    <div>
                        <p>* Upload Photo: </p>
                        <SimpleFileUpload apiKey={config.API_KEY_PHOTO} onSuccess={e => this.handleFile} />
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