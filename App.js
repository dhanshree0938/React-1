// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import Button from "./Button";
import Display from "./Display";

// function App() {
//   return (
//     // <h2>App component</h2>
//     <>
//       <h2>App component</h2>
//       <Button />
//       <Display username="Dhanshree" age="20" />
//       {/* We are sending JSON object to the Display component
//           props= {
//                     username : "Dhanshree";
//                     "age" : "20";
//                  }
//          */}
//          <Display username="Rohit"/>
//          <Display username="Yassh" dob="25 jan 2020"/>
//     </>
//   );
// }


// App component will maintain the count state
function App(){

  const [count, setCount] = useState(0);
  const updateCount = ()=> {
    setCount(count+1);
  }
  return (
    <>
    <h2>App component managing the count state</h2>
    <Button onIncrement={updateCount}/>
    <Display countVal={count}/>
    {/*JSON
     props = {countval : count}*/}
    </>
  )
}
export default App;
