
import React from 'react'
import ReactDOM from 'react-dom'
import DashboardPhoto from './DashboardPhoto'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DashboardPhoto/>, div)
  ReactDOM.unmountComponentAtNode(div)
})
