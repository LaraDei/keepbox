import React from 'react'
import ReactDOM from 'react-dom'
import AddAlbum from './AddAlbum'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AddAlbum />, div)
  ReactDOM.unmountComponentAtNode(div)
})