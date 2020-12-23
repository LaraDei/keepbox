export const findAlbum = (albums=[], albumId) =>
  albums.find(album => album.id == albumId)

export const findPhoto = (photos=[], photoId) =>
    photos.find(photo => photo.id == photoId)

export const getPhotosForAlbum = (photos=[], albumId) => (
  (!albumId)
    ? photos
    : photos.filter(photo => photo.albumId == albumId)
)


