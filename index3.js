import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

function Button() {
    return <button>Login</button>;
}
const div = document.getElementById('root');
const root = ReactDOM.createRoot(div);
// root.render(React.createElement(Component1));
// root.render(React.createElement(Component2));
// root.render(<Component3 />);
// root.render(<Component4 />);
// root.render(<Component5 />);
root.render(<Button />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
