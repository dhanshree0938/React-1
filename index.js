import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

// creating the components separately

// index.js is the first js file, that gets excuted when the app is started 

// App.js -  root componenet
const div = document.getElementById('root');
const root = ReactDOM.createRoot(div);
root.render(<App />);
