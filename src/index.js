import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainComponent from './MainComponent';
import OtherArea from './OtherArea';

ReactDOM.render(
  <React.StrictMode>
    <MainComponent />
    <OtherArea />
  </React.StrictMode>,
  document.getElementById('root')
);
