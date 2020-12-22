import React from 'react';
import ReactDOM from 'react-dom';
import AddPhoto from './AddPhoto';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddPhoto />, div);
  ReactDOM.unmountComponentAtNode(div);
});