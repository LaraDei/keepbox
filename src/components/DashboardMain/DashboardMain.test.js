import React from 'react';
import ReactDOM from 'react-dom';
import DashboardMain from './DashboardMain';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DashboardMain />, div);
  ReactDOM.unmountComponentAtNode(div);
});