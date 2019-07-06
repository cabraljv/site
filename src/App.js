import React from 'react';
import './global.css'
import Routes from './routes'
import {BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter basename="/site/">
      <Routes />
    </BrowserRouter>
  );
}

export default App;