import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// Understanding virtual and Real DOM
//RealDOM
// const root1 = document.getElementById("root1"); //RealDOM
// const root2 = ReactDOM.createRoot(document.getElementById('root2'));

// setInterval(()=>{
//   root1.innerHTML = `
//    <h2>Real DOM</h2>
//    <pre>${new Date().toTimeString()}</pre>
//   `;

//   root2.render(
//     <>
//     <h2>Virtual DOM</h2>
//     <pre>{new Date().toTimeString()}</pre>
//     </>
//   )
// },1000);