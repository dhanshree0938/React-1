import React, { useState } from 'react'

// export default function Button() {

  //   let count=0;
  //    // event handling
  //    // define the function taht will handle the click event
  //    const clickHandler = ()=>{
  //     // console.log("utton is clicked");
  //       count++;
  //       console.log("count is: " +count);
  //    }
  

  // return (
  //   <button onClick={clickHandler}>{count}</button>
  // );

 // hooks / lifecycle hooks : special methods of react used for managing the react lifecycle
 // useState() - state management

 // syntax:
 // const [state_variable, setState_functionUpdatingTheState] = useState(default_value);

 /* Button management
 const [count, setCount] = useState(0);
 const clickHandler = ()=>{
  //count++; do not update the state directly, use setCount
  setCount(count+1);
  // setCount will update the count, makes the change in virtualDOM.
  // Then react compares Real anad virtual DOM , updates the count in UI
  // console.log(count);
 }

 return(
  <button onClick={clickHandler}>{count}</button>
 ); */


 // State managedby parent -App
 export default function Button(props) {
  console.log(props);
  
 return (
  <button onClick={props.onIncrement}>+1</button>
 );
}
