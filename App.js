import React from 'react'
import Welcome from './Welcome';

export default function App() {
  return (
    <>
     <h1>App component -root component</h1>
     <Welcome />
     {/*Rendering the Mutliple items*/}
     <Welcome />
     <Welcome />
    </>
  );
}
