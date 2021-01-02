export const findAlbum = (albums=[], albumId) =>
// eslint-disable-next-line
  albums.find(album => album.id == albumId)

export const findPhoto = (photos=[], photoId) =>
// eslint-disable-next-line
    photos.find(photo => photo.id == photoId)

export const getPhotosForAlbum = (photos=[], albumId) => (
  (!albumId)
    ? photos
    // eslint-disable-next-line
    : photos.filter(photo => photo.album_id == albumId)
)


