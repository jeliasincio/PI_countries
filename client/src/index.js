import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './store/index'
import {BrowserRouter} from 'react-router-dom'
import dotenv from "dotenv";
import axios from "axios";

/* para deploy */
dotenv.config()

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

ReactDOM.render(
      <Provider store={store}> 
        <BrowserRouter>
          <App />
        </BrowserRouter>
     </Provider>,
  document.getElementById('root')
);


reportWebVitals();
