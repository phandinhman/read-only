import css from './index.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const docRoot = document.getElementById('root');

class Hello extends Component {
  render () {
    return (
      <h1>Xin chao ba con</h1>
    );
  }
}

ReactDOM.render(
  <Hello />,
  docRoot
);
