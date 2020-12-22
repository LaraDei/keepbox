import React from 'react';
import ReactDOM from 'react-dom';
import Album from './Album';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Album />, div);
  ReactDOM.unmountComponentAtNode(div);
});