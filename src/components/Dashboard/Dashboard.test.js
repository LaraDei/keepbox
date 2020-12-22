import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import {BrowserRouter} from 'react-router-dom'
import DashboardMain from '../DashboardMain/DashboardMain';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><DashboardMain/></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});