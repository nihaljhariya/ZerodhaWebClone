import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
        <App/>
        </BrowserRouter>


</React.StrictMode>
);