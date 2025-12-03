import React from 'react'

// export default function Display() {
//   return (
//     <h2>Welcome user to react</h2>
//   )
// }

 export default function Display(props) {
//    // const username = "Yash";
//    console.log(props);

//    return (
//      <h2>Welcome {props.username} to React</h2>
//    );
//   }


 // count state managed by parent App component
return (
  <span>Count is :{props.countVal}</span>
)
}