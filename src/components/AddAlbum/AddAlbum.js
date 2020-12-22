import React, {Component} from 'react'

export default class AddAlbum extends Component{
    render(){
        return(
            <div className='AddFolder'>
                <h2>Create a New folder</h2>
                <form className='add-folder-form'>
                    <div>
                    <label htmlFor='Album Name'>Album Name: </label>
                    <input placeholder='Album Name' type="text" name='album-name' id='album-name' />
                    </div>
                    <button type='submit'>Save</button>
                </form>
            </div>
        )
    }
}