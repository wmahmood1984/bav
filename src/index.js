import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './state/store'
import {Provider} from 'react-redux'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import App4 from './App4'
import App5 from './App5'
import App6 from './App6'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
    <App4/>
  
    </Router>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
