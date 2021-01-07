import React, { Component } from 'react'

const Context = React.createContext({
    albums: [],
    photos: [],
    isLoggedIn: false,
    setAlbumList: () => {},
    deletePhoto: () => {},
    addPhoto: () => {},
    addAlbum: () => {},
    handleLog: () => {},
})

export default Context

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
    },)
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
      isLoggedIn: this.state.isLoggedIn,
      setAlbumList: this.setAlbumList,
      setPhotoList: this.setPhotoList,
      addPhoto: this.addPhoto,
      addAlbum: this.addAlbum,
      deletePhoto: this.deletePhoto,
      handleLog: this.handleLog,
    }
    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    )
  }
}