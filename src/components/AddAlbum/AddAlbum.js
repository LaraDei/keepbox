import React, {Component} from 'react'
import Context from '../../context'
import './AddAlbum.css'
export default class AddAlbum extends Component{
    constructor(props){
        super(props)
        this.state={
            albumTitle: {
                value: '',
                touched: false
            }
        }
    }

    static defaultProps = {
        history: {
          push: () => {}
        }
    }

    static contextType = Context

    updateFolderName(title){
        this.setState({albumTitle: {value: title, touched: true}})
    }



    render(){
        return(
            <div className='AddAlbum'>
                <h2>Create a New Album</h2>
                <form className='AddAlbum-form'>
                    <div>
                    <label htmlFor='Album Name'>Album Name: </label>
                    <input placeholder='Album Name' type="text" name='album-name' id='album-name' required />
                    </div>
                    <button type='submit'>Save</button>
                </form>
            </div>
        )
    }
}