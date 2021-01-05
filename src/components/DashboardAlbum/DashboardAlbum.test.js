
import React from 'react'
import ReactDOM from 'react-dom'
import DashboardAlbum from './DashboardAlbum'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DashboardAlbum/>, div)
  ReactDOM.unmountComponentAtNode(div)
})
