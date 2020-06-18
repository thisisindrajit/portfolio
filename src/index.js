import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainComponent from './MainComponent';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <MainComponent />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
