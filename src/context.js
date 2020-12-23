import React from 'react'

export default React.createContext(
      {
        albums: [],
        photos: [],
        deletePhoto: () => {},
        addPhoto: () => {},
        addAlbum: () => {},
      }
);