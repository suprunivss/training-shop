import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Spartan', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global/>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
