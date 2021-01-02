import React, { Component } from 'react'

const AlbumListContext = React.createContext({
    albums: [],
    photos: [],
    isLoggedIn: false,
    setAlbumList: () => {},
    deletePhoto: () => {},
    addPhoto: () => {},
    addAlbum: () => {},
})

export default AlbumListContext

export class AlbumListProvider extends Component {
  state = {
    albums: [],
    photos: [],
  };

  setAlbumList = albums => {
    this.setState( {albums} )
  }

  setPhotoList = photos => {
    this.setState( {photos} )
  }

  deletePhoto = photoId => {
    this.setState({
      photos: this.state.photos.filter(photo => photo.id !== photoId)
    })
  }

  addAlbum = album =>{
    this.setState(
        {
          albums: [...this.state.albums, album]
        },
    )
  }

  addPhoto = photo =>{
    this.setState(
        {
          photos: [...this.state.photos, photo]
        },
    )
  }
  handleLog = e => {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
  })
  }

  render() {
    const value = {
      albums: this.state.albums,
      photos: this.state.photos,
      setAlbumList: this.setAlbumList,
      setPhotoList: this.setPhotoList,
      addPhoto: this.addPhoto,
      addAlbum: this.addAlbum,
      deletePhoto: this.deletePhoto,
      handleLog: this.handleLog
    }
    return (
      <AlbumListContext.Provider value={value}>
        {this.props.children}
      </AlbumListContext.Provider>
    )
  }
}