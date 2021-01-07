import React from 'react'
import ReactDOM from 'react-dom'
import Slider from './Slider'
import Store from '../../Store'
import { BrowserRouter } from 'react-router-dom'

const sample = Store.photos
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><Slider photos={sample} /></BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})

