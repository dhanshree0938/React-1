import React from 'react'

export default function RegularComp(props) {
    console.log("Regular Component rendered");
  return (
    <div>
        <h2>RegularComp: {props.username}</h2>
    </div>
  )
}
