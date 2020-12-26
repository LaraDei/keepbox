import React from 'react'
import ReactDOM from 'react-dom'
import Photo from './Photo'
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><Photo/><Photo/></BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})