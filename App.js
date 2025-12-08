// import logo from './logo.svg';
// import './App.css';

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
// import ErrorBoundary from "./ErrorBoundary";
// import CounterUseMemo from "./CounterUseMemo";
import ParentComp from "./ParentComp";

function App() {
  return (
    // <>
    // <Navbar />
    // <Outlet />
    // </>
    // <>
    // <h2>Understanding ErrorBoundary</h2>
    // <ErrorBoundary>
    //   <Hero heroname="Batman"/>
    // </ErrorBoundary>
    //  <ErrorBoundary>
    //   <Hero heroname="Joker"/>
    // </ErrorBoundary>
    //  <ErrorBoundary>
    //   <Hero heroname="Spiderman"/>
    // </ErrorBoundary>
    // </>

    //useMemo() example
    // <CounterUseMemo />

    //Pure and Impure components
    <ParentComp />
  );
}

export default App;
