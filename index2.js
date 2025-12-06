import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


//creating the React Component
// class component
class Component1 extends React.Component {
    render(){
        return React.createElement(
            "span",
            null,
            React.createElement("h2", null, " h2 within span Class Based Component")
        );
    }
}
//functional Component
function Component2() {
    return React.createElement(
        "span",
        null,
        React.createElement("h2", null, "h2 within span")
    );
}

//JSX - JS - XML
//allow HTML inside the JS
//allow to return the single tag

function Component3() {
    return <span>
             <h2>Returning JSX</h2>
             <p>Heyy, I'm Dhanshree</p>
           </span>
}

// Returning multiple element from comp
function Component4() {
    return <span>
             <h2>Returning JSX</h2>
             <p>Heyy, I'm Dhanshreee</p>
           </span>
}
function Component5() {
    return <React.Fragment>
             <h2>Returning JSX</h2>
             <p>Heyy, I'm Dhanshreee</p>
           </React.Fragment>
}
function Component6() {
    return <>
             <h2>Returning JSX</h2>
             <p>Heyy, I'm Dhanshreee</p>
           </>
}
const div = document.getElementById('root');
const root = ReactDOM.createRoot(div);
// root.render(React.createElement(Component1));
// root.render(React.createElement(Component2));
// root.render(<Component3 />);
// root.render(<Component4 />);
// root.render(<Component5 />);
root.render(<Component6 />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
