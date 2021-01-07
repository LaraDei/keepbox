import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App'
import { AlbumListProvider } from './context'


ReactDOM.render(
  <BrowserRouter>
    <AlbumListProvider>
    <App/>
    </AlbumListProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
