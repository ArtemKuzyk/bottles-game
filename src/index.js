import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import {BotlleSecondVersion} from './bottle';
import {Main} from './Main'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Main />
  // </React.StrictMode>
);


reportWebVitals();
