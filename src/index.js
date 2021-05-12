import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {ProductProvider} from './context'
ReactDOM.render(
    <ProductProvider>
        <Router>
            <App />
        </Router>
    </ProductProvider>
, document.getElementById('root'));
registerServiceWorker();
