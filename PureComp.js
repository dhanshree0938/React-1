import React from 'react'

function PureComp(props) {
     // Shallow comparsion of props and state
     
    console.log("Pure Component rendered");
  return (
    <div>
        <h2>PureComp: {props.username}</h2>
    </div>
  )
}
export default React.memo(PureComp);
